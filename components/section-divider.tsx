"use client"

import { useEffect, useRef, useState } from "react"

type DividerVariant = "circle-spin" | "parallelogram" | "arc-pulse" | "trapezoid" | "diamond" | "dots"

interface SectionDividerProps {
  variant: DividerVariant
}

// Scroll-linked progress: 0 when divider center enters from bottom, 1 when it exits from top.
// Uses viewport-relative position so animation is driven by scroll position.
function useScrollProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0)
  const [inView, setInView] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const updateProgress = () => {
      const rect = el.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const centerY = rect.top + rect.height / 2
      // progress 0 = center at bottom of viewport, 0.5 = center in middle, 1 = center at top
      const raw = 1 - centerY / windowHeight
      setProgress(Math.max(0, Math.min(1, raw)))
      rafRef.current = null
    }

    const onScroll = () => {
      if (rafRef.current !== null) return
      rafRef.current = requestAnimationFrame(updateProgress)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        setInView(entry.isIntersecting)
        if (entry.isIntersecting) updateProgress()
      },
      { root: null, rootMargin: "50% 0px 50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    observer.observe(el)
    window.addEventListener("scroll", onScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [ref])

  return { progress, inView }
}

export function SectionDivider({ variant }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { progress, inView } = useScrollProgress(ref)
  const visibleProgress = inView ? progress : 0

  return (
    <div
      ref={ref}
      className="relative h-40 md:h-56 flex items-center justify-center overflow-hidden pointer-events-none select-none transition-opacity duration-300"
      style={{ opacity: inView ? 1 : 0.35 }}
      aria-hidden="true"
    >
      {variant === "circle-spin" && <CircleSpinDivider progress={progress} />}
      {variant === "parallelogram" && <ParallelogramDivider progress={progress} />}
      {variant === "arc-pulse" && <ArcPulseDivider progress={progress} />}
      {variant === "trapezoid" && <TrapezoidDivider progress={progress} />}
      {variant === "diamond" && <DiamondDivider progress={progress} />}
      {variant === "dots" && <DotsDivider progress={progress} />}
    </div>
  )
}

function CircleSpinDivider({ progress }: { progress: number }) {
  const rotation = progress * 720
  const scale = 0.5 + progress * 0.7
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference * (1 - progress)
  const innerCircumference = 2 * Math.PI * 30
  const innerOffset = innerCircumference * (1 - progress)
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent transition-all duration-75"
        style={{ width: `${25 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div
        className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent via-brand-yellow/20 to-transparent transition-all duration-75"
        style={{ width: `${25 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <svg
        viewBox="0 0 120 120"
        className="w-24 h-24 md:w-32 md:h-32 will-change-transform"
        style={{ transform: `rotate(${rotation}deg) scale(${scale})`, transition: "transform 0.08s linear" }}
      >
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke="#1a6dff"
          strokeOpacity={0.15 + progress * 0.25}
          strokeWidth="1.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.08s linear" }}
        />
        <circle
          cx="60"
          cy="60"
          r="30"
          fill="none"
          stroke="#8ecfff"
          strokeOpacity={0.2 + progress * 0.3}
          strokeWidth="1"
          strokeDasharray={innerCircumference}
          strokeDashoffset={innerOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.08s linear" }}
        />
        <circle cx="60" cy="60" r="12" fill="#f5c518" fillOpacity={0.06 + progress * 0.18} />
        <circle cx="60" cy="60" r="4" fill="#f5c518" fillOpacity={0.2 + progress * 0.5} />
      </svg>
    </div>
  )
}

function ParallelogramDivider({ progress }: { progress: number }) {
  const skew = -25 + progress * 50
  const scale = 0.55 + progress * 0.6
  const shearY = (progress - 0.5) * 12
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-lightblue/15 to-transparent transition-all duration-75"
        style={{ width: `${20 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div
        className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent via-brand-blue/15 to-transparent transition-all duration-75"
        style={{ width: `${20 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <svg
        viewBox="0 0 100 80"
        className="w-24 h-18 md:w-32 md:h-24 will-change-transform"
        style={{
          transform: `skewX(${skew}deg) skewY(${shearY}deg) scale(${scale})`,
          transition: "transform 0.08s ease-out",
        }}
      >
        <polygon
          points="20,0 80,0 60,80 0,80"
          fill="#1a6dff"
          fillOpacity={0.03 + progress * 0.1}
          stroke="#1a6dff"
          strokeOpacity={0.12 + progress * 0.25}
          strokeWidth="1.5"
        />
        <polygon
          points="30,15 70,15 55,65 15,65"
          fill="#8ecfff"
          fillOpacity={0.02 + progress * 0.08}
          stroke="#8ecfff"
          strokeOpacity={0.08 + progress * 0.2}
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

function ArcPulseDivider({ progress }: { progress: number }) {
  const arcScale = 0.45 + progress * 0.7
  const arcRotation = progress * 180
  const pulseScale = 1 + Math.sin(progress * Math.PI) * 0.15
  const arcLength = Math.PI * 40
  const arcOffset = arcLength * (1 - progress)
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-coral/15 to-transparent transition-all duration-75"
        style={{ width: `${20 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div
        className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent via-brand-lightblue/15 to-transparent transition-all duration-75"
        style={{ width: `${20 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <svg
        viewBox="0 0 100 100"
        className="w-24 h-24 md:w-32 md:h-32 will-change-transform"
        style={{
          transform: `rotate(${arcRotation}deg) scale(${arcScale * pulseScale})`,
          transition: "transform 0.08s ease-out",
        }}
      >
        <path
          d="M50 10 A40 40 0 0 1 90 50 L50 50 Z"
          fill="#8ecfff"
          fillOpacity={0.05 + progress * 0.12}
          stroke="#8ecfff"
          strokeOpacity={0.12 + progress * 0.25}
          strokeWidth="1.5"
          strokeDasharray={arcLength}
          strokeDashoffset={arcOffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.08s linear, fill-opacity 0.08s ease" }}
        />
        <circle cx="50" cy="50" r="8" fill="#f5c518" fillOpacity={0.08 + progress * 0.2} />
        <circle cx="50" cy="50" r="3" fill="#f5c518" fillOpacity={0.25 + progress * 0.5} />
      </svg>
    </div>
  )
}

function TrapezoidDivider({ progress }: { progress: number }) {
  const scaleX = 0.4 + progress * 0.8
  const scaleY = 0.7 + progress * 0.5
  const translateY = 15 - progress * 30
  const skewX = (progress - 0.5) * 8
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-coral/20 to-transparent transition-all duration-75"
        style={{ width: `${25 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div
        className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent via-brand-yellow/20 to-transparent transition-all duration-75"
        style={{ width: `${25 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <svg
        viewBox="0 0 120 50"
        className="w-28 h-10 md:w-40 md:h-14 will-change-transform"
        style={{
          transform: `scale(${scaleX}, ${scaleY}) skewX(${skewX}deg) translateY(${translateY}px)`,
          transition: "transform 0.08s ease-out",
        }}
      >
        <polygon
          points="20,0 100,0 120,50 0,50"
          fill="#e85d75"
          fillOpacity={0.03 + progress * 0.1}
          stroke="#e85d75"
          strokeOpacity={0.12 + progress * 0.25}
          strokeWidth="1.5"
        />
        <polygon
          points="35,10 85,10 100,40 20,40"
          fill="#e85d75"
          fillOpacity={0.02 + progress * 0.06}
        />
      </svg>
    </div>
  )
}

function DiamondDivider({ progress }: { progress: number }) {
  const rotation = progress * 360
  const scale = 0.45 + progress * 0.7
  const perimeter = 4 * Math.sqrt(2) * 45
  const strokeOffset = perimeter * (1 - progress)
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent transition-all duration-75"
        style={{ width: `${25 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div
        className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent via-brand-coral/15 to-transparent transition-all duration-75"
        style={{ width: `${25 + progress * 25}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <svg
        viewBox="0 0 100 100"
        className="w-20 h-20 md:w-28 md:h-28 will-change-transform"
        style={{ transform: `rotate(${rotation}deg) scale(${scale})`, transition: "transform 0.08s linear" }}
      >
        <polygon
          points="50,5 95,50 50,95 5,50"
          fill="none"
          stroke="#1a6dff"
          strokeOpacity={0.12 + progress * 0.25}
          strokeWidth="1.5"
          strokeDasharray={perimeter}
          strokeDashoffset={strokeOffset}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke-dashoffset 0.08s linear" }}
        />
        <polygon
          points="50,20 80,50 50,80 20,50"
          fill="#1a6dff"
          fillOpacity={0.02 + progress * 0.08}
          stroke="#8ecfff"
          strokeOpacity={0.08 + progress * 0.18}
          strokeWidth="1"
        />
        <circle cx="50" cy="50" r="5" fill="#f5c518" fillOpacity={0.08 + progress * 0.25} />
      </svg>
    </div>
  )
}

function DotsDivider({ progress }: { progress: number }) {
  const colors = ["#1a6dff", "#8ecfff", "#f5c518", "#e85d75", "#1a6dff"]
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute left-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent transition-all duration-75"
        style={{ width: `${15 + progress * 30}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div
        className="absolute right-0 top-1/2 h-px bg-gradient-to-l from-transparent via-brand-blue/10 to-transparent transition-all duration-75"
        style={{ width: `${15 + progress * 30}%`, opacity: Math.min(1, progress * 1.2) }}
      />
      <div className="flex items-center gap-3 md:gap-4">
        {colors.map((color, i) => {
          const dotProgress = Math.max(0, Math.min(1, (progress - i * 0.1) * 2.2))
          const waveY = Math.sin(progress * Math.PI * 2 + i * 1.4) * 12
          const scale = 0.4 + dotProgress * 0.7
          return (
            <div
              key={i}
              className="rounded-full will-change-transform"
              style={{
                width: `${5 + dotProgress * 8}px`,
                height: `${5 + dotProgress * 8}px`,
                background: color,
                opacity: 0.12 + dotProgress * 0.5,
                transform: `translateY(${waveY}px) scale(${scale})`,
                transition: "transform 0.08s ease-out, opacity 0.08s ease, width 0.08s ease, height 0.08s ease",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
