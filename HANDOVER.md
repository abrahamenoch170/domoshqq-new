# MyDomos Africa - Project Handover

## Overview
MyDomos Africa is a neutral rental trust infrastructure platform for tenants, landlords, and agents across Africa. This project is built as a highly optimized, responsive client-side React application with a focus on editorial design, restrained aesthetics, and seamless user experience.

## Tech Stack
* **Framework**: React 18 with Vite
* **Styling**: Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin and native CSS variables)
* **Animation**: Framer Motion (`motion/react`) for layout reveals and page transitions
* **Routing**: React Router DOM (`react-router-dom`)
* **Icons**: Lucide React
* **Typography**: Instrument Sans (loaded via Google Fonts)

## Design System & Tokens
The application adheres strictly to the refined MyDomos design identity:
* **Primary / Accent**: `#F26522` (MyDomos Orange)
* **Base Background**: `#FFF5EB` (Warm Cream)
* **Text Primary**: `#1A1A1A` (Dark Charcoal)
* **Text Secondary**: `#6B6B6B` / `#1A1A1A/70`
* **Interaction Radius**: `100px` (Pill-shaped buttons used consistently across CTAs)

## Page Structure & Routes
The application uses a single-page architecture with the following canonical routes:
* `/` - The landing page (Hero, Problem, Solution, Trust, Voices, FAQ)
* `/waitlist` - Dedicated multi-step waitlist onboarding flow
* `/partner` - Partner contact and alignment page
* `/share-rental-experience` - Multi-role (Tenant, Landlord, Agent) research flow
* `/privacy` - Privacy Policy (Placeholder)
* `/terms` - Terms of Use (Placeholder)
* `*` - Custom 404 Not Found page

## Production & Next Steps
* **Form Submissions:** The Waitlist, Partner, and Share Experience forms are fully styled with local validation and success states. To collect real data, simply hook up the `handleSubmit` functions to your backend API, Firebase, or a tool like Formspree/Typeform APIs.
* **SEO & Meta:** The site is production-ready. Every page uses a custom `<SEO />` component. The root folder contains a configured `robots.txt`, `sitemap.xml`, and `manifest.json` pointing to `mydomos.org`.
* **Animations:** All `motion` interactions respect `prefers-reduced-motion` settings automatically via Tailwind CSS configurations.
