'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useLocale } from '@/hooks/useLocale';
import { solaceContent } from '@/lib/locales';
import { Button } from '@/registry/new-york-v4/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/registry/new-york-v4/ui/dialog';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/registry/new-york-v4/ui/drawer';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Label } from '@/registry/new-york-v4/ui/label';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Loader2, Mail, User } from 'lucide-react';
import { toast } from 'sonner';

interface ContactModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
    const { locale } = useLocale();
    const content = solaceContent.contactModal;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email) {
            toast.error(content.toast.error.fillAllFields[locale]);

            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error(content.toast.error.invalidEmail[locale]);

            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch('/api/mailchimp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || content.toast.error.generic[locale]);
                setIsLoading(false);

                return;
            }

            setIsLoading(false);
            setIsSuccess(true);
            toast.success(content.toast.success[locale]);

            setTimeout(() => {
                setName('');
                setEmail('');
                setIsSuccess(false);
                onOpenChange(false);
            }, 2000);
        } catch (error) {
            setIsLoading(false);
            toast.error(content.toast.error.connection[locale]);
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setIsSuccess(false);
    };

    const Bubbles = () => (
        <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden'>
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    className='absolute rounded-full bg-accent-blue/10 dark:bg-accent-blue/15'
                    style={{
                        width: `${Math.random() * 150 + 80}px`,
                        height: `${Math.random() * 150 + 80}px`,
                        top: `${i % 2 === 0 ? Math.random() * 40 : 50 + Math.random() * 40}%`,
                        left: `${i % 2 === 0 ? 5 + Math.random() * 30 : 65 + Math.random() * 30}%`,
                        animation: `bubble-float ${Math.random() * 10 + 15}s infinite ease-in-out`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );

    const SuccessAnimation = () => (
        <motion.div
            className='absolute inset-0 z-10 flex items-center justify-center bg-brand-blue'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
                className='flex flex-col items-center text-white'
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}>
                <motion.div
                    className='mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white'
                    initial={{ borderWidth: 0 }}
                    animate={{ borderWidth: 4 }}
                    transition={{ delay: 0.4, duration: 0.4 }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6, type: 'spring' }}>
                        <Check className='h-8 w-8' />
                    </motion.div>
                </motion.div>
                <motion.p
                    className='text-xl font-bold'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}>
                    {content.successAnimation.title[locale]}
                </motion.p>
                <motion.p
                    className='mt-1 text-sm opacity-90'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}>
                    {content.successAnimation.description[locale]}
                </motion.p>
            </motion.div>
        </motion.div>
    );

    const FormContent = () => (
        <form onSubmit={handleSubmit} className='relative px-8 pt-6 pb-6'>
            <div className='space-y-5'>
                <div>
                    <Label
                        htmlFor='name'
                        className='flex items-center gap-2 text-sm font-medium text-gray-300'>
                        <User className='h-4 w-4 text-brand-blue' />
                        {content.nameLabel[locale]}
                    </Label>
                    <Input
                        id='name'
                        placeholder={content.namePlaceholder[locale]}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={isLoading || isSuccess}
                        className='mt-2 rounded-xl border-slate-700 bg-slate-900 py-6 pr-3 pl-3 text-white focus:border-brand-blue focus:ring-brand-blue/20'
                    />
                </div>
                <div>
                    <Label
                        htmlFor='email'
                        className='flex items-center gap-2 text-sm font-medium text-gray-300'>
                        <Mail className='h-4 w-4 text-brand-blue' />
                        {content.emailLabel[locale]}
                    </Label>
                    <Input
                        id='email'
                        type='email'
                        placeholder={content.emailPlaceholder[locale]}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading || isSuccess}
                        className='mt-2 rounded-xl border-slate-700 bg-slate-900 py-6 pr-3 pl-3 text-white focus:border-brand-blue focus:ring-brand-blue/20'
                    />
                </div>
            </div>

            <div className='mt-8'>
                <Button
                    type='submit'
                    disabled={isLoading || isSuccess}
                    className='w-full rounded-full border-0 bg-brand-blue py-6 text-white shadow-md transition-all hover:bg-brand-blue/90 focus:ring-4 focus:ring-brand-blue/30'>
                    {isLoading ? (
                        <>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                            {content.submitButton.loading[locale]}
                        </>
                    ) : isSuccess ? (
                        <>
                            <Check className='mr-2 h-4 w-4' />
                            {content.submitButton.success[locale]}
                        </>
                    ) : (
                        content.submitButton.initial[locale]
                    )}
                </Button>
            </div>

            <AnimatePresence>{isSuccess && <SuccessAnimation />}</AnimatePresence>
        </form>
    );

    if (isDesktop) {
        return (
            <Dialog
                open={open}
                onOpenChange={(open) => {
                    if (!open) resetForm();
                    onOpenChange(open);
                }}>
                <DialogContent className='overflow-hidden rounded-2xl border-0 bg-slate-950 p-0 shadow-lg sm:max-w-[480px]'>
                    <div className='relative'>
                        <DialogHeader className='relative overflow-hidden rounded-t-2xl bg-brand-blue/90 px-8 pt-12 pb-8 text-center'>
                            <Bubbles />
                            <div className='relative z-10 flex flex-col items-center'>
                                <div className='mb-6 h-20 w-20 overflow-hidden rounded-2xl bg-white p-3'>
                                    <Image
                                        src='/branding/solace_logo_small.svg'
                                        alt='Solace Logo'
                                        width={80}
                                        height={80}
                                        className='h-full w-full object-contain'
                                    />
                                </div>

                                <DialogTitle className='mb-2 text-2xl font-bold text-white'>
                                    {content.title[locale]}
                                </DialogTitle>
                                <DialogDescription className='max-w-sm text-center text-sm text-blue-100'>
                                    {content.description[locale]}
                                </DialogDescription>
                            </div>
                        </DialogHeader>

                        <FormContent />
                    </div>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Drawer
            open={open}
            onOpenChange={(open) => {
                if (!open) resetForm();
                onOpenChange(open);
            }}>
            <DrawerContent>
                <DrawerHeader className='text-left'>
                    <DrawerTitle>{content.title[locale]}</DrawerTitle>
                    <DrawerDescription>{content.description[locale]}</DrawerDescription>
                </DrawerHeader>
                <div className='p-4'>
                    <FormContent />
                </div>
                <DrawerFooter className='pt-2'>
                    <DrawerClose asChild>
                        <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
