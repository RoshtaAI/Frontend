
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-page px-6 py-16">

      <div className="card w-full max-w-xl p-10 text-center">

        <h1 className="mb-4 text-3xl font-bold text-primary">
          {t("title")}
        </h1>

        <p className="mb-8 text-secondary leading-8">
          {t("description")}
        </p>

        <button className="primary-button">
          {t("button")}
        </button>

      </div>

    </section>
  );
}
