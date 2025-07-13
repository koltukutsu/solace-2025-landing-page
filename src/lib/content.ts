// Import types for use in this file
import type {
    CtaContent,
    FooterContent,
    HeroContent,
    Locale,
    LocalizedArray,
    LocalizedContent,
    MissionVisionContent,
    NavigationContent,
    ProblemContent,
    SolaceContent,
    ValuesContent
} from '@/types/locales';

// Export the new locale-based content system
export { solaceContent } from '@/lib/locales';

// Legacy exports for backward compatibility
export type Language = 'tr' | 'en';

export type {
    Locale,
    LocalizedContent,
    LocalizedArray,
    SolaceContent,
    NavigationContent,
    HeroContent,
    ProblemContent,
    ValuesContent,
    MissionVisionContent,
    CtaContent,
    FooterContent
};

export interface ProductInfo {
    name: string;
    logoSrc: string;
    subtitle: LocalizedContent;
    description: LocalizedContent;
    features: LocalizedArray;
    ctaText: LocalizedContent;
    link: string;
}

export interface ValueCard {
    icon: string;
    title: LocalizedContent;
    description: LocalizedContent;
}

export interface TractionPoint {
    icon: string;
    text: LocalizedContent;
}

export interface TeamHighlight {
    icon: string;
    text: LocalizedContent;
}

export interface HowItWorksStep {
    icon: string;
    title: LocalizedContent;
    description: LocalizedContent;
}
