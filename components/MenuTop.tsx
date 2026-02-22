"use client";

import { useState, useEffect, useRef } from "react";
import Image from "./Image";
import { INSTAGRAM_URL } from "@/content/sections";
import { useTranslations } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function useBodyClass(className: string, active: boolean) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (active) document.body.classList.add(className);
    else document.body.classList.remove(className);
    return () => document.body.classList.remove(className);
  }, [className, active]);
}

function useMenuBarScroll() {
  const menuBarRef = useRef<HTMLDivElement>(null);
  const lastScroll = useRef(0);
  const i1 = useRef(0);
  const i2 = useRef(0);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    if (!menuBar) return;

    const supportsTouch =
      "ontouchstart" in window ||
      (navigator.maxTouchPoints ?? 0) > 0;
    if (supportsTouch) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const direction = scrollTop > lastScroll.current ? "FORWARD" : "REVERSE";
      lastScroll.current = scrollTop;
      const menuHeight = menuBar.offsetHeight;

      if (direction === "REVERSE" && scrollTop >= menuHeight && i1.current === 0) {
        menuBar.classList.remove("fixed-top");
        menuBar.classList.add("fixed-menu");
        setTimeout(() => menuBar.classList.add("fixed-shown"), 10);
        i1.current = 1;
        i2.current = 0;
      }
      if (direction === "REVERSE" && scrollTop === 0 && i1.current > 0) {
        menuBar.classList.remove("fixed-shown", "fixed-menu");
        i1.current = 0;
        i2.current = 0;
      }
      if (direction === "FORWARD" && scrollTop > menuHeight && i2.current === 0) {
        menuBar.classList.add("fixed-top");
        menuBar.classList.remove("fixed-shown");
        i1.current = 0;
        i2.current = 1;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return menuBarRef;
}

const Logo = () => (
  <svg
    width="auto"
    height="100%"
    viewBox="0 0 150 85"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M98.2552,80.222 L98.2552,49.106 C126.9842,51.565 144.4602,58.186 145.9612,63.874 C145.9922,64.087 146.0312,64.296 146.0612,64.508 L146.0632,64.508 C146.0652,64.561 146.0792,64.612 146.0792,64.663 C146.0792,70.656 128.3932,77.675 98.2552,80.222 L98.2552,80.222 Z M98.2552,6.278 C121.3072,14.192 138.8352,33.314 144.6462,57.108 C135.8582,50.881 116.6302,47.185 98.2552,45.622 L98.2552,6.278 Z M51.3032,45.614 C25.9762,47.677 11.5202,52.39 4.7682,57.395 C10.4062,33.618 28.0352,14.374 51.3032,6.352 L51.3032,45.614 Z M51.3032,80.218 C21.1922,77.659 3.4792,70.608 3.4792,64.663 C3.4792,58.792 21.2272,51.678 51.3032,49.108 L51.3032,80.218 Z M149.5072,64.04 L149.5072,64.04 C149.5072,64.032 149.5042,64.026 149.5042,64.018 C149.4772,63.748 149.4402,63.485 149.3792,63.224 C144.7112,31.504 120.5452,6.237 88.9912,0.216 L88.9842,0.252 L87.8212,0.092 L87.8212,77.301 L61.9712,-1.42108547e-14 L60.4702,0.294 C28.6582,6.516 4.3772,31.982 0.0502,63.663 L0.1012,63.67 C0.0412,64.004 0.0002,64.338 0.0002,64.663 C0.0002,76.061 29.9812,82.729 59.6922,84.28 C60.3622,84.314 61.0592,84.331 61.7352,84.362 L61.7352,67.688 L61.7352,10.261 L86.5432,84.44 L88.6192,84.343 C118.9482,82.898 149.5572,76.25 149.5572,64.663 C149.5572,64.453 149.5262,64.248 149.5072,64.04 L149.5072,64.04 Z"
      id="Fill-1"
      fill="currentColor"
    />
  </svg>
);

export default function MenuTop() {
  const t = useTranslations();
  const [panelOpen, setPanelOpen] = useState(false);
  const openedLabel = t.menu.close;
  const closedLabel = t.menu.info;
  const menuBarRef = useMenuBarScroll();
  useBodyClass("right-panel-opened", panelOpen);

  return (
    <div ref={menuBarRef} className="menu-bar main-column py-m z-10">
      <div className="bg-[rgba(255,255,255,0.95)] absolute top-0 right-0 w-full h-full z-10"></div>
      <div className="flex items-end m:items-center relative z-50">
        <div className="w-1/2 m:w-1/3  ml-xs m:ml-0 flex items-center gap-xs relative">
          <div className="h-[2rem] m:hidden">
            <Logo />
          </div>
          <div className="uppercase tracking-2 font-semibold leading-[1em]">
            Alexey <br className="m:hidden" /> Naumenko
          </div>
        </div>

        <div className="w-1/2 top-m right-0 left-0 m-auto hidden m:block m:w-1/3">
          <div className="uppercase justify-center flex">
            <div className="h-[2rem] w-auto">
              <Logo />
            </div>
          </div>
        </div>

        <div className="w-1/2 m:w-1/3 flex justify-end items-center gap-s m:gap-m">
          <div
            className={`flex items-center gap-s min-w-[4rem] transition-opacity duration-300 ${
              panelOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <LanguageSwitcher className="uppercase tracking-2 font-semibold" />
          </div>
          <button
            type="button"
            onClick={() => setPanelOpen(!panelOpen)}
            className="flex gap-xs items-center group open-right-panel border-0 bg-transparent cursor-pointer p-0 text-inherit"
            aria-label={panelOpen ? openedLabel : closedLabel}
          >
            <div className="uppercase tracking-2 font-semibold min-w-[5.5rem] text-right">
              <span className="link open-right-label">
                {panelOpen ? openedLabel : closedLabel}
              </span>
            </div>
            <div className="w-m h-m rounded-full bg-primary text-back open-right-link mix-blend-multiply flex items-center justify-center">
              <span className="material-symbols-outlined">add</span>
            </div>
          </button>
        </div>
      </div>

      <div className="right-panel absolute top-0 right-0 h-[100vh] z-20 l:shadow-[0_0_0.125rem_0.125rem_rgba(0,0,0,0.1)]">
          <div className="bg-grey/95 absolute top-0 right-0 w-full h-[5rem] z-30"></div>
        <div className="overflow-auto overflow-x-hidden absolute bg-grey h-full main-column z-20">
          <div className="grid gap-s grid-cols-6 l:grid-cols-8 pt-2xl m:pt-3xl grayscale mix-blend-multiply">
              <div className="col-span-3 mt-xl m:mt-0 row-start-2 m:col-span-2 m:col-start-1 m:row-start-1">
                <Image src="/img/alexey-2.jpg" caption="" noEnter />
              </div>

              <div className="col-span-6 row-start-1 l:col-span-4 l:col-start-6 m:col-start-4 m:col-span-3 m:row-start-1 flex flex-col">
                <div className="uppercase font-semibold tracking-2 border-t pt-2xs">
                  {t.menu.contact}
                </div>
                <br />
                <div className="pb-s">
                  <div className=" row">
                    <div className="col w-1/4">{t.menu.email}</div>
                    <div className="col w-3/4">
                      <a className="link" href="mailto:aliaksejnavumenka@gmail.com">
                        aliaksejnavumenka@gmail.com
                      </a>
                    </div>
                    <div className="col w-1/4">{t.menu.phone}</div>
                    <div className="col w-3/4">+(48) 574 358 053</div>
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
    </div>
  );
}
