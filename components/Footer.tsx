"use client";

import { INSTAGRAM_URL } from "@/content/sections";
import { useTranslations } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <div className="footer main-column mt-3xl pb-xl">
      <div className="my-grid mb-3xl">
        <div className="col-span-6 col-start-2">
          <p className="lead text-center">
            {t.footer.seeMore}{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="italic link"
            >
              {t.footer.instagram}
            </a>
          </p>
          <br />
          <br />
          <p className="lead text-center">
            {t.footer.collaboration}{" "}
            <a
              href="mailto:aliaksejnavumenka@gmail.com"
              className="italic link"
            >
              aliaksejnavumenka@gmail.com
            </a>{" "}
            <br />
            <br />
          </p>
          <div className="flex justify-center mt-s">
            <LanguageSwitcher className="uppercase tracking-2 font-semibold" />
          </div>
        </div>
      </div>

      <div className="pt-xs border-t"></div>
      <div className="row items-center">
        <div className="col w-full l:w-1/4">&copy; {year} {t.footer.copyright}</div>

        <div className="col w-full l:w-1/4">
          <a className="link" href="mailto:aliaksejnavumenka@gmail.com">
            aliaksejnavumenka@gmail.com
          </a>
        </div>
        <div className="col w-full l:w-1/4">+(48) 574 358 053</div>
        <div className="col ml-auto w-full l:w-1/4 uppercase tracking-2 font-semibold flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex gap-xs items-center group ml-auto group"
          >
            <div className="uppercase tracking-2 font-semibold">
              {" "}
              <span className="link"> {t.footer.goUp}</span>
            </div>
            <div className="w-m h-m rounded-full bg-primary text-back flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_upward</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
