import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProblemSolution from '@/components/sections/ProblemSolution';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import Universities from '@/components/sections/Universities';
import Scholarships from '@/components/sections/Scholarships';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* S02 — Hero */}
        <Hero />

        {/* S03 — Barre de confiance */}
        <TrustBar />

        {/* S04 — Problème → Solution */}
        <ProblemSolution />

        {/* S05 — Nos Services */}
        <Services />

        {/* S06 — Comment ça Marche */}
        <HowItWorks />

        {/* S07 — Universités Partenaires */}
        <Universities />

        {/* S08 — Bourses Disponibles */}
        <Scholarships />

        {/* S10 — FAQ */}
        <FAQ />

        {/* S11 — Formulaire de Contact */}
        <ContactForm />
      </main>

      {/* S12 — Footer */}
      <Footer />
    </>
  );
}
