'use client';

import { useState } from 'react';

import { ContactModal } from '@/components/ContactModal';

// Solace Components
import SolaceHeroSection from './sections/SolaceHeroSection';
import SolaceIntroSection from './sections/SolaceIntroSection';
import SolaceProblemIntroSection from './sections/SolaceProblemIntroSection';
import SolaceProblemDeepDiveSection from './sections/SolaceProblemDeepDiveSection';
import SolaceValuesSection from './sections/SolaceValuesSection';
import SolaceMissionVisionSection from './sections/SolaceMissionVisionSection';
import SolaceTechnologyPlatformSection from './sections/SolaceTechnologyPlatformSection';
import EnsiProductSection from './sections/EnsiProductSection';
import EmaProductSection from './sections/EmaProductSection';
import SolaceBusinessModelSection from './sections/SolaceBusinessModelSection';
import SolaceCtaSection from './sections/SolaceCtaSection';
import FooterSection from './sections/FooterSection';

export default function MainPage() {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    return (
        <main className='flex flex-col w-full'>
            <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
            <SolaceHeroSection />
            <SolaceIntroSection setContactModalOpen={setContactModalOpen} />
            <SolaceProblemIntroSection />
            <SolaceProblemDeepDiveSection />
            <SolaceValuesSection />
            <SolaceMissionVisionSection />
            <SolaceTechnologyPlatformSection />
            <EnsiProductSection />
            <EmaProductSection />
            <SolaceBusinessModelSection />
            <SolaceCtaSection setContactModalOpen={setContactModalOpen} />
            <FooterSection />
        </main>
    );
}
