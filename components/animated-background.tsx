"use client"

import { useEffect, useRef, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

interface GradientWave {
  id: number
  x: number
  y: number
  radius: number
  color: string
  opacity: number
  speed: number
  angle: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const wavesRef = useRef<GradientWave[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  // Vibrant color palette
  const colors = [
    'rgba(26, 109, 255, 0.3)',  // Brand blue
    'rgba(142, 207, 255, 0.25)', // Light blue
    'rgba(245, 197, 24, 0.2)',   // Yellow
    'rgba(232, 93, 117, 0.2)',   // Coral
    'rgba(147, 51, 234, 0.15)',  // Purple
    'rgba(59, 130, 246, 0.2)',   // Sky blue
    'rgba(16, 185, 129, 0.15)',  // Emerald
  ]

  useEffect(() => {
    const updateDimensions = (): void => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Initialize particles
    const particleCount = Math.min(50, Math.floor((dimensions.width * dimensions.height) / 25000))
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))

    // Initialize gradient waves
    wavesRef.current = [
      {
        id: 1,
        x: dimensions.width * 0.2,
        y: dimensions.height * 0.3,
        radius: Math.min(dimensions.width, dimensions.height) * 0.4,
        color: 'rgba(26, 109, 255, 0.15)',
        opacity: 0.15,
        speed: 0.002,
        angle: 0
      },
      {
        id: 2,
        x: dimensions.width * 0.8,
        y: dimensions.height * 0.7,
        radius: Math.min(dimensions.width, dimensions.height) * 0.35,
        color: 'rgba(245, 197, 24, 0.12)',
        opacity: 0.12,
        speed: 0.003,
        angle: Math.PI
      },
      {
        id: 3,
        x: dimensions.width * 0.5,
        y: dimensions.height * 0.5,
        radius: Math.min(dimensions.width, dimensions.height) * 0.3,
        color: 'rgba(142, 207, 255, 0.1)',
        opacity: 0.1,
        speed: 0.001,
        angle: Math.PI / 2
      }
    ]

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw gradient waves
      wavesRef.current.forEach((wave) => {
        wave.angle += wave.speed
        const offsetX = Math.cos(wave.angle) * 50
        const offsetY = Math.sin(wave.angle) * 30

        const gradient = ctx.createRadialGradient(
          wave.x + offsetX,
          wave.y + offsetY,
          0,
          wave.x + offsetX,
          wave.y + offsetY,
          wave.radius
        )

        gradient.addColorStop(0, wave.color.replace('0.15', '0.3').replace('0.12', '0.25').replace('0.1', '0.2'))
        gradient.addColorStop(0.5, wave.color)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, dimensions.width, dimensions.height)
      })

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx -= (dx / distance) * force * 0.02
          particle.vy -= (dy / distance) * force * 0.02
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Apply friction
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) {
          particle.vx = -particle.vx
          particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
        }
        if (particle.y < 0 || particle.y > dimensions.height) {
          particle.vy = -particle.vy
          particle.y = Math.max(0, Math.min(dimensions.height, particle.y))
        }

        // Draw particle with glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = particle.color
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle) => {
          if (particle.id === otherParticle.id) return
          
          const dx = otherParticle.x - particle.x
          const dy = otherParticle.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.2
            ctx.strokeStyle = `rgba(26, 109, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-[#112240]" />
      
      {/* Animated canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Additional animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  )
}
