export type Locale = 'tr' | 'en';

export interface LocalizedContent {
    tr: string;
    en: string;
}

export interface LocalizedArray {
    tr: string[];
    en: string[];
}

export interface NavigationContent {
    home: LocalizedContent;
    about: LocalizedContent;
    products: LocalizedContent;
    contact: LocalizedContent;
    demo: LocalizedContent;
    language: LocalizedContent;
}

export interface HeroContent {
    headline: LocalizedContent;
    subheadline: LocalizedContent;
    description: LocalizedContent;
    primaryCTA: LocalizedContent;
    secondaryCTA: LocalizedContent;
}

export interface Product {
    name: string;
    subtitle: LocalizedContent;
    description: LocalizedContent;
    features: LocalizedArray;
    ctaText: LocalizedContent;
    logoSrc: string;
    link: string;
}

export interface ProductsContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    products: Product[];
    bottomStatement: LocalizedContent;
}

export interface ProblemContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    problems: LocalizedArray;
    empathyQuote: LocalizedContent;
}

export interface ValuesContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    values: Array<{
        icon: string;
        title: LocalizedContent;
        description: LocalizedContent;
    }>;
    empathyLine: LocalizedContent;
}

export interface MissionVisionContent {
    mission: LocalizedContent;
    vision: LocalizedContent;
}

export interface TeamContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    highlights: Array<{
        icon: string;
        text: LocalizedContent;
    }>;
    credibilityStatement: LocalizedContent;
}

export interface ProofContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    tractionPoints: Array<{
        icon: string;
        text: LocalizedContent;
    }>;
    trustMessage: LocalizedContent;
}

export interface CtaContent {
    headline: LocalizedContent;
    supportTagline: LocalizedContent;
    ctaButtons: Array<{
        text: LocalizedContent;
        variant: string;
    }>;
}

export interface FooterContent {
    tagline: LocalizedContent;
    legal: LocalizedContent;
    contact: LocalizedContent;
    copyright: LocalizedContent;
    links: {
        dataProtection: LocalizedContent;
        privacyPolicy: LocalizedContent;
        cookiePolicy: LocalizedContent;
    };
    socials: LocalizedArray;
    contactInfo: {
        email: string;
        website: string;
    };
}

export interface SolaceContent {
    navigation: NavigationContent;
    hero: HeroContent;
    problem: ProblemContent;
    values: ValuesContent;
    missionVision: MissionVisionContent;
    products: ProductsContent;
    team: TeamContent;
    proof: ProofContent;
    cta: CtaContent;
    footer: FooterContent;
}
