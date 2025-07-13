'use client';

import { solaceContent } from '@/lib/locales';
import { useLocale } from '@/hooks/useLocale';
import { Cpu, Languages, Share2, AreaChart } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
    'Generative AI That Knows Your Business': <Cpu className='w-10 h-10' />,
    'Speaks Every Customer’s Language': <Languages className='w-10 h-10' />,
    'Effortless Integration With Your Systems': <Share2 className='w-10 h-10' />,
    'Turns Conversations into Valuable Insights': <AreaChart className='w-10 h-10' />
};

const SolaceTechnologyPlatformSection = () => {
    const { locale } = useLocale();
    const { technologyPlatform } = solaceContent;

    return (
        <section className='bg-white relative py-20 sm:py-32'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-4xl mx-auto mb-16 sm:mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2f318b] mb-4 tracking-tight'>
                        {technologyPlatform.headline[locale]}
                    </h2>
                    <p className='font-sans text-lg sm:text-xl text-gray-600 leading-relaxed mt-4'>
                        {technologyPlatform.subtitle[locale]}
                    </p>
                    <div className='mt-6 w-20 h-1.5 bg-gradient-to-r from-[#4da9e7] to-[#2f318b] mx-auto rounded-full' />
                </div>

                <div className='max-w-5xl mx-auto space-y-20'>
                    {technologyPlatform.features.map((feature, index) => (
                        <div
                            key={feature.title.en}
                            className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                }`}>
                            <div className='flex-shrink-0 w-full md:w-1/3 flex justify-center'>
                                <div className='relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-sky-100 text-[#2f318b] shadow-lg'>
                                    {iconMap[feature.title.en]}
                                </div>
                            </div>
                            <div className='text-center md:text-left w-full md:w-2/3'>
                                <h3 className='font-ui text-2xl font-bold text-gray-900 mb-4'>
                                    {feature.title[locale]}
                                </h3>
                                <p className='font-sans text-lg text-gray-600 leading-relaxed'>
                                    {feature.description[locale]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolaceTechnologyPlatformSection;
