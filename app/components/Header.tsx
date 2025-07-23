'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from './theme/ThemeProvider';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const t = useTranslations('common');
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle language switching
  const currentLocale = pathname.split('/')[1]; // Extract locale from pathname
  const switchLocale = currentLocale === 'en' ? 'am' : 'en';
  
  // Create the new path with the switched locale
  const switchLocalePath = pathname.replace(`/${currentLocale}`, `/${switchLocale}`);
  
  // Navigation links with locale prefix
  const navLinks = [
    { href: `/${currentLocale}`, label: t('home') },
    { href: `/${currentLocale}/services`, label: t('services') },
    { href: `/${currentLocale}/packages`, label: t('packages') },
    { href: `/${currentLocale}/testimonials`, label: t('testimonials') },
    { href: `/${currentLocale}/contact`, label: t('contact') },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${currentLocale}`} className="text-2xl font-bold text-pink-600 dark:text-pink-400">
              BlackMerry
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Theme and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
              aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <Link 
              href={switchLocalePath} 
              className="px-3 py-1 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition duration-300"
            >
              {switchLocale === 'en' ? 'English' : 'አማርኛ'}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 flex items-center space-x-2"
                >
                  {theme === 'dark' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-200">{t('lightMode')}</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-200">{t('darkMode')}</span>
                    </>
                  )}
                </button>
                <Link 
                  href={switchLocalePath} 
                  className="px-3 py-1 rounded-md bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-800 transition duration-300"
                >
                  {switchLocale === 'en' ? 'English' : 'አማርኛ'}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
