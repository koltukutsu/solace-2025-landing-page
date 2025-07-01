'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Mic, Cpu, Smartphone, ChevronRight } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
    '🗣️': <Mic className='h-8 w-8' />,
    '🧠': <Cpu className='h-8 w-8' />,
    '📱': <Smartphone className='h-8 w-8' />
};

export default function SolaceHowItWorksSection() {
    const { language } = useLanguage();
    const content = solaceContent.howItWorks;

    return (
        <section className='bg-glassmorphism py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center max-w-3xl mx-auto mb-16 sm:mb-20'>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight dark:text-white'>
                        {content.headline[language]}
                    </h2>
                    <p className='text-lg sm:text-xl text-gray-600 leading-relaxed dark:text-gray-300'>
                        {content.subtitle[language]}
                    </p>
                    <div className='mt-6 w-20 h-1.5 bg-gradient-to-r from-brand-blue to-accent-blue mx-auto rounded-full' />
                </div>

                {/* Steps */}
                <div className='relative'>
                    <div
                        aria-hidden='true'
                        className='absolute hidden lg:block top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700'
                    />

                    <div className='relative grid grid-cols-1 md:grid-cols-3 gap-12'>
                        {content.steps.map((step, index) => (
                            <div key={index} className='relative text-center'>
                                <div className='flex flex-col items-center p-6'>
                                    <div className='flex h-20 w-20 items-center justify-center rounded-full bg-glassmorphism-card shadow-lg text-brand-blue dark:text-accent-blue z-10'>
                                        {iconMap[step.icon]}
                                    </div>
                                    <h3 className='text-xl font-bold text-gray-900 mt-6 mb-2 dark:text-white'>
                                        {step.title[language]}
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed dark:text-gray-400'>
                                        {step.description[language]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Description */}
                <div className='text-center mt-20 max-w-3xl mx-auto'>
                    <p className='text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200'>
                        "{content.description[language]}"
                    </p>
                </div>
            </div>
        </section>
    );
} 