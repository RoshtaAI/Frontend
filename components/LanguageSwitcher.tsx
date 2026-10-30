"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "ar" : "en";

  function changeLanguage() {
    router.replace(pathname, { locale: nextLocale });
    router.refresh();
  }

  return (
    <button
      onClick={changeLanguage}
        className="
        inline-flex items-center justify-center
        min-h-10 rounded-lg
        border border-[var(--border-prominent)]
        bg-[var(--bg-card)]
        px-4 py-2
        font-medium text-[var(--text-primary)]
        transition-all duration-200
        hover:border-brand-teal
        hover:bg-[var(--teal-subtle)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--brand-teal)]
      "
    >
      {locale === "en" ? "العربية" : "English"}
    </button>
  );
}