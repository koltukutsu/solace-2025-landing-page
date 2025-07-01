'use client';

import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ArrowRight, Video, Mail } from 'lucide-react';

interface SolaceCtaSectionProps {
    setContactModalOpen: (open: boolean) => void;
}

export default function SolaceCtaSection({ setContactModalOpen }: SolaceCtaSectionProps) {
    const { locale } = useLocale();
    const content = solaceContent.cta;

    return (
        <section className='bg-gradient-animated py-20 sm:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                {/* Headline */}
                <div className='max-w-4xl mx-auto'>
                    <h2 className='font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight'>
                        <span className='block'>{content.headline[locale].split(' ').slice(0, -2).join(' ')}</span>
                        <span className='block text-transparent bg-gradient-to-r from-brand-blue to-accent-blue bg-clip-text'>
                            {content.headline[locale].split(' ').slice(-2).join(' ')}
                        </span>
                    </h2>
                    <p className='font-sans text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                        {content.supportTagline[locale]}
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-wrap gap-4 justify-center mt-10'>
                    <Button size='lg' onClick={() => setContactModalOpen(true)} className='font-ui'>
                        <Video className='mr-2 h-5 w-5' />
                        {content.ctaButtons[0].text[locale]}
                    </Button>
                    <Button size='lg' variant='outline' onClick={() => setContactModalOpen(true)} className='font-ui'>
                        <Mail className='mr-2 h-5 w-5' />
                        {content.ctaButtons[1].text[locale]}
                    </Button>
                </div>
            </div>
        </section>
    );
} 