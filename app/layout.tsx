import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Scholarship Detective | Étudiez en Chine – Bourses & Accompagnement',
  description:
    'Scholarship Detective accompagne les étudiants français pour étudier en Chine : bourses CSC, placement universités top, suivi personnalisé de A à Z. Consultation gratuite sous 24h.',
  keywords: [
    'études en Chine pour étudiants français',
    'bourse étude Chine français',
    'université Chine francophone',
    'bourse CSC francophone',
    'orientation études Chine',
  ],
  metadataBase: new URL('https://scholarshipdetective.fr'),
  alternates: {
    canonical: 'https://scholarshipdetective.fr/',
  },
  openGraph: {
    title: 'Scholarship Detective | Étudiez en Chine',
    description:
      'Scholarship Detective accompagne les étudiants français pour étudier en Chine : bourses CSC, placement universités top, suivi personnalisé de A à Z. Consultation gratuite sous 24h.',
    url: 'https://scholarshipdetective.fr',
    siteName: 'Scholarship Detective',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Scholarship Detective - Étudiez en Chine',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship Detective | Étudiez en Chine',
    description:
      'Bourses CSC, placement universités top en Chine. Consultation gratuite sous 24h.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'EducationalOrganization'],
      '@id': 'https://scholarshipdetective.fr/#organization',
      name: 'Scholarship Detective',
      url: 'https://scholarshipdetective.fr',
      logo: 'https://scholarshipdetective.fr/logo.png',
      description:
        'Bureau d\'orientation spécialisé dans l\'accompagnement des étudiants français souhaitant étudier en Chine.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'FR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'secretariat@scholarshipdetective.fr',
        contactType: 'customer service',
        availableLanguage: 'French',
      },
      sameAs: [
        'https://www.instagram.com/scholarshipdetective',
        'https://www.facebook.com/scholarshipdetective',
        'https://www.linkedin.com/company/scholarshipdetective',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Suis-je éligible à la bourse CSC sans parler chinois ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, de nombreux programmes en Chine sont dispensés en anglais, notamment dans les grandes universités. La bourse CSC ne requiert pas de niveau en mandarin à l\'entrée. Des cours de chinois intensifs sont souvent inclus la première année.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le niveau académique requis pour étudier en Chine ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les exigences varient selon l\'université et le programme. Généralement, un bon dossier académique (mention Bien ou équivalent) est apprécié.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que couvre exactement la bourse CSC ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La bourse CSC couvre les frais de scolarité intégraux, le logement sur le campus, une allocation mensuelle de 2 500 à 3 500 CNY et une assurance médicale de base.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le coût de l\'accompagnement Scholarship Detective ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nous proposons une première consultation entièrement gratuite. Nos honoraires d\'accompagnement sont discutés lors de ce premier entretien.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
