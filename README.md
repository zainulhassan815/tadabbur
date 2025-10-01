# Tadabbur

A modern web application built with Next.js and Supabase, featuring authentication and a foundation for contemplative content management.

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#development"><strong>Development</strong></a>
</p>

## Features

- **Authentication System**
  - Email/password authentication
  - OAuth integration (Google)
  - Password reset flow
  - Protected routes with middleware
  - Session management via cookies (SSR-ready)

- **Modern Stack**
  - Next.js 15 with App Router
  - TypeScript for type safety
  - Supabase for backend and authentication
  - Server and client components

- **UI/UX**
  - Responsive design with Tailwind CSS v4
  - shadcn/ui component library
  - Dark/light theme support
  - Accessible components via Radix UI

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with TypeScript
- **Backend**: [Supabase](https://supabase.com) (Authentication, Database)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn
- A Supabase account and project

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tadabbur
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Create a Supabase project at [database.new](https://database.new)

4. Copy `.env.example` to `.env.local` and update with your Supabase credentials:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   You can find these values in your [Supabase project's API settings](https://supabase.com/dashboard/project/_/settings/api)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
tadabbur/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages & routes
│   ├── protected/         # Protected pages (require auth)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                   # Utility functions
│   └── supabase/         # Supabase client setup
├── hooks/                 # Custom React hooks
└── middleware.ts          # Next.js middleware (auth)
```

### Adding OAuth Providers

To enable Google OAuth:

1. Configure OAuth in your Supabase project settings
2. Add authorized redirect URLs
3. The OAuth button is already implemented in the login/signup forms

### Customizing UI

The project uses shadcn/ui with the default theme. To customize:

- Modify `app/globals.css` for theme colors
- Edit `components.json` for component configuration
- Add new components with `npx shadcn@latest add [component]`

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the project to Vercel
3. Add environment variables in Vercel project settings
4. Deploy

### Environment Variables

Ensure these are set in your deployment environment:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## License

See [LICENSE](LICENSE) for details.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
