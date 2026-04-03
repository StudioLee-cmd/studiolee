"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsWhatsapp,
  BsCalendar3,
  BsTelephone,
  BsClock,
  BsPersonCheck,
  BsGlobe,
  BsXCircle,
  BsClockHistory,
  BsQuestionCircle,
  BsJournalText,
  BsGearWideConnected,
  BsPhoneVibrate,
  BsCalendarCheck,
  BsChatLeftText,
  BsTranslate,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const brand = siteDetails.siteName;

const features = [
  {
    icon: BsTelephone,
    title: "24/7 bereikbaar",
    desc: "De AI telefonist neemt elk gesprek aan — ook buiten kantooruren, in het weekend en op feestdagen. Je mist nooit meer een oproep.",
  },
  {
    icon: BsTranslate,
    title: "Natuurlijk Nederlands",
    desc: "De AI spreekt vloeiend Nederlands met een natuurlijke stem. Bellers merken niet dat ze met AI praten — het klinkt als een echte receptionist.",
  },
  {
    icon: BsCalendarCheck,
    title: "Afspraken inplannen",
    desc: "De telefonist heeft toegang tot je agenda en plant direct afspraken in. Geen dubbele boekingen, geen heen-en-weer gebel.",
  },
  {
    icon: BsWhatsapp,
    title: "Samenvatting via WhatsApp",
    desc: "Na elk gesprek ontvang je een samenvatting via WhatsApp: wie belde, waarvoor, en of er een afspraak is ingepland.",
  },
  {
    icon: BsPersonCheck,
    title: "Slimme doorschakeling",
    desc: "Urgente oproepen worden doorgeschakeld naar jouw mobiel. Niet-urgente vragen worden afgehandeld door de AI.",
  },
  {
    icon: BsGlobe,
    title: "Meertalig",
    desc: "Nederlands, Engels, Duits, Spaans en meer. De AI schakelt automatisch over naar de taal van de beller.",
  },
  {
    icon: BsJournalText,
    title: "Gesprekslogboek",
    desc: "Alle gesprekken worden opgeslagen met transcript en samenvatting. Zo heb je altijd een volledig overzicht.",
  },
  {
    icon: BsGearWideConnected,
    title: "VAPI-integratie",
    desc: "Gebouwd op VAPI, het meest geavanceerde Voice AI platform. Betrouwbaar, snel en continu verbeterd.",
  },
];

const steps = [
  {
    number: "01",
    title: "Intake & configuratie",
    desc: "We bespreken jouw bedrijf, diensten en hoe je de telefonist wilt laten werken. Wij configureren alles — jij hoeft niets te doen.",
  },
  {
    number: "02",
    title: "Telefonist gaat live",
    desc: "We koppelen de AI telefonist aan jouw zakelijke nummer. Binnen een dag neemt de AI alle oproepen aan.",
  },
  {
    number: "03",
    title: "Jij ontvangt samenvattingen",
    desc: "Na elk gesprek krijg je een WhatsApp-samenvatting. Afspraken staan direct in je agenda. Wij monitoren en optimaliseren.",
  },
];

const painPoints = [
  {
    icon: BsPhoneVibrate,
    title: "Gemiste oproepen kosten klanten",
    desc: "Elke gemiste oproep is een potentiele klant die je concurrent belt. Uit onderzoek blijkt dat 85% van de bellers die geen gehoor krijgt, niet terugbelt.",
  },
  {
    icon: BsClockHistory,
    title: "Niet bereikbaar buiten kantooruren",
    desc: "Klanten bellen wanneer het hen uitkomt — ook om 19:00 of op zaterdag. Zonder bereikbaarheid buiten kantooruren loop je structureel omzet mis.",
  },
  {
    icon: BsQuestionCircle,
    title: "Telefonist te duur, voicemail werkt niet",
    desc: "Een fysieke receptionist kost al snel meer dan 2.000 euro per maand. Voicemail? Daar spreekt bijna niemand een bericht op in.",
  },
];

const faqs = [
  {
    q: "Klinkt de AI telefonist natuurlijk?",
    a: "Ja. De AI spreekt vloeiend Nederlands met een natuurlijke, warme stem. De meeste bellers merken niet dat ze met AI praten. We stemmen de toon af op jouw bedrijf.",
  },
  {
    q: "Kan de AI telefonist afspraken inplannen?",
    a: "Ja, de telefonist heeft directe toegang tot je agenda en plant afspraken in op basis van beschikbaarheid. Dubbele boekingen zijn uitgesloten.",
  },
  {
    q: "Wat gebeurt er bij urgente oproepen?",
    a: "Je stelt zelf in welke oproepen direct worden doorgeschakeld naar jouw mobiel. Bijvoorbeeld spoedgevallen of bestaande klanten. De rest handelt de AI af.",
  },
  {
    q: "Moet ik mijn telefoonnummer veranderen?",
    a: "Nee. De AI telefonist wordt gekoppeld aan je bestaande zakelijke nummer. Klanten merken geen verschil — behalve dat er altijd wordt opgenomen.",
  },
  {
    q: "Voor welke branches werkt dit?",
    a: "Wij hebben Voice AI ingezet voor kappers, loodgieters, klinieken, makelaars, rijscholen, dierenartsen en meer. Elk systeem wordt afgestemd op de specifieke vragen en processen van de branche.",
  },
  {
    q: "Wat kost een AI telefonist?",
    a: "De AI telefonist is beschikbaar als onderdeel van onze managed service of als losse module. Bekijk onze tarieven voor het volledige overzicht.",
  },
];

export default function VoiceAIContent() {
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
            AI Telefonist voor Bedrijven
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            AI Telefonist: Geen Oproep Meer Missen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8"
          >
            Een Nederlandstalige AI telefonist die 24/7 je telefoon beantwoordt,
            afspraken inplant en samenvattingen stuurt via WhatsApp. Gebouwd door
            StudioLee voor 17+ branches.
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

      {/* Wat is Voice AI? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat is een AI telefonist?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Een AI telefonist is een intelligente spraakassistent die jouw zakelijke
              telefoonlijn beantwoordt — net als een echte receptionist, maar dan 24/7
              beschikbaar. De AI voert natuurlijke gesprekken in het Nederlands, beantwoordt
              veelgestelde vragen, plant afspraken in en stuurt je na elk gesprek een
              samenvatting via WhatsApp.
            </p>
            <p>
              Bij StudioLee gebruiken we VAPI, het meest geavanceerde Voice AI platform
              ter wereld. Gecombineerd met onze branche-expertise betekent dit dat jouw
              AI telefonist de juiste vragen stelt, de juiste antwoorden geeft en precies
              weet wanneer een oproep moet worden doorgeschakeld. Wij hebben dit inmiddels
              ingezet voor kappers, loodgieters, klinieken, makelaars en vele andere
              branches — elk systeem is volledig afgestemd op de sector.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Bereikbaarheid is een van de grootste uitdagingen voor MKB-ondernemers.
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
            In 3 stappen naar een AI telefonist die geen oproep meer mist.
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
            Een volledige AI telefonist, afgestemd op jouw branche en bedrijfsprocessen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
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
            Traditionele oplossing vs. {brand}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]">
              <h3 className="text-lg font-bold mb-4">Traditionele Receptionist / Antwoordservice</h3>
              <ul className="space-y-3">
                {[
                  "€2.000+ per maand (fulltime)",
                  "Alleen beschikbaar tijdens kantooruren",
                  "Ziekmelding = onbereikbaar",
                  "Geen directe agenda-integratie",
                  "Beperkt schaalbaar",
                  "Geen gespreksanalyse",
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
              <h3 className="text-lg font-bold mb-4 mt-1">{brand} AI Telefonist</h3>
              <ul className="space-y-3">
                {[
                  "Fractie van de kosten",
                  "24/7 beschikbaar, 365 dagen per jaar",
                  "Nooit ziek, nooit vakantie",
                  "Directe agenda-integratie",
                  "Onbeperkt schaalbaar",
                  "Volledige gespreksanalyse en transcripts",
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om nooit meer een oproep te missen?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis gesprek van 15 minuten. We laten je horen hoe de AI telefonist
            klinkt en bespreken hoe het past bij jouw bedrijf.
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
