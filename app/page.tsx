const products = [
  {
    eyebrow: "Banking rails",
    title: "Dedicated business virtual bank accounts",
    body: "Access account infrastructure designed for global businesses and modern treasury operations.",
    visual: "accounts",
  },
  {
    eyebrow: "Pricing",
    title: "Highly tailored fees",
    body: "Pricing is structured around how your business actually moves money, rather than a one-size-fits-all plan.",
    visual: "fees",
  },
  {
    eyebrow: "Spend",
    title: "Business virtual cards",
    body: "Issue and manage virtual cards for business spend through integrated infrastructure partners.",
    visual: "cards",
  },
  {
    eyebrow: "Off-ramp",
    title: "Crypto → Cash",
    body: "Move from digital assets into local payout rails with a single operating workflow.",
    visual: "cashout",
  },
];

const regions = [
  {
    name: "Latin America",
    countries: ["Colombia", "Mexico", "Brazil", "Argentina", "Chile", "Peru", "Uruguay", "Costa Rica"],
  },
  {
    name: "North America & Europe",
    countries: ["United States", "Canada", "Spain", "United Kingdom", "Germany", "France", "Italy", "Netherlands"],
  },
  {
    name: "Asia",
    countries: ["China", "Hong Kong", "Japan", "India", "Singapore", "South Korea", "Philippines", "Vietnam"],
  },
  {
    name: "Africa",
    countries: ["Nigeria", "Morocco", "Senegal", "South Africa", "Tunisia", "Republic of Congo"],
  },
  {
    name: "Oceania",
    countries: ["Australia", "New Zealand", "Fiji", "Samoa", "Vanuatu", "Tonga", "Papua New Guinea"],
  },
];

const faqs = [
  {
    q: "Who is Pangea Labs for?",
    a: "Businesses that move money across borders and want settlement, treasury and compliance handled in one place.",
  },
  {
    q: "How long does onboarding take?",
    a: "Onboarding depends on the product, jurisdictions and compliance requirements involved. A dedicated manager guides each business through the process.",
  },
  {
    q: "Which currencies do you support?",
    a: "Currency availability varies by product and corridor. Pangea combines traditional payment rails with stablecoin infrastructure to support international operations.",
  },
  {
    q: "How is pricing set?",
    a: "Pricing is tailored to the products, corridors, volume and operating model of each business.",
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

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Pangea Labs home">
          <span className="brandMark" aria-hidden="true">P</span>
          <span>Pangea Labs</span>
        </a>
        <div className="navLinks">
          <a href="#products">Products</a>
          <a href="#coverage">Coverage</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button buttonSmall" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroGlow" aria-hidden="true" />
        <p className="kicker"><span className="pulse" /> Infrastructure for global money movement</p>
        <h1>Global payouts for everyone, anywhere</h1>
        <p className="heroCopy">
          We connect blockchain to the real economy: settlement in seconds with stablecoins,
          tokenized assets and built-in compliance — in a single ecosystem.
        </p>
        <div className="heroActions">
          <a className="button" href="#contact">Start building <Arrow /></a>
          <a className="textLink" href="#products">Explore the stack ↓</a>
        </div>
        <div className="rail" aria-label="Pangea capabilities">
          <span>Stablecoin settlement</span>
          <span>Global payouts</span>
          <span>Banking rails</span>
          <span>Business cards</span>
          <span>Compliance</span>
        </div>
      </section>

      <section className="section shell" id="products">
        <div className="sectionHead">
          <p className="eyebrow">Products</p>
          <h2>One operating layer for moving money globally.</h2>
          <p>
            One onboarding covers every product. A dedicated manager walks you through each
            step in plain language, and pricing is tailored to how your business actually moves money.
          </p>
        </div>
        <div className="productGrid">
          {products.map((product, index) => (
            <article className="productCard" key={product.title}>
              <div className={`productVisual ${product.visual}`}>
                <span className="visualIndex">0{index + 1}</span>
                <div className="visualCore" />
              </div>
              <p className="eyebrow">{product.eyebrow}</p>
              <h3>{product.title}</h3>
              <p>{product.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="coverage" id="coverage">
        <div className="shell">
          <div className="sectionHead light">
            <p className="eyebrow">International transfers</p>
            <h2>Move money across the corridors where business happens.</h2>
            <p>
              Send and receive money across the corridors we operate, with competitive exchange
              rates, real-time settlement and end-to-end traceability.
            </p>
          </div>
          <div className="regionGrid">
            {regions.map((region) => (
              <article className="region" key={region.name}>
                <h3>{region.name}</h3>
                <div className="countryList">
                  {region.countries.map((country) => <span key={country}>{country}</span>)}
                </div>
              </article>
            ))}
          </div>
          <a className="button buttonLight" href="#contact">Start sending <Arrow /></a>
        </div>
      </section>

      <section className="section shell" id="faq">
        <div className="faqLayout">
          <div className="faqIntro">
            <p className="eyebrow">FAQ</p>
            <h2>Questions, answered.</h2>
            <p>Have another question?</p>
            <a className="textLink" href="#contact">Get in touch <Arrow /></a>
          </div>
          <div className="faqList">
            {faqs.map((faq, index) => (
              <details key={faq.q} open={index === 0}>
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contactSection" id="contact">
        <div className="shell contactGrid">
          <div>
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Build your next financial product on Pangea.</h2>
          </div>
          <div className="contactCard">
            <p className="mini">30 min intro call</p>
            <h3>Tell us what you&apos;re building.</h3>
            <p>We&apos;ll map the right rails, partners and operating model for your use case.</p>
            <a className="button buttonLight" href="mailto:contact@pangealabs.space">Book a call <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="closing shell">
        <p className="eyebrow">Let&apos;s work together</p>
        <h2>Have a use case in mind?</h2>
        <p>We&apos;d love to hear about it. Let&apos;s build something exceptional together.</p>
        <a className="button" href="mailto:contact@pangealabs.space">Get in touch <Arrow /></a>
      </section>

      <footer className="footer shell">
        <a className="brand" href="#top"><span className="brandMark">P</span><span>Pangea Labs</span></a>
        <p>Global financial infrastructure for modern businesses.</p>
        <a className="textLink" href="https://www.linkedin.com/company/pangea-labs/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
      </footer>
    </main>
  );
}
