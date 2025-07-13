'use client';

import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ChevronRight, Video } from 'lucide-react';

interface SolaceIntroSectionProps {
    setContactModalOpen: (open: boolean) => void;
}

export default function SolaceIntroSection({ setContactModalOpen }: SolaceIntroSectionProps) {
    const { locale } = useLocale();
    const content = solaceContent.hero; // We reuse content from the hero object

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section className='min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 sm:py-0'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-16 items-center'>
                    {/* Left Column: Text Content */}
                    <div className='lg:col-span-6'>
                        <h2 className='font-sans text-4xl sm:text-5xl font-bold text-[#2f318b] mb-6 leading-tight Bricolage_Grotesque'>
                            {content.subheadline[locale]}
                        </h2>
                        <p className='font-sans text-lg text-gray-600 mb-10 leading-relaxed'>
                            {content.description[locale]}
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <Button
                                size='lg'
                                onClick={() => setContactModalOpen(true)}
                                className='bg-indigo-600 text-white hover:bg-indigo-700 font-semibold shadow-md shadow-indigo-500/20 transition-all duration-300 rounded-lg px-6 py-3 transform hover:scale-105'>
                                {content.primaryCTA[locale]}
                                <ChevronRight className='ml-2 h-5 w-5' />
                            </Button>
                            <Button
                                size='lg'
                                variant='outline'
                                onClick={scrollToAbout}
                                className='border-gray-200 bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-300 hover:text-black font-semibold transition-all duration-300 rounded-lg px-6 py-3'>
                                <Video className='mr-2 h-5 w-5' />
                                {content.secondaryCTA[locale]}
                            </Button>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className='lg:col-span-6 flex items-center justify-center'>
                        <Image
                            src='/images/hero/four.png'
                            alt='Abstract visualization of Solace AI understanding language'
                            width={550}
                            height={550}
                            className='w-full h-auto rounded-lg object-contain'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
