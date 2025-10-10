import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Branding/Image */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-primary/20 via-primary/5 to-background p-12">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Tadabbur
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
            Contemplate the Quran with deeper reflection
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            A platform designed to help you deepen your understanding through thoughtful reflection and contemplation.
          </p>
        </div>

        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tadabbur. All rights reserved.
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex flex-col">
        <div className="flex justify-between items-center p-4 lg:p-6">
          <Link href="/" className="lg:hidden text-xl font-bold">
            Tadabbur
          </Link>
          <div className="ml-auto">
            <ThemeSwitcher />
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
