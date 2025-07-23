import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/testimonials/HeroSection';
import TestimonialsGrid from '../../components/testimonials/TestimonialsGrid';
import TestimonialForm from '../../components/testimonials/TestimonialForm';
import CTASection from '../../components/testimonials/CTASection';

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'am' }
  ];
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <TestimonialsGrid />
      <TestimonialForm />
      <CTASection />
      <Footer />
    </main>
  );
}
