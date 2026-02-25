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
    brandNameInTitle?: boolean;
    schemaType?: 'LocalBusiness' | 'FAQPage' | 'HowTo' | 'Article';
    additionalSchema?: any[];
}

const SEO: React.FC<SEOProps> = ({
    title = "Shree Swami Samartha Pest Control Services | Pune Exterminators",
    description = "Leading pest control services in Pune. Certified experts in termite treatment, cockroach control, bed bug removal, and rodent management. Eco-friendly and safe solutions for homes and businesses in Hadapsar, Kharadi, Mundhwa, and Wagholi.",
    keywords = "pest control pune, best pest control in pune, termite treatment pune, cockroach control pune, bed bug treatment, rodent control, fogging services pune, residential pest control, commercial pest control pune, herbal pest control pune, organic pest control, exterminator pune, Hadapsar, Kharadi, Magarpatta, Wagholi, Mundhwa, Amanora, Viman Nagar, Kalyani Nagar",
    canonical = "https://samartha7pestcontrol.co.in",
    ogType = "website",
    ogImage = "/samartha.jpeg",
    twitterHandle = "@shreeswamisamartha",
    brandNameInTitle = true,
    additionalSchema = [],
}) => {
    const siteName = "Shree Swami Samartha Pest Control";
    const fullTitle = (brandNameInTitle && !title.includes(siteName)) ? `${title} | ${siteName}` : title;

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": siteName,
        "image": "https://samartha7pestcontrol.co.in/samartha.jpeg",
        "@id": "https://samartha7pestcontrol.co.in",
        "url": "https://samartha7pestcontrol.co.in",
        "telephone": "+91-7620081685",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sai Developers, Dwarka Residency, Mundhwa - Manjari Rd, Mundhwa",
            "addressLocality": "Pune",
            "postalCode": "411036",
            "addressRegion": "Maharashtra",
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
            "https://www.instagram.com/shreeswamisamarthapestcontrol",
            "https://www.linkedin.com/company/shree-swami-samartha-pest-control"
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

            {/* Robots */}
            <meta name="robots" content="index, follow" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            {additionalSchema.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};

export default SEO;


