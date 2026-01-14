import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogType?: string;
    ogImage?: string;
    twitterHandle?: string;
}

const SEO: React.FC<SEOProps> = ({
    title = "Shree Swami Samartha Pest Control Services | Pune",
    description = "Professional pest control services in Pune. Expert solutions for residential, commercial, and industrial needs. Cockroach, termite, bed bug, and rodent control.",
    keywords = "pest control pune, best pest control in pune, termite treatment pune, cockroach control pune, bed bug treatment, rodent control, fogging services pune",
    canonical = "https://samartha7pestcontrol.co.in",
    ogType = "website",
    ogImage = "/samartha.jpeg",
    twitterHandle = "@shreeswamisamartha",
}) => {
    const siteName = "Shree Swami Samartha Pest Control";
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteName,
        "image": "https://samartha7pestcontrol.co.in/samartha.jpeg",
        "@id": "https://samartha7pestcontrol.co.in",
        "url": "https://samartha7pestcontrol.co.in",
        "telephone": "+91-7620081685",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sai Developers, Dwarka Residency, Mundhwa - Manjari Rd, Mundhwa",
            "addressLocality": "Pune",
            "postalCode": "411036",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 18.5325,
            "longitude": 73.9566
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
        },
        "sameAs": [
            "https://www.facebook.com/shreeswamisamarthapestcontrol",
            "https://www.instagram.com/shreeswamisamarthapestcontrol"
        ]
    };

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph tags */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter tags */}
            <meta name="twitter:creator" content={twitterHandle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
