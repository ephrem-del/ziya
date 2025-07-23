import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/services/HeroSection';
import MassageTypesSection from '../../components/services/MassageTypesSection';
import AdditionalServicesSection from '../../components/services/AdditionalServicesSection';
import FeaturesSection from '../../components/services/FeaturesSection';
import CTASection from '../../components/services/CTASection';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'am' }
  ];
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <MassageTypesSection />
      <AdditionalServicesSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
