import React from "react";
import Link from "next/link";

const sensors = [
  {
    key: "temp",
    name: "OkosHűtő",
    short: "Precíz hőmérséklet mérés",
    href: "https://okoshuto.hu/",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14.76V6a2 2 0 10-4 0v8.76A4 4 0 1014 14.76z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "door",
    name: "Okosborász",
    short: "Nyitott ajtó ",
    href: "https://okosborasz.hu/", 
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21V3h10v6h7v12H3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 7v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "power",
    name: "Áramkimaradás jelző",
    short: "Áramellátás figyelése",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.36 6.64L5.64 19.36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "vibe",
    name: "Prediktív karbantartás",
    short: "Vibráció és állapotfigyelés",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12h3l2-8 4 16 2-6 3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    key: "net",
    name: "Hálózati integráció",
    short: "LoRa / Wifi / NB-IoT",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 20v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 20v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const SensorsOverview = () => {
  return (
    <div className="mt-8 flex w-full justify-center">
      <div className="flex max-w-[980px] w-full flex-wrap items-stretch justify-center gap-4 px-4">
        {sensors.map((s) =>
          s.href ? (
            <Link
              key={s.key}
              href={s.href}
              className="group flex w-[180px] flex-col items-center gap-3 rounded-xl border border-transparent bg-white/5 px-4 py-4 text-center transition-shadow duration-300 hover:shadow-lg hover:border-primary dark:bg-dark"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray text-primary group-hover:bg-primary group-hover:text-white">
                {s.icon}
              </div>
              <strong className="text-sm">{s.name}</strong>
              <span className="text-xs text-body">{s.short}</span>
            </Link>
          ) : (
            <div
              key={s.key}
              className="group flex w-[180px] flex-col items-center gap-3 rounded-xl border border-transparent bg-white/5 px-4 py-4 text-center transition-shadow duration-300 hover:shadow-lg hover:border-primary dark:bg-dark"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray text-primary group-hover:bg-primary group-hover:text-white">
                {s.icon}
              </div>
              <strong className="text-sm">{s.name}</strong>
              <span className="text-xs text-body">{s.short}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default SensorsOverview;
