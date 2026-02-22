"use client";

import Image from "./Image";
import { INSTAGRAM_URL } from "@/content/sections";
import { useTranslations } from "@/context/LanguageContext";

type RightPanelProps = {
  panelOpen: boolean;
};

export default function RightPanel({ panelOpen }: RightPanelProps) {
  const t = useTranslations();

  return (
    <div
      className={`right-panel fixed top-0 right-0 h-[100vh] z-20 l:shadow-[0_0_0.125rem_0.125rem_rgba(0,0,0,0.1)] ${
        !panelOpen ? "pointer-events-none" : ""
      }`}
      aria-hidden={!panelOpen}
    >
      <div className="bg-grey/95 absolute top-0 right-0 w-full h-[5rem] z-30" />
      <div className="overflow-auto overflow-x-hidden absolute bg-grey h-full w-full main-column z-20">
        <div className="grid gap-s grid-cols-1 m:grid-cols-6 l:grid-cols-8 pt-2xl m:pt-3xl grayscale mix-blend-multiply">
          <div className="col-span-3 mt-xl m:mt-0 row-start-2 m:col-span-2 m:col-start-1 m:row-start-1 w-[50vw] m:w-auto">
            <Image src="/img/alexey-2.jpg" caption="" noEnter />
          </div>

          <div className="col-span-6 row-start-1 l:col-span-4 l:col-start-6 m:col-start-4 m:col-span-3 m:row-start-1 flex flex-col">
            <div className="uppercase font-semibold tracking-2 border-t pt-2xs">
              {t.menu.contact}
            </div>
            <br />
            <div className="pb-s">
              <div className="flex flex-col gap-2xs m:flex-row m:flex-wrap m:-mx-xs">
                <div className="m:px-xs m:w-1/4">{t.menu.email}</div>
                <div className="m:px-xs m:w-3/4">
                  <a className="link" href="mailto:aliaksejnavumenka@gmail.com">
                    aliaksejnavumenka@gmail.com
                  </a>
                </div>
                <div className="m:px-xs m:w-1/4">{t.menu.phone}</div>
                <div className="m:px-xs m:w-3/4">+(48) 574 358 053</div>
              </div>
              <br />
              {t.menu.address} <br /> {t.menu.city}
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-xs items-center group mt-auto"
            >
              <div className="w-m h-m rounded-full">
                <span className="material-symbols-outlined">
                  center_focus_strong
                </span>
              </div>
              <div className="uppercase tracking-2 font-semibold">
                <span className="link">{t.menu.followInstagram}</span>
              </div>
            </a>
          </div>

          <div className="pt-m m:pt-xl pb-3xl -mt-s col-span-6 m:col-span-6 l:col-start-3 lead !leading-[1.2em]">
            {t.bio.map((paragraph, i) => (
              <span key={i}>
                {paragraph}
                {i < t.bio.length - 1 ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
