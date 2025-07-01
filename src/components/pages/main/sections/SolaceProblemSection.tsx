'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { AlertTriangle, Quote, Smartphone, Globe, Users, Zap } from 'lucide-react';

const problemIcons = [
    <Smartphone className='w-8 h-8' />,
    <Globe className='w-8 h-8' />,
    <Users className='w-8 h-8' />,
    <Zap className='w-8 h-8' />
];

export default function SolaceProblemSection() {
    const { locale } = useLocale();
    const content = solaceContent.problem;

    return (
        <section className='relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/20 dark:from-gray-900 dark:via-blue-900/20 dark:to-cyan-900/10 py-20 sm:py-32 overflow-hidden'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-20 left-10 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl animate-pulse' />
                <div className='absolute bottom-20 right-10 w-40 h-40 bg-accent-blue/15 rounded-full blur-3xl animate-pulse delay-1000' />
                <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-accent-blue/20 rounded-full blur-2xl animate-pulse delay-2000' />
            </div>

            <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center mb-20'>
                    <div className='inline-flex items-center justify-center p-2 bg-glassmorphism rounded-full mb-8'>
                        <AlertTriangle className='w-6 h-6 text-brand-blue mr-2' />
                        <span className='text-sm font-medium text-brand-blue dark:text-accent-blue uppercase tracking-wider'>
                            {locale === 'tr' ? 'Problem' : 'Challenge'}
                        </span>
                    </div>

                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight dark:text-white'>
                        {content.headline[locale]}
                    </h2>

                    <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans'>
                        {content.subtitle[locale]}
                    </p>

                    <div className='flex justify-center mt-8'>
                        <div className='w-24 h-1.5 bg-gradient-to-r from-brand-blue via-accent-blue to-brand-blue rounded-full animate-gradient-x' />
                    </div>
                </div>

                {/* Problems 2x2 Grid */}
                <div className='max-w-6xl mx-auto mb-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
                        {content.problems[locale].map((problem, index) => (
                            <div
                                key={index}
                                className='group relative bg-glassmorphism backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl hover:shadow-accent-blue/10 hover:border-accent-blue/30 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]'>

                                {/* Card Background Glow */}
                                <div className='absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-accent-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                                {/* Icon Container */}
                                <div className='relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/10 to-accent-blue/10 group-hover:from-brand-blue/20 group-hover:to-accent-blue/20 transition-all duration-300'>
                                    <div className='text-brand-blue dark:text-accent-blue group-hover:scale-110 transition-transform duration-300'>
                                        {problemIcons[index]}
                                    </div>
                                </div>

                                {/* Problem Text */}
                                <h3 className='relative text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed font-sans group-hover:text-brand-blue dark:group-hover:text-accent-blue transition-colors duration-300'>
                                    {problem}
                                </h3>

                                {/* Animated Border */}
                                <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                    <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-blue via-accent-blue to-brand-blue p-[1px]'>
                                        <div className='h-full w-full rounded-3xl bg-glassmorphism backdrop-blur-xl' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced Empathy Quote */}
                <div className='text-center max-w-5xl mx-auto'>
                    <div className='relative bg-glassmorphism backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-12 shadow-2xl'>
                        {/* Quote Background Pattern */}
                        <div className='absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-accent-blue/5 rounded-3xl' />

                        {/* Large Quote Icon */}
                        <div className='relative mb-8 flex justify-center'>
                            <div className='p-4 bg-gradient-to-br from-brand-blue/10 to-accent-blue/10 rounded-full'>
                                <Quote className='w-12 h-12 text-brand-blue dark:text-accent-blue' />
                            </div>
                        </div>

                        {/* Quote Text */}
                        <blockquote className='relative'>
                            <p className='font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 dark:text-gray-200 italic leading-snug mb-8'>
                                "{content.empathyQuote[locale]}"
                            </p>
                        </blockquote>

                        {/* Bottom Accent */}
                        <div className='flex justify-center'>
                            <div className='w-32 h-1.5 bg-gradient-to-r from-brand-blue via-accent-blue to-brand-blue rounded-full animate-gradient-x' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 