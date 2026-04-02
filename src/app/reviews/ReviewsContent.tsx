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
  BsStar,
  BsStarFill,
  BsGoogle,
  BsCreditCard2Back,
  BsEnvelope,
  BsReplyAll,
  BsBarChartLine,
  BsShieldCheck,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const brand = siteDetails.siteName;

const features = [
  {
    icon: BsCreditCard2Back,
    title: "NFC Review Kaarten",
    desc: "Fysieke kaarten met NFC-chip. Klant houdt zijn telefoon erbij en landt direct op jouw Google reviewpagina. Geen gedoe met linkjes of QR-codes.",
  },
  {
    icon: BsEnvelope,
    title: "Automatische Review Flows",
    desc: "Na elke afspraak of klus ontvangt de klant automatisch een vriendelijk review-verzoek via WhatsApp of SMS. Timing is alles — en wij hebben het geoptimaliseerd.",
  },
  {
    icon: BsGoogle,
    title: "Google Business Integratie",
    desc: "Reviews verschijnen direct op jouw Google Bedrijfsprofiel. Meer reviews = hogere lokale ranking = meer klanten die jou vinden.",
  },
  {
    icon: BsReplyAll,
    title: "Response Management",
    desc: "Wij helpen met het professioneel beantwoorden van reviews — positief en negatief. Een goed antwoord op een negatieve review kan het verschil maken.",
  },
  {
    icon: BsBarChartLine,
    title: "Review Dashboard",
    desc: "Real-time overzicht van al je reviews, gemiddelde score en trends. Zie in een oogopslag hoe je online reputatie ervoor staat.",
  },
  {
    icon: BsShieldCheck,
    title: "Negatieve Review Filter",
    desc: "Onze flow vraagt eerst of de klant tevreden is. Bij een lage score word je op de hoogte gesteld zodat je het kunt oplossen voordat er een negatieve review komt.",
  },
];

const steps = [
  {
    number: "01",
    title: "Setup & Integratie",
    desc: "We koppelen jouw Google Bedrijfsprofiel, configureren de review flows en ontwerpen je NFC-kaarten met jouw branding.",
  },
  {
    number: "02",
    title: "Automatische Verzoeken",
    desc: "Na elke klus of afspraak ontvangt de klant automatisch een review-verzoek. De timing en boodschap zijn geoptimaliseerd voor maximale respons.",
  },
  {
    number: "03",
    title: "Reviews & Reputatie Groeien",
    desc: "Je reviews groeien gestaag. Wij monitoren, reageren en optimaliseren — jij geniet van een betere online reputatie en meer klanten.",
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "Te weinig reviews",
    desc: "Je levert goed werk, maar klanten laten zelden een review achter. Ondertussen heeft je concurrent 150+ reviews en trekt alle nieuwe klanten aan.",
  },
  {
    icon: BsClockHistory,
    title: "Vergeten om te vragen",
    desc: "Na een drukke werkdag vergeet je simpelweg om klanten om een review te vragen. En als je het wel doet, is het moment al voorbij.",
  },
  {
    icon: BsQuestionCircle,
    title: "Negatieve reviews zonder plan",
    desc: "Een enkele negatieve review kan je score onderuit halen. Zonder strategie voor response management blijft die review bovenaan staan.",
  },
];

const faqs = [
  {
    q: "Hoe werken NFC review kaarten?",
    a: "De klant houdt zijn telefoon tegen de NFC-kaart en landt direct op jouw Google reviewpagina. Geen app nodig, geen QR-code scannen — het werkt automatisch op elke moderne smartphone.",
  },
  {
    q: "Hoeveel reviews kan ik verwachten?",
    a: "Dat verschilt per branche en klantenvolume. Gemiddeld zien onze klanten een stijging van 300-500% in het aantal reviews binnen de eerste 3 maanden na implementatie.",
  },
  {
    q: "Werkt dit ook met andere platforms dan Google?",
    a: "Ja. Hoewel Google Reviews de meeste impact hebben op lokale vindbaarheid, kunnen we ook flows instellen voor Trustpilot, Facebook en branche-specifieke platforms.",
  },
  {
    q: "Wat als ik een negatieve review krijg?",
    a: "Onze flow filtert ontevreden klanten er vooraf uit. Bij een lage score krijg jij een melding zodat je het kunt oplossen. Komt er toch een negatieve review? Wij helpen met een professioneel antwoord.",
  },
  {
    q: "Moet ik zelf review-verzoeken versturen?",
    a: "Nee. De hele flow is geautomatiseerd. Na elke afspraak of klus gaat er automatisch een bericht naar de klant. Jij hoeft er niets voor te doen.",
  },
  {
    q: "Wat kost review management?",
    a: "Review management is beschikbaar als onderdeel van onze managed service of als los review pakket. Bekijk onze review-pakket pagina of tarieven voor details.",
  },
];

export default function ReviewsContent() {
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
            Review Management
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Google Reviews Automatiseren voor je Bedrijf
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8"
          >
            Meer 5-sterren reviews zonder moeite. StudioLee automatiseert het hele
            proces: NFC-kaarten, WhatsApp-flows en slimme opvolging. Jij levert
            goed werk — wij zorgen dat klanten het delen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/review-pakket"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsStarFill /> Bekijk Review Pakketten
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

      {/* Waarom reviews belangrijk zijn */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Waarom Google reviews belangrijk zijn
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Google reviews zijn een van de belangrijkste factoren voor lokale
              vindbaarheid. Bedrijven met meer en betere reviews verschijnen hoger in
              Google Maps en lokale zoekresultaten. Maar het gaat verder dan SEO:
              93% van de consumenten leest online reviews voordat ze een bedrijf kiezen.
              Reviews zijn het digitale equivalent van mond-tot-mondreclame.
            </p>
            <p>
              Het probleem? De meeste ondernemers leveren uitstekend werk, maar vergeten
              om reviews te vragen. Of ze vragen het op het verkeerde moment, op de
              verkeerde manier. Bij StudioLee automatiseren we het hele proces. Na elke
              klus of afspraak ontvangt de klant een vriendelijk verzoek via WhatsApp.
              Met NFC-kaarten maak je het nog makkelijker: klant houdt zijn telefoon
              erbij en landt direct op je Google reviewpagina. Wij doen dit voor bedrijven
              in 17+ branches en weten precies welke aanpak het beste werkt per sector.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Reviews verzamelen is lastig als je er niet actief mee bezig bent.
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
            Van nul naar een stroom van 5-sterren reviews in 3 stappen.
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
            Een compleet review management systeem dat automatisch werkt.
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
            Zelf doen vs. {brand}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]">
              <h3 className="text-lg font-bold mb-4">Zelf Reviews Verzamelen</h3>
              <ul className="space-y-3">
                {[
                  "Vergeten om te vragen na elke klus",
                  "Handmatig links sturen via WhatsApp",
                  "Geen systeem voor opvolging",
                  "Ontevreden klanten posten direct publiekelijk",
                  "Geen inzicht in reviewtrends",
                  "Kosten voor NFC-kaarten onduidelijk",
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
              <h3 className="text-lg font-bold mb-4 mt-1">{brand} Review Management</h3>
              <ul className="space-y-3">
                {[
                  "Automatische review-verzoeken na elke klus",
                  "NFC-kaarten met jouw branding",
                  "Negatieve review filter vooraf",
                  "Professioneel response management",
                  "Real-time review dashboard",
                  "300-500% meer reviews in 3 maanden",
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om meer reviews te verzamelen?</h2>
          <p className="text-foreground-accent mb-8">
            Bekijk onze review pakketten of plan een gratis gesprek. We laten zien
            hoe het systeem werkt en wat het kan opleveren voor jouw bedrijf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/review-pakket"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Bekijk Review Pakketten
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
