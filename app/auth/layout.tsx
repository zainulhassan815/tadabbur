import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left side - Branding/Image */}
      <div className="hidden flex-col justify-between bg-gradient-to-br from-primary/20 via-primary/5 to-background p-12 lg:flex">
        <div>
          <Link href="/" className="font-bold text-2xl">
            Tadabbur
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="font-bold text-4xl tracking-tight">
            Contemplate the Quran with deeper reflection
          </h2>
          <p className="max-w-md text-lg text-muted-foreground">
            A platform designed to help you deepen your understanding through
            thoughtful reflection and contemplation.
          </p>
        </div>

        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Tadabbur. All rights reserved.
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-4 lg:p-6">
          <Link href="/" className="font-bold text-xl lg:hidden">
            Tadabbur
          </Link>
          <div className="ml-auto">
            <ThemeSwitcher />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
