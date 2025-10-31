import React from "react";
import Graphics from "@/components/Features/Graphics";
import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Energiahatékonyság",
    description:
      "Optimalizált fogyasztás: a szenzorok segítenek csökkenteni az energiafelhasználást automatikus riasztások és vezérlési javaslatok alapján.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Adatgyűjtés",
    description:
      "Folyamatos, megbízható adatgyűjtés sokféle metrikáról—hőmérséklet, ajtóállapot, tápellátás és eszközállapot.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Prediktív analitika",
    description:
      "Előrejelzések és anomália-észlelés: csökkentse a kiesést és megelőzze a meghibásodásokat gépi tanulás alapú figyelmeztetésekkel.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Megbízhatóság",
    description:
      "Robusztus működés ipari környezetben — hosszú távú megbízhatóság és alacsony karbantartási igény.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h16M4 12h8m-8 6h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Hálózati integráció",
    description:
      "Egyszerű csatlakozás LoRa, Wi‑Fi vagy mobilhálózaton keresztül, API-k és syslog/ webhook lehetőségekkel.",
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="relative z-10 pt-[110px]">
        <div className="container">
          {/* Images moved from Pricing: show above the features heading */}
          <div className="mb-6 flex justify-center">
            {/* Stack on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[900px] px-4">
              <img src="/images/hero/szenzorkep1.png" alt="Left" className="w-full sm:w-1/2 h-auto max-h-[300px] md:max-h-[400px] object-contain" />
              <img src="/images/hero/szenzorkep2.png" alt="Right" className="w-full sm:w-1/2 h-auto max-h-[300px] md:max-h-[400px] object-contain" />
            </div>
          </div>

          <div
            className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]"
            data-wow-delay=".2s"
          >
            <h2 className="mt-12 mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
              A Szenzorokkal egyszerűbbé és biztonságosabbá teheti vállalkozása működését.
            </h2>
           <ul className="mb-6 text-base sm:text-lg leading-relaxed text-left max-w-md mx-auto list-none">
                    <li className="flex items-center mb-1"><span className="text-primary font-bold mr-2">✓</span>Automatikus adatnaplózás – Megszabadulhat a napi kézi mérésektől és adminisztrációtól.</li>
                    <li className="flex items-center mb-1"><span className="text-primary font-bold mr-2">✓</span>HACCP megfelelőség – Biztos lehet benne, hogy adatai mindig pontosak és visszakövethetők.</li>
                    <li className="flex items-center mb-1"><span className="text-primary font-bold mr-2">✓</span>ÁRiasztások és értesítések – Azonnali figyelmeztetés hőmérsékleti eltérések esetén, így elkerülheti az áruk károsodását.</li>
                    <li className="flex items-center mb-1"><span className="text-primary font-bold mr-2">✓</span>Távoli elérés – Bárhol és bármikor ellenőrizheti a hőmérsékleti adatokat egy online felületen keresztül.</li>
                  </ul>
          </div>
        </div>

        <div className="container max-w-[1390px]">
          <div className="rounded-2xl bg-white px-5 pb-14 pt-14 shadow-card dark:bg-dark dark:shadow-card-dark md:pb-1 lg:pb-5 lg:pt-20 xl:px-10">
            <div className="-mx-4 flex flex-wrap">
              {featuresData.map((item, index) => (
                <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                  <div
                    className="wow fadeInUp group mx-auto mb-[60px] max-w-[310px] text-center"
                    data-wow-delay=".2s"
                  >
                    <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl bg-gray text-primary duration-300 group-hover:bg-primary group-hover:text-white dark:bg-[#2A2E44] dark:text-white dark:group-hover:bg-primary">
                      {item.icon}
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-black dark:text-white sm:text-[22px] xl:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="text-base text-body">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*Graphics*/}
        <Graphics />
      </section>
    </>
  );
};

export default Features;
