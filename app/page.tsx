import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <div className="flex flex-col items-center gap-8 max-w-2xl text-center">
        <h1 className="text-6xl font-bold tracking-tight">Tadabbur</h1>
        <p className="text-xl text-muted-foreground">
          A platform for Quranic reflection and contemplation
        </p>

        <div className="flex gap-4 mt-8">
          {user ? (
            <Button asChild size="lg">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/auth/sign-up">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
