import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define supported locales
const locales = ['tr', 'en'];
const defaultLocale = 'tr';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest): string {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // If pathname is missing locale, return default locale
    if (pathnameIsMissingLocale) {
        // Get locale from Accept-Language header or return default
        const acceptLanguage = request.headers.get('accept-language');
        if (acceptLanguage) {
            const locale = acceptLanguage
                .split(',')
                .map((lang) => lang.split(';')[0].trim())
                .find((lang) => locales.includes(lang.split('-')[0]));
            return locale?.split('-')[0] || defaultLocale;
        }
        return defaultLocale;
    }

    // Extract locale from pathname
    const segments = pathname.split('/');
    return segments[1];
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Special case: always redirect root "/" to "/tr"
    if (pathname === '/') {
        return NextResponse.redirect(new URL('/tr', request.url));
    }

    // Check if pathname already includes locale
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    const newPathname = `/${locale}${pathname}`;

    return NextResponse.redirect(new URL(newPathname, request.url));
}

export const config = {
    // Matcher ignoring `/_next/`, `/api/`, `/favicon.ico`, etc.
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.ico$|.*\\.webp$|.*\\.avif$).*)'
    ]
};
