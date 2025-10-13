# Tadabbur

A modern web application for Quranic reflection and contemplation, built with Next.js and Supabase. Tadabbur integrates with the Quran.com API to provide comprehensive access to Quranic verses, translations, and audio.

<p align="center">
  <a href="https://tadabbur-pearl.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/View%20Live-Demo-blue?style=for-the-badge&logo=vercel" alt="View Live Demo" />
  </a>
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#development"><strong>Development</strong></a>
</p>

## Features

- Type-safe Quran API client with OAuth 2.0 authentication and Zod validation
- Random ayah retrieval with flexible filtering (chapter, juz, page, translations, audio)
- Email/password and Google OAuth authentication with Supabase
- Protected routes with middleware and SSR-ready session management
- Modern UI with Tailwind CSS v4, shadcn/ui, and dark/light theme support
- Responsive design with accessible Radix UI components
- Modular TypeScript architecture for scalability

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with TypeScript
- **Backend**: [Supabase](https://supabase.com) (Authentication, Database)
- **Quran API**: [Quran.com API](https://api-docs.quran.foundation) with OAuth 2.0
- **Validation**: [Zod](https://zod.dev) for runtime type validation
- **HTTP Client**: [Axios](https://axios-http.com) with interceptors
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

4. Copy `.env.example` to `.env.local` and update with your credentials:

   ```
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]

   # Quran.com API
   QURAN_API_URL=https://api.quran.com
   QURAN_AUTH_URL=https://api.quran.com
   QURAN_CLIENT_ID=[INSERT YOUR QURAN API CLIENT ID]
   QURAN_CLIENT_SECRET=[INSERT YOUR QURAN API CLIENT SECRET]
   ```

   - Supabase values can be found in your [Supabase project's API settings](https://supabase.com/dashboard/project/_/settings/api)
   - Quran API credentials can be obtained from the [Quran.com API](https://api-docs.quran.foundation)

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run typecheck` - Run TypeScript type checking

### Project Structure

```
tadabbur/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication pages & routes
│   ├── (protected)/       # Protected pages (require auth)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                   # Utility functions
│   ├── quran/            # Quran API integration
│   │   ├── types/        # Modular type definitions
│   │   │   ├── models.ts      # API entity schemas
│   │   │   ├── fields.ts      # Field constants
│   │   │   ├── query-params.ts # Query parameter types
│   │   │   ├── responses.ts   # Response schemas
│   │   │   └── index.ts       # Barrel exports
│   │   ├── client.ts     # Axios client with OAuth
│   │   └── service.ts    # API service methods
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

**Supabase:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Quran API:**
- `QURAN_API_URL`
- `QURAN_AUTH_URL`
- `QURAN_CLIENT_ID`
- `QURAN_CLIENT_SECRET`

## License

See [LICENSE](LICENSE) for details.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Quran.com API Documentation](https://api-docs.quran.foundation)
- [Quran API Postman Collection](https://github.com/zainulhassan815/quran-api-collection) - Complete Bruno collection for Quran.com API
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
