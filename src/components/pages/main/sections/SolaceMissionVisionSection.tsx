'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Rocket, Eye } from 'lucide-react';

export default function SolaceMissionVisionSection() {
    const { locale } = useLocale();
    const content = solaceContent.missionVision;

    return (
        <section
            id='about'
            className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 relative py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 z-10'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch'>
                    {/* Mission Card */}
                    <div className='bg-white/60 backdrop-blur-lg border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col'>
                        <div className='flex items-center gap-4 mb-6'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-200 to-indigo-200 text-[#2f318b]'>
                                <Rocket className='h-8 w-8' />
                            </div>
                            <div>
                                <span className='font-ui text-sm font-semibold uppercase tracking-wider text-[#2f318b]'>
                                    {content.missionLabel[locale]}
                                </span>
                                <h3 className='font-serif text-3xl font-bold text-gray-900'>
                                    {content.missionTitle[locale]}
                                </h3>
                            </div>
                        </div>
                        <blockquote className='font-sans text-lg text-gray-700 leading-relaxed flex-grow'>
                            "{content.mission[locale]}"
                        </blockquote>
                    </div>

                    {/* Separator for Desktop */}
                    <div className='hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center h-full'>
                        <div className='h-1/3 w-px bg-gray-300' />
                    </div>

                    {/* Vision Card */}
                    <div className='bg-white/60 backdrop-blur-lg border border-gray-200/80 rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col'>
                        <div className='flex items-center gap-4 mb-6'>
                            <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 to-cyan-200 text-[#4da9e7]'>
                                <Eye className='h-8 w-8' />
                            </div>
                            <div>
                                <span className='font-ui text-sm font-semibold uppercase tracking-wider text-[#4da9e7]'>
                                    {content.visionLabel[locale]}
                                </span>
                                <h3 className='font-serif text-3xl font-bold text-gray-900'>
                                    {content.visionTitle[locale]}
                                </h3>
                            </div>
                        </div>
                        <blockquote className='font-sans text-lg text-gray-700 leading-relaxed flex-grow'>
                            "{content.vision[locale]}"
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
