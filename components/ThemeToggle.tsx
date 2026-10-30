
"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const emptySubscribe = () => () => {};

function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <button
        aria-label="Change theme"
        disabled
        className="
          flex h-10 w-10 items-center justify-center
          rounded-lg border border-[var(--border-subtle)]
          bg-[var(--bg-card)] text-[var(--text-primary)]
        "
      >
        ◐
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Change theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        flex h-10 w-12 items-center justify-center
        rounded-lg border border-[var(--border-prominent)]
        bg-[var(--bg-card)]
        text-[var(--text-primary)]
        shadow-[var(--shadow-toggle)]
        transition-all duration-200
        hover:border-brand-teal
        hover:bg-[var(--teal-subtle)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[var(--brand-teal)]
      "
    >
      <span aria-hidden="true">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
