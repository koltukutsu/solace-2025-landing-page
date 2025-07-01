import type { SolaceContent } from '@/types/locales';

export const solaceContent: SolaceContent = {
    navigation: {
        home: {
            tr: 'Ana Sayfa',
            en: 'Home'
        },
        about: {
            tr: 'Hakkımızda',
            en: 'About'
        },
        products: {
            tr: 'Ürünler',
            en: 'Products'
        },
        contact: {
            tr: 'İletişime Geçin',
            en: 'Contact Us'
        },
        demo: {
            tr: 'Demo Talep Et',
            en: 'Request Demo'
        },
        language: {
            tr: 'Dil',
            en: 'Language'
        }
    },

    hero: {
        headline: {
            tr: 'Teknolojiyi Konuşma Kolaylığında',
            en: 'Technology at the Ease of'
        },
        subheadline: {
            tr: 'Sunuyoruz',
            en: 'Natural Conversation'
        },
        description: {
            tr: 'Solace, akıllı mekanları sezgisel arkadaşlara dönüştürür. Uygulama yok, karışıklık yok. Sadece konuşun.',
            en: 'Solace creates AI-powered systems that turn smart spaces into intuitive companions. No apps, no confusion. Just talk.'
        },
        primaryCTA: {
            tr: 'Demo Talep Et',
            en: 'Request Demo'
        },
        secondaryCTA: {
            tr: 'Ürünleri Keşfet',
            en: 'Explore Products'
        }
    },

    problem: {
        headline: {
            tr: 'Teknoloji Karmaşık Olmak Zorunda Değil',
            en: "Technology Doesn't Have to Be Complex"
        },
        subtitle: {
            tr: 'Günümüzde akıllı teknolojiler çok karmaşık ve kullanıcı dostu değil',
            en: "Today's smart technologies are often complex and not user-friendly"
        },
        problems: {
            tr: [
                'Karmaşık uygulamalar ve dokunmatik ekranlar',
                'Farklı dillerde iletişim zorluğu',
                'Yaşlı kullanıcılar için erişilebilirlik sorunları',
                'Teknolojik cihazlar arası uyumsuzluk'
            ],
            en: [
                'Complex apps and touchscreen interfaces',
                'Communication barriers in different languages',
                'Accessibility issues for elderly users',
                'Incompatibility between technological devices'
            ]
        },
        empathyQuote: {
            tr: 'Teknoloji konuştuğumu anlayamıyorsa, kimin için var?',
            en: "If technology can't understand what I'm saying, who is it for?"
        }
    },

    values: {
        headline: {
            tr: 'Değerlerimiz',
            en: 'Our Values'
        },
        subtitle: {
            tr: 'İnsan odaklı, ses destekli, gizlilik saygılı teknoloji geliştiriyoruz',
            en: 'We develop human-first, voice-powered, privacy-respecting technology'
        },
        values: [
            {
                icon: '👤',
                title: {
                    tr: 'İnsan Odaklı',
                    en: 'Human-First'
                },
                description: {
                    tr: 'Teknoloji insanlara hizmet etmeli, insanlar teknolojiye değil',
                    en: 'Technology should serve people, not the other way around'
                }
            },
            {
                icon: '🎤',
                title: {
                    tr: 'Ses Destekli',
                    en: 'Voice-Powered'
                },
                description: {
                    tr: 'Doğal konuşma, teknolojiye erişimin en kolay yolu',
                    en: 'Natural conversation is the easiest way to access technology'
                }
            },
            {
                icon: '🔒',
                title: {
                    tr: 'Gizlilik Saygılı',
                    en: 'Privacy-Respecting'
                },
                description: {
                    tr: 'Verileriniz sizindir, hibrit mimari ile güvenlik önceliğimiz',
                    en: 'Your data is yours, security is our priority with hybrid architecture'
                }
            },
            {
                icon: '✨',
                title: {
                    tr: 'Sezgisel Tasarım',
                    en: 'Intuitive Design'
                },
                description: {
                    tr: 'Karmaşıklığı basitlikle değiştiren, herkesin anlayabileceği arayüzler',
                    en: 'Interfaces that replace complexity with simplicity, understandable by everyone'
                }
            }
        ],
        empathyLine: {
            tr: 'Solace ile karmaşıklık konuşmaya dönüşür.',
            en: 'With Solace, complexity becomes conversation.'
        }
    },

    missionVision: {
        mission: {
            tr: 'Teknolojiyi, ses temelli ve sezgisel etkileşimlerle insanlaştırmak.',
            en: 'To humanize technology through voice-based, intuitive interactions.'
        },
        vision: {
            tr: 'İnsanların teknolojiyle, birbiriyle konuşur gibi iletişim kurduğu bir dünya.',
            en: 'A world where people interact with technology as naturally as they speak to each other.'
        }
    },

    products: {
        headline: {
            tr: 'Ürünlerimiz',
            en: 'Our Products'
        },
        subtitle: {
            tr: 'İki ana ürünümüzle akıllı mekanları konuşmaya dönüştürüyoruz',
            en: 'Transforming smart spaces into conversations with our two main products'
        },
        products: [
            {
                name: 'ENSI',
                subtitle: {
                    tr: 'Akıllı Ev Sistemi',
                    en: 'Smart Home System'
                },
                description: {
                    tr: 'Sizi anlayan ev. Yerel işlemcili hub ve bağlamsal sesli asistan ile evinizi akıllı hale getirin.',
                    en: 'Your home, now listening. A context-aware AI assistant powered by a local hub that makes your home truly smart.'
                },
                features: {
                    tr: [
                        'Bağlamsal sesli asistan',
                        "Yerel işlem hub'ı",
                        'Çoklu protokol uyumluluğu (KNX, Matter, Zigbee)',
                        'Gizlilik öncelikli mimari',
                        'Doğal konuşma arayüzü'
                    ],
                    en: [
                        'Context-aware voice assistant',
                        'Local processing hub',
                        'Multi-protocol compatibility (KNX, Matter, Zigbee)',
                        'Privacy-first architecture',
                        'Natural conversation interface'
                    ]
                },
                ctaText: {
                    tr: "ENSI'yi Keşfet",
                    en: 'Explore ENSI'
                },
                logoSrc: '/branding/ensi_logo.png',
                link: 'https://ensihome.solace.com.tr'
            },
            {
                name: 'EMA',
                subtitle: {
                    tr: 'Fiziksel Mekanlar için AI',
                    en: 'AI for Physical Spaces'
                },
                description: {
                    tr: 'Mağaza içinde konuşarak ürün bulma, bilgi alma—dokunmadan, zahmetsizce. Müşterileriniz için sesli alışveriş asistanı.',
                    en: 'Conversational assistant that helps customers find products and information—just by talking. A voice shopping assistant for your customers.'
                },
                features: {
                    tr: [
                        'Çok dilli konuşma (5 dil)',
                        'Sesle ürün keşfi',
                        'Gerçek zamanlı stok entegrasyonu',
                        'Erişilebilirlik odaklı tasarım',
                        'Müşteri analitikleri ve öngörüler'
                    ],
                    en: [
                        'Multilingual conversation (5 languages)',
                        'Voice-powered product discovery',
                        'Real-time inventory integration',
                        'Accessibility-focused design',
                        'Customer analytics and insights'
                    ]
                },
                ctaText: {
                    tr: "EMA'yı Keşfet",
                    en: 'Explore EMA'
                },
                logoSrc: '/branding/ema_logo.png',
                link: 'https://ema.solace.com.tr'
            }
        ],
        bottomStatement: {
            tr: 'Her iki ürün de Solace\'ın "konuşma temelli teknoloji" vizyonunu hayata geçiriyor.',
            en: 'Both products bring Solace\'s "conversation-based technology" vision to life.'
        }
    },

    team: {
        headline: {
            tr: 'Takımımız',
            en: 'Our Team'
        },
        subtitle: {
            tr: 'Girişimci ve teknik uzmanlık birleşimi ile global vizyonlu yerel geliştirme',
            en: 'Entrepreneurial and technical expertise combined with local development and global vision'
        },
        highlights: [
            {
                icon: '🧠',
                text: {
                    tr: 'Yapay Zeka ve Ses İşleme Uzmanlığı',
                    en: 'Artificial Intelligence and Voice Processing Expertise'
                }
            },
            {
                icon: '🔧',
                text: {
                    tr: 'Donanım ve IoT Geliştirme Deneyimi',
                    en: 'Hardware and IoT Development Experience'
                }
            },
            {
                icon: '🚀',
                text: {
                    tr: 'B2B Ürün Stratejisi ve Pazarlama',
                    en: 'B2B Product Strategy and Marketing'
                }
            }
        ],
        credibilityStatement: {
            tr: 'Kanıtlanmış geçmişe sahip girişimci ve teknik uzmanlık ile geliştiriyoruz.',
            en: 'We develop with proven entrepreneurial and technical expertise background.'
        }
    },

    proof: {
        headline: {
            tr: 'Güvenilir Traction',
            en: 'Proven Traction'
        },
        subtitle: {
            tr: 'Gerçek dünya dağıtımı ve kanıtlanmış sonuçlar',
            en: 'Real-world deployment and proven results'
        },
        tractionPoints: [
            {
                icon: '🇹🇷',
                text: {
                    tr: 'Türkiye genelinde 5+ pilot kurulum',
                    en: '5+ pilot installations across Turkey'
                }
            },
            {
                icon: '🤝',
                text: {
                    tr: 'Kurulan distribütör ortaklıkları',
                    en: 'Established distributor partnerships'
                }
            },
            {
                icon: '🏭',
                text: {
                    tr: 'Şirket içi donanım geliştirme',
                    en: 'In-house hardware development'
                }
            },
            {
                icon: '🔌',
                text: {
                    tr: 'Ana standartlarla protokol uyumluluğu',
                    en: 'Protocol compatibility with major standards'
                }
            }
        ],
        trustMessage: {
            tr: "Türkiye'de geliştirilen, dünyaya açılan teknoloji.",
            en: 'Technology developed in Turkey, expanding to the world.'
        }
    },

    cta: {
        headline: {
            tr: 'Solace ile Tanışın',
            en: 'Meet Solace'
        },
        supportTagline: {
            tr: 'Bugün konuşmaya başlayın, teknolojinin gücünü hemen hissedin.',
            en: 'Start talking today, feel the power of technology right now.'
        },
        ctaButtons: [
            {
                text: {
                    tr: 'Demo Talep Et',
                    en: 'Request Demo'
                },
                variant: 'primary'
            },
            {
                text: {
                    tr: 'İletişime Geç',
                    en: 'Get in Touch'
                },
                variant: 'secondary'
            }
        ]
    },

    footer: {
        tagline: {
            tr: 'Teknolojiyi konuşma kolaylığında sunuyoruz.',
            en: 'Delivering technology with the ease of conversation.'
        },
        legal: {
            tr: 'Yasal',
            en: 'Legal'
        },
        contact: {
            tr: 'İletişim',
            en: 'Contact'
        },
        copyright: {
            tr: '© 2025 Solace Teknoloji. Tüm hakları saklıdır.',
            en: '© 2025 Solace Technology. All rights reserved.'
        },
        links: {
            dataProtection: {
                tr: 'KVKK',
                en: 'Data Protection'
            },
            privacyPolicy: {
                tr: 'Gizlilik Politikası',
                en: 'Privacy Policy'
            },
            cookiePolicy: {
                tr: 'Çerez Politikası',
                en: 'Cookie Policy'
            }
        },
        socials: {
            tr: ['LinkedIn', 'Instagram', 'YouTube'],
            en: ['LinkedIn', 'Instagram', 'YouTube']
        },
        contactInfo: {
            email: 'info@solace.com.tr',
            website: 'solace.com.tr'
        }
    }
};
