import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// Define supported locales
export const locales = ["en", "am"];

// Generate metadata with translated titles
export async function generateMetadata() {
  return {
    title: "BlackMerry Escort and Massage Services",
    description: "Premium escort and massage services tailored to your desires",
  };
}

// Define the valid locales that can be accessed
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate that the locale is supported
  if (!locales.includes(locale)) notFound();

  // Pre-load all messages to avoid dynamic imports
  const messages = {
    en: (await import(`../../messages/en/index.json`)).default,
    am: (await import(`../../messages/am/index.json`)).default
  }[locale];

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
