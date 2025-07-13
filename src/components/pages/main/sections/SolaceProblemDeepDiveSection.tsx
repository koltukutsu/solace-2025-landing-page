'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Users, Zap } from 'lucide-react';
import Image from 'next/image';

const problemIcons = [
    <Users key='icon-users' className='w-10 h-10' />,
    <Zap key='icon-zap' className='w-10 h-10' />
];

export default function SolaceProblemDeepDiveSection() {
    const { locale } = useLocale();
    const content = solaceContent.problemDeepDive;

    return (
        <section className='relative bg-white py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2f318b] mb-6 leading-tight tracking-tight'>
                        {content.headline[locale]}
                    </h2>
                    <div className='flex justify-center mt-8'>
                        <div className='w-24 h-1.5 bg-gradient-to-r from-[#4da9e7] to-[#2f318b] rounded-full' />
                    </div>
                </div>

                {/* Explanatory Problem Layout */}
                <div className='max-w-4xl mx-auto space-y-16 mb-24'>
                    {content.problems[locale].map((problem: string, index: number) => (
                        <div key={index} className='flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left'>
                            <div className='flex-shrink-0'>
                                <div className='flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-blue-100 to-sky-100 text-[#2f318b]'>
                                    {problemIcons[index]}
                                </div>
                            </div>
                            <div>
                                <h3 className='text-xl font-semibold text-gray-800 font-sans leading-relaxed'>
                                    {problem}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Solace Solution Statement */}
                <div className='text-center max-w-5xl mx-auto'>
                    <div className='relative bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100/50 rounded-3xl p-12 shadow-lg'>
                        <div className='relative mb-8 flex justify-center'>
                            <Image
                                src='/branding/solace_logo_small.svg'
                                alt='Solace Logo'
                                width={64}
                                height={64}
                                className='h-16 w-16'
                            />
                        </div>
                        <p className='font-sans text-2xl md:text-3xl font-semibold text-[#2f318b] leading-relaxed'>
                            {content.solutionStatement[locale]}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
