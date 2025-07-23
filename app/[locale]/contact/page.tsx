import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroSection from "../../components/contact/HeroSection";
import ContactInfo from "../../components/contact/ContactInfo";
import FaqSection from "../../components/contact/FaqSection";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "am" }];
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      {/* Contact Info Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <ContactInfo />
          </div>
        </div>
      </section>

      <FaqSection />
      <Footer />
    </main>
  );
}
