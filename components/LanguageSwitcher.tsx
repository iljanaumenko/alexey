"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className={`flex items-center gap-s ${className}`}>
      <button
        type="button"
        onClick={() => setLocale("pl")}
        className={`uppercase tracking-2 font-semibold border-0 bg-transparent cursor-pointer p-0 text-inherit ${
          locale === "pl" ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
        aria-label="Polski"
        aria-current={locale === "pl" ? "true" : undefined}
      >
        <span className="link">{t.lang.pl}</span>
      </button>
      <span className="opacity-40" aria-hidden>
        /
      </span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`uppercase tracking-2 font-semibold border-0 bg-transparent cursor-pointer p-0 text-inherit ${
          locale === "en" ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
        aria-label="English"
        aria-current={locale === "en" ? "true" : undefined}
      >
        <span className="link">{t.lang.en}</span>
      </button>
    </div>
  );
}
