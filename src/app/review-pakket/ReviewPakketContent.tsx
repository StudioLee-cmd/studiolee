"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsWhatsapp,
  BsCalendar3,
  BsXCircle,
  BsStar,
  BsStarFill,
  BsBox,
  BsGear,
  BsGraphUp,
  BsCreditCard2Back,
  BsArrowRight,
  BsShieldCheck,
  BsQuestionCircle,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const brand = siteDetails.siteName;

const packages = [
  {
    name: "Starter",
    price: "149",
    period: "eenmalig",
    description: "Perfect om te starten met NFC review kaarten",
    features: [
      "2x NFC Review Kaart (jouw branding)",
      "Google Business koppeling",
      "Review landingspagina",
      "Handleiding & tips",
      "Eenmalige setup",
    ],
    cta: "Bestel Starter",
    highlight: false,
  },
  {
    name: "Professional",
    price: "349",
    period: "eenmalig + €29/mnd",
    description: "NFC kaarten + geautomatiseerde review flows",
    features: [
      "5x NFC Review Kaart (jouw branding)",
      "1x NFC Review Standaard (voor balie/tafel)",
      "Google Business koppeling",
      "Automatische WhatsApp review flows",
      "Negatieve review filter",
      "Review dashboard",
      "Maandelijkse rapportage",
    ],
    cta: "Bestel Professional",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "599",
    period: "eenmalig + €49/mnd",
    description: "Alles uit Professional + response management",
    features: [
      "10x NFC Review Kaart (jouw branding)",
      "2x NFC Review Standaard",
      "Google Business koppeling",
      "Automatische WhatsApp + SMS flows",
      "Negatieve review filter",
      "Review dashboard + analytics",
      "Response management (wij reageren)",
      "Prioriteit support",
      "Kwartaalstrategie call",
    ],
    cta: "Bestel Enterprise",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Wat zit er in een NFC review kaart?",
    a: "Een professioneel ontworpen kaart met NFC-chip en QR-code met jouw branding. De klant houdt zijn telefoon erbij en landt direct op jouw Google reviewpagina. Werkt op elke moderne smartphone zonder app.",
  },
  {
    q: "Hoe snel ontvang ik mijn pakket?",
    a: "Na bestelling ontvang je binnen 24 uur een mail om je logo en wensen te delen. Het design is binnen 5-7 werkdagen klaar. Na akkoord volgt productie en verzending (circa 1 week).",
  },
  {
    q: "Kan ik later upgraden?",
    a: "Ja, je kunt altijd upgraden van Starter naar Professional of Enterprise. Je betaalt het verschil in eenmalige kosten en start direct met de extra functies.",
  },
  {
    q: "Hoe werkt de automatische review flow?",
    a: "Wij koppelen het systeem aan je klantenbestand of afsprakenagenda. Na elke afspraak ontvangt de klant automatisch een vriendelijk review-verzoek via WhatsApp. De timing is geoptimaliseerd voor maximale respons.",
  },
  {
    q: "Wat als een klant niet tevreden is?",
    a: "Onze flow vraagt eerst of de klant tevreden is. Bij een lage score krijg jij een melding zodat je het persoonlijk kunt oplossen, voordat de klant een publieke review plaatst.",
  },
  {
    q: "Zijn de prijzen exclusief BTW?",
    a: "Ja, alle genoemde prijzen zijn exclusief 21% BTW.",
  },
];

const processSteps = [
  {
    number: "1",
    title: "Bestel of Bel",
    desc: "Kies een pakket of plan eerst een gratis adviesgesprek.",
  },
  {
    number: "2",
    title: "Upload je Logo",
    desc: "Je ontvangt een mail om je logo en huisstijl te delen.",
  },
  {
    number: "3",
    title: "Design & Goedkeuring",
    desc: "Binnen 5-7 werkdagen ontvang je professionele ontwerpen ter goedkeuring.",
  },
  {
    number: "4",
    title: "Productie & Setup",
    desc: "Na akkoord starten we productie van de kaarten en configureren we de automatisering.",
  },
  {
    number: "5",
    title: "Reviews Stromen Binnen",
    desc: "Gebruik de kaarten, de flows draaien automatisch — en je reviews groeien.",
  },
];

export default function ReviewPakketContent() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Review Pakket
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Review Pakket: Meer 5-Sterren Reviews voor je Bedrijf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8"
          >
            NFC-kaarten met jouw branding, geautomatiseerde review flows en een
            compleet dashboard. Kies het pakket dat past bij jouw bedrijf en
            begin vandaag nog met het verzamelen van reviews.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendly.com/tim-studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Gratis Adviesgesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Kies jouw pakket</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Alle prijzen zijn exclusief BTW. Geen verborgen kosten.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-6 ${
                  pkg.highlight
                    ? "border-2 border-primary bg-[var(--card-background)] relative"
                    : "border border-[var(--card-border)] bg-[var(--card-background)]"
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-primary text-black">
                    Meest Gekozen
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1 mt-1">{pkg.name}</h3>
                <p className="text-foreground-accent text-sm mb-4">{pkg.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">€{pkg.price}</span>
                  <span className="text-foreground-accent text-sm ml-1">{pkg.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <BsCheck2Circle className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/tim-studiolee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                    pkg.highlight
                      ? "bg-primary text-black hover:bg-primary-accent"
                      : "border border-foreground/20 hover:bg-foreground/5"
                  }`}
                >
                  {pkg.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Van bestelling tot reviews</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Het hele proces van A tot Z — wij regelen het.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-200 dark:bg-neutral-700" />
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 border-4 border-white dark:border-neutral-900 relative z-10">
                  <span className="text-lg font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                <p className="text-foreground-accent text-xs max-w-[140px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat zit erin */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat zit er in elk pakket?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Elk review pakket bevat fysieke NFC-kaarten met jouw logo en huisstijl.
              De kaarten bevatten een NFC-chip en een QR-code die klanten direct naar
              jouw Google reviewpagina brengen. Geen app nodig, geen ingewikkeld proces
              — de klant houdt zijn telefoon erbij en kan direct een review plaatsen.
            </p>
            <p>
              Vanaf het Professional pakket krijg je daar geautomatiseerde review flows
              bij. Dit betekent dat na elke afspraak of klus automatisch een review-verzoek
              wordt verstuurd via WhatsApp. De timing is geoptimaliseerd op basis van onze
              ervaring met honderden bedrijven. En met de negatieve review filter wordt een
              ontevreden klant eerst naar jou doorverwezen, zodat je het kunt oplossen
              voordat het een publieke review wordt.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[var(--card-border)] rounded-xl">
                <summary className="cursor-pointer p-5 font-semibold text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-foreground-accent">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Twijfel je welk pakket het beste is?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis adviesgesprek van 15 minuten. We kijken samen welk pakket
            het beste past bij jouw situatie en hoeveel reviews je kunt verwachten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/tim-studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all inline-flex items-center justify-center gap-2"
            >
              <BsCalendar3 /> Plan een Gratis Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-foreground-accent mt-6">
            Of bekijk eerst onze{" "}
            <a href="/reviews" className="text-primary hover:underline">review management</a>
            {" "}pagina of{" "}
            <a href="/tarieven" className="text-primary hover:underline">tarieven</a>
          </p>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
