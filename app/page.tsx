"use client";

import { useEffect, useState } from "react";

const ASSET = "https://pangealabs.space";
const SALES_EMAIL = "sales@pangealabs.space";
const CALENDLY =
  "https://calendly.com/michael-pangealabs/30min?hide_gdpr_banner=1&background_color=0a0a0b&text_color=fafafa&primary_color=fafafa";

const products = [
  {
    slug: "accounts",
    image: `${ASSET}/products/accounts.png`,
    eyebrow: "Banking rails",
    title: "Dedicated business virtual bank accounts",
    lead: {
      heading: "Built for businesses and individuals",
      body: "The same account details and the same rail coverage, whether you open as a company or in your own name. Your own account numbers — money arrives in your account, not a shared reference.",
    },
    sections: [
      {
        heading: "United States",
        body: "Receive via ACH, RTP, FedNow, Fedwire and SWIFT — one account, every rail.",
        bullets: [
          "Your own account and routing numbers, dedicated to you rather than a pooled reference, so any US payer — payroll platform, marketplace, billing system or individual — can pay you directly.",
          "ACH Same Day and Next Day for payroll, vendor and recurring collections.",
          "RTP and FedNow settle instantly, 24/7/365.",
          "Fedwire for high-value, time-critical domestic transfers.",
          "SWIFT brings inbound international wires into the same account.",
          "Four direct US banking partners: if one rail has downtime your money keeps moving, and direct relationships mean the full set of rails rather than a limited subset.",
        ],
      },
      {
        heading: "Europe",
        bullets: [
          "EUR Virtual Accounts — collect via SEPA. Receive euro payments through SEPA, the standardised system that moves money in euros across participating European countries. With dedicated euro account details, European customers and partners can pay you in their own currency, simply and locally.",
          "GBP Virtual Accounts — collect via Faster Payments. Receive pounds through the UK's Faster Payments Service (FPS), which settles between UK accounts typically within seconds, around the clock. Dedicated UK account details mean British customers and partners can pay you instantly in sterling.",
        ],
      },
      {
        heading: "Latin America",
        body: "Deposit and withdrawal ramps in each market, plus local virtual accounts so you collect in the currency your customers already use.",
        bullets: [
          "COP virtual accounts — collect Colombian pesos via Bre-B.",
          "BRL virtual accounts — collect Brazilian reais via PIX.",
          "ARS virtual accounts — collect Argentine pesos via Mercado Pago.",
          "Local deposit and withdrawal ramps across Argentina, Brazil, Chile, Colombia, Costa Rica, Mexico, Peru and Uruguay.",
        ],
      },
      {
        heading: "Asia",
        body: "Instant local rails where they exist, SWIFT everywhere else.",
        bullets: [
          "China — instant local payments in renminbi, or SWIFT.",
          "Hong Kong — a separate market from mainland China, with its own instant local rail in Hong Kong dollars, or SWIFT.",
          "India — instant local payments in rupees, or SWIFT.",
          "Japan — instant local payments in yen, or SWIFT.",
        ],
      },
    ],
  },
  {
    slug: "fees",
    image: `${ASSET}/products/fees.png`,
    eyebrow: "Pricing",
    title: "Highly tailored fees",
    lead: {
      heading: "Exceptional terms for exceptional clients",
      body: "We study your use case and your real flow, then build a fee around it — because a rate shaped to how you actually move money beats a generic public tier every time. Move serious volume and we're glad to tailor it even further.",
    },
    sections: [
      {
        heading: "Priced around your flow",
        body: "Your rate reflects your volume, your corridors and your currency mix — not a fixed public tier that treats every business the same.",
      },
      {
        heading: "No surprises at settlement",
        body: "The cost of a transfer, exchange spread included, is clear before it leaves — so finance can plan instead of reconciling after the fact.",
      },
      {
        heading: "Reviewed as you grow",
        body: "As your volume moves, we revisit pricing with you rather than letting it drift out of step with your business.",
      },
    ],
  },
  {
    slug: "cards",
    image: `${ASSET}/products/cards.png`,
    eyebrow: "Spend",
    title: "Business virtual cards",
    lead: {
      heading: "Up to USD 10,000 per purchase, with no daily limit",
      body: "Each individual purchase can go up to ten thousand dollars, and there is no cap on how much the card moves across a day.",
    },
    sections: [
      {
        heading: "A Visa card that lives in your phone",
        bullets: [
          "Visa virtual cards, accepted wherever Visa is.",
          "Add the card to Google Pay or Apple Pay and tap to pay in person, contactless.",
          "Use the same card for online purchases and subscriptions.",
        ],
      },
    ],
  },
  {
    slug: "cashout",
    image: `${ASSET}/products/cashout.png`,
    eyebrow: "Off-ramp",
    title: "Crypto → Cash",
    lead: {
      heading: "More than one payout provider, so capacity is not the bottleneck",
      body: "We work with several cash-out providers rather than a single relationship, which raises the withdrawal capacity available to you. Which provider a payout routes through depends on the use case.",
    },
    sections: [
      {
        heading: "Cash out through global networks",
        bullets: [
          "Payouts reach recipients through MoneyGram and Western Union.",
          "Routing is chosen per use case — corridor, amount and how the recipient wants the money — instead of forcing every payout down the same path.",
        ],
      },
    ],
  },
];

type Product = (typeof products)[number];

type Region = {
  id: string;
  label: string;
  countries: { code: string; name: string }[];
};

const regions: Region[] = [
  {
    id: "latam",
    label: "Latin America",
    countries: [
      { code: "co", name: "Colombia" },
      { code: "mx", name: "Mexico" },
      { code: "br", name: "Brazil" },
      { code: "ar", name: "Argentina" },
      { code: "cl", name: "Chile" },
      { code: "pe", name: "Peru" },
      { code: "uy", name: "Uruguay" },
      { code: "cr", name: "Costa Rica" },
    ],
  },
  {
    id: "namer-eu",
    label: "North America & Europe",
    countries: [
      { code: "us", name: "United States" },
      { code: "ca", name: "Canada" },
      { code: "es", name: "Spain" },
      { code: "gb", name: "United Kingdom" },
      { code: "de", name: "Germany" },
      { code: "fr", name: "France" },
      { code: "it", name: "Italy" },
      { code: "nl", name: "Netherlands" },
    ],
  },
  {
    id: "asia",
    label: "Asia",
    countries: [
      { code: "cn", name: "China" },
      { code: "hk", name: "Hong Kong" },
      { code: "jp", name: "Japan" },
      { code: "in", name: "India" },
      { code: "sg", name: "Singapore" },
      { code: "kr", name: "South Korea" },
      { code: "ph", name: "Philippines" },
      { code: "vn", name: "Vietnam" },
    ],
  },
  {
    id: "africa",
    label: "Africa",
    countries: [
      { code: "ng", name: "Nigeria" },
      { code: "ma", name: "Morocco" },
      { code: "sn", name: "Senegal" },
      { code: "za", name: "South Africa" },
      { code: "tn", name: "Tunisia" },
      { code: "cg", name: "Republic of Congo" },
    ],
  },
  {
    id: "oceania",
    label: "Oceania",
    countries: [
      { code: "au", name: "Australia" },
      { code: "nz", name: "New Zealand" },
      { code: "fj", name: "Fiji" },
      { code: "ws", name: "Samoa" },
      { code: "vu", name: "Vanuatu" },
      { code: "to", name: "Tonga" },
      { code: "pg", name: "Papua New Guinea" },
    ],
  },
];

const faqs = [
  {
    q: "Who is Pangea Labs for?",
    a: "Placeholder answer — replace with verified copy. Businesses that move money across borders and want settlement, treasury and compliance handled in one place.",
  },
  {
    q: "How long does onboarding take?",
    a: "Placeholder answer — replace with verified copy. One KYB covers every product; a dedicated manager walks you through the documents required.",
  },
  {
    q: "Which currencies do you support?",
    a: "Placeholder answer — replace with verified copy. Confirm the live currency list with the team before publishing.",
  },
  {
    q: "How is pricing set?",
    a: "Placeholder answer — replace with verified copy. Fees are quoted against your volume, corridors and currency mix rather than a fixed public tier.",
  },
  {
    q: "Can we build on your licensing and banking relationships?",
    a: "When you work with Pangea Labs you're also able to leverage our partner network's licensing and banking relationships — four direct US banking partners, and banking presence across the US, UK and Singapore that keeps SWIFT moving across time zones — instead of assembling those relationships market by market yourself.",
  },
  {
    q: "Is Pangea Labs registered?",
    a: "Pangea Labs is registered as a Money Services Business (MSB). The underlying payment infrastructure is delivered together with our partners, whose rails reach 170 countries in 75 currencies over SWIFT, with dedicated USD, EUR and GBP account details and a built-in bridge to USDT and USDC.",
  },
];

function ArrowRight({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

function Plus({ size = 16 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="m-auto size-6" aria-hidden="true">
      <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4 transition-all duration-500 sm:size-5" aria-hidden="true">
      <path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" />
    </svg>
  );
}

function EmailReveal({ mode = "button", label }: { mode?: "button" | "link"; label: string }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const reveal = () => {
    setRevealed(true);
    navigator.clipboard?.writeText(SALES_EMAIL).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }).catch(() => undefined);
  };

  if (mode === "link") {
    return revealed ? (
      <span className="inline-flex items-center gap-2">
        <a href={`mailto:${SALES_EMAIL}`} className="font-medium text-foreground underline underline-offset-4">{SALES_EMAIL}</a>
        {copied ? <span className="text-xs text-muted-foreground">Copied to clipboard</span> : null}
      </span>
    ) : (
      <button type="button" onClick={reveal} aria-label="Show email address" className="font-medium text-foreground underline-offset-4 hover:underline">{label}</button>
    );
  }

  return revealed ? (
    <a href={`mailto:${SALES_EMAIL}`} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
      {copied ? `${SALES_EMAIL} · Copied to clipboard` : SALES_EMAIL}
    </a>
  ) : (
    <button onClick={reveal} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none" type="button" aria-label="Show email address">
      <span>{label}</span>
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const smooth = (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  };

  return (
    <header>
      <nav data-state={open ? "active" : "false"} className="fixed z-20 w-full px-2 group">
        <div className={`mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 ${scrolled ? "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5" : ""}`}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a aria-label="Pangea Labs — home" className="flex items-center" href="/">
                <img alt="Pangea Labs" width="4096" height="932" className="h-5 w-auto transition-opacity duration-300 hover:opacity-80 motion-reduce:transition-none" src={`${ASSET}/pangea-wordmark.png`} />
              </a>
              <div className="flex items-center gap-2 lg:hidden">
                <button onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5">
                  {open ? <XIcon className="m-auto size-6" /> : <MenuIcon />}
                </button>
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className="flex gap-8 text-sm">
                <li><a href="#producto" onClick={smooth("#producto")} className="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Products</span></a></li>
                <li><a href="#cobertura" onClick={smooth("#cobertura")} className="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Coverage</span></a></li>
              </ul>
            </div>
            <div className={`${open ? "block" : "hidden"} bg-background lg:flex mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent`}>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <li><a href="#producto" onClick={smooth("#producto")} className="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Products</span></a></li>
                  <li><a href="#cobertura" onClick={smooth("#cobertura")} className="text-muted-foreground hover:text-accent-foreground block duration-150"><span>Coverage</span></a></li>
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:gap-3 sm:space-y-0 md:w-fit">
                <EmailReveal label="Talk to us" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener("keydown", esc);
    };
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-[90] h-full w-full bg-black/70 backdrop-blur-md" onClick={onClose} />
      <div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto p-3 sm:p-6">
        <div role="dialog" aria-modal="true" aria-label={product.title} className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-[850px] flex-col overflow-hidden rounded-2xl border border-border bg-card sm:max-h-[calc(100dvh-3rem)] sm:rounded-3xl">
          <div className="shrink-0">
            <div className="relative before:absolute before:inset-x-0 before:bottom-[-1px] before:z-50 before:h-[70px] before:bg-gradient-to-t before:from-card">
              <img src={product.image} alt="" className="h-40 w-full object-cover object-center sm:h-56" />
            </div>
          </div>
          <div className="pl-scroll relative min-h-0 flex-1 overflow-y-auto">
            <div className="flex h-auto items-start justify-between gap-4 p-6 pb-4 sm:p-8 sm:pb-5">
              <div>
                <p className="text-lg text-muted-foreground">{product.eyebrow}</p>
                <h3 className="mt-0.5 text-3xl font-semibold text-foreground sm:text-4xl">{product.title}</h3>
              </div>
              <button aria-label="Close card" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors duration-300 hover:border-foreground/30 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none" onClick={onClose}>
                <div className="rotate-45"><Plus size={20} /></div>
              </button>
            </div>
            <div className="relative px-6 pb-8 sm:px-8 sm:pb-10">
              <div className="flex flex-col items-start gap-6 text-base text-muted-foreground">
                <div className="w-full rounded-xl border border-border bg-muted/40 p-4 sm:p-5">
                  <p className="text-base font-semibold text-foreground">{product.lead.heading}</p>
                  <p className="mt-1.5 text-sm leading-relaxed">{product.lead.body}</p>
                </div>
                {product.sections.map((section) => (
                  <div className="w-full space-y-2" key={section.heading}>
                    <h4 className="text-base font-semibold text-foreground">{section.heading}</h4>
                    {section.body ? <p className="text-sm leading-relaxed">{section.body}</p> : null}
                    {section.bullets ? (
                      <ul className="space-y-2 pt-1">
                        {section.bullets.map((bullet) => (
                          <li className="flex gap-2.5 text-sm leading-relaxed" key={bullet}>
                            <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Products() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section id="producto" className="mx-auto w-full max-w-6xl px-6 pt-12 pb-24 md:pt-20 md:pb-32">
      <header className="mb-10 space-y-3 text-center sm:mb-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">What we build</p>
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Products</h2>
        <p className="mx-auto max-w-2xl text-balance text-base text-muted-foreground">One onboarding covers every product. A dedicated manager walks you through each step in plain language, and pricing is tailored to how your business actually moves money.</p>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <button key={product.slug} type="button" aria-expanded={selected?.slug === product.slug} aria-label={`Open card: ${product.title}`} onClick={() => setSelected(product)} className="flex w-full cursor-pointer flex-col items-stretch justify-between rounded-2xl border border-border bg-card p-3 text-left transition-colors duration-300 hover:border-foreground/25 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none">
            <div className="flex flex-col gap-4">
              <div><img src={product.image} alt="" className="h-48 w-full rounded-lg object-cover object-center" /></div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <p className="text-left text-sm font-medium text-muted-foreground">{product.eyebrow}</p>
                  <h3 className="text-left font-semibold text-foreground">{product.title}</h3>
                </div>
                <div aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors duration-300"><Plus /></div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selected ? <ProductModal product={selected} onClose={() => setSelected(null)} /> : null}
    </section>
  );
}

function Country({ code, name }: { code: string; name: string }) {
  return (
    <li className="group/item flex items-center gap-2 px-2 py-1.5 rounded-lg bg-muted/30 border border-transparent hover:border-border hover:-translate-y-px transition-all duration-200 cursor-default">
      <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 shadow-sm"><img src={`https://flagcdn.com/${code}.svg`} alt="" loading="lazy" className="w-full h-full object-cover" /></div>
      <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors truncate">{name}</span>
    </li>
  );
}

function Coverage() {
  const [openRegion, setOpenRegion] = useState<string | null>(null);

  return (
    <div id="cobertura" className="pb-24 md:pb-32">
      <section className="max-w-4xl w-full mx-auto font-sans antialiased px-4 sm:px-6">
        <header className="text-center mb-8 sm:mb-10 space-y-2">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">Global coverage</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">International transfers</h2>
        </header>
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="divide-y divide-border">
            {regions.map((region) => {
              const open = openRegion === region.id;
              const first = region.countries.slice(0, 4);
              const rest = region.countries.slice(4);
              return (
                <div key={region.id} className={`transition-colors duration-200 ${open ? "bg-muted/40" : "hover:bg-muted/20"}`}>
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col md:flex-row gap-3 md:gap-10">
                    <div className="flex items-center justify-between md:block md:w-28 flex-shrink-0 pt-0.5">
                      <span className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">{region.label}</span>
                      {rest.length ? (
                        <button onClick={() => setOpenRegion(open ? null : region.id)} aria-expanded={open} className={`md:hidden flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${open ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                          <span>{open ? "Less" : "More"}</span><span className={`text-base leading-none transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
                        </button>
                      ) : null}
                    </div>
                    <div className="flex-grow">
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">{first.map((c) => <Country key={c.code} {...c} />)}</ul>
                      <div aria-hidden={!open} className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <div className="min-h-0 overflow-hidden"><ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">{rest.map((c) => <Country key={c.code} {...c} />)}</ul></div>
                      </div>
                    </div>
                    {rest.length ? (
                      <div className="hidden md:flex md:w-24 justify-end flex-shrink-0 pt-0.5">
                        <button onClick={() => setOpenRegion(open ? null : region.id)} aria-expanded={open} className={`flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 ${open ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                          <span>{open ? "Show less" : "Show all"}</span><span className={`text-base leading-none transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <footer className="mt-6 sm:mt-8 flex flex-col items-center gap-5 sm:gap-6">
          <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-xl px-2">Send and receive money across the corridors we operate, with competitive exchange rates, real-time settlement and end-to-end traceability.</p>
          <button className="group flex items-center gap-2 bg-foreground text-background px-7 py-3 rounded-full font-semibold text-sm hover:opacity-90 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-md motion-reduce:transform-none">
            <span>Start sending</span>
            <span className="relative overflow-hidden flex items-center justify-center w-4 h-4">
              <ArrowRight className="absolute transition-all duration-300 ease-in-out group-hover:translate-x-5 group-hover:opacity-0" />
              <ArrowRight className="absolute -translate-x-5 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100" />
            </span>
          </button>
        </footer>
      </section>
    </div>
  );
}

function FAQ() {
  return (
    <section id="faq" className="mx-auto w-full max-w-4xl px-6 pb-28 md:pb-36">
      <header className="mb-10 space-y-3 text-center sm:mb-14">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Common questions</h2>
        <p className="text-base text-muted-foreground">Everything you need to know before you start.</p>
      </header>
      <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-xl border border-border bg-muted/30 p-5 transition-colors duration-200 hover:border-foreground/20 hover:bg-muted/50">
            <dt className="text-sm font-semibold text-foreground">{faq.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-center text-sm text-muted-foreground">Have another question? <EmailReveal mode="link" label="Get in touch" /></p>
    </section>
  );
}

function LetsWork() {
  const [activated, setActivated] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [hover, setHover] = useState(false);
  const [bookHover, setBookHover] = useState(false);
  const [calendar, setCalendar] = useState(false);

  useEffect(() => {
    if (!calendar) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setCalendar(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener("keydown", esc);
    };
  }, [calendar]);

  const activate = () => {
    setActivated(true);
    window.setTimeout(() => setRevealed(true), 500);
  };

  return (
    <section id="contacto" className="flex items-center justify-center px-6 pb-28 pt-8 md:pb-36">
      {calendar ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6" onClick={() => setCalendar(false)}>
          <div role="dialog" aria-modal="true" aria-label="Book a call with Michael — Pangea Labs" className="relative h-[min(760px,calc(100dvh-2rem))] w-full max-w-[1000px] overflow-hidden rounded-2xl border border-border bg-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" aria-label="Close calendar" onClick={() => setCalendar(false)} className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition-colors duration-300 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"><XIcon className="size-4" /></button>
            <iframe src={CALENDLY} title="Book a call with Michael — Pangea Labs" className="h-full w-full border-0" loading="eager" />
          </div>
        </div>
      ) : null}

      <div className="relative flex flex-col items-center gap-12">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ opacity: revealed ? 1 : 0, transform: revealed ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)", pointerEvents: revealed ? "auto" : "none" }}>
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground transition-all duration-500" style={{ transform: revealed ? "translateY(0)" : "translateY(10px)", opacity: revealed ? 1 : 0, transitionDelay: "100ms" }}>Perfect</span>
            <h3 className="text-3xl font-light tracking-tight text-foreground transition-all duration-500 sm:text-4xl" style={{ transform: revealed ? "translateY(0)" : "translateY(10px)", opacity: revealed ? 1 : 0, transitionDelay: "200ms" }}>Let's talk</h3>
          </div>
          <button onClick={() => setCalendar(true)} onMouseEnter={() => setBookHover(true)} onMouseLeave={() => setBookHover(false)} className="group relative flex cursor-pointer items-center gap-4 transition-all duration-500" style={{ transform: revealed ? bookHover ? "translateY(0) scale(1.02)" : "translateY(0) scale(1)" : "translateY(15px) scale(1)", opacity: revealed ? 1 : 0, transitionDelay: "150ms" }}>
            <div className="h-px w-8 bg-border transition-all duration-500 sm:w-12" style={{ transform: bookHover ? "scaleX(0)" : "scaleX(1)", opacity: bookHover ? 0 : 0.5 }} />
            <div className="relative flex items-center gap-3 overflow-hidden rounded-full border px-6 py-3 transition-all duration-500 sm:px-8 sm:py-4" style={{ borderColor: bookHover ? "var(--foreground)" : "var(--border)", backgroundColor: bookHover ? "var(--foreground)" : "transparent", boxShadow: bookHover ? "0 0 30px rgba(0,0,0,0.1), 0 10px 40px rgba(0,0,0,0.08)" : "none", color: bookHover ? "var(--background)" : "var(--foreground)" }}>
              <CalendarIcon /><span className="text-sm font-medium tracking-wide transition-all duration-500 sm:text-base">Book a call</span><ArrowUpRight className="size-4 transition-all duration-500 sm:size-5" />
            </div>
            <div className="h-px w-8 bg-border transition-all duration-500 sm:w-12" style={{ transform: bookHover ? "scaleX(0)" : "scaleX(1)", opacity: bookHover ? 0 : 0.5 }} />
          </button>
          <span className="text-xs tracking-widest uppercase text-muted-foreground/50 transition-all duration-500" style={{ transform: revealed ? "translateY(0)" : "translateY(10px)", opacity: revealed ? 1 : 0, transitionDelay: "450ms" }}>30 min intro call</span>
        </div>

        <div className="group relative cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={activate} style={{ pointerEvents: activated ? "none" : "auto" }}>
          <div className="flex flex-col items-center gap-6">
            <h2 className="relative text-center text-5xl font-light tracking-tight text-foreground transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] sm:text-6xl md:text-7xl lg:text-8xl" style={{ opacity: activated ? 0 : 1, transform: activated ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)" }}>
              <span className="block overflow-hidden"><span className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: hover && !activated ? "translateY(-8%)" : "translateY(0)" }}>Let's work</span></span>
              <span className="block overflow-hidden pb-1 sm:pb-2 md:pb-3 lg:pb-4"><span className="block transition-transform delay-75 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: hover && !activated ? "translateY(-8%)" : "translateY(0)" }}><span className="text-muted-foreground/60">together</span></span></span>
            </h2>
            <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
              <div className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out" style={{ borderColor: activated || hover ? "var(--foreground)" : "var(--border)", backgroundColor: activated ? "transparent" : hover ? "var(--foreground)" : "transparent", transform: activated ? "scale(3)" : hover ? "scale(1.1)" : "scale(1)", opacity: activated ? 0 : 1, transitionDuration: activated ? "700ms" : "500ms" }} />
              <ArrowUpRight className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7" />
            </div>
          </div>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16"><div className="h-px w-8 bg-border transition-all duration-500 sm:w-12" style={{ transform: activated ? "scaleX(0) translateX(-20px)" : hover ? "scaleX(1.5)" : "scaleX(1)", opacity: activated ? 0 : hover ? 1 : 0.5 }} /></div>
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16"><div className="h-px w-8 bg-border transition-all duration-500 sm:w-12" style={{ transform: activated ? "scaleX(0) translateX(20px)" : hover ? "scaleX(1.5)" : "scaleX(1)", opacity: activated ? 0 : hover ? 1 : 0.5 }} /></div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 text-center transition-all delay-100 duration-500" style={{ opacity: activated ? 0 : 1, transform: activated ? "translateY(20px)" : "translateY(0)", pointerEvents: activated ? "none" : "auto" }}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Have a use case in mind? We'd love to hear about it. Let's build something exceptional together.</p>
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60"><EmailReveal mode="link" label="Get in touch" /></span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <a href="https://www.linkedin.com/company/pangea-labs/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/40 hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:scale-[0.97] motion-reduce:transform-none motion-reduce:transition-none">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" /></svg>
          <span>Connect on LinkedIn</span>
        </a>
        <span className="text-xs text-muted-foreground">© Pangea Labs</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <div aria-hidden="true" className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <div aria-hidden="true" className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <div>
                  <a href="#cobertura" style={{ "--i": 0 } as React.CSSProperties} className="pl-reveal hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground text-sm">Settlement in seconds with stablecoins</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0"><span className="flex size-6"><ArrowRight className="m-auto size-3" /></span><span className="flex size-6"><ArrowRight className="m-auto size-3" /></span></div>
                    </div>
                  </a>
                  <h1 style={{ "--i": 1 } as React.CSSProperties} className="pl-reveal mt-8 max-w-4xl mx-auto text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Global payouts for everyone, anywhere</h1>
                  <p style={{ "--i": 2 } as React.CSSProperties} className="pl-reveal mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">We connect blockchain to the real economy: settlement in seconds with stablecoins, tokenized assets and built-in compliance — in a single ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Products />
        <Coverage />
        <FAQ />
        <LetsWork />
      </main>
      <Footer />
    </>
  );
}
