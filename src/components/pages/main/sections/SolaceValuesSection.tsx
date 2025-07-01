'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { User, Mic, Lock, Sparkles } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
    '👤': <User className='w-8 h-8' />,
    '🎤': <Mic className='w-8 h-8' />,
    '🔒': <Lock className='w-8 h-8' />,
    '✨': <Sparkles className='w-8 h-8' />
};

export default function SolaceValuesSection() {
    const { locale } = useLocale();
    const content = solaceContent.values;

    return (
        <section className='bg-transparent py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center max-w-4xl mx-auto mb-16 sm:mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight dark:text-white'>
                        {content.headline[locale]}
                    </h2>
                    <p className='font-sans text-lg sm:text-xl text-gray-600 leading-relaxed dark:text-gray-300'>
                        {content.subtitle[locale]}
                    </p>
                    <div className='mt-6 w-20 h-1.5 bg-gradient-to-r from-brand-blue to-accent-blue mx-auto rounded-full' />
                </div>

                {/* Values Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
                    {content.values.map(value => (
                        <div key={value.title.tr} className='group text-center p-6'>
                            <div className='flex justify-center mb-6'>
                                <div className='flex h-20 w-20 items-center justify-center rounded-2xl bg-accent-blue/10 text-brand-blue transition-all duration-300 group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110'>
                                    {iconMap[value.icon]}
                                </div>
                            </div>
                            <h3 className='font-ui text-xl font-bold text-gray-900 mb-2 dark:text-white'>
                                {value.title[locale]}
                            </h3>
                            <p className='font-sans text-gray-600 leading-relaxed dark:text-gray-400'>
                                {value.description[locale]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Empathy Line */}
                <div className='text-center max-w-3xl mx-auto'>
                    <div className='relative rounded-2xl bg-glassmorphism-card p-8'>
                        <p className='font-serif text-xl md:text-2xl font-medium text-gray-800 leading-relaxed dark:text-gray-200'>
                            "{content.empathyLine[locale]}"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 