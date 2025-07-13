import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter, Manrope, Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import EmaModal from '@/components/EmaModal';
import { ToastProvider } from '@/providers/toast-provider';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';
import '@/styles/animations.css';

import type { Locale } from '@/types/locales';
import { LocaleProvider } from '@/hooks/useLocale';
import { Analytics } from '@/components/analytics';

// Elegant serif font for headlines and hero text - sophisticated and premium
const cormorant = Cormorant_Garamond({
    subsets: ['latin', 'latin-ext'], // Latin-ext supports Turkish characters
    variable: '--font-cormorant',
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap'
});

// Modern geometric sans-serif for body text - clean and readable
const manrope = Manrope({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-manrope',
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap'
});

// Clean sans-serif for UI elements and secondary text
const inter = Inter({
    subsets: ['latin', 'latin-ext'],
    variable: '--font-inter',
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap'
});

// Technical monospace font for code, if needed
const geistMono = localFont({
    src: '../fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'Solace | Teknolojiyi konuşma kolaylığında sunuyoruz',
    description:
        'Solace, akıllı mekanları sezgisel arkadaşlara dönüştürür. ENSI akıllı ev sistemi ve EMA fiziksel mekan AI\'ı ile konuşarak teknoloji kullanın.',
    keywords: 'Solace, ENSI, EMA, akıllı ev, sesli asistan, yapay zeka, konuşma teknolojisi, IoT',
    viewport: 'width=device-width, initial-scale=1',
    openGraph: {
        images: '/branding/logo_big.png'
    },
    twitter: {
        card: 'summary_large_image',
        images: '/branding/logo_big.png'
    }
};

interface LocaleLayoutProps {
    children: ReactNode;
    params: Promise<{
        locale: Locale;
    }>;
}

const LocaleLayout = async ({ children, params }: LocaleLayoutProps) => {
    const { locale } = await params;

    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang={locale}>
            <body
                className={`${cormorant.variable} ${manrope.variable} ${inter.variable} ${geistMono.variable} bg-futuristic-mesh text-foreground antialiased overflow-x-hidden`}>
                <ThemeProvider attribute='class'>
                    <LocaleProvider>
                        <Navbar />
                        {children}
                        {/* DEACTIVATED EMA MODAL FOR NOW */}
                        {/* <EmaModal
                            emaUrl="https://live.ema.solace.com.tr/greyder"
                            logoSrc="/branding/ema_logo.svg"
                            brandName="EMA"
                            themeColor="#0066ff"
                        /> */}
                        <Toaster position='top-center' richColors closeButton />
                    </LocaleProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default LocaleLayout;
