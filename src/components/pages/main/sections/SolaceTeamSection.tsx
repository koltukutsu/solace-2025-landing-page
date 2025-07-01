'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { solaceContent } from '@/lib/content';
import { BrainCircuit, Wrench, Rocket, Users } from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
    '🧠': <BrainCircuit className='h-10 w-10' />,
    '🔧': <Wrench className='h-10 w-10' />,
    '🚀': <Rocket className='h-10 w-10' />
};

const expertiseData = {
    tr: [
        { title: 'Yapay Zeka', subtitle: 'NLP & Makine Öğrenmesi' },
        { title: 'Donanım', subtitle: 'IoT & Ses İşleme' },
        { title: 'Ürün Geliştirme', subtitle: 'UX/UI & B2B Çözümleri' }
    ],
    en: [
        { title: 'Artificial Intelligence', subtitle: 'NLP & Machine Learning' },
        { title: 'Hardware', subtitle: 'IoT & Voice Processing' },
        { title: 'Product Development', subtitle: 'UX/UI & B2B Solutions' }
    ]
};

export default function SolaceTeamSection() {
    const { language } = useLanguage();
    const content = solaceContent.team;
    const expertise = expertiseData[language];

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

                {/* Team Highlights */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
                    {content.highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className='group relative bg-glassmorphism-card p-8 rounded-2xl text-center'>
                            <div className='flex justify-center mb-6'>
                                <div className='flex h-20 w-20 items-center justify-center rounded-full bg-accent-blue/10 text-brand-blue'>
                                    {iconMap[highlight.icon]}
                                </div>
                            </div>
                            <p className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                                {highlight.text[language]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Credibility Statement */}
                <div className='relative max-w-5xl mx-auto rounded-2xl bg-glassmorphism-card p-10 sm:p-12'>
                    <div className='text-center'>
                        <div className='flex justify-center mb-6'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue text-white'>
                                <Users className='h-8 w-8' />
                            </div>
                        </div>
                        <h3 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8'>
                            {content.credibilityStatement[language]}
                        </h3>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            {expertise.map(exp => (
                                <div
                                    key={exp.title}
                                    className='p-4 bg-glassmorphism rounded-lg'>
                                    <p className='font-semibold text-brand-blue dark:text-accent-blue'>
                                        {exp.title}
                                    </p>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                                        {exp.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 