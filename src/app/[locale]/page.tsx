import type { Metadata } from 'next';

import MainPage from '@/components/pages/main/MainPage';
import type { Locale } from '@/types/locales';

interface PageProps {
    params: Promise<{
        locale: Locale;
    }>;
}

export const metadata: Metadata = {
    title: 'Solace | Teknolojiyi konuşma kolaylığında sunuyoruz',
    description: 'Solace, akıllı mekanları sezgisel arkadaşlara dönüştürür. ENSI akıllı ev sistemi ve EMA fiziksel mekan AI\'ı ile konuşarak teknoloji kullanın.',
    keywords: ['Solace', 'ENSI', 'EMA', 'akıllı ev', 'sesli asistan', 'yapay zeka', 'konuşma teknolojisi', 'IoT'],
    authors: [{ name: 'Solace Technology Team' }],
    openGraph: {
        title: 'Solace | Teknolojiyi konuşma kolaylığında sunuyoruz',
        description: 'Solace, akıllı mekanları sezgisel arkadaşlara dönüştürür. ENSI akıllı ev sistemi ve EMA fiziksel mekan AI\'ı ile konuşarak teknoloji kullanın.',
        images: ['/branding/logo_big.png']
    },
    twitter: {
        title: 'Solace | Teknolojiyi konuşma kolaylığında sunuyoruz',
        description: 'Solace, akıllı mekanları sezgisel arkadaşlara dönüştürür. ENSI akıllı ev sistemi ve EMA fiziksel mekan AI\'ı ile konuşarak teknoloji kullanın.',
        images: ['/branding/logo_big.png'],
        card: 'summary_large_image'
    },
    icons: {
        icon: '/branding/logo_big.png',
        apple: '/branding/logo_big.png'
    }
};

export default async function Home({ params }: PageProps) {
    const { locale } = await params;
    return <MainPage />;
} 