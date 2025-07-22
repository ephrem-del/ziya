'use client';

import { useTranslations } from 'next-intl';
import PackageCard from './PackageCard';

export default function PackagesGrid() {
  const t = useTranslations('packages');
  
  // Define package IDs
  const packageIds = ['basic', 'premium', 'vip'];
  
  // Get features for each package from translations
  const getPackageFeatures = (packageId: string) => {
    return [
      t(`${packageId}.features.feature1`),
      t(`${packageId}.features.feature2`),
      t(`${packageId}.features.feature3`),
      t(`${packageId}.features.feature4`),
      ...(packageId === 'premium' ? [t(`${packageId}.features.feature5`)] : []),
      ...(packageId === 'vip' ? [t(`${packageId}.features.feature5`), t(`${packageId}.features.feature6`)] : [])
    ];
  };
  
  // Define packages
  const packages = packageIds.map(id => ({
    id,
    features: getPackageFeatures(id),
    popular: id === 'premium'
  }));
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard 
              key={pkg.id}
              id={pkg.id}
              features={pkg.features}
              popular={pkg.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
