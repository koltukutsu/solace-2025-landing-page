'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/registry/new-york-v4/ui/button';

const SolaceProductsSection = () => {
    const { locale } = useLocale();
    const { products } = solaceContent;

    return (
        <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 py-20 sm:py-32'>
            <div className='container mx-auto px-4'>
                <div className='text-center max-w-4xl mx-auto mb-16 sm:mb-20'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2f318b] mb-4 tracking-tight'>
                        {products.headline[locale]}
                    </h2>
                    <div className='mt-6 w-20 h-1.5 bg-gradient-to-r from-[#4da9e7] to-[#2f318b] mx-auto rounded-full' />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                    {products.products.map(product => (
                        <div key={product.name} className='bg-white/60 backdrop-blur-md border border-gray-200/80 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col'>
                            <div className='p-8'>
                                <Image src={product.logo} alt={`${product.name} Logo`} width={120} height={40} className='mb-6 h-10 w-auto object-contain' />
                                <h3 className='font-sans text-2xl font-bold text-[#2f318b] mb-3'>
                                    {product.headline[locale]}
                                </h3>
                                <p className='font-sans text-gray-600 leading-relaxed mb-6'>
                                    {product.description[locale]}
                                </p>
                                <Button variant='outline' asChild>
                                    <Link href={product.link} target='_blank'>
                                        Learn More <ArrowRight className='ml-2 h-4 w-4' />
                                    </Link>
                                </Button>
                            </div>
                            <div className='bg-gray-50/70 mt-auto p-8 rounded-b-3xl'>
                                <ul className='space-y-3'>
                                    {product.features[locale].map((feature: string) => (
                                        <li key={feature} className='flex items-center'>
                                            <CheckCircle className='h-5 w-5 text-[#4da9e7] mr-3 flex-shrink-0' />
                                            <span className='font-sans text-gray-700'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolaceProductsSection;
