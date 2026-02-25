import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Mönchengladbach | Gold Barber Shop</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Gold Barber Shop in Mönchengladbach für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Mönchengladbach, Gold Barber"
        />
        <link rel="canonical" href="https://goldbarber-mg.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Gold Barber Shop | Premium Barbershop Mönchengladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Mönchengladbach."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goldbarber-mg.de" />
        <meta property="og:image" content="https://goldbarber-mg.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gold Barber Shop | Premium Barbershop Mönchengladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://goldbarber-mg.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Gold Barber Shop",
            "image": "https://goldbarber-mg.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Konstantinstraße 182",
              "addressLocality": "Mönchengladbach",
              "postalCode": "41238",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1655",
              "longitude": "6.4489"
            },
            "url": "https://goldbarber-mg.de",
            "telephone": "+49 2166 9923042",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/goldbarbermg",
              "https://www.instagram.com/goldbarbermg"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

