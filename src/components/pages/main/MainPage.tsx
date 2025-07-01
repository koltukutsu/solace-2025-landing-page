'use client';

import { useEffect, useState } from 'react';

import { ContactModal } from '@/components/ContactModal';

// Solace Components
import SolaceHeroSection from './sections/SolaceHeroSection';
import SolaceProblemSection from './sections/SolaceProblemSection';
import SolaceValuesSection from './sections/SolaceValuesSection';
import SolaceMissionVisionSection from './sections/SolaceMissionVisionSection';
import SolaceProductsSection from './sections/SolaceProductsSection';
import SolaceHowItWorksSection from './sections/SolaceHowItWorksSection';
import SolaceProofSection from './sections/SolaceProofSection';
import SolaceTeamSection from './sections/SolaceTeamSection';
import SolaceCtaSection from './sections/SolaceCtaSection';
import FooterSection from './sections/FooterSection';

export default function MainPage() {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Debounce resize events to prevent excessive rerenders
        let timeoutId: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 150);
        };

        checkMobile();
        window.addEventListener('resize', debouncedResize);
        return () => {
            window.removeEventListener('resize', debouncedResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <main className='flex flex-col w-full'>
            <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
            <SolaceHeroSection isMobile={isMobile} setContactModalOpen={setContactModalOpen} />
            <SolaceProblemSection />
            <SolaceValuesSection />
            <SolaceMissionVisionSection />
            <SolaceProductsSection />
            {/* <SolaceHowItWorksSection /> */}
            {/* <SolaceProofSection /> */}
            {/* <SolaceTeamSection /> */}
            <SolaceCtaSection setContactModalOpen={setContactModalOpen} />
            <FooterSection />
        </main>
    );
}
