'use client';

import { solaceContent } from '@/lib/locales';
import { useLocale } from '@/hooks/useLocale';
import { DollarSign, Handshake, LayoutDashboard } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ReactNode } = {
    'Usage-Based Licensing': (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-8 h-8'>
            <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
        </svg>
    ),
    'OEM & Integrator Collaborations': (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-8 h-8'>
            <path d='m11 17 2 2a1 1 0 1 0 3-3' />
            <path d='m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.5-3.5a1 1 0 1 0-3 3l2.5 2.5' />
            <path d='M9 12.5a1 1 0 1 0-3 3l-2.5-2.5a1 1 0 1 0-3-3l3.5-3.5a1 1 0 1 0 3 3Z' />
            <path d='M9 11.5a1 1 0 1 0-3-3L10 4s2-2 3 1 1 3 1 3' />
        </svg>
    ),
    'Data Panel & Management Interface': (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='w-8 h-8'>
            <rect width='7' height='7' x='3' y='3' rx='1' />
            <rect width='7' height='7' x='14' y='3' rx='1' />
            <rect width='7' height='7' x='14' y='14' rx='1' />
            <rect width='7' height='7' x='3' y='14' rx='1' />
        </svg>
    )
};

const SolaceBusinessModelSection = () => {
    const { locale } = useLocale();
    const { businessModel } = solaceContent;

    return (
        <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#f0f5ff] relative overflow-hidden py-20 sm:py-32'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-4xl mx-auto mb-16 sm:mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2f318b] mb-4 tracking-tight'>
                        {businessModel.headline[locale]}
                    </h2>
                    <div className='mt-6 w-20 h-1.5 bg-gradient-to-r from-[#4da9e7] to-[#2f318b] mx-auto rounded-full' />
                </div>

                <div className='max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8'>
                    {businessModel.models.map(model => (
                        <div
                            key={model.title.en}
                            className='group text-center p-8 bg-white/80 backdrop-blur-md border border-gray-200/60 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                            <div className='flex justify-center mb-6'>
                                <div className='flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100/50 text-[#2f318b]'>
                                    {iconMap[model.title.en]}
                                </div>
                            </div>
                            <h3 className='font-sans text-xl font-bold text-gray-800 mb-2'>
                                {model.title[locale]}
                            </h3>
                            <p className='font-sans text-gray-600 leading-relaxed px-4'>
                                {model.description[locale]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolaceBusinessModelSection;
