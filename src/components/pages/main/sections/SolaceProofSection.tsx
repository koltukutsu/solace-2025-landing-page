'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { solaceContent } from '@/lib/content';
import { MapPin, Users, Factory, Zap, CheckCircle2, Award } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
    '🇹🇷': <MapPin className='h-8 w-8' />,
    '🤝': <Users className='h-8 w-8' />,
    '🏭': <Factory className='h-8 w-8' />,
    '🔌': <Zap className='h-8 w-8' />
};

const statsData = {
    tr: [
        { value: '5+', label: 'Pilot Kurulum' },
        { value: '100%', label: 'Yerli Üretim' },
        { value: '2025', label: 'Piyasaya Çıkış' }
    ],
    en: [
        { value: '5+', label: 'Pilot Installations' },
        { value: '100%', label: 'Local Production' },
        { value: '2025', label: 'Market Launch' }
    ]
};

export default function SolaceProofSection() {
    const { language } = useLanguage();
    const content = solaceContent.proof;
    const stats = statsData[language];

    return (
        <section className='bg-transparent py-20 sm:py-32'>
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

                {/* Traction Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
                    {content.tractionPoints.map((point, index) => (
                        <div
                            key={index}
                            className='group relative bg-glassmorphism-card p-6 rounded-2xl text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent-blue'>
                            <div className='flex justify-center mb-5'>
                                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-accent-blue/10 text-brand-blue'>
                                    {iconMap[point.icon]}
                                </div>
                            </div>
                            <p className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                                {point.text[language]}
                            </p>
                            <div className='absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                <CheckCircle2 className='h-4 w-4' />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Message */}
                <div className='relative max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-brand-blue to-blue-700 dark:from-brand-blue dark:to-blue-900 text-white p-10 sm:p-16'>
                    <div className='text-center'>
                        <div className='flex justify-center mb-6'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-white/10'>
                                <Award className='h-8 w-8 text-accent-blue' />
                            </div>
                        </div>
                        <h3 className='text-2xl md:text-3xl font-bold mb-8'>
                            {content.trustMessage[language]}
                        </h3>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
                            {stats.map(stat => (
                                <div key={stat.label}>
                                    <div className='text-4xl md:text-5xl font-bold text-accent-blue'>
                                        {stat.value}
                                    </div>
                                    <div className='mt-1 text-white/80'>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}