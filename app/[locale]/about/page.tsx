
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutPage() {
  const t = useTranslations("AboutPage");

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-page px-6 py-16">

      <div className="card w-full max-w-2xl p-10 text-center">

        <h1 className="mb-6 text-3xl font-bold text-primary">
          {t("title")}
        </h1>

        <p className="mb-8 leading-8 text-secondary">
          {t("description")}
        </p>

        <Link
          href="/"
          className="primary-button inline-flex items-center justify-center"
        >
          {t("backHome")}
        </Link>

      </div>

    </section>
  );
}
