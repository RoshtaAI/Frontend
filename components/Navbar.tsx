import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-navbar)] bg-[var(--bg-navbar)] shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">

        {/* Project Title */}
        <Link
          href="/"
          className="font-medium text-[var(--text-secondary)] transition hover:text-brand-teal"
        >
          {t("projectTitle")}
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-medium text-[var(--text-secondary)] transition hover:text-brand-teal"
          >
            {t("home")}
          </Link>

          <Link
            href="/about"
            className="font-medium text-[var(--text-secondary)] transition hover:text-brand-teal"
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