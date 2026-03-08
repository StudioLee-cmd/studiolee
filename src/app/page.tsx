import React from "react";
import Hero from "@/components/Hero";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Container from "@/components/Container";
import Section from "@/components/Section";

import YouTubeSection from "@/components/YouTubeSection";
import Services from "@/components/Services";
import ConsultingPricing from "@/components/ConsultingPricing";
import FallingText from "@/components/FallingText";
import AIExpertSection from "@/components/AIExpertSection";
import { faqs } from "@/data/faq";
import { faqPageSchema, breadcrumbSchema } from "@/utils/schema";

const HomePage: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: 'https://studiolee.nl' }])) }}
      />
      <Hero />

      <YouTubeSection />

      <AIExpertSection />

      <Services />


      <ConsultingPricing />

      <TestimonialsSlider />

      <Container>

        <FAQ />

        <Section
          id="network"
          title="Onze Labels"
          description="Wij zijn actief in diverse niches met gespecialiseerde oplossingen."
        >
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              'kapperai.nl', 'loodgieterai.nl', 'salonsmart.nl', 'dakdekkerai.nl',
              'stukadoorai.nl', 'schilderai.nl', 'elektroai.nl', 'reparatieai.nl',
              'verhuizerai.nl', 'kliniekai.nl', 'dierenartsai.nl', 'rijschoolai.nl',
              'tafelai.nl', 'hovenierai.nl', 'fietsenai.nl', 'woningai.nl',
              'huisartsenai.nl', 'aireclamestudio.nl', 'lazyaitravel.com',
              'vertaalai.nl'
            ].map((domain) => (
              <a
                key={domain}
                href={`https://www.${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-gray-600 dark:text-neutral-300 hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors"
              >
                {domain}
              </a>
            ))}
          </div>
        </Section>

      </Container>

      <FallingText />

    </>
  );
};

export default HomePage;
