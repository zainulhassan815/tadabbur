import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_SUPABASE_URL: z.url(),
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY: z.string().min(1),
  },
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    VERCEL_URL: z.string().optional(),
    DATABASE_URL: z.string().min(1),
    SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET: z.string().min(1),
    QURAN_AUTH_URL: z.string().min(1),
    QURAN_API_URL: z.string().min(1),
    QURAN_CLIENT_ID: z.string().min(1),
    QURAN_CLIENT_SECRET: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY:
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET:
      process.env.SUPABASE_AUTH_EXTERNAL_GOOGLE_CLIENT_SECRET,
    QURAN_AUTH_URL: process.env.QURAN_AUTH_URL,
    QURAN_API_URL: process.env.QURAN_API_URL,
    QURAN_CLIENT_ID: process.env.QURAN_CLIENT_ID,
    QURAN_CLIENT_SECRET: process.env.QURAN_CLIENT_SECRET,
  },
});
