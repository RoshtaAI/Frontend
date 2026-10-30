import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-navbar)] bg-[var(--bg-navbar)] shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        {/* Project Title */}
        <Link
          href="/"
          className="hover:text-brand-teal font-medium text-[var(--text-secondary)] transition"
        >
          <Image
            src="/images/brand/roshta-logo-transparent-512x512.png"
            alt="Roshta Logo"
            width={160}
            height={50}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="hover:text-brand-teal font-medium text-[var(--text-secondary)] transition"
          >
            {t("home")}
          </Link>

          <Link
            href="/about"
            prefetch={false}
            className="hover:text-brand-teal font-medium text-[var(--text-secondary)] transition"
          >
            {t("about")}
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
