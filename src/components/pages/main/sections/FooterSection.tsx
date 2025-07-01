'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/registry/new-york-v4/ui/separator';
import { useLocale } from '@/hooks/useLocale';

const content = {
    tr: {
        tagline: 'Teknolojiyi Konuşma Kolaylığında Sunuyoruz.',
        legal: 'Yasal',
        contact: 'İletişim',
        copyright: '© 2025 EMA, Solace Teknoloji. Tüm hakları saklıdır.',
        links: {
            dataProtection: 'KVKK',
            privacyPolicy: 'Gizlilik Politikası',
            cookiePolicy: 'Çerez Politikası'
        },
        socials: ['LinkedIn', 'Instagram', 'YouTube']
    },
    en: {
        tagline: 'Delivering Technology with the Ease of Conversation.',
        legal: 'Legal',
        contact: 'Contact',
        copyright: '© 2025 EMA, Solace Teknoloji. All rights reserved.',
        links: {
            dataProtection: 'Data Protection',
            privacyPolicy: 'Privacy Policy',
            cookiePolicy: 'Cookie Policy'
        },
        socials: ['LinkedIn', 'Instagram', 'YouTube']
    }
};

export default function FooterSection() {
    const { locale } = useLocale();
    const c = content[locale];

    const legalLinks = [
        { name: c.links.dataProtection, href: '/legal/data-protection' },
        { name: c.links.privacyPolicy, href: '/legal/privacy-policy' },
        { name: c.links.cookiePolicy, href: '/legal/cookie-policy' }
    ];

    return (
        <footer className='w-full border-t bg-glassmorphism py-12 text-gray-800 dark:text-gray-200 sm:py-16'>
            <div className='container px-5 md:px-8'>
                <div className='mb-10 grid grid-cols-1 gap-10 sm:mb-12 sm:grid-cols-2 md:grid-cols-4'>
                    <div className='md:col-span-1'>
                        <div className='mb-4 flex items-center'>
                            <Image src='/branding/solace_logo_small.svg' alt='Solace Logo' width={32} height={32} />
                            <span className='font-playfair ml-2 text-2xl font-bold text-brand-blue dark:text-accent-blue'>
                                EMA
                            </span>
                        </div>
                        <p className='font-inter max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base'>
                            {c.tagline}
                        </p>
                    </div>

                    <div className='md:col-start-3'>
                        <h3 className='font-montserrat mb-4 text-base font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-lg'>
                            {c.legal}
                        </h3>
                        <ul className='font-inter space-y-2 sm:space-y-3'>
                            {legalLinks.map(link => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className='text-sm text-gray-600 transition-colors hover:text-brand-blue dark:text-gray-400 dark:hover:text-white sm:text-base'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-montserrat mb-4 text-base font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-lg'>
                            {c.contact}
                        </h3>
                        <ul className='font-inter space-y-2 sm:space-y-3'>
                            <li className='text-sm text-gray-600 dark:text-gray-400 sm:text-base'>
                                info-ema@solace.com.tr
                            </li>
                            <li className='flex gap-3 pt-2 sm:gap-4 sm:pt-3'>
                                {c.socials.map(social => (
                                    <Link
                                        key={social}
                                        href='#'
                                        className='text-sm text-gray-600 transition-colors hover:text-brand-blue dark:text-gray-400 dark:hover:text-white sm:text-base'>
                                        {social}
                                    </Link>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className='mb-6 bg-gray-200 dark:bg-gray-800 sm:mb-8' />

                <p className='font-inter text-center text-xs text-gray-500 dark:text-gray-400 sm:text-sm'>
                    {c.copyright}
                </p>
            </div>
        </footer>
    );
} 