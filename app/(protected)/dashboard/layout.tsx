import Link from "next/link";
import { CurrentUserAvatar } from "@/components/current-user-avatar";
import { LogoutButton } from "@/components/logout-button";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="w-full border-b border-b-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <Link href="/" className="font-bold text-xl">
            Tadabbur
          </Link>
          <div className="flex items-center gap-3">
            <ThemeSwitcher />
            <CurrentUserAvatar />
            <LogoutButton />
          </div>
        </div>
      </nav>
      <div className="mx-auto w-full max-w-7xl flex-1 p-8">{children}</div>
    </main>
  );
}
