'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import Image from 'next/image';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function EmaProductSection() {
    const { locale } = useLocale();
    const product = solaceContent.products.products[1]; // EMA is the second product

    return (
        <section className='min-h-screen bg-white text-gray-800 flex items-center py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column: Visual */}
                    <div className='flex items-center justify-center lg:order-last'>
                        <div className='relative w-full max-w-md'>
                            <div className='absolute -inset-12 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-3xl opacity-40 animate-pulse' />
                            <Image
                                src='/branding/ema_logo.png'
                                alt='Abstract visualization for EMA product'
                                width={500}
                                height={500}
                                className='relative w-full h-auto drop-shadow-2xl'
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className='flex flex-col items-start'>
                        <Image
                            src={product.logo}
                            alt={`${product.name} Logo`}
                            width={120}
                            height={40}
                            className='mb-6 h-10 w-auto'
                        />
                        <h2 className='font-serif text-4xl sm:text-5xl font-bold text-[#2f318b] mb-6 leading-tight'>
                            {product.headline[locale]}
                        </h2>
                        <p className='font-sans text-lg text-gray-600 mb-8 leading-relaxed max-w-xl'>
                            {product.description[locale]}
                        </p>
                        <div className='space-y-4 mb-10'>
                            {product.features[locale].map(feature => (
                                <div key={feature} className='flex items-center gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-blue-600' />
                                    <span className='font-sans text-lg text-gray-700'>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Button asChild size='lg' className='bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 transition-transform hover:scale-105'>
                            <Link href={product.link} target='_blank'>
                                {product.learnMore[locale]}
                                <ArrowRight className='ml-2 h-5 w-5' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
