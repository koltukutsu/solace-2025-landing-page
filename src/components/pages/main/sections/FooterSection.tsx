'use client';

import Link from 'next/link';
import Image from 'next/image';
import { solaceContent } from '@/lib/locales';
import { useLocale } from '@/hooks/useLocale';
import { Separator } from '@/registry/new-york-v4/ui/separator';

export default function FooterSection() {
    const { locale } = useLocale();
    const content = solaceContent.footer;

    return (
        <footer className='w-full bg-slate-50 py-12 text-gray-500 sm:py-16'>
            <div className='w-full max-w-7xl mx-auto px-5 md:px-8'>
                <div className='mb-10 grid grid-cols-1 gap-10 sm:mb-12 md:grid-cols-12'>
                    {/* Logo and Tagline */}
                    <div className='md:col-span-4'>
                        <div className='mb-4 flex items-center'>
                            <Image src='/branding/solace_logo_small.svg' alt='Solace Logo' width={32} height={32} />
                            <span className='ml-2 text-2xl font-bold text-[#2f318b]'>
                                {content.companyName[locale]}
                            </span>
                        </div>
                        <p className='font-sans max-w-xs text-sm leading-relaxed text-gray-600'>
                            {content.tagline[locale]}
                        </p>
                    </div>

                    {/* Legal Links */}
                    {/* <div className='md:col-span-2 md:col-start-8'>
                        <h3 className='font-sans mb-4 text-base font-semibold uppercase tracking-wider text-gray-500'>
                            {content.legal[locale]}
                        </h3>
                        <ul className='font-sans space-y-2'>
                            {Object.entries(content.links).map(([key, link]) => (
                                <li key={key}>
                                    <Link href='#' className='text-sm text-gray-600 transition-colors hover:text-[#2f318b]'>
                                        {link[locale]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Contact & Socials */}
                    {/* <div className='md:col-span-3'>
                        <h3 className='font-sans mb-4 text-base font-semibold uppercase tracking-wider text-gray-500'>
                            {content.contact[locale]}
                        </h3>
                        <ul className='font-sans space-y-2'>
                            <li>
                                <a href={`mailto:${content.contactInfo.email}`} className='text-sm text-gray-600 transition-colors hover:text-[#2f318b]'>
                                    {content.contactInfo.email}
                                </a>
                            </li>
                            <li className='flex gap-4 pt-2'>
                                {content.socials[locale].map(social => (
                                    <Link key={social} href='#' className='text-sm text-gray-600 transition-colors hover:text-[#2f318b]'>
                                        {social}
                                    </Link>
                                ))}
                            </li>
                        </ul>
                    </div> */}
                </div>

                <Separator className='mb-6 bg-gray-200' />

                <p className='font-sans text-center text-xs text-gray-500'>
                    {content.copyright[locale]}
                </p>
            </div>
        </footer>
    );
}
