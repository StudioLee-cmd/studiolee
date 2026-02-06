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

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <YouTubeSection />

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
              'huisartsenai.nl', 'aireclamestudio.nl', 'lazyaiads.com',
              'lazyaicontent.com', 'lazysocials.com', 'lazyaiautomations.com',
              'lazyaivoice.com', 'lazybacklinks.com'
            ].map((domain) => (
              <a
                key={domain}
                href={`https://${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 hover:bg-primary hover:text-white transition-colors"
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
