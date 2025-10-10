import { LogoutButton } from "@/components/logout-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { CurrentUserAvatar } from "@/components/current-user-avatar";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="w-full border-b border-b-foreground/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <Link href="/" className="text-xl font-bold">
            Tadabbur
          </Link>
          <div className="flex gap-3 items-center">
            <ThemeSwitcher />
            <CurrentUserAvatar />
            <LogoutButton />
          </div>
        </div>
      </nav>
      <div className="flex-1 w-full max-w-7xl mx-auto p-8">
        {children}
      </div>
    </main>
  );
}
