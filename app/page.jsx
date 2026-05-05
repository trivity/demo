"use client";

import { useEffect, useRef, useState } from "react";

const SITE = "https://demo-phi-one-44.vercel.app";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const REGIONS = [
  {
    code: "01",
    name: "Bunbury Area",
    towns: [
      "South Bunbury",
      "Bunbury",
      "Eaton",
      "Dalyellup",
      "Australind",
      "Leschenault",
      "Gelorup",
      "Milbridge",
      "Treendale",
      "Binningup",
      "Picton",
      "Glen Iris",
      "Carey Park",
      "Stratham",
      "Capel",
    ],
  },
  {
    code: "02",
    name: "Harvey · Brunswick",
    towns: [
      "Harvey",
      "Brunswick Junction",
      "Myalup",
      "Binningup",
      "Roelands",
      "Yarloop",
      "Wokalup",
    ],
  },
  {
    code: "03",
    name: "Busselton · Dunsborough",
    towns: [
      "Busselton",
      "West Busselton",
      "Broadwater",
      "Abbey",
      "Vasse",
      "Dunsborough",
      "Quindalup",
      "Yallingup",
    ],
  },
  {
    code: "04",
    name: "Margaret River",
    towns: [
      "Margaret River",
      "Cowaramup",
      "Gracetown",
      "Witchcliffe",
      "Prevelly",
      "Gnarabup",
      "Augusta",
    ],
  },
  {
    code: "05",
    name: "Southern Inland",
    towns: [
      "Nannup",
      "Bridgetown",
      "Greenbushes",
      "Boyup Brook",
      "Manjimup",
      "Pemberton",
      "Northcliffe",
    ],
  },
];

const PROCESS = [
  { n: "01", t: "Onsite Quote", d: "We visit, scope the work, give clear pricing on the spot." },
  { n: "02", t: "Permits & Compliance", d: "Council permits, demolition licences, asbestos notifications." },
  { n: "03", t: "Disconnection", d: "Power, gas, water and other services safely disconnected." },
  { n: "04", t: "Site Setup", d: "Fencing, signage, and protection of the surrounding property." },
  { n: "05", t: "Hazard Removal", d: "Asbestos and hazardous materials removed first, by licensed crews." },
  { n: "06", t: "Demolition", d: "Structures taken down efficiently, safely, and to spec." },
  { n: "07", t: "Site Preparation", d: "Materials removed, debris cleared, ground levelled." },
  { n: "08", t: "Clearance", d: "Clearance inspection and certificate issued where required." },
];

const FAQS = [
  {
    q: "How do I enquire?",
    a: "Click the Free Quote button on the website or call us directly on (439) 510-783 to arrange a meeting.",
  },
  {
    q: "Are you licensed house demolition contractors in WA?",
    a: "Yes. Premier Demolition is fully licensed and insured to perform demolition services. We comply with all local regulations and safety standards, ensuring safe and legal demolition practices for every project we take on.",
  },
  {
    q: "What is the demolition process?",
    a: "Site assessment, permit acquisition, utility disconnection, asbestos inspection and removal (if required), structural demolition, waste removal, and site clearing. We handle every stage from start to finish.",
  },
  {
    q: "How long will demolition take?",
    a: "A standard house demolition usually takes 3 days. Asbestos removal is performed prior and takes 1–5 additional days depending on the scope of work.",
  },
  {
    q: "Can you do demolition and asbestos removal for the one project?",
    a: "Absolutely. We are qualified to handle asbestos removal safely and legally. Our team is trained in proper asbestos management, ensuring the health and safety of workers and the surrounding community throughout the project.",
  },
  {
    q: "How do I choose the right demolition contractor?",
    a: "Consider experience, licensing, insurance, safety record and customer reviews. Look for transparent pricing, clear communication and a comprehensive range of services. We pride ourselves on meeting all of those criteria.",
  },
];

const SERVICES = [
  {
    n: "01",
    title: "DEMOLITION",
    sub: "Tear it down. Cleanly.",
    desc: "Full and partial demolition for residential and commercial sites — strip-outs, structural take-downs, and everything between. We get the property ready for its next chapter.",
    bullets: [
      "Full and partial demolition",
      "Internal strip-outs (bathrooms, kitchens, laundries)",
      "Tile, concrete and wall removal",
      "Shed, patio and outbuilding take-downs",
      "Site clean-up and waste removal",
    ],
    img: "https://images.unsplash.com/photo-1677588508537-5106322c2d40?w=1400&q=85&auto=format&fit=crop",
    tag: "RESIDENTIAL · COMMERCIAL",
  },
  {
    n: "02",
    title: "ASBESTOS REMOVAL",
    sub: "Older home? Handle it properly.",
    desc: "Licensed asbestos removal for roofs, walls, eaves and fencing — with the right notifications, clearances, and compliance documentation. Safely prepare your site for what's next.",
    bullets: [
      "Roof, wall, eave and fence asbestos removal",
      "Safe site handling and disposal procedures",
      "WorkSafe notifications where required",
      "Clearance inspections and certificates",
      "Built around current WA safety requirements",
    ],
    img: "https://images.unsplash.com/photo-1586947292720-16654d57e52e?w=1400&q=85&auto=format&fit=crop",
    tag: "LICENSED · COMPLIANT",
  },
  {
    n: "03",
    title: "INTERNAL STRIP-OUTS",
    sub: "Take it back to the studs.",
    desc: "Internal strip-outs for bathrooms, kitchens, laundries — and full-house gut-outs. Walls, fixtures, fittings and finishes — out clean and ready for the next trade.",
    bullets: [
      "Bathroom, kitchen and laundry strip-outs",
      "Wall sheeting and partition removal",
      "Fixtures, fittings and cabinetry removal",
      "Sub-floor and ceiling lining removal",
      "All waste removed and disposed of",
    ],
    img: "https://images.unsplash.com/photo-1768321902047-2296fd495fa4?w=1400&q=85&auto=format&fit=crop",
    tag: "RENOVATION · REBUILD",
  },
  {
    n: "04",
    title: "TILE & CONCRETE",
    sub: "Hard surfaces. Done properly.",
    desc: "Tile, concrete and brick removal for floors, walls, slabs and driveways. Heavy-duty work done safely, with the right tools and dust control.",
    bullets: [
      "Floor and wall tile removal",
      "Concrete slab and footing breakouts",
      "Driveway and pathway removal",
      "Brick and masonry demolition",
      "All spoil removed off-site",
    ],
    img: "https://images.unsplash.com/photo-1665631153909-ae7a1b6c137f?w=1400&q=85&auto=format&fit=crop",
    tag: "RESIDENTIAL · COMMERCIAL",
  },
  {
    n: "05",
    title: "SHED & PATIO",
    sub: "Outbuildings down. Yard back.",
    desc: "Removal of sheds, patios, carports, pergolas and other outbuildings — including any old asbestos roof or wall sheeting where licensed removal is required.",
    bullets: [
      "Garden sheds and workshops",
      "Patios, pergolas and carports",
      "Old fencing and outbuilding removal",
      "Asbestos roof and wall sheeting (where licensed)",
      "Site left swept and ready",
    ],
    img: "https://images.unsplash.com/photo-1760634533837-b9022d12dc47?w=1400&q=85&auto=format&fit=crop",
    tag: "RESIDENTIAL",
  },
  {
    n: "06",
    title: "SITE CLEAN-UP",
    sub: "Done means done.",
    desc: "Post-demolition and post-renovation clean-ups. Debris removed, materials sorted where possible, the site left level, swept and ready for the next stage of work.",
    bullets: [
      "Post-demolition site clearance",
      "Renovation rubbish removal",
      "Materials sorted for recycling where possible",
      "Site levelled and graded if required",
      "Final sweep and walkthrough",
    ],
    img: "https://images.unsplash.com/photo-1769053144989-5a8804b98917?w=1400&q=85&auto=format&fit=crop",
    tag: "POST-WORKS",
  },
];

/* ------------------------------------------------------------------ */
/*  HOOKS                                                              */
/* ------------------------------------------------------------------ */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Counter({ to = 25, duration = 1800 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const step = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}</span>;
}

/* ------------------------------------------------------------------ */
/*  HEADER                                                             */
/* ------------------------------------------------------------------ */

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink text-off text-[10px] sm:text-[11px] tracking-wider3 font-mono">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-2 flex items-center justify-between gap-3">
          <span className="truncate">
            LIC: WR 2489 · SOUTH WEST WA · BRUNSWICK JUNCTION
          </span>
          <span className="hidden sm:inline whitespace-nowrap">
            FREE QUOTES · 7 DAYS
          </span>
        </div>
      </div>
      <div
        className={`bg-off border-b-2 transition-all ${
          scrolled ? "border-ink shadow-[0_3px_0_0_#54B938]" : "border-ink"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-4 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3 shrink-0">
            <span className="brick-bg w-10 h-10 inline-block border-2 border-ink"></span>
            <div className="leading-none">
              <div className="font-display text-xl sm:text-2xl tracking-wide text-ink">
                PREMIER
              </div>
              <div className="font-display text-xl sm:text-2xl tracking-wide text-brand-deep -mt-1">
                DEMOLITION
              </div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-medium tracking-[0.18em] uppercase">
            <a href="#services" className="hover:text-brand-deep transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-brand-deep transition-colors">
              Process
            </a>
            <a href="#area" className="hover:text-brand-deep transition-colors">
              Service Area
            </a>
            <a href="#about" className="hover:text-brand-deep transition-colors">
              About
            </a>
            <a href="#faq" className="hover:text-brand-deep transition-colors">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="tel:0439510783"
              className="hidden md:inline-block font-mono text-sm tracking-tight text-ink hover:text-brand-deep"
            >
              (439) 510-783
            </a>
            <a
              href="#quote"
              className="hidden sm:inline-block bg-brand text-ink font-bold tracking-wider2 uppercase text-xs lg:text-sm px-4 lg:px-5 py-3 border-2 border-ink hover:bg-ink hover:text-brand transition-colors"
            >
              Free Quote →
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="lg:hidden w-10 h-10 border-2 border-ink flex flex-col items-center justify-center gap-1.5 hover:bg-ink hover:text-off transition-colors"
            >
              <span
                className={`block w-5 h-[2px] bg-current transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-[2px] bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-[2px] bg-current transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t-2 border-ink bg-off">
            <div className="max-w-[1400px] mx-auto px-5 py-3 flex flex-col gap-1">
              {[
                ["Services", "#services"],
                ["Process", "#process"],
                ["Service Area", "#area"],
                ["About", "#about"],
                ["FAQ", "#faq"],
                ["Free Quote →", "#quote"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 font-mono text-sm uppercase tracking-wider2 border-b border-ink/10 last:border-b-0 hover:bg-ink hover:text-off transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      id="top"
      className="relative bg-off overflow-hidden border-b-2 border-ink"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Left-faded white overlay over the video */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(251,252,251,1) 0%, rgba(251,252,251,0.96) 50%, rgba(251,252,251,0.7) 65%, rgba(251,252,251,0.25) 85%, rgba(251,252,251,0) 100%)",
        }}
      ></div>

      {/* Subtle grid paper texture on top of the gradient */}
      <div className="absolute inset-0 grid-paper opacity-30 pointer-events-none"></div>

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* LEFT — text */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <div
              className="font-mono text-[11px] lg:text-xs tracking-wider3 text-charcoal mb-7 animate-rise flex items-center gap-3"
              style={{ animationDelay: "60ms" }}
            >
              <span className="inline-block w-12 h-px bg-brand"></span>
              <span>SOUTH WEST WA · LIC WR 2489</span>
            </div>

            <h1 className="font-display text-[18vw] sm:text-[14vw] lg:text-[9.5vw] xl:text-[10rem] leading-[0.85] text-ink uppercase">
              <span
                className="block animate-rise"
                style={{ animationDelay: "120ms" }}
              >
                When it
              </span>
              <span
                className="block animate-rise"
                style={{ animationDelay: "240ms" }}
              >
                needs to
              </span>
              <span
                className="block animate-rise"
                style={{ animationDelay: "360ms" }}
              >
                <span className="text-brand-deep">come down</span>
                <span className="text-ink">.</span>
              </span>
            </h1>

            <h2
              className="mt-6 font-display text-xl sm:text-2xl lg:text-3xl text-brand-deep uppercase tracking-wide leading-tight animate-rise-sm"
              style={{ animationDelay: "440ms" }}
            >
              Licensed Demolition &amp; Asbestos Removal Contractor — South West WA
            </h2>

            <p
              className="mt-6 max-w-xl text-charcoal text-base lg:text-lg leading-relaxed animate-rise-sm"
              style={{ animationDelay: "520ms" }}
            >
              Fully licensed demolition, asbestos removal and site preparation
              across the South West. Twenty-five years on the tools.
              Family-owned. Brunswick-based.
            </p>

            <div
              className="mt-9 flex flex-col sm:flex-row gap-3 animate-rise-sm"
              style={{ animationDelay: "640ms" }}
            >
              <a
                href="#quote"
                className="bg-brand text-ink font-bold tracking-wider2 uppercase text-sm px-7 py-4 border-2 border-ink hover:bg-ink hover:text-brand transition-colors text-center"
              >
                Get a Free Quote →
              </a>
              <a
                href="tel:0439510783"
                className="bg-transparent text-ink font-mono font-bold tracking-wider2 uppercase text-sm px-7 py-4 border-2 border-ink hover:bg-ink hover:text-off transition-colors text-center"
              >
                Call (439) 510-783
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono tracking-wider2 text-charcoal/70 animate-rise-sm"
              style={{ animationDelay: "780ms" }}
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand"></span>FULLY LICENSED
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand"></span>ICP CERTIFIED
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand"></span>WORKSAFE STANDARDS
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand"></span>FAMILY-OWNED
              </span>
            </div>
          </div>

          {/* RIGHT — accents floating over the video */}
          <div className="col-span-12 lg:col-span-5 relative min-h-[440px] sm:min-h-[520px] lg:min-h-[640px] animate-scale-in">
            {/* Hazard tape angled stripe */}
            <div className="absolute -top-4 -right-4 w-40 h-12 hazard-stripes border-2 border-ink rotate-[14deg] shadow-2xl animate-pulse-stripe"></div>

            {/* Floating "free quotes" stamp */}
            <div className="absolute top-8 left-8 sm:top-10 sm:left-10 bg-off border-2 border-ink p-3 sm:p-4 -rotate-6 shadow-xl">
              <div className="font-mono text-[9px] tracking-wider3 text-charcoal">
                EST. PRACTICE
              </div>
              <div className="font-display text-2xl sm:text-3xl text-ink leading-none mt-1">
                FREE QUOTES
              </div>
            </div>

            {/* Bottom stats card */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 bg-ink text-off border-4 border-off p-6 sm:p-7 lg:p-8">
              <div className="font-mono text-[10px] tracking-wider3 text-brand mb-2">
                EST. PRACTICE
              </div>
              <div className="font-display text-[5.5rem] sm:text-[6.5rem] lg:text-[8rem] leading-[0.8] text-off flex items-start">
                <Counter to={25} />
                <span className="text-brand">+</span>
              </div>
              <div className="font-display text-xl sm:text-2xl text-off uppercase tracking-wide mt-2">
                Years on the tools
              </div>
              <div className="mt-5 pt-5 border-t border-off/15 grid grid-cols-2 gap-3 text-[11px] font-mono">
                <div>
                  <div className="text-off/50 tracking-wider2">LICENCE</div>
                  <div className="text-off mt-0.5">WR 2489</div>
                </div>
                <div>
                  <div className="text-off/50 tracking-wider2">CLASS</div>
                  <div className="text-off mt-0.5">Asbestos · Demo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service marquee */}
      <div className="relative bg-ink text-off border-t-2 border-ink overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap font-display text-2xl sm:text-3xl uppercase py-4 sm:py-5">
          {Array(2)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center shrink-0"
                aria-hidden={i === 1}
              >
                {[
                  "House Demolition",
                  "Asbestos Removal",
                  "Internal Strip-Outs",
                  "Tile & Concrete Removal",
                  "Shed & Patio Removal",
                  "Site Preparation",
                  "Wall Sheeting",
                  "Free Quotes",
                  "WorkSafe Standards",
                ].map((s, j) => (
                  <span key={j} className="flex items-center">
                    <span className="px-7 tracking-wide">{s}</span>
                    <span className="text-brand text-base">▰</span>
                  </span>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  TRUST STRIP                                                        */
/* ------------------------------------------------------------------ */

function Trust() {
  const stats = [
    { lbl: "LIC. NO.", val: "WR 2489", sub: "Asbestos & Demolition" },
    { lbl: "EXPERIENCE", val: "25+", sub: "Years on the tools" },
    { lbl: "COVERAGE", val: "SW", sub: "Bunbury → Augusta" },
    { lbl: "OWNERSHIP", val: "FAMILY", sub: "Brunswick Junction" },
  ];
  return (
    <section className="bg-cream border-b-2 border-ink py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal px-4 lg:px-8 py-2 ${
                i > 0 ? "md:border-l-2 border-ink/10" : ""
              } ${i % 2 ? "border-l-2 md:border-l-2" : ""} ${
                i >= 2 ? "border-t-2 md:border-t-0 border-ink/10 mt-6 pt-8 md:mt-0 md:pt-2" : ""
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="font-mono text-[10px] lg:text-xs tracking-wider3 text-charcoal/70 mb-3">
                {s.lbl}
              </div>
              <div className="font-display text-4xl lg:text-6xl text-ink leading-none">
                {s.val}
              </div>
              <div className="text-charcoal text-sm mt-3">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

function Services() {
  return (
    <section id="services" className="bg-off py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <div className="font-mono text-xs lg:text-sm tracking-wider3 text-charcoal mb-4">
              — SERVICES
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ink uppercase leading-[0.9]">
              What we do.
            </h2>
          </div>
          <p className="md:max-w-md text-charcoal text-sm leading-relaxed pb-2">
            Two specialties. Both done right. Whether it's stripping out an old
            kitchen or removing asbestos roofing on a 1970s home, we approach
            the work safely and document it the way it should be documented.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {SERVICES.map((s, i) => (
            <article
              key={s.n}
              id={`service-${s.n}`}
              className="reveal grid grid-cols-12 gap-6 lg:gap-12 items-center scroll-mt-32"
            >
              <div
                className={`col-span-12 lg:col-span-6 ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden border-4 border-ink group">
                  <img
                    src={s.img}
                    alt={`${s.title} project`}
                    loading="lazy"
                    width={1400}
                    height={1750}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent pointer-events-none"></div>
                  <div className="absolute top-5 left-5 font-mono text-[10px] tracking-wider3 text-off bg-ink/85 backdrop-blur px-3 py-1.5 border border-off/30">
                    {s.tag}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div className="font-display text-7xl sm:text-8xl lg:text-9xl text-off leading-none">
                      {s.n}
                    </div>
                    <div className="font-mono text-[10px] tracking-wider3 text-off/70 pb-3">
                      LIC: WR 2489
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-1 h-full bg-brand origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-700"></div>
                </div>
              </div>
              <div
                className={`col-span-12 lg:col-span-6 ${
                  i % 2 ? "lg:order-1" : ""
                }`}
              >
                <div className="font-mono text-xs tracking-wider3 text-brand-deep mb-4">
                  SERVICE / {s.n}
                </div>
                <h3 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink leading-[0.95] uppercase">
                  {s.title}
                </h3>
                <p className="mt-5 font-display text-2xl sm:text-3xl text-charcoal/85 leading-tight">
                  {s.sub}
                </p>
                <p className="mt-5 text-charcoal text-base leading-relaxed max-w-xl">
                  {s.desc}
                </p>
                <ul className="mt-8 space-y-3">
                  {s.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-4 items-start text-ink"
                    >
                      <span className="mt-2 w-3 h-3 bg-brand shrink-0"></span>
                      <span className="text-base">{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="mt-9 inline-block font-mono text-sm tracking-wider2 uppercase text-ink border-b-2 border-ink pb-1 hover:text-brand-deep hover:border-brand-deep transition-colors"
                >
                  Quote this service →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Asbestos info block */}
        <div className="reveal mt-20 lg:mt-28 border-2 border-ink bg-cream">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 brick-bg border-b-2 md:border-b-0 md:border-r-2 border-ink p-8 lg:p-10 flex flex-col justify-between min-h-[280px]">
              <div className="font-mono text-[11px] tracking-wider3 text-off/90">
                — ASBESTOS NOTE
              </div>
              <div className="font-display text-4xl lg:text-5xl text-off uppercase leading-[0.95] mt-6">
                Why it<br />needs care.
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 p-8 lg:p-12">
              <p className="text-charcoal text-base leading-relaxed">
                If your property was built before asbestos was banned in
                Australia, asbestos-containing materials may still be present.
                When damaged or disturbed, fibres can be released into the air
                — which is why proper identification, removal and disposal are
                an important part of the service.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink border-2 border-ink">
                {[
                  ["WA SAFETY REQUIREMENTS", "We follow current Western Australian work procedures and site controls."],
                  ["LICENSED CLASSES", "Where licensed asbestos removal is required, we hold the correct licence class."],
                  ["WORKSAFE NOTIFICATION", "WorkSafe notifications and clearance steps completed before reoccupation."],
                  ["CLEARANCE CERTIFICATES", "Required clearance inspection and certificate before the next stage of work."],
                ].map(([h, b], j) => (
                  <div key={j} className="bg-off p-5 lg:p-6">
                    <div className="font-mono text-[10px] tracking-wider3 text-brand-deep mb-2">
                      {h}
                    </div>
                    <div className="text-ink text-sm leading-relaxed">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  PROCESS                                                            */
/* ------------------------------------------------------------------ */

function Process() {
  return (
    <section
      id="process"
      className="bg-ink text-off py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-stripes"></div>

      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <div className="font-mono text-xs lg:text-sm tracking-wider3 text-brand mb-4">
              — THE PROCESS
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-off uppercase leading-[0.9]">
              From quote to <span className="text-brand">clearance.</span>
            </h2>
          </div>
          <p className="md:max-w-md text-off/70 text-sm leading-relaxed pb-2">
            Eight clear steps. No surprises. Every demolition we do follows the
            same disciplined process — that's how we keep timelines straight
            and clients informed.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-off/15 border border-off/15">
          {PROCESS.map((p, i) => (
            <li
              key={p.n}
              className="reveal bg-ink p-7 lg:p-8 group hover:bg-brand/[0.08] transition-colors duration-300 relative"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="font-mono text-[10px] tracking-wider3 text-brand mb-6">
                STEP / {p.n}
              </div>
              <div className="font-display text-7xl lg:text-8xl text-off/90 leading-[0.9] mb-5 group-hover:text-brand transition-colors duration-300">
                {p.n}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl uppercase text-off mb-3 leading-tight">
                {p.t}
              </h3>
              <p className="text-off/60 text-sm leading-relaxed">{p.d}</p>
              <span className="absolute top-7 right-7 font-mono text-[10px] text-off/30 tracking-wider2">
                0{i + 1}/08
              </span>
            </li>
          ))}
        </ol>

        <div className="reveal mt-14 lg:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-off/20 pt-10">
          <p className="text-off/70 max-w-xl text-sm leading-relaxed">
            Every job is different. We adjust the process to match site
            conditions, structure type, and council requirements — but the
            standard never drops.
          </p>
          <a
            href="#quote"
            className="bg-brand text-ink font-bold tracking-wider2 uppercase text-sm px-7 py-4 border-2 border-brand hover:bg-off hover:border-off transition-colors whitespace-nowrap"
          >
            Start your project →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  RECENT JOBS                                                        */
/* ------------------------------------------------------------------ */

function Showcase() {
  const items = [
    {
      src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=1200&q=85&auto=format&fit=crop",
      label: "INTERNAL STRIP-OUT",
      type: "Residential · Bunbury",
      code: "01",
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=85&auto=format&fit=crop",
      label: "STRUCTURAL TAKE-DOWN",
      type: "Residential · Busselton",
      code: "02",
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85&auto=format&fit=crop",
      label: "ASBESTOS ROOFING",
      type: "Residential · Brunswick",
      code: "03",
    },
  ];
  return (
    <section className="bg-charcoal text-off py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-20">
          <div>
            <div className="font-mono text-xs lg:text-sm tracking-wider3 text-brand mb-4">
              — PROOF OF WORK
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-off uppercase leading-[0.9]">
              Recent jobs.
            </h2>
          </div>
          <a
            href="#quote"
            className="font-mono text-sm tracking-wider2 uppercase text-off border-b-2 border-off pb-1 hover:text-brand hover:border-brand transition-colors self-start md:self-auto"
          >
            Become the next →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="reveal group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden border-4 border-off/20 group-hover:border-brand transition-colors duration-300">
                <img
                  src={it.src}
                  alt={it.label}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"></div>
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-wider3 bg-off text-ink px-3 py-1.5">
                  JOB / {it.code}
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] tracking-wider3 bg-brand text-ink px-3 py-1.5">
                  COMPLETE
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-2xl lg:text-3xl text-off uppercase leading-tight">
                    {it.label}
                  </div>
                  <div className="font-mono text-[11px] text-off/70 mt-2 tracking-wider2">
                    {it.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-12 text-off/50 text-xs font-mono tracking-wider2 max-w-xl">
          Photos are illustrative — full before/after gallery and additional
          recent projects available on our Facebook page.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SERVICE AREA                                                       */
/* ------------------------------------------------------------------ */

function Area() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const updateFromHash = () => {
      const m = window.location.hash.match(/^#region-(\d+)$/);
      if (m) {
        const idx = REGIONS.findIndex((r) => r.code === m[1]);
        if (idx >= 0) setActive(idx);
      }
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  return (
    <section
      id="area"
      className="bg-cream py-20 lg:py-28 border-t-2 border-ink"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="reveal grid grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-xs lg:text-sm tracking-wider3 text-charcoal mb-4">
              — WHERE WE WORK
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-ink uppercase leading-[0.9]">
              Across the <span className="text-brand-deep">South West.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 text-charcoal text-sm leading-relaxed">
            Five regions. Fifty-plus towns. From beachside Bunbury to inland
            Pemberton, we travel where the work is — and our pricing stays
            local.
          </div>
        </div>

        <div className="grid grid-cols-12 border-2 border-ink reveal">
          <div className="col-span-12 lg:col-span-5 bg-cream lg:border-r-2 border-ink">
            {REGIONS.map((r, i) => (
              <button
                key={r.code}
                id={`region-${r.code}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 lg:p-7 border-b-2 border-ink/15 last:border-b-0 transition-colors duration-300 scroll-mt-32 ${
                  active === i
                    ? "bg-ink text-off"
                    : "bg-cream text-ink hover:bg-off"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div
                      className={`font-mono text-[10px] tracking-wider3 mb-1 ${
                        active === i ? "text-brand" : "text-charcoal/60"
                      }`}
                    >
                      REGION / {r.code}
                    </div>
                    <div className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase truncate">
                      {r.name}
                    </div>
                  </div>
                  <span
                    className={`font-display text-3xl shrink-0 transition-transform duration-300 ${
                      active === i
                        ? "text-brand translate-x-2"
                        : "text-charcoal/40"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="col-span-12 lg:col-span-7 bg-off p-7 lg:p-12 min-h-[400px] flex flex-col justify-between border-t-2 lg:border-t-0 border-ink">
            <div>
              <div className="font-mono text-xs tracking-wider3 text-brand-deep mb-4">
                TOWNS SERVED · {REGIONS[active].towns.length} LOCATIONS
              </div>
              <div
                key={active}
                className="font-display text-4xl sm:text-5xl text-ink uppercase mb-8 leading-[0.95] animate-rise-sm"
              >
                {REGIONS[active].name}
              </div>
              <div
                key={`towns-${active}`}
                className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 animate-fade-in"
              >
                {REGIONS[active].towns.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2.5 text-ink"
                  >
                    <span className="w-2 h-2 bg-brand shrink-0"></span>
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="font-mono text-xs text-charcoal">
                Don't see your town? Call us.
              </div>
              <a
                href="tel:0439510783"
                className="font-mono text-sm font-bold text-ink hover:text-brand-deep border-b-2 border-ink hover:border-brand-deep pb-0.5 transition-colors"
              >
                (439) 510-783 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section id="about" className="bg-off py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5 reveal">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border-4 border-ink">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1100&q=85&auto=format&fit=crop"
                  alt="Premier Demolition team on site"
                  loading="lazy"
                  width={1100}
                  height={1375}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8 brick-bg border-4 border-ink p-5 sm:p-6 max-w-[280px]">
                <div className="font-mono text-[10px] tracking-wider3 text-off/85 mb-1">
                  HEADQUARTERS
                </div>
                <div className="font-display text-3xl sm:text-4xl text-off uppercase leading-[0.95]">
                  Brunswick<br />Junction
                </div>
                <div className="text-off/85 text-sm mt-2 font-mono">
                  South West WA
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-24 h-8 hazard-stripes border-2 border-ink -rotate-6 hidden sm:block"></div>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-7 reveal"
            style={{ transitionDelay: "120ms" }}
          >
            <div className="font-mono text-xs lg:text-sm tracking-wider3 text-charcoal mb-4">
              — ABOUT
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink uppercase leading-[0.9]">
              Family-owned.
              <br />
              <span className="text-brand-deep">South West built.</span>
            </h2>
            <div className="mt-8 space-y-5 max-w-2xl text-charcoal text-base lg:text-lg leading-relaxed">
              <p>
                Premier Demolition is a family-owned business based in
                Brunswick Junction, delivering demolition and asbestos removal
                across the South West for{" "}
                <strong className="text-ink">25+ years</strong>.
              </p>
              <p>
                Full and partial demolition. Internal strip-outs. Asbestos
                removal. Site clean-ups. From first inspection through to
                clearance certificates — done properly, with clear
                communication and quality work.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink border-2 border-ink">
              {[
                ["25+", "YEARS"],
                ["WR 2489", "LICENSED"],
                ["ICP", "CERTIFIED"],
                ["7 DAYS", "AVAILABLE"],
              ].map(([v, l], i) => (
                <div
                  key={i}
                  className="bg-off p-4 lg:p-6 text-center"
                >
                  <div className="font-display text-2xl lg:text-3xl xl:text-4xl text-ink leading-none">
                    {v}
                  </div>
                  <div className="font-mono text-[10px] tracking-wider3 text-charcoal mt-2">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#quote"
              className="mt-10 inline-block bg-ink text-off font-bold tracking-wider2 uppercase text-sm px-7 py-4 border-2 border-ink hover:bg-brand hover:text-ink hover:border-brand transition-colors"
            >
              Talk to the team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section
      id="faq"
      className="bg-off py-20 lg:py-28 border-t-2 border-ink"
    >
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="col-span-12 lg:col-span-4 reveal lg:sticky lg:top-32">
            <div className="font-mono text-xs lg:text-sm tracking-wider3 text-charcoal mb-4">
              — FAQ
            </div>
            <h2 className="font-display text-5xl sm:text-6xl text-ink uppercase leading-[0.9]">
              Questions,
              <br />
              <span className="text-brand-deep">straight answered.</span>
            </h2>
            <p className="mt-6 text-charcoal text-base leading-relaxed max-w-md">
              Anything not covered? Pick up the phone — we'd rather give you a
              real answer than make you fill out a form.
            </p>
            <a
              href="tel:0439510783"
              className="mt-7 inline-block font-mono text-base font-bold text-ink border-b-2 border-ink pb-1 hover:text-brand-deep hover:border-brand-deep transition-colors"
            >
              (439) 510-783 →
            </a>
          </div>

          <div className="col-span-12 lg:col-span-8 reveal">
            <div className="border-t-2 border-ink">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b-2 border-ink">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-4 py-5 lg:py-7 text-left group"
                    >
                      <div className="flex items-start gap-4 lg:gap-7 min-w-0">
                        <span className="font-mono text-[11px] tracking-wider3 text-brand-deep mt-2 shrink-0">
                          Q.0{i + 1}
                        </span>
                        <span className="font-display text-2xl sm:text-3xl text-ink uppercase leading-tight">
                          {f.q}
                        </span>
                      </div>
                      <span
                        className={`font-display text-3xl shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 text-brand-deep"
                            : "text-ink group-hover:text-brand-deep"
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pb-7"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-charcoal text-base lg:text-lg leading-relaxed lg:pl-[6.25rem] max-w-2xl">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FINAL CTA                                                          */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section
      id="quote"
      className="brick-bg py-20 lg:py-28 relative overflow-hidden border-y-4 border-ink"
    >
      <div className="absolute top-0 left-0 right-0 h-2 hazard-stripes"></div>
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-stripes"></div>
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 relative">
        <div className="reveal bg-ink text-off border-4 border-ink p-8 sm:p-10 lg:p-16 max-w-3xl mx-auto">
          <div className="font-mono text-xs lg:text-sm tracking-wider3 text-brand mb-6">
            — READY TO START
          </div>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-off uppercase leading-[0.9]">
            Ready to <span className="text-brand">break ground?</span>
          </h2>
          <p className="mt-6 text-off/80 text-base lg:text-lg leading-relaxed max-w-xl">
            Free quotes on residential and commercial demolition and asbestos
            removal — across the South West. Call, email, or send through a
            few site details.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="tel:0439510783"
              className="bg-brand text-ink p-6 border-2 border-brand hover:bg-off hover:border-off transition-colors group"
            >
              <div className="font-mono text-[10px] tracking-wider3 text-ink/70 mb-2">
                CALL US
              </div>
              <div className="font-display text-3xl uppercase">
                (439) 510-783
              </div>
              <div className="mt-3 font-mono text-[11px] tracking-wider2 text-ink/70 group-hover:text-ink">
                7 DAYS · FREE QUOTES →
              </div>
            </a>
            <a
              href="mailto:premierdemolition2@hotmail.com"
              className="bg-off text-ink p-6 border-2 border-off hover:bg-brand hover:border-brand transition-colors group"
            >
              <div className="font-mono text-[10px] tracking-wider3 text-ink/70 mb-2">
                EMAIL US
              </div>
              <div className="font-display text-lg sm:text-xl lg:text-2xl uppercase break-all leading-tight">
                premierdemolition2@hotmail.com
              </div>
              <div className="mt-3 font-mono text-[11px] tracking-wider2 text-ink/70">
                SEND SITE DETAILS →
              </div>
            </a>
          </div>
          <div className="mt-10 pt-6 border-t border-off/15 flex flex-wrap items-center gap-x-6 gap-y-3 text-off/55 font-mono text-xs">
            <span>LIC: WR 2489</span>
            <span aria-hidden>·</span>
            <span>ICP CERTIFIED</span>
            <span aria-hidden>·</span>
            <span>BRUNSWICK JUNCTION</span>
            <span aria-hidden>·</span>
            <span>ABN ON REQUEST</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="bg-ink text-off pt-16 lg:pt-20 pb-8">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="brick-bg w-12 h-12 inline-block border-2 border-off"></span>
              <div className="leading-none">
                <div className="font-display text-3xl text-off">PREMIER</div>
                <div className="font-display text-3xl text-brand -mt-1">
                  DEMOLITION
                </div>
              </div>
            </div>
            <p className="mt-6 text-off/60 text-sm max-w-md leading-relaxed">
              Family-owned demolition and asbestos removal across the South
              West of Western Australia. Fully licensed. Twenty-five years on
              the tools.
            </p>
            <div className="mt-6 inline-block bg-brand text-ink font-mono text-xs px-4 py-2 border-2 border-brand tracking-wider2">
              LIC: WR 2489 · ICP CERTIFIED
            </div>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] tracking-wider3 text-brand mb-4">
              SERVICES
            </div>
            <ul className="space-y-2 text-off/80 text-sm">
              {[
                ["House Demolition", "service-01"],
                ["Asbestos Removal", "service-02"],
                ["Internal Strip-Outs", "service-03"],
                ["Tile & Concrete", "service-04"],
                ["Shed & Patio", "service-05"],
                ["Site Clean-Up", "service-06"],
              ].map(([label, anchor]) => (
                <li key={anchor}>
                  <a
                    href={`#${anchor}`}
                    className="hover:text-brand transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <div className="font-mono text-[10px] tracking-wider3 text-brand mb-4">
              SERVICE AREA
            </div>
            <ul className="space-y-2 text-off/80 text-sm">
              {[
                ["Bunbury", "region-01"],
                ["Harvey · Brunswick", "region-02"],
                ["Busselton · Dunsborough", "region-03"],
                ["Margaret River", "region-04"],
                ["Southern Inland", "region-05"],
              ].map(([label, anchor]) => (
                <li key={anchor}>
                  <a
                    href={`#${anchor}`}
                    className="hover:text-brand transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-3">
            <div className="font-mono text-[10px] tracking-wider3 text-brand mb-4">
              CONTACT
            </div>
            <div className="space-y-4 text-sm">
              <a
                href="tel:0439510783"
                className="block text-off hover:text-brand transition-colors"
              >
                <div className="text-off/40 text-[10px] tracking-wider3 mb-1 font-mono">
                  PHONE
                </div>
                <div className="font-mono">(439) 510-783</div>
              </a>
              <a
                href="mailto:premierdemolition2@hotmail.com"
                className="block text-off hover:text-brand transition-colors"
              >
                <div className="text-off/40 text-[10px] tracking-wider3 mb-1 font-mono">
                  EMAIL
                </div>
                <div className="font-mono break-all">
                  premierdemolition2@hotmail.com
                </div>
              </a>
              <div>
                <div className="text-off/40 text-[10px] tracking-wider3 mb-1 font-mono">
                  BASED
                </div>
                <div className="text-off">Brunswick Junction, WA</div>
              </div>
              <a
                href="https://www.facebook.com/search/top/?q=Premier%20Demolition%20Brunswick%20Junction"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-off/80 hover:text-brand mt-2 transition-colors"
                aria-label="Premier Demolition on Facebook"
              >
                <span className="w-9 h-9 border-2 border-off/40 flex items-center justify-center font-display text-lg">
                  f
                </span>
                <span className="font-mono text-xs tracking-wider2">
                  / FACEBOOK
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-off/10 flex flex-col md:flex-row gap-3 items-start md:items-center justify-between text-xs font-mono text-off/40">
          <div>
            © {new Date().getFullYear()} Premier Demolition. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 tracking-wider2">
            <span>WR 2489</span>
            <span aria-hidden>·</span>
            <span>SOUTH WEST WA</span>
            <span aria-hidden>·</span>
            <span>FAMILY OWNED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

function buildSchema() {
  const towns = REGIONS.flatMap((r) => r.towns);
  const uniqueTowns = Array.from(new Set(towns));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE}/#business`,
        name: "Premier Demolition",
        alternateName: "Premier Demolition WA",
        description:
          "Family-owned demolition and asbestos removal contractor based in Brunswick Junction, servicing the South West of Western Australia. Fully licensed for asbestos removal and demolition. 25+ years of experience.",
        url: `${SITE}/`,
        logo: `${SITE}/opengraph-image`,
        image: `${SITE}/opengraph-image`,
        telephone: "+61439510783",
        email: "premierdemolition2@hotmail.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Brunswick Junction",
          addressRegion: "WA",
          addressCountry: "AU",
        },
        areaServed: uniqueTowns.map((t) => ({
          "@type": "City",
          name: t,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "South West, Western Australia",
          },
        })),
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "07:00",
            closes: "18:00",
          },
        ],
        identifier: {
          "@type": "PropertyValue",
          propertyID: "Licence",
          value: "WR 2489",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Demolition & Asbestos Services",
          itemListElement: SERVICES.map((s) => {
            const titleCased = s.title
              .toLowerCase()
              .replace(/\b\w/g, (c) => c.toUpperCase());
            return {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: titleCased,
                description: s.desc,
                serviceType: titleCased,
                provider: { "@id": `${SITE}/#business` },
              },
            };
          }),
        },
        sameAs: [
          "https://www.facebook.com/search/top/?q=Premier%20Demolition%20Brunswick%20Junction",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: `${SITE}/`,
        name: "Premier Demolition",
        publisher: { "@id": `${SITE}/#business` },
        inLanguage: "en-AU",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };
}

export default function Page() {
  useReveal();
  return (
    <main className="bg-off text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Showcase />
      <Area />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
