'use client';

import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const contentData = {
    tr: {
        bottomStatement: "Her iki ürün de Solace'ın 'konuşma temelli teknoloji' vizyonunu hayata geçiriyor."
    },
    en: {
        bottomStatement: "Both products bring Solace's 'conversation-based technology' vision to life."
    }
};

export default function SolaceProductsSection() {
    const { locale } = useLocale();
    const content = solaceContent.products;
    const staticContent = contentData[locale];

    return (
        <section id='products' className='bg-glassmorphism py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='text-center max-w-3xl mx-auto mb-16 sm:mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight dark:text-white'>
                        {content.headline[locale]}
                    </h2>
                    <div className='w-20 h-1.5 bg-gradient-to-r from-brand-blue to-accent-blue mx-auto rounded-full' />
                </div>

                {/* Products Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12'>
                    {content.products.map(product => (
                        <div
                            key={product.name}
                            className='bg-glassmorphism-card rounded-2xl shadow-sm overflow-hidden flex flex-col'>
                            {/* Logo Header */}
                            <div className='flex h-48 items-center justify-center p-8 bg-glassmorphism'>
                                <Image
                                    src={product.logoSrc}
                                    alt={`${product.name} Logo`}
                                    width={240}
                                    height={120}
                                    className='object-contain h-full w-auto'
                                />
                            </div>

                            {/* Content */}
                            <div className='p-8 flex-grow flex flex-col'>
                                <h3 className='font-serif text-2xl font-bold text-gray-900 dark:text-white'>
                                    {product.name}
                                </h3>
                                <p className='font-ui text-sm font-semibold text-brand-blue dark:text-accent-blue mt-1 mb-4'>
                                    {product.subtitle[locale]}
                                </p>
                                <p className='font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6'>
                                    {product.description[locale]}
                                </p>

                                <ul className='space-y-3 text-gray-700 dark:text-gray-300 mb-8'>
                                    {product.features[locale].map((feature, i) => (
                                        <li key={i} className='flex items-start'>
                                            <CheckCircle2 className='h-5 w-5 text-accent-blue mr-3 mt-1 flex-shrink-0' />
                                            <span className='font-sans'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className='mt-auto pt-6'>
                                    <Button asChild size='lg' className='w-full sm:w-auto font-ui'>
                                        <a href={product.link} target='_blank' rel='noopener noreferrer'>
                                            {product.ctaText[locale]}
                                            <ArrowUpRight className='ml-2 h-5 w-5' />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <div className='text-center mt-20 max-w-3xl mx-auto'>
                    <p className='font-serif text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200'>
                        {staticContent.bottomStatement}
                    </p>
                    <div className='mt-4 w-24 h-1 bg-gradient-to-r from-brand-blue to-accent-blue mx-auto rounded-full' />
                </div>
            </div>
        </section>
    );
} 