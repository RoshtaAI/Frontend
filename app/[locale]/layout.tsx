
import {
  hasLocale,
  NextIntlClientProvider,
} from "next-intl";

import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roshta",
  description: "Read prescriptions and check medication safety with AI.",
};

export const instant = false;

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
