"use client";

import FsLightbox from "fslightbox-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SensorsOverview from "@/components/SensorsOverview";

const HeroArea = () => {
  const [toggler, setToggler] = useState(false);
  const modelViewerRef = useRef<HTMLDivElement>(null);

  // Load model from local images/hero directory (no remote logic)
  const localModelPath = "/images/hero/zold_feher.glb";
  const [modelSrc, setModelSrc] = useState<string>(localModelPath);

  useEffect(() => {
    // Dinamikusan importáljuk a model-viewer-t
    import("@google/model-viewer");
    // Nothing to check — we always use the local model path
  }, []);

  // Attach listeners to the model-viewer element to detect load errors at runtime
  useEffect(() => {
    const container = modelViewerRef.current;
    if (!container) return;

    const mv = container.querySelector("model-viewer");
    if (!mv) return;

    const onError = (ev: Event) => {
      // Log and replace the viewer with a static image placeholder
      console.warn("model-viewer failed to load model:", ev);
      // replace the model-viewer node with an image
      const parent = mv.parentElement;
      if (parent) {
        parent.innerHTML = `<img src="/images/hero/hero-light.png" alt="Model not available" style="width:100%;height:400px;object-fit:contain"/>`;
      }
    };

    const onLoad = () => {
      console.debug("model-viewer loaded model successfully");
    };

    mv.addEventListener("error", onError as EventListener);
    mv.addEventListener("load", onLoad as EventListener);

    return () => {
      mv.removeEventListener("error", onError as EventListener);
      mv.removeEventListener("load", onLoad as EventListener);
    };
  }, [modelSrc]);

  return (
    <>
      <section id="home" className="pt-[165px]">
        <div className="container lg:max-w-[1305px] lg:px-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-6/12">
              <div
                className="wow fadeInUp mb-12 lg:mb-0 lg:max-w-[570px]"
                data-wow-delay=".3s"
              >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-2">
                    Szenzorok a mindennapi biztonságos méréshez
                  </h1>
                  <h2 className="text-lg sm:text-xl font-medium text-black dark:text-white text-center mb-4">
                    Teljes körű érzékelés, megbízható adatok és intelligens riasztások
                  </h2>
                  <p className="text-body mb-4 text-base sm:text-lg leading-relaxed text-center max-w-xl mx-auto">
                    Cégünk 5 egységes, egymással integrálódó szenzort kínál: pontos hőmérséklet-mérés, ajtóérzékelés, áramfelügyelet, állapotfigyelés és hálózati integráció. Adatainkat biztonságosan gyűjtjük, feldolgozzuk és átlátható módon jelenítjük meg, hogy jobb, gyorsabb üzleti döntéseket hozhasson.
                  </p>
                  {/* CTA */}
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="#features"
                      className="rounded-md bg-primary px-6 py-3 text-white shadow-md transition-opacity duration-200 hover:opacity-90"
                    >
                      Fedezd fel szenzorainkat
                    </a>
                    <button
                      onClick={() => {
                        const el = document.getElementById("features");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="rounded-md border border-transparent bg-white/5 px-4 py-2 text-sm text-body transition-colors duration-200 hover:bg-white/10"
                    >
                      Tudj meg többet
                    </button>
                  </div>

                  {/* Sensors overview (5 sensors) */}
                  <SensorsOverview />
               
              </div>
            </div>

            <div className="w-full px-4 lg:w-6/12">
              <div
                className="wow fadeInUp relative z-10 mx-auto w-full max-w-[790px]"
                data-wow-delay=".3s"
              >
                <div
                  ref={modelViewerRef}
                  dangerouslySetInnerHTML={{
                    __html: `<model-viewer
                      src="${modelSrc ?? localModelPath}"
                      alt="3D model"
                      auto-rotate
                      camera-controls
                      crossorigin="anonymous"
                      style="width: 100%; height: 400px; border-radius:12px;">
                    </model-viewer>`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroArea;
