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

export interface ProblemContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    problems: LocalizedArray;
}

export interface ProblemDeepDiveContent {
    headline: LocalizedContent;
    problems: LocalizedArray;
    solutionStatement: LocalizedContent;
}

export interface ValuesContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    values: Array<{
        icon: string;
        title: LocalizedContent;
        description: LocalizedContent;
    }>;
}

export interface MissionVisionContent {
    mission: LocalizedContent;
    vision: LocalizedContent;
    missionLabel: LocalizedContent;
    visionLabel: LocalizedContent;
    missionTitle: LocalizedContent;
    visionTitle: LocalizedContent;
}

export interface TechnologyPlatformContent {
    headline: LocalizedContent;
    subtitle: LocalizedContent;
    features: Array<{
        title: LocalizedContent;
        description: LocalizedContent;
    }>;
}

export interface BusinessModelContent {
    headline: LocalizedContent;
    models: Array<{
        title: LocalizedContent;
        description: LocalizedContent;
    }>;
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
    companyName: LocalizedContent;
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
    problemDeepDive: ProblemDeepDiveContent;
    values: ValuesContent;
    missionVision: MissionVisionContent;
    technologyPlatform: TechnologyPlatformContent;
    businessModel: BusinessModelContent;
    cta: CtaContent;
    footer: FooterContent;
    contactModal: ContactModalContent;
    products: ProductSectionContent;
}

export interface ContactModalContent {
    title: LocalizedContent;
    description: LocalizedContent;
    nameLabel: LocalizedContent;
    namePlaceholder: LocalizedContent;
    emailLabel: LocalizedContent;
    emailPlaceholder: LocalizedContent;
    submitButton: {
        initial: LocalizedContent;
        loading: LocalizedContent;
        success: LocalizedContent;
    };
    toast: {
        error: {
            fillAllFields: LocalizedContent;
            invalidEmail: LocalizedContent;
            generic: LocalizedContent;
            connection: LocalizedContent;
        };
        success: LocalizedContent;
    };
    successAnimation: {
        title: LocalizedContent;
        description: LocalizedContent;
    };
}

export interface ProductSectionContent {
    headline: LocalizedContent;
    products: Array<{
        name: string;
        logo: string;
        link: string;
        headline: LocalizedContent;
        description: LocalizedContent;
        features: LocalizedArray;
        learnMore: LocalizedContent;
    }>;
}
