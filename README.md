# Portfolio Redesign

A personal portfolio website for **Mastewal** — a Computer Science student and Product Designer & Developer. Built with React, TypeScript, and Tailwind CSS, designed in Figma.

## Pages

- **Home** — Hero, skills overview (Design, Development, Tools), and featured projects
- **Work** — Project gallery including an E-Commerce Redesign case study
- **About** — Personal story and experience timeline
- **Contact** — Contact form powered by EmailJS
- **Resume** — Downloadable resume page

## Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Routing**: React Router v7
- **Animations**: Motion (Framer Motion)
- **Theme**: Dark mode default via next-themes
- **Email**: EmailJS



## Environment Variables

Create a local `.env` file with:

```bash
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

The contact form uses these values at build time, so the same three variables should also be added in Vercel Project Settings.



This app is deployed as a static Vite site on Vercel.



