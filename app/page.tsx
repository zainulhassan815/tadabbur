import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  // Authenticated users are redirected to /dashboard by middleware
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
