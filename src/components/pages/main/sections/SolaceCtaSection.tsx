'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Button } from '@/registry/new-york-v4/ui/button';
import { ArrowRight } from 'lucide-react';

interface SolaceCtaSectionProps {
    setContactModalOpen: (open: boolean) => void;
}

export default function SolaceCtaSection({ setContactModalOpen }: SolaceCtaSectionProps) {
    const { locale } = useLocale();
    const content = solaceContent.cta;

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
            className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 relative overflow-hidden py-20 sm:py-32'>
            {/* Background Glow */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-radial-gradient from-blue-300/30 via-sky-300/20 to-transparent blur-3xl rounded-full' />

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
                {/* Headline */}
                <motion.div className='max-w-4xl mx-auto' variants={itemVariants}>
                    <h2 className='font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#2f318b] mb-6 leading-tight tracking-tight'>
                        {content.headline[locale]}
                    </h2>
                </motion.div>
                <motion.p
                    variants={itemVariants}
                    className='font-sans text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto'>
                    {content.supportTagline[locale]}
                </motion.p>

                {/* CTA Button */}
                <motion.div className='flex justify-center mt-12' variants={itemVariants}>
                    <Button
                        size='lg'
                        onClick={() => setContactModalOpen(true)}
                        className='animate-pulse-glow px-8 py-6 bg-blue-600 font-bold text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-700'>
                        {content.ctaButtons[0].text[locale]}
                        <ArrowRight className='ml-3 h-6 w-6' />
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
}
