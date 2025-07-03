export async function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  
  return {
    title: locale === 'en' ? 'Our Services | Ziya Escort Services' : 'አገልግሎቶቻችን | ዚያ ኤስኮርት አገልግሎቶች',
    description: locale === 'en' 
      ? 'Discover our range of premium massage and escort services' 
      : 'የኛን የከፍተኛ ደረጃ የማሳጅ እና የኤስኮርት አገልግሎቶች ይፈልጉ'
  };
}
