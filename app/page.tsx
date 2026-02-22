"use client";

import MenuTop from "@/components/MenuTop";
import Footer from "@/components/Footer";
import Image from "@/components/Image";
import ScrollAnimations from "@/components/ScrollAnimations";
import { useTranslations } from "@/context/LanguageContext";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <MenuTop />
      <ScrollAnimations>
        <div className="main-column">
          <div className="my-grid pt-xl">
            <div className="m:col-span-5 l:col-span-5">
              <div
                className="enter text-n6 m:text-n7 l:text-n8 font-serif mb-m l:mb-l uppercase relative l:mt-2xl pt-l"
                style={{ textWrap: "balance", fontFeatureSettings: "'liga' off" }}
              >
                {t.hero.title}<span>{t.hero.titleQ}</span>{t.hero.titleEnd}
              </div>
            </div>
            <div className="enter m:col-span-5 l:col-span-4 l:col-start-2">
              <div className="lead" style={{ textWrap: "balance" }}>
                {t.hero.lead}
              </div>
            </div>
          </div>

          <div className="my-grid mt-l m:mt-xl ">
            <div className="m:col-span-6 l:col-span-5 l:row-span-2">
              <Image
                className="aspect-[1] l:-ml-xl"
                captionclass="l:left-s"
                src="/img/dome-1.jpg"
                caption={t.captions.dome}
              />
            </div>
            <div className="m:col-span-3 l:col-span-2 l:col-start-7 l:row-span-2 enter">
              <div className="border-t pt-xs"></div>
              <div className="text-n4 l:text-n5 font-serif mb-l l:mb-xl">
                {t.section.stainedGlass}
              </div>
              <div className="mb-l">{t.section.stainedGlassText}</div>
            </div>
            <div className="m:col-span-3 m:col-start-4 l:col-span-5 l:col-start-3 l:row-span-2">
              <Image
                className="aspect-[1.5]"
                captionclass=""
                src="/img/image 8.jpg"
                caption={t.captions.domeCelling}
              />
            </div>
          </div>

          <div className="my-grid mt-s l:mt-2xl">
            <div className="m:col-span-3 l:col-span-4 l:row-span-3 l:col-start-1">
              <Image
                className="aspect-[0.75]"
                src="/img/tygrys-2.jpeg"
                caption={t.captions.lightingPanel}
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-6 l:row-start-2">
              <Image className="aspect-[1]" src="/img/poseidon.jpeg" caption="" />
            </div>
          </div>

          <div className="my-grid mt-s l:mt-2xl">
            <div className="m:col-span-3 l:col-span-6 l:col-start-2 l:row-span-2">
              <Image
                className="aspect-[1.5]"
                src="/img/lighting.jpeg"
                caption={t.captions.cellingLights}
              />
            </div>
            <div className="m:col-span-3 l:col-span-4 l:col-start-5">
              <Image
                className="aspect-[1.5]"
                src="/img/lighting-2.jpeg"
                caption=""
              />
            </div>
          </div>

          <div className="my-grid mt-s l:mt-2xl">
            <div className="m:col-span-3 l:col-span-6 l:col-start-1">
              <Image
                className="aspect-[1.5]"
                src="/img/image 13.jpg"
                caption={t.captions.staircaseWindow}
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-6 ">
              <Image
                className="aspect-[1]"
                src="/img/stained-detail.jpg"
                caption=""
              />
            </div>
          </div>

          <div className="my-grid mt-s l:mt-2xl">
            <div className="m:col-span-3 l:col-span-3 l:col-start-2 l:row-span-3">
              <Image
                className="aspect-[0.66]"
                src="/img/mary.jpg"
                caption=""
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-5 l:row-span-4">
              <Image
                className="aspect-[0.66]"
                src="/img/jesus.jpg"
                caption=" "
              />
            </div>
          </div>

          <div className="my-grid mt-3xl  pt-s enter">
            <div className="m:col-span-3 l:col-span-2">
              <div className="border-t pt-xs"></div>
              <div className=" text-n4 l:text-n5 font-serif mb-l l:mb-xl ">
                {t.section.fresco}
              </div>
              <div className=" mb-l ">{t.section.frescoText}</div>
            </div>
            <div className="m:col-span-3 l:col-span-5 l:col-start-4 l:row-start-1">
              <Image
                className="aspect-[1] l:-mr-xl"
                src="/img/image 7.jpg"
                caption=""
              />
            </div>

            <div className="m:col-span-3 l:col-span-6 l:row-span-2 l:col-start-2">
              <Image
                className="aspect-[1.5]"
                src="/img/bank0.jpeg"
                caption={t.captions.bank}
              />
            </div>
          </div>

          <div className="my-grid mt-s l:mt-2xl">
            <div className="m:col-span-3 l:col-span-4 l:col-start-1">
              <Image
                className="aspect-[0.66] l:-ml-xl"
                src="/img/fresque-2.jpeg"
                caption=""
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-5 ">
              <Image
                className="aspect-[0.66]"
                src="/img/fresque-1.jpeg"
                caption={t.captions.twoStory}
              />
            </div>
          </div>

          <div className="my-grid mt-s grid-row-3">
            <div className="m:col-span-3 l:col-span-4 l:col-start-4 l:row-span-3">
              <Image
                className="aspect-[0.75]"
                src="/img/wall-flowers.jpg"
                caption={t.captions.floral}
              />
            </div>
          </div>

          <div className="my-grid mt-s l:mt-2xl">
            <div className="m:col-span-3 l:col-span-4 l:row-span-3 l:col-start-4">
              <Image
                className="aspect-[0.66]"
                src="/img/stair-wall.jpeg"
                caption={t.captions.staircaseGrisaille}
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-1 l:row-start-12">
              <Image
                className="aspect-[1]"
                src="/img/stair-wall-2.jpeg"
                caption=""
              />
            </div>
          </div>

          <div className="my-grid mt-3xl">
            <div className="m:col-span-3 l:col-span-2 l:col-start-7 enter">
              <div className="border-t pt-xs"></div>
              <div className=" text-n4 l:text-n5 font-serif mb-l l:mb-xl ">
                {t.section.mirrors}
              </div>
              <div className=" mb-l ">
                {t.section.mirrorsText}
                <br /> <br /> {t.section.mirrorsCatalogue}
              </div>
            </div>
            <div className="m:col-span-3 l:col-span-5 l:col-start-1">
              <Image
                className="aspect-[1.5] l:-ml-xl"
                src="/img/mirror-1.jpeg"
                caption=""
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-2">
              <Image
                className="aspect-[0.66]"
                src="/img/mirror-2.jpeg"
                caption=""
              />
            </div>
            <div className="m:col-span-3 l:col-span-3">
              <Image className="aspect-1" src="/img/mirror-3.jpeg" caption="" />
            </div>
          </div>

          <div className="my-grid mt-3xl">
            <div className="m:col-span-3 l:col-span-2 l:col-start-1 enter">
              <div className="border-t pt-xs"></div>
              <div className=" text-n4 l:text-n5 font-serif mb-l l:mb-xl">
                {t.section.paintings}
              </div>
              <div className=" mb-l ">
                {t.section.paintingsText}
                <br /> <br />
                {t.section.paintingsCatalogue}
              </div>
            </div>
            <div className="m:col-span-3 l:col-span-4 l:col-start-4 l:mb-2xl">
              <Image
                className=""
                src="/img/paint-1.jpeg"
                caption={t.captions.land}
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-2 l:mb-2xl">
              <Image
                className=""
                src="/img/paint-2.jpeg"
                caption={t.captions.memories}
              />
            </div>
            <div className="m:col-span-3 l:col-span-3 l:col-start-5 l:mb-2xl">
              <Image
                className=""
                src="/img/paint-5.jpeg"
                caption={t.captions.brightTree}
              />
            </div>

            <div className="m:col-span-3 l:col-span-4 l:col-start-2 ">
              <Image
                className=""
                src="/img/heritage.jpeg"
                caption={t.captions.heritage}
              />
            </div>

            <div className="m:col-span-3 l:col-span-5 l:col-start-4 l:mb-2xl">
              <Image
                className=""
                src="/img/first-day.jpeg"
                caption={t.captions.firstDay}
              />
            </div>
          </div>
        </div>
      </ScrollAnimations>
      <Footer />
    </>
  );
}
