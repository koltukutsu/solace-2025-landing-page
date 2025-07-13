import { solaceContent } from '@/lib/locales';
import MainPage from '@/components/pages/main/MainPage';
import type { Locale } from '@/types/locales';
import { Metadata } from 'next';

interface GenerateMetadataProps {
    params: Promise<{
        locale: Locale;
    }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
    const { locale } = await params;
    const { hero, navigation } = solaceContent;
    const title = `${navigation.home[locale]} | ${hero.headline[locale]}`;
    const description = hero.description[locale];

    return {
        title,
        description,
        keywords: [
            'Solace',
            'ENSI',
            'EMA',
            locale === 'tr' ? 'akıllı ev' : 'smart home',
            locale === 'tr' ? 'sesli asistan' : 'voice assistant',
            locale === 'tr' ? 'yapay zeka' : 'artificial intelligence',
            locale === 'tr' ? 'konuşma teknolojisi' : 'speech technology',
            'IoT'
        ],
        authors: [{ name: 'Solace Technology Team' }],
        openGraph: {
            title,
            description,
            images: ['/branding/logo_big.png']
        },
        twitter: {
            title,
            description,
            images: ['/branding/logo_big.png'],
            card: 'summary_large_image'
        },
        icons: {
            icon: '/branding/logo_big.png',
            apple: '/branding/logo_big.png'
        }
    };
}

interface PageProps {
    params: Promise<{
        locale: Locale;
    }>;
}

export default async function Home({ params }: PageProps) {
    const { locale } = await params;

    return <MainPage />;
}
