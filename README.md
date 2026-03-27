# Scholarship Detective — Landing Page

Bureau d'orientation officiel pour les étudiants français souhaitant étudier en Chine.

## Prérequis

- [Node.js 18+](https://nodejs.org/)
- Compte [Resend](https://resend.com) pour l'envoi d'emails
- Compte [Vercel](https://vercel.com) pour le déploiement

## Installation

```bash
# Cloner le projet
cd scholarshipdetective

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.local .env.local
# Éditer .env.local et renseigner vos vraies clés
```

## Variables d'environnement (`.env.local`)

```env
RESEND_API_KEY=re_xxxxxxxxxxxx          # Clé API Resend
RECIPIENT_EMAIL=secretariat@scholarshipdetective.fr
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX         # Google Analytics 4 ID
NEXT_PUBLIC_SITE_URL=https://scholarshipdetective.fr
```

## Lancer en développement

```bash
npm run dev
# → http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Déploiement Vercel

1. Pousser le code sur GitHub
2. Importer le repo sur Vercel
3. Configurer les variables d'environnement dans Vercel Dashboard
4. Déployer

## Images à remplacer

Placez vos vraies images dans `/public/images/` :

| Fichier | Dimensions recommandées | Description |
|---|---|---|
| `/public/logo.png` | — | Logo fourni (fond noir) |
| `/public/images/campus-bg.jpg` | 1920×1080 WebP | Image de fond hero (campus chinois) |
| `/public/images/campus-hero.jpg` | 800×600 WebP | Image colonne droite hero |
| `/public/og-image.jpg` | 1200×630 JPG | Image Open Graph |
| `/public/favicon.ico` | 32×32 | Favicon |
| `/public/apple-touch-icon.png` | 180×180 | Apple touch icon |

## Configuration Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Vérifier votre domaine `scholarshipdetective.fr`
3. Créer une clé API
4. L'ajouter dans `.env.local` : `RESEND_API_KEY=re_...`
5. Mettre à jour le champ `from` dans `app/api/contact/route.ts`

## Structure des fichiers

```
app/
├── layout.tsx          # Layout global, metadata, JSON-LD
├── page.tsx            # Landing page principale
├── globals.css         # Styles globaux + Tailwind
├── sitemap.ts          # Sitemap dynamique
├── robots.ts           # Robots.txt
├── merci/
│   └── page.tsx        # Page de remerciement
└── api/
    └── contact/
        └── route.ts    # API endpoint formulaire + email

components/
├── layout/
│   ├── Header.tsx      # Navigation + burger menu
│   └── Footer.tsx      # Footer complet
├── sections/
│   ├── Hero.tsx        # S02 — Hero section
│   ├── TrustBar.tsx    # S03 — Logos universités
│   ├── ProblemSolution.tsx  # S04
│   ├── Services.tsx    # S05 — 3 cartes services
│   ├── HowItWorks.tsx  # S06 — 4 étapes
│   ├── Universities.tsx # S07 — Grille universités
│   ├── Scholarships.tsx # S08 — Cartes bourses
│   ├── Testimonials.tsx # S09 — Slider témoignages
│   ├── FAQ.tsx          # S10 — Accordéon FAQ
│   └── ContactForm.tsx  # S11 — Formulaire
└── ui/
    ├── SectionWrapper.tsx
    ├── SectionTitle.tsx
    └── CTAButton.tsx

lib/
└── email.ts            # Templates HTML emails Resend
```

## Personnalisation

- **Couleurs** : `tailwind.config.js` — Primary Blue `#1A3A8F`, Orange `#E8931A`
- **Témoignages** : `components/sections/Testimonials.tsx` — array `testimonials`
- **Universités** : `components/sections/Universities.tsx` — array `universities`
- **FAQ** : `components/sections/FAQ.tsx` — array `faqs`
- **Email destinataire** : `.env.local` → `RECIPIENT_EMAIL`
