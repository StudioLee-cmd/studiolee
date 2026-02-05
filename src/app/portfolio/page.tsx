import React from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import { BsTools } from 'react-icons/bs';

const PortfolioPage = () => {
    return (
        <React.Fragment>
            <Section id="portfolio-hero" title="Portfolio" description="Een selectie van ons beste werk.">
                <Container>
                    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
                        <div className="w-16 h-16 bg-blue-100 text-primary rounded-full flex items-center justify-center mb-6">
                            <BsTools size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Wordt aan gewerkt!</h3>
                        <p className="text-gray-600 max-w-lg mx-auto">
                            We zijn momenteel druk bezig met het samenstellen van onze portfolio pagina.
                            Binnenkort vind je hier onze mooiste cases en resultaten.
                        </p>
                    </div>
                </Container>
            </Section>
        </React.Fragment>
    );
};

export default PortfolioPage;
