// Lütfen dikkat: Bazı veriler geliştirme aşamasında olduğu için yer tutucudur.
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;
  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img: string;
  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string;
    imageAlt?: string;
    locale?: string;
    type?: string;
    twitterCard?: string;
    robots?: string;
    themeColor?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: 'Arda Demir',
  domain: 'acevyn.com', // Kendi domaininize göre güncelleyebilirsiniz
  author: 'Arda Demir',
  description: 'Faydalı ve estetik web deneyimleri oluşturan Full Stack geliştirici. ML ve AI üzerine çalışmalar yapıyor.',
  about:
    'Ben, yeni şeyler inşa etmeyi seven bir Full Stack geliştiriciyim. Boş zamanlarımda ücretsiz uygulamalar ve araçlar geliştiriyorum. Şu anki odak noktam, problem çözme yeteneklerimi genişletmek için Makine Öğrenimi (ML) ve Yapay Zeka (AI) dünyasını derinlemesine keşfetmek. İş birliği ve yeni zorluklara her zaman açığım.',
  author_img: 'https://avatars.githubusercontent.com/u/250642458?v=4', // Kendi GitHub ID'nizle güncelleyin
  keywords: [
    'Arda Demir',
    'Full Stack Geliştirici',
    'Yazılım Mühendisi',
    'Portfolyo',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Makine Öğrenimi',
    'Yapay Zeka'
  ],
  ogImage: '/og.png',
  twitterHandle: '@acevyn',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://acevyn.com',
    github: 'https://github.com/acevyn',
    linkedin: 'https://www.linkedin.com/in/acevyn/',
    tips: 'https://pay.acevyn.com',
    email: 'mailto:acevyns@haycraft.com.tr',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/acevyn', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/acevyn/', icon: 'linkedin' },
    { label: 'Web Sitesi', url: 'https://acevyn.com', icon: 'globe' },
    { label: 'Destek', url: 'https://pay.acevyn.com', icon: 'coffee' },
  ],
  navigation: [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımda', href: '/about' },
    { label: 'Projeler', href: '/projects' },
    { label: 'Yazılar', href: '/posts' },
    { label: 'Chat', href: '/chat' },
    { label: 'İletişim', href: '/contact' }
  ],

  seo: {
    title: 'Acevyn | Full Stack Geliştirici',
    description: 'Faydalı ve estetik web deneyimleri oluşturan Full Stack geliştirici. ML ve AI üzerine çalışmalar yapıyor.',
    keywords: [
      'Arda Demir',
      'Full Stack Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'Machine Learning',
      'AI'
    ],
    canonical: 'https://acevyn.com',
    image: '/og.png',
    imageAlt: "Acevyn - Full Stack Geliştirici",
    locale: 'tr_TR',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: {
      default: seo.title,
      template: `%s | ${siteName}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: 'website',
      locale: seo.locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      robots: seo.robots ?? 'index,follow',
      'theme-color': seo.themeColor ?? '#0f172a',
      'og:image:alt': seo.imageAlt ?? siteName,
    },
  };

  return { ...base, ...overrides };
}

export type { Metadata };