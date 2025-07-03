import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Default to English if locale is not provided
  const resolvedLocale = locale || 'en';
  
  return {
    locale: resolvedLocale,
    messages: (await import(`@/messages/${resolvedLocale}/index.json`)).default
  };
});
