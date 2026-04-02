"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsArrowRight,
  BsWhatsapp,
  BsCalendar3,
  BsChatDots,
  BsGlobe,
  BsLightning,
  BsPeople,
  BsClockHistory,
  BsQuestionCircle,
  BsXCircle,
  BsShieldCheck,
  BsGraphUp,
  BsGearWideConnected,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const brand = siteDetails.siteName;

const features = [
  {
    icon: BsClockHistory,
    title: "24/7 beschikbaar",
    desc: "Jouw chatbot slaapt nooit. Klanten krijgen direct antwoord, ook om 23:00 of op zondag — in elke branche.",
  },
  {
    icon: BsChatDots,
    title: "Getraind op jouw bedrijf",
    desc: "De chatbot kent jouw diensten, prijzen, openingstijden en specialisaties. Geen generieke antwoorden, maar maatwerk.",
  },
  {
    icon: BsWhatsapp,
    title: "WhatsApp integratie",
    desc: "Leads en gesprekken worden automatisch doorgestuurd naar jouw WhatsApp, zodat je niets mist.",
  },
  {
    icon: BsPeople,
    title: "Lead kwalificatie",
    desc: "De chatbot stelt slimme vragen en filtert serieuze klanten van vrijblijvende bezoekers — zodat jij alleen warme leads ontvangt.",
  },
  {
    icon: BsCalendar3,
    title: "Afspraken boeken",
    desc: "Klanten plannen direct een afspraak via de chatbot. Geen heen-en-weer ge-mail of telefoon nodig.",
  },
  {
    icon: BsGlobe,
    title: "Meertalig",
    desc: "Nederlands, Engels, Duits en meer. Perfect voor bedrijven met internationale klanten of in toeristische gebieden.",
  },
  {
    icon: BsShieldCheck,
    title: "GDPR-compliant",
    desc: "Volledig AVG-proof. Klantdata wordt veilig verwerkt en opgeslagen volgens de Europese privacywetgeving.",
  },
  {
    icon: BsGearWideConnected,
    title: "Branche-specifiek",
    desc: "Wij hebben chatbots gebouwd voor kappers, loodgieters, klinieken, makelaars en meer. Elk systeem is afgestemd op de branche.",
  },
];

const steps = [
  {
    number: "01",
    title: "Intakegesprek (15 min)",
    desc: "We bespreken jouw bedrijf, diensten, veelgestelde vragen en tone of voice. Jij vertelt, wij luisteren en bouwen.",
  },
  {
    number: "02",
    title: "Wij bouwen jouw chatbot",
    desc: "We trainen de AI op jouw bedrijf en integreren de chatbot op je website. Binnen 1-2 werkdagen live.",
  },
  {
    number: "03",
    title: "Jij ontvangt leads via WhatsApp",
    desc: "Elke lead, afspraak of vraag wordt direct naar jou doorgestuurd. Wij monitoren, optimaliseren en schalen.",
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "Leads kwijt na sluitingstijd",
    desc: "Klanten bezoeken je website \u2019s avonds of in het weekend. Zonder chatbot horen ze pas de volgende werkdag iets — en hebben ze al een concurrent gebeld.",
  },
  {
    icon: BsClockHistory,
    title: "Trage reactietijd kost klanten",
    desc: "78% van de leads kiest voor het bedrijf dat als eerste reageert. Terwijl jij bezig bent met je werk, lopen kansen weg.",
  },
  {
    icon: BsQuestionCircle,
    title: "Steeds dezelfde vragen beantwoorden",
    desc: "\u201cWat kost het?\u201d, \u201cHebben jullie plek?\u201d, \u201cHoe maak ik een afspraak?\u201d — dagelijks dezelfde vragen die kostbare tijd vreten.",
  },
];

const faqs = [
  {
    q: "Hoe snel is de chatbot actief?",
    a: "Binnen 1-2 werkdagen. Wij bouwen en trainen de chatbot, plaatsen hem op je website en testen alles voordat hij live gaat.",
  },
  {
    q: "Moet ik zelf de chatbot trainen of bijhouden?",
    a: "Nee. Wij trainen de chatbot op jouw diensten, prijzen en veelgestelde vragen. Als er iets verandert, passen wij het aan — dat zit standaard in onze managed service.",
  },
  {
    q: "Wat als de chatbot een vraag niet kan beantwoorden?",
    a: "Dan stuurt hij de vraag direct door naar jou via WhatsApp of e-mail. De klant krijgt ondertussen een melding dat je zo snel mogelijk reageert.",
  },
  {
    q: "Werkt de chatbot ook op mobiel?",
    a: "Ja, de chatbot werkt op telefoon, tablet en desktop. De ervaring is volledig responsive en geoptimaliseerd voor mobiel gebruik.",
  },
  {
    q: "Voor welke branches bouwen jullie chatbots?",
    a: "We hebben ervaring met 17+ branches: kappers, loodgieters, schilders, klinieken, makelaars, rijscholen, dierenartsen en meer. Elke chatbot wordt specifiek afgestemd op de branche.",
  },
  {
    q: "Wat kost een AI chatbot bij StudioLee?",
    a: "Een AI chatbot zit inbegrepen in onze managed service. Je betaalt geen apart bedrag voor de chatbot — het is onderdeel van het totaalpakket. Bekijk onze tarieven voor de details.",
  },
];

export default function ChatbotContent() {
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
            Chatbot voor Bedrijven
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            AI Chatbot voor je Bedrijf: 24/7 Klanten Opvangen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8"
          >
            StudioLee bouwt slimme AI chatbots voor 17+ branches. Jouw website bezoekers
            worden direct geholpen, vragen beantwoord en afspraken ingepland — ook als jij
            niet beschikbaar bent. Geen gemiste leads meer.
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

      {/* Wat is een AI Chatbot? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat is een AI chatbot?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Een AI chatbot is een slimme digitale assistent die op jouw website draait
              en bezoekers direct helpt — dag en nacht. Anders dan een simpel contactformulier
              voert de chatbot echte gesprekken, beantwoordt vragen over jouw diensten en
              plant afspraken in.
            </p>
            <p>
              Bij StudioLee bouwen we chatbots die specifiek zijn afgestemd op jouw branche.
              Of je nu kapper, loodgieter, makelaar of dierenarts bent — de chatbot kent jouw
              diensten, prijzen en werkwijze. Elke lead wordt automatisch doorgestuurd via
              WhatsApp, zodat je altijd op de hoogte bent zonder continu achter je laptop
              te hoeven zitten. Wij hebben dit inmiddels voor meer dan 17 verschillende
              branches gedaan en weten precies welke vragen klanten stellen in jouw sector.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            De meeste MKB-ondernemers lopen tegen dezelfde problemen aan. Herkenbaar?
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
            In 3 stappen naar een AI chatbot die dag en nacht klanten opvangt.
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
            Alles wat je nodig hebt om 24/7 klanten op te vangen — gebouwd door een team met ervaring in 17+ branches.
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

      {/* Waarom StudioLee? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Waarom ondernemers kiezen voor StudioLee
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Er zijn genoeg tools waarmee je zelf een chatbot kunt bouwen. Maar een chatbot
              die echt converteert — die de juiste vragen stelt, leads kwalificeert en naadloos
              aansluit bij jouw bedrijf — dat vereist kennis van zowel AI als jouw branche.
              Dat is precies waar StudioLee het verschil maakt.
            </p>
            <p>
              Wij hebben inmiddels chatbots gebouwd voor kappers, loodgieters, schilders,
              klinieken, makelaars, dierenartsen, rijscholen en nog veel meer. Elke branche
              heeft unieke veelgestelde vragen, een eigen tone of voice en specifieke
              klantverwachtingen. Die ervaring zit ingebakken in elk systeem dat we bouwen.
              En het mooiste? Jij hoeft er bijna niets voor te doen. Wij bouwen, monitoren
              en optimaliseren — jij ontvangt de leads.
            </p>
          </div>
        </div>
      </section>

      {/* Bureau Vergelijking */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Traditioneel bureau vs. {brand}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 text-white text-center mb-8"
          >
            <p className="text-sm text-gray-400 mb-2">Traditioneel marketing bureau</p>
            <p className="text-2xl md:text-3xl font-bold mb-2">
              <span className="line-through text-gray-500">\u20ac1.500 \u2013 \u20ac3.000/mnd</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">Chatbot als losse add-on, beperkte support, geen branche-expertise</p>
            <div className="w-16 h-px bg-gray-600 mx-auto mb-4"></div>
            <p className="text-primary font-semibold text-lg">{brand}</p>
            <p className="text-3xl md:text-4xl font-bold">Managed service \u2014 chatbot inbegrepen</p>
            <p className="text-sm text-gray-300 mt-2">AI chatbot standaard in elk pakket. Inclusief branche-specifieke training en doorlopende optimalisatie.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]">
              <h3 className="text-lg font-bold mb-4">Traditioneel Bureau</h3>
              <ul className="space-y-3">
                {[
                  "\u20ac1.500 - \u20ac3.000 per maand",
                  "Wekenlange oplevering",
                  "Chatbot als losse add-on (meerprijs)",
                  "Generieke antwoorden, niet branche-specifiek",
                  "Beperkte support buiten kantooruren",
                  "Geen AI-kennis in huis",
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
                  "Chatbot standaard inbegrepen in je pakket",
                  "Live binnen 1-2 werkdagen",
                  "Getraind op jouw specifieke branche",
                  "24/7 systeem, altijd bereikbaar",
                  "Managed service \u2014 wij doen het werk",
                  "Gebouwd met de nieuwste AI-technologie",
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om 24/7 klanten op te vangen?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis strategiegesprek van 15 minuten. We laten zien hoe een AI chatbot
            jouw bedrijf kan laten groeien — zonder extra personeel.
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
