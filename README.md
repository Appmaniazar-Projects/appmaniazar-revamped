# Appmaniazar Revamped

A modern, responsive ICT systems and development company website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Components**: Rich animations and micro-interactions
- **Dark Theme**: Sleek dark theme with vibrant accent colors
- **Component-Based Architecture**: Modular, reusable React components
- **SEO Optimized**: Built-in SEO optimization with proper meta tags
- **Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Custom component library with shadcn/ui
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & Space Grotesk from Google Fonts
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```
appmaniazar-revamped/
├── app/                    # Next.js app router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── ui/                # Base UI components
│   ├── hero.tsx           # Hero section
│   ├── about.tsx          # About section
│   ├── services.tsx        # Services section
│   ├── projects.tsx        # Projects showcase
│   ├── testimonials.tsx     # Client testimonials
│   └── ...               # Other components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/               # Additional styles
```

## 🎨 Design System

The project uses a sophisticated color palette with:

- **Primary**: Vibrant blue (#1a6dff)
- **Secondary**: Light blue (#8ecfff)
- **Accent**: Yellow (#f5c518) and Coral (#e85d75)
- **Background**: Dark slate with subtle gradients
- **Typography**: Inter for body text, Space Grotesk for headings

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Appmaniazar-Projects/appmaniazar-revamped.git
cd appmaniazar-revamped
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎯 Key Components

### Hero Section
- Eye-catching headline with animated text
- Call-to-action buttons with hover effects
- Floating geometric shapes with animations
- Statistics bar with company metrics

### Navigation
- Sticky navigation bar
- Smooth scroll to sections
- Mobile-responsive hamburger menu

### Sections
- **About**: Company overview and mission
- **Services**: Detailed service offerings
- **Projects**: Portfolio showcase
- **Testimonials**: Client feedback
- **Contact**: Contact information and form

## 🎭 Animations

The site features smooth animations including:
- Fade-in effects on scroll
- Floating geometric shapes
- Rotating elements
- Hover state transitions
- Loading animations

## 🔧 Customization

### Colors
Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --brand-blue: #1a6dff;
  --brand-lightblue: #8ecfff;
  --brand-yellow: #f5c518;
  --brand-coral: #e85d75;
}
```

### Fonts
Font configurations are in `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

Other platforms like Netlify, Railway, or traditional VPS hosting also work.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved by Appmaniazar.

## 📞 Contact

- **Website**: [appmaniazar.com](https://appmaniazar.com)
- **Location**: Cape Town, South Africa
- **Services**: Mobile App Development, Web Development, Dashboards, CRMs, Digital Skills Training

## 🌟 Show Your Support

If you find this project impressive, consider reaching out for your next ICT project!

---

Built with ❤️ by [Appmaniazar](https://appmaniazar.com)
