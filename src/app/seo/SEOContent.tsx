"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsWhatsapp,
  BsCalendar3,
  BsSearch,
  BsGraphUp,
  BsFileEarmarkText,
  BsGear,
  BsXCircle,
  BsClockHistory,
  BsQuestionCircle,
  BsLightning,
  BsPeople,
  BsGlobe,
  BsBarChartLine,
  BsRobot,
  BsLink45Deg,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const brand = siteDetails.siteName;

const features = [
  {
    icon: BsSearch,
    title: "Keyword Research via Ahrefs",
    desc: "Professioneel zoekwoordonderzoek met Ahrefs. We vinden de zoektermen die jouw doelgroep gebruikt en waar de concurrentie laag genoeg is om snel te scoren.",
  },
  {
    icon: BsFileEarmarkText,
    title: "AI-gedreven Content",
    desc: "Dagelijks SEO-artikelen die zowel voor Google als voor lezers zijn geschreven. Geen dunne teksten, maar onderbouwde content van 800+ woorden.",
  },
  {
    icon: BsGear,
    title: "Technische SEO",
    desc: "Site speed, Core Web Vitals, structured data, canonical tags — wij zorgen dat de technische basis op orde is.",
  },
  {
    icon: BsRobot,
    title: "AEO (AI Engine Optimization)",
    desc: "Gevonden worden in ChatGPT, Perplexity en Google AI Overviews. De volgende generatie vindbaarheid, en wij zijn er nu al mee bezig.",
  },
  {
    icon: BsLink45Deg,
    title: "Linkbuilding",
    desc: "Kwalitatieve backlinks via handmatige outreach. Geen spam, maar relevante links die jouw domeinautoriteit opbouwen.",
  },
  {
    icon: BsBarChartLine,
    title: "Rapportage & Inzicht",
    desc: "Maandelijkse rapportages met rankings, traffic en conversies. Je ziet precies wat het oplevert — geen zwarte doos.",
  },
];

const steps = [
  {
    number: "01",
    title: "Analyse & Strategie",
    desc: "We analyseren jouw huidige vindbaarheid, concurrenten en zoekwoordkansen met Ahrefs. Hieruit volgt een concrete SEO-strategie.",
  },
  {
    number: "02",
    title: "Content & Optimalisatie",
    desc: "We publiceren dagelijks SEO-artikelen, optimaliseren bestaande pagina's en bouwen de technische basis op.",
  },
  {
    number: "03",
    title: "Groei & Schaling",
    desc: "Rankings stijgen, traffic groeit, leads komen binnen. Wij monitoren en schalen op wat werkt.",
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "Onzichtbaar op Google",
    desc: "Je hebt een mooie website, maar niemand vindt je. De concurrent staat bovenaan en jij staat op pagina 3 — of verder.",
  },
  {
    icon: BsClockHistory,
    title: "Geen tijd voor content",
    desc: "Je weet dat bloggen en content maken belangrijk is, maar wie heeft daar tijd voor als je een bedrijf runt?",
  },
  {
    icon: BsQuestionCircle,
    title: "Geen idee waar te beginnen",
    desc: "SEO voelt als een zwarte doos. Welke zoekwoorden? Wat is technische SEO? Hoe word je gevonden in ChatGPT? Te veel vragen, te weinig antwoorden.",
  },
];

const faqs = [
  {
    q: "Hoe snel zie ik resultaat van SEO?",
    a: "SEO is een lange-termijnstrategie. Eerste verbeteringen zijn vaak binnen 4-8 weken zichtbaar, maar de echte groei komt na 3-6 maanden. Wij publiceren dagelijks content om dat proces te versnellen.",
  },
  {
    q: "Wat is het verschil tussen SEO en AEO?",
    a: "SEO (Search Engine Optimization) richt zich op Google. AEO (AI Engine Optimization) richt zich op AI-zoekmachines zoals ChatGPT, Perplexity en Google AI Overviews. Wij optimaliseren voor beide, zodat je overal gevonden wordt.",
  },
  {
    q: "Moet ik zelf content schrijven?",
    a: "Nee. Wij schrijven en publiceren alle content voor je. Je hoeft alleen een intakegesprek van 15 minuten te doen, zodat wij jouw bedrijf en branche goed begrijpen.",
  },
  {
    q: "Werkt SEO ook voor kleine bedrijven?",
    a: "Juist voor kleine bedrijven is SEO krachtig. Lokale SEO zorgt ervoor dat je gevonden wordt door mensen in jouw regio die actief naar jouw diensten zoeken. En organisch verkeer kost geen advertentiebudget.",
  },
  {
    q: "Welke tools gebruiken jullie?",
    a: "Wij werken met Ahrefs voor keyword research en concurrentieanalyse, eigen AI-systemen voor contentcreatie, en Google Search Console voor monitoring. Geen giswerk, maar datagedreven beslissingen.",
  },
  {
    q: "Hoeveel kost SEO bij StudioLee?",
    a: "SEO zit inbegrepen in onze managed service. Je betaalt geen los SEO-abonnement. Bekijk onze tarieven voor het volledige overzicht.",
  },
];

export default function SEOContent() {
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
            SEO Bureau voor MKB
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            SEO & AI Vindbaarheid voor MKB-Ondernemers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8"
          >
            Gevonden worden op Google is niet genoeg meer. StudioLee maakt jouw bedrijf
            vindbaar op Google, ChatGPT en Perplexity — met dagelijkse SEO-content,
            Ahrefs-onderzoek en technische optimalisatie.
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
              <BsCalendar3 /> Plan een Gratis Gesprek
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

      {/* Wat is SEO? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat is SEO en waarom is het belangrijk?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              SEO staat voor Search Engine Optimization — het proces om jouw website hoger
              te laten scoren in Google. Wanneer iemand zoekt op "loodgieter Rotterdam"
              of "kapper in de buurt", bepaalt SEO of jouw bedrijf bovenaan staat
              of onzichtbaar blijft.
            </p>
            <p>
              Maar vindbaarheid gaat verder dan alleen Google. Steeds meer mensen gebruiken
              AI-zoekmachines zoals ChatGPT en Perplexity om lokale dienstverleners te vinden.
              Bij StudioLee optimaliseren we voor beide: traditionele SEO en AEO (AI Engine
              Optimization). Zo ben je voorbereid op het zoekgedrag van vandaag en morgen.
              Wij draaien momenteel dagelijkse SEO-campagnes voor 17 branche-specifieke
              websites en weten precies wat werkt per sector.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            De meeste MKB-ondernemers weten dat vindbaarheid belangrijk is, maar lopen vast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="text-red-600 dark:text-red-400" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-foreground-accent text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Hoe het werkt</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Van onzichtbaar naar pagina 1 — in 3 stappen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-neutral-700" />
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-neutral-900 relative z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-accent text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat krijg je? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Wat krijg je?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Een compleet SEO-pakket, dagelijks actief, zonder dat jij er iets voor hoeft te doen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground-accent text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bureau Vergelijking */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Traditioneel SEO bureau vs. {brand}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 text-white text-center mb-8"
          >
            <p className="text-sm text-gray-400 mb-2">Traditioneel SEO bureau</p>
            <p className="text-2xl md:text-3xl font-bold mb-2">
              <span className="line-through text-gray-500">€1.000 – €5.000/mnd</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">Maandrapport, een paar artikelen, weinig transparantie</p>
            <div className="w-16 h-px bg-gray-600 mx-auto mb-4"></div>
            <p className="text-primary font-semibold text-lg">{brand}</p>
            <p className="text-3xl md:text-4xl font-bold">Dagelijkse SEO — inbegrepen in managed service</p>
            <p className="text-sm text-gray-300 mt-2">Dagelijks nieuwe content, Ahrefs-onderzoek, technische SEO en AEO. Alles inbegrepen.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]">
              <h3 className="text-lg font-bold mb-4">Traditioneel SEO Bureau</h3>
              <ul className="space-y-3">
                {[
                  "€1.000 - €5.000 per maand",
                  "Maandelijks 2-4 artikelen",
                  "Geen AEO (AI-zoekmachines)",
                  "Rapporten vol jargon",
                  "Lange contracten",
                  "Geen branche-specifieke kennis",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <BsXCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-accent">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-primary rounded-2xl p-6 bg-[var(--card-background)] relative">
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-primary text-black">
                Aanbevolen
              </span>
              <h3 className="text-lg font-bold mb-4 mt-1">{brand}</h3>
              <ul className="space-y-3">
                {[
                  "SEO inbegrepen in managed service",
                  "Dagelijks nieuwe SEO-content",
                  "AEO voor ChatGPT & Perplexity",
                  "Heldere rapportages, geen jargon",
                  "Geen langlopende contracten",
                  "Ervaring in 17+ branches",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <BsCheck2Circle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
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
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om gevonden te worden?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis strategiegesprek van 15 minuten. We analyseren jouw huidige
            vindbaarheid en laten zien wat er mogelijk is.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-trial"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Gratis Proberen
            </a>
            <a
              href="https://calendly.com/tim-studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/20 px-8 py-3 rounded-xl font-semibold hover:bg-foreground/5 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsCalendar3 /> Plan een Gesprek
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
            <a href="/tarieven" className="text-primary hover:underline">tarieven</a>
            {" "}of vraag een{" "}
            <a href="/free-website" className="text-primary hover:underline">gratis website</a> aan
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
