"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsWhatsapp,
  BsCalendar3,
  BsXCircle,
  BsClockHistory,
  BsQuestionCircle,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsCalendarWeek,
  BsGraphUp,
  BsLightning,
  BsImages,
  BsCameraVideo,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const brand = siteDetails.siteName;

const features = [
  {
    icon: BsImages,
    title: "AI Content Generatie",
    desc: "Posts, afbeeldingen en video\u2019s worden automatisch gegenereerd met AI. Altijd on-brand, altijd relevant voor jouw doelgroep.",
  },
  {
    icon: BsCalendarWeek,
    title: "Multi-platform Scheduling",
    desc: "Instagram, LinkedIn, Facebook, TikTok en YouTube — alles gepland vanuit een dashboard, automatisch gepost op het juiste moment.",
  },
  {
    icon: BsGraphUp,
    title: "Analytics & Rapportage",
    desc: "Inzicht in bereik, engagement en groei. Maandelijkse rapportages die laten zien wat werkt en wat niet.",
  },
  {
    icon: BsCameraVideo,
    title: "Video Content",
    desc: "Korte video\u2019s en Reels gegenereerd met AI. Van talking-head clips tot product showcases — zonder duur productieteam.",
  },
  {
    icon: BsLightning,
    title: "Content Strategie",
    desc: "We maken een contentplan gebaseerd op jouw branche, doelgroep en doelen. Geen willekeurige posts, maar een strategie die werkt.",
  },
  {
    icon: BsInstagram,
    title: "Platform Expertise",
    desc: "Elk platform heeft zijn eigen regels. We optimaliseren content per kanaal: carrousels voor Instagram, thought leadership voor LinkedIn, shorts voor TikTok.",
  },
];

const steps = [
  {
    number: "01",
    title: "Strategie & Planning",
    desc: "We bespreken jouw merk, doelgroep en doelen. Hieruit volgt een contentplan met de juiste mix van platformen en formats.",
  },
  {
    number: "02",
    title: "Content Productie",
    desc: "Wij maken posts, afbeeldingen en video\u2019s met AI en ons design team. Jij keurt goed of geeft feedback via WhatsApp.",
  },
  {
    number: "03",
    title: "Scheduling & Optimalisatie",
    desc: "Content wordt automatisch gepost op de optimale tijden. Wij analyseren resultaten en optimaliseren continu.",
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "Geen tijd voor social media",
    desc: "Je weet dat je actief moet zijn op social media, maar tussen klanten, administratie en je werk is er simpelweg geen tijd voor.",
  },
  {
    icon: BsClockHistory,
    title: "Inconsistent posten",
    desc: "De ene week drie posts, dan twee weken stilte. Algoritmes straffen inconsistentie af en je bereik daalt steeds verder.",
  },
  {
    icon: BsQuestionCircle,
    title: "Geen idee wat werkt",
    desc: "Wat moet je posten? Hoe vaak? Op welk platform? Zonder strategie voel je dat je schreeuwt in de leegte.",
  },
];

const faqs = [
  {
    q: "Op welke platformen posten jullie?",
    a: "Instagram, LinkedIn, Facebook, TikTok en YouTube. We kiezen de platformen die het beste passen bij jouw doelgroep en branche.",
  },
  {
    q: "Hoe vaak wordt er gepost?",
    a: "Dat hangt af van het pakket en de strategie. Gemiddeld 3-5 posts per week, met een mix van afbeeldingen, video\u2019s en tekst.",
  },
  {
    q: "Moet ik zelf content aanleveren?",
    a: "Nee. Wij genereren alle content met AI en ons designteam. Als je eigen foto\u2019s of video\u2019s hebt, verwerken we die graag — maar het is niet nodig.",
  },
  {
    q: "Kan ik posts goedkeuren voor ze live gaan?",
    a: "Ja. Je ontvangt een preview via WhatsApp of e-mail en geeft akkoord met een simpel bericht. Wij posten pas na jouw goedkeuring.",
  },
  {
    q: "Werkt dit ook voor B2B bedrijven?",
    a: "Absoluut. LinkedIn is een van onze sterkste kanalen. We maken thought leadership content, case studies en professionele posts die passen bij B2B doelgroepen.",
  },
  {
    q: "Wat kost social media uitbesteden?",
    a: "Social media management zit inbegrepen in onze managed service. Bekijk onze tarieven voor het volledige overzicht.",
  },
];

export default function SocialMediaContent() {
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
            Social Media voor MKB
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Social Media Automatisering voor Ondernemers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8"
          >
            Professionele social media zonder dat je er tijd aan kwijt bent. StudioLee
            regelt content, scheduling en analytics — jij focust op je bedrijf.
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

      {/* Waarom social media? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Waarom is social media belangrijk?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Social media is voor veel MKB-ondernemers een bron van frustratie. Je weet dat
              het belangrijk is — je klanten zitten op Instagram, LinkedIn en TikTok — maar
              het consistent bijhouden kost te veel tijd. En als je het niet consistent doet,
              werkt het niet.
            </p>
            <p>
              Bij StudioLee nemen we het hele proces uit handen. Van strategie tot content
              creatie, van scheduling tot analytics. Met AI genereren we on-brand content
              die past bij jouw doelgroep, en met slimme scheduling tools zorgen we dat
              alles op het juiste moment op het juiste platform verschijnt. Jij hoeft alleen
              maar akkoord te geven — wij doen de rest. En met onze ervaring in 17+ branches
              weten we precies welke content werkt voor jouw type bedrijf.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Social media bijhouden als ondernemer is een uitdaging. Herkenbaar?
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
            Van nul naar een professionele social media aanwezigheid in 3 stappen.
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
            Een compleet social media pakket — van strategie tot uitvoering.
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
            Social media bureau vs. {brand}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]">
              <h3 className="text-lg font-bold mb-4">Traditioneel Social Media Bureau</h3>
              <ul className="space-y-3">
                {[
                  "\u20ac800 - \u20ac2.500 per maand (alleen social)",
                  "Handmatig content maken",
                  "Beperkt tot 1-2 platformen",
                  "Geen AI-tools",
                  "Aparte kosten voor video",
                  "Lange contracten",
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
                  "Social media inbegrepen in managed service",
                  "AI-gedreven content generatie",
                  "Alle platformen vanuit een dashboard",
                  "Video content inbegrepen",
                  "Maandelijkse rapportages",
                  "Flexibel, geen langlopende contracten",
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om social media uit handen te geven?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis gesprek van 15 minuten. We bespreken welke platformen
            het beste passen bij jouw bedrijf en hoe we je zichtbaarheid vergroten.
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
