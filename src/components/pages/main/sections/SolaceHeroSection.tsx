'use client';

import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { ChevronsDown } from 'lucide-react';

export default function SolaceHeroSection() {
    const { locale } = useLocale();
    const content = solaceContent.hero;

    return (
        <section className='relative flex h-screen items-center justify-center bg-[#01081a] text-white'>
            {/* Main container for image and text */}
            <div className='relative w-full flex justify-center items-center'>
                {/* Image for mobile and desktop */}
                <div className='relative w-full md:h-[85vh] md:w-auto flex justify-center'>
                    <Image
                        src='/images/hero/first.png'
                        alt='Futuristic abstract visualization of AI and voice technology'
                        width={1080}
                        height={1920}
                        className='w-full h-auto md:w-auto md:h-full object-contain'
                        priority
                    />
                </div>

                {/* Centered Text Overlay */}
                <div className='absolute inset-0 flex items-center justify-center text-center p-4'>
                    <h1 className='font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white text-shadow-lg'>
                        {content.headline[locale]}
                    </h1>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center animate-bounce'>
                <ChevronsDown className='h-8 w-8' />
            </div>
        </section>
    );
}
