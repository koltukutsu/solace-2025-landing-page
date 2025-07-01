'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Rocket, Eye, ChevronRight } from 'lucide-react';

const contentData = {
    tr: {
        mission: 'Misyon',
        missionTitle: 'Amacımız',
        vision: 'Vizyon',
        visionTitle: 'Hedefimiz'
    },
    en: {
        mission: 'Mission',
        missionTitle: 'Our Purpose',
        vision: 'Vision',
        visionTitle: 'Our Goal'
    }
};

export default function SolaceMissionVisionSection() {
    const { locale } = useLocale();
    const staticContent = contentData[locale];
    const dynamicContent = solaceContent.missionVision;

    return (
        <section className='bg-transparent py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch'>
                    {/* Mission Card */}
                    <div className='bg-glassmorphism-card p-8 sm:p-12 rounded-2xl shadow-sm'>
                        <div className='flex items-center gap-4 mb-6'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue text-white'>
                                <Rocket className='h-6 w-6' />
                            </div>
                            <div>
                                <span className='font-ui text-sm font-semibold uppercase tracking-wider text-brand-blue dark:text-accent-blue'>
                                    {staticContent.mission}
                                </span>
                                <h3 className='font-serif text-2xl font-bold text-gray-900 dark:text-white'>
                                    {staticContent.missionTitle}
                                </h3>
                            </div>
                        </div>
                        <blockquote className='font-sans text-lg text-gray-700 leading-relaxed dark:text-gray-300'>
                            "{dynamicContent.mission[locale]}"
                        </blockquote>
                    </div>

                    {/* Separator for Desktop */}
                    <div className='hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center'>
                        <div className='h-20 w-px bg-gray-200 dark:bg-gray-700' />
                        <div className='mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-glassmorphism'>
                            <ChevronRight className='h-5 w-5 text-gray-400' />
                        </div>
                        <div className='h-20 w-px bg-gray-200 dark:bg-gray-700' />
                    </div>

                    {/* Vision Card */}
                    <div className='bg-glassmorphism-card p-8 sm:p-12 rounded-2xl shadow-sm'>
                        <div className='flex items-center gap-4 mb-6'>
                            <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-accent-blue text-brand-blue'>
                                <Eye className='h-6 w-6' />
                            </div>
                            <div>
                                <span className='font-ui text-sm font-semibold uppercase tracking-wider text-accent-blue dark:text-accent-blue'>
                                    {staticContent.vision}
                                </span>
                                <h3 className='font-serif text-2xl font-bold text-gray-900 dark:text-white'>
                                    {staticContent.visionTitle}
                                </h3>
                            </div>
                        </div>
                        <blockquote className='font-sans text-lg text-gray-700 leading-relaxed dark:text-gray-300'>
                            "{dynamicContent.vision[locale]}"
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
} 