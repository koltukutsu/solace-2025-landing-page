'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Languages, Menu, X } from 'lucide-react';

import { useLocale } from '@/hooks/useLocale';
import { ContactModal } from '@/components/ContactModal';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/registry/new-york-v4/ui/dropdown-menu';
import { solaceContent } from '@/lib/locales';

const Navbar = () => {
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { locale, setLocale } = useLocale();

    const navContent = solaceContent.navigation;

    const handleLocaleChange = (newLocale: 'tr' | 'en') => {
        setLocale(newLocale);
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className='fixed top-0 left-0 z-50 w-full border-b border-gray-200/80 bg-glassmorphism backdrop-blur-sm dark:border-gray-800/80'>
                <div className='w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
                    <Link href={`/${locale}`} className='flex items-center'>
                        <Image
                            src='/branding/solace_logo_small.svg'
                            alt='Solace Logo'
                            width={120}
                            height={32}
                            className='h-8 w-auto'
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className='hidden items-center space-x-4 md:flex'>
                        <Button
                            size='lg'
                            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-8 py-4 transition-transform hover:scale-105 shadow-lg shadow-blue-400/20 backdrop-blur-md'
                            onClick={() => setContactModalOpen(true)}
                        >
                            {navContent.contact[locale]}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant='outline'
                                    size='icon'
                                    aria-label='Change language'
                                    className='bg-white hover:bg-gray-100 dark:bg-transparent'>
                                    <Languages className='h-5 w-5' />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onSelect={() => handleLocaleChange('en')}>
                                    English
                                </DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => handleLocaleChange('tr')}>
                                    Türkçe
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex items-center md:hidden'>
                        <Button variant='ghost' size='icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='w-full max-w-7xl mx-auto px-4 pb-4 md:hidden'>
                        <div className='flex flex-col space-y-4'>
                            <Button
                                onClick={() => {
                                    setContactModalOpen(true);
                                    setIsMenuOpen(false);
                                }}
                                className='w-full bg-brand-blue text-white hover:bg-brand-blue/90 dark:bg-accent-blue dark:text-white dark:hover:bg-accent-blue/90'>
                                {navContent.contact[locale]}
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant='outline'
                                        className='w-full bg-white hover:bg-gray-100 dark:bg-transparent'>
                                        <Languages className='mr-2 h-5 w-5' />
                                        <span>{locale === 'tr' ? 'Dil Değiştir' : 'Change Language'}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='w-[calc(100vw-2rem)]'>
                                    <DropdownMenuItem onSelect={() => handleLocaleChange('en')}>
                                        English
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onSelect={() => handleLocaleChange('tr')}>
                                        Türkçe
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                )}
            </nav>

            <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />
        </>
    );
};

export default Navbar;
