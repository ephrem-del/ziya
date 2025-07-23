import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/home/HeroSection';
import LocationSection from '../components/home/LocationSection';
import FeaturedServices from '../components/home/FeaturedServices';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'am' }
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <FeaturedServices />
      <LocationSection />
      <Footer />
    </main>
  );
}
