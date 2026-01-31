## Project Summary
A clean, high-impact personal portfolio website built with Next.js and Tailwind CSS. It features a floating navbar, a bold hero section, a project grid with video previews on hover, an about section, and a contact form with toast notifications.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Icons: Lucide React
- Theme: next-themes (Dark/Light mode support)
- Notifications: Sonner

## Architecture
- `src/app/`: Core routing and layout
- `src/components/`: Reusable UI sections (Hero, Projects, About, Contact, Navbar)
- `src/components/ui/`: Shared UI components (Sonner, etc.)
- `src/lib/`: Utility functions

## User Preferences
- Clean, minimal, and high-impact design.
- Support for video previews in project cards.
- Dark mode support.
- Responsive design for mobile and desktop.

## Project Guidelines
- Use `framer-motion` for subtle entrance and hover animations.
- Maintain a cohesive aesthetic with `font-space` (Space Grotesk) for headings and `font-inter` for body text.
- Use CSS variables for consistent theming.

## Common Patterns
- Section-based architecture for the homepage.
- Hover-to-play video effect for project thumbnails.
- Responsive grid layouts using Tailwind's `grid` utilities.
