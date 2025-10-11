import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Authenticated users are redirected to /dashboard by middleware
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      <div className="flex max-w-2xl flex-col items-center gap-8 text-center">
        <h1 className="font-bold text-6xl tracking-tight">Tadabbur</h1>
        <p className="text-muted-foreground text-xl">
          A platform for Quranic reflection and contemplation
        </p>

        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/auth/sign-up">Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
