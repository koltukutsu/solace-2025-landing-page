'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Smartphone, Globe } from 'lucide-react';

const problemIcons = [
    <Smartphone key='icon-smartphone' className='w-8 h-8' />,
    <Globe key='icon-globe' className='w-8 h-8' />
];

export default function SolaceProblemIntroSection() {
    const { locale } = useLocale();
    const content = solaceContent.problem;

    return (
        <section className='relative bg-gradient-to-br from-white to-blue-50 py-20 sm:py-32 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden -z-10'>
                <div className='absolute top-20 left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl animate-pulse' />
                <div className='absolute bottom-20 right-10 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl animate-pulse delay-1000' />
            </div>

            <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2f318b] mb-6 leading-tight tracking-tight'>
                        {content.headline[locale]}
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans'>
                        {content.subtitle[locale]}
                    </p>
                    <div className='flex justify-center mt-8'>
                        <div className='w-24 h-1.5 bg-gradient-to-r from-[#4da9e7] to-[#2f318b] rounded-full' />
                    </div>
                </div>

                <div className='max-w-6xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
                        {content.problems[locale].map((problem, index) => (
                            <div
                                key={index}
                                className='group relative bg-white/50 backdrop-blur-lg border border-gray-200/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:border-[#4da9e7]/50 transition-all duration-500 transform hover:-translate-y-2'>
                                <div className='relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-sky-100 transition-all duration-300'>
                                    <div className='text-[#2f318b] group-hover:text-[#4da9e7] group-hover:scale-110 transition-all duration-300'>
                                        {problemIcons[index]}
                                    </div>
                                </div>
                                <h3 className='relative text-lg font-semibold text-gray-800 leading-relaxed font-sans group-hover:text-black transition-colors duration-300'>
                                    {problem}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
