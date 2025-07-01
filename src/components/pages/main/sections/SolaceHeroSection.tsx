'use client';

import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ChevronRight, ChevronsDown, Video } from 'lucide-react';

interface SolaceHeroSectionProps {
    isMobile: boolean;
    setContactModalOpen: (open: boolean) => void;
}

export default function SolaceHeroSection({ isMobile, setContactModalOpen }: SolaceHeroSectionProps) {
    const { locale } = useLocale();
    const content = solaceContent.hero;

    return (
        <section className='relative flex min-h-screen items-center justify-center bg-transparent overflow-hidden'>
            {/* Enhanced Background Elements with Brand Colors */}
            <div className='absolute inset-0 z-0'>
                <div className='absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl animate-pulse' />
                <div className='absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/15 rounded-full blur-3xl animate-pulse delay-2000' />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl animate-pulse delay-1000' />
            </div>

            <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[70vh]'>
                    {/* Left Column - Content */}
                    <div className='lg:col-span-7 text-center lg:text-left'>
                        <h1 className='font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter dark:text-white'>
                            <span className='block text-brand-blue dark:text-brand-blue'>
                                {content.headline[locale]}
                            </span>
                            <span className='block text-accent-blue dark:text-accent-blue text-6xl sm:text-7xl lg:text-8xl font-extrabold mt-2'>
                                {content.subheadline[locale]}
                            </span>
                        </h1>

                        <p className='font-sans text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 dark:text-gray-300'>
                            {content.description[locale]}
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                            <Button
                                size='lg'
                                onClick={() => setContactModalOpen(true)}
                                className='bg-brand-blue text-white hover:bg-brand-blue/90 dark:bg-brand-blue dark:text-white dark:hover:bg-brand-blue/90 font-ui shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300'>
                                {content.primaryCTA[locale]}
                                <ChevronRight className='ml-2 h-5 w-5' />
                            </Button>

                            <Button
                                size='lg'
                                variant='outline'
                                onClick={() => setContactModalOpen(true)}
                                className='border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white dark:border-accent-blue dark:text-accent-blue dark:hover:bg-accent-blue dark:hover:text-white font-ui transition-all duration-300'>
                                <Video className='mr-2 h-5 w-5' />
                                {content.secondaryCTA[locale]}
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Logo */}
                    <div className='lg:col-span-5 flex justify-center items-center'>
                        <div className='relative w-72 h-72 lg:w-96 lg:h-96 flex items-center justify-center'>
                            <div className='absolute inset-0 bg-gradient-to-br from-brand-blue/15 to-accent-blue/15 rounded-full blur-2xl animate-pulse' />
                            <div className='absolute inset-4 bg-gradient-to-tr from-brand-blue/10 to-accent-blue/10 rounded-full blur-xl animate-pulse delay-500' />
                            <Image
                                src='/branding/solace_logo_small.svg'
                                alt='Solace Logo'
                                width={256}
                                height={256}
                                className='relative z-10 w-64 h-64 object-contain drop-shadow-2xl'
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex items-center text-accent-blue/70 animate-bounce'>
                    <ChevronsDown className='h-6 w-6' />
                </div>
            </div>
        </section>
    );
} 