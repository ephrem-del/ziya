# Ziya Massage - Website Documentation

## Project Overview

This is a Next.js-based static website for Ziya Massage, featuring internationalization support for English and Amharic languages. The site showcases massage services, packages, testimonials, and contact information.

## Key Features

- **Internationalization**: Full support for English and Amharic languages
- **Static Export**: Configured for deployment on cPanel hosting
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Service Showcase**: Detailed information about massage services and packages
- **Testimonials**: Client reviews with a form for submitting new testimonials
- **Contact Information**: Phone number and location details

## Technology Stack

- **Framework**: Next.js 15.x
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Static Export**: Compatible with cPanel hosting

## Getting Started

### Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This will create a static export in the `out` directory, ready for deployment to cPanel hosting.

## Deployment

1. Build the project as described above
2. Upload the contents of the `out` directory to your cPanel hosting
3. Ensure the `.htaccess` file is included in the upload
4. Set the document root of your domain to point to the uploaded directory

## Project Structure

- `/app`: Main application code
  - `/[locale]`: Routes for each language
  - `/components`: Reusable UI components
- `/messages`: Translation files
  - `/en`: English translations
  - `/am`: Amharic translations
- `/public`: Static assets
- `/out`: Generated static export (after building)

## Known Issues and Solutions

### 1. URL Routing with Static Export

**Issue**: Next.js middleware doesn't work with static exports, affecting locale-based routing. This means paths like `blackmerry.com/services` won't automatically redirect to the localized version (`blackmerry.com/en/services` or `blackmerry.com/am/services`) as they would with middleware.

**Solution**: 

1. **Navigation Links**: All navigation links in the site have been updated to include the current locale prefix:
   - Header navigation links (`Header.tsx`)
   - Footer quick links (`Footer.tsx`)
   - Hero section CTA buttons (`home/HeroSection.tsx`)
   - Logo links

   This ensures users stay within their selected language context when navigating the site.

2. **Apache Routing**: The included `.htaccess` file in the `out` directory handles URL routing on Apache servers. It:
   - Redirects the root URL to the English version (`/en/`)
   - Redirects non-localized paths (e.g., `/services`) to the appropriate locale based on browser language preference (e.g., `/en/services` or `/am/services`)
   - Prevents double locale paths (e.g., `/en/en/`)
   - Handles direct access to locale roots (e.g., `/en` or `/am`) by adding trailing slashes

**Important**: When deploying to cPanel, ensure the `.htaccess` file is properly uploaded to the root directory. If URL redirection isn't working (e.g., `blackmerry.com/services` doesn't redirect to `blackmerry.com/en/services`), check that:
1. The `.htaccess` file is present in the root directory
2. Apache `mod_rewrite` module is enabled on your hosting
3. `.htaccess` files are allowed to override server settings

### 2. Form Submissions

**Issue**: As a static site, there's no backend for processing form submissions.

**Solution**: The testimonial form is configured to simulate submission with a notification, but doesn't actually send data anywhere. For real form submissions, consider adding a serverless function or third-party form service.

### 3. Build Errors with Unused Imports

**Issue**: TypeScript strict mode may cause build errors for unused imports.

**Solution**: Keep imports clean by removing any unused ones. Recent fixes removed unused imports from:
- `app/[locale]/contact/page.tsx`
- `app/components/packages/CTASection.tsx`
- `app/components/packages/PackageCard.tsx`
- `app/components/services/CTASection.tsx`
- `app/components/testimonials/CTASection.tsx`

### 4. Image Optimization

**Issue**: Warning about using `<img>` instead of Next.js `<Image>` component.

**Solution**: For better performance, consider replacing `<img>` tags with Next.js `<Image>` component where appropriate.

### 5. Image File Formats

**Issue**: Some images may not display correctly on the hosted site due to inconsistent file extensions referenced in the code versus the actual files on the server.

**Solution**: All image references in the code must match the exact filename and extension of the actual files in the public directory. If images don't appear after deployment:

1. Check that all image files exist in the correct directories on the server
2. Verify that the case of filenames matches exactly (e.g., `Premium.jpg` vs `premium.jpg`)
3. Make sure the file extensions in the code match the actual files (.jpg, .jpeg, .webp, .avif, etc.)
4. Use browser developer tools to check for 404 errors on image requests and identify the exact path that's failing
5. When adding new images, maintain consistent naming conventions and update references in the code accordingly

## Maintenance Guidelines

### Adding New Pages

1. Create a new directory under `/app/[locale]/` with the page name
2. Add a `page.tsx` file in the directory
3. Add necessary translations to both `/messages/en/index.json` and `/messages/am/index.json`

### Updating Content

1. For text changes, update the translation files in `/messages/`
2. For component changes, modify the relevant files in `/app/components/`
3. Rebuild the site after changes with `npm run build`

### Modifying Styles

1. Use Tailwind classes directly in components for styling
2. For custom styles, update the Tailwind configuration in `tailwind.config.js`

### Updating the Phone Number

The phone number (+251709811778) appears in multiple components. To update it:

1. Search for the current number using grep or search functionality
2. Update all instances of the phone number in components like:
   - `Footer.tsx`
   - `CTASection.tsx` components
   - `PackageCard.tsx`
   - `ContactInfo.tsx`

## Important Notes

- The site is configured for static export, so server-side features of Next.js are not available
- The `.htaccess` file is crucial for proper routing on cPanel hosting
- All "Book Now" buttons have been replaced with "Call Now" buttons that initiate phone calls
- Price ranges across the site start from $100 up to $250
