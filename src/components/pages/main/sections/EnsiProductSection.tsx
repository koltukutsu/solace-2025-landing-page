'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import Image from 'next/image';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function EnsiProductSection() {
    const { locale } = useLocale();
    const product = solaceContent.products.products[0]; // Ensi is the first product

    return (
        <section className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column: Text Content */}
                    <div className='flex flex-col items-start'>
                        <Image
                            src={product.logo}
                            alt={`${product.name} Logo`}
                            width={120}
                            height={40}
                            className='mb-6 h-10 w-auto'
                        />
                        <h2 className='font-serif text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight'>
                            {product.headline[locale]}
                        </h2>
                        <p className='font-sans text-lg text-gray-300 mb-8 leading-relaxed max-w-xl'>
                            {product.description[locale]}
                        </p>
                        <div className='space-y-4 mb-10'>
                            {product.features[locale].map(feature => (
                                <div key={feature} className='flex items-center gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-sky-400' />
                                    <span className='font-sans text-lg text-gray-200'>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button asChild size='lg' className='bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg px-8 py-4 transition-transform hover:scale-105'>
                            <Link href={product.link} target='_blank'>
                                {product.learnMore[locale]}
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </Link>
                        </Button>
                    </div>

                    {/* Right Column: Visual */}
                    <div className='flex items-center justify-center'>
                        <div className='relative w-full max-w-md'>
                            <div className='absolute -inset-12 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-full blur-3xl opacity-30 animate-pulse' />
                            <Image
                                src='/branding/ensi_logo.png'
                                alt='Abstract visualization for Ensi product'
                                width={500}
                                height={500}
                                className='relative w-full h-auto drop-shadow-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
