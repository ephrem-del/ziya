import '../globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/theme/ThemeProvider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

// Define supported locales
export const locales = ['en', 'am'];

// Generate metadata with translated titles
export async function generateMetadata(
  { params }: { params: { locale: string } }
) {
  // Extract locale parameter
  const locale = params.locale;

  // Validate that the locale is supported
  if (!locales.includes(locale)) notFound();

  // Load messages for the specific locale
  const messages = (await import(`../../messages/${locale}/index.json`)).default;

  return {
    title: locale === 'en' ? 'Ziya Escort Services' : 'ዚያ ኤስኮርት አገልግሎቶች',
    description: locale === 'en' 
      ? 'Premium escort services tailored to your desires' 
      : 'ለእርስዎ ፍላጎቶች የተዘጋጁ ከፍተኛ ጥራት ያላቸው ኤስኮርት አገልግሎቶች'
  };
}

// Define the valid locales that can be accessed
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Extract locale parameter
  const locale = params.locale;
  
  // Validate that the locale is supported
  if (!locales.includes(locale)) notFound();

  // Load messages for the specific locale
  const messages = (await import(`../../messages/${locale}/index.json`)).default;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
