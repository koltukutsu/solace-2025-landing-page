'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/types/locales';

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();

    // Extract locale from pathname
    const getLocaleFromPath = (): Locale => {
        const segments = pathname.split('/');
        const pathLocale = segments[1];
        return (pathLocale === 'tr' || pathLocale === 'en') ? pathLocale : 'tr';
    };

    const [locale, setLocaleState] = useState<Locale>(getLocaleFromPath());

    // Update locale when pathname changes
    useEffect(() => {
        const newLocale = getLocaleFromPath();
        if (newLocale !== locale) {
            setLocaleState(newLocale);
        }
    }, [pathname, locale]);

    const setLocale = (newLocale: Locale) => {
        const segments = pathname.split('/');
        segments[1] = newLocale;
        const newPathname = segments.join('/');
        router.push(newPathname);
    };

    const toggleLocale = () => {
        const newLocale = locale === 'tr' ? 'en' : 'tr';
        setLocale(newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (context === undefined) {
        throw new Error('useLocale must be used within a LocaleProvider');
    }
    return context;
} 