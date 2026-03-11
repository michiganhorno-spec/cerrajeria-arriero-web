export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cerrajería L. Arriero",
    "image": "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/industrial_background_sparks_d80625e8.jpg",
    "description": "Especialistas en cerrajería profesional, puertas automáticas, cerramientos metálicos y carpintería metálica en Talavera de la Reina",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pol. Ind. Valdefuentes, Calle Principal, 10",
      "addressLocality": "Pepino",
      "addressRegion": "Toledo",
      "postalCode": "45638",
      "addressCountry": "ES"
    },
    "telephone": "+34925701792",
    "url": "https://cerrajeria-arriero.manus.space",
    "priceRange": "$$",
    "areaServed": ["Talavera de la Reina", "Pepino", "Cebolla", "Mejorada", "Seguirilla", "Talavera la Nueva", "Belvís de la Jara", "Sevilleja", "Cervera de los Montes", "San Román", "Pueblanueva", "Castillo Bayuela", "Nuño Gómez", "Hinojosa de San Vicente", "Real de San Vicente", "Marrupe", "Sotillo de las Palomas", "Serranillos", "Playa", "El Chaparral", "Montecarlo", "Prado del Arca", "Cornicabral", "Cervines", "Las Nieves", "Espinosillo"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "23",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Adrián Fernández"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Sandro nos ha dado un servicio excelente, es un profesional de los pies a la cabeza. Me ha instalado una puerta seccional con un acabado impecable y materiales de primera calidad."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Aaron Diaz"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Te ayudan y asesoran desde el primer momento. Son muy profesionales, todo en el tiempo acordado y el acabado impecable. Los recomiendo al 100%."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ivan Gonzalez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Muy profesionales, les encargué la instalación de una puerta corredera para mi finca y estuvieron pendientes del proyecto en todo momento."
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34925701792",
      "contactType": "Customer Service",
      "areaServed": ["Talavera de la Reina", "Pepino", "Cebolla", "Mejorada", "Seguirilla", "Talavera la Nueva", "Belvís de la Jara", "Sevilleja", "Cervera de los Montes", "San Román", "Pueblanueva", "Castillo Bayuela", "Nuño Gómez", "Hinojosa de San Vicente", "Real de San Vicente", "Marrupe", "Sotillo de las Palomas", "Serranillos", "Playa", "El Chaparral", "Montecarlo", "Prado del Arca", "Cornicabral", "Cervines", "Las Nieves", "Espinosillo"]
    },
    "sameAs": [
      "https://www.google.com/maps/place/Cerrajer%C3%ADa+L.+Arriero",
      "https://www.facebook.com/CerrajeriaLArriero",
      "https://www.instagram.com/cerrajerialuisarriero"
    ],
    "hasOfferingType": [
      {
        "@type": "Service",
        "name": "Rejas de Seguridad de Hierro Macizo a Medida",
        "description": "Rejas de hierro macizo a medida para ventanas y accesos en Talavera de la Reina",
        "areaServed": "Talavera de la Reina",
        "priceRange": "150 EUR"
      },
      {
        "@type": "Service",
        "name": "Puertas Correderas Metálicas a Medida",
        "description": "Puertas correderas de hierro y aluminio para garajes y fincas",
        "areaServed": "Talavera de la Reina",
        "priceRange": "200 EUR"
      },
      {
        "@type": "Service",
        "name": "Cancelas Metálicas de Seguridad a Medida",
        "description": "Cancelas de hierro a medida en Talavera de la Reina y alrededores",
        "areaServed": "Talavera de la Reina",
        "priceRange": "150 EUR"
      },
      {
        "@type": "Service",
        "name": "Barandillas y Balcones Metálicos a Medida",
        "description": "Barandillas de hierro personalizadas en Talavera de la Reina",
        "areaServed": "Talavera de la Reina",
        "priceRange": "100 EUR"
      },
      {
        "@type": "Service",
        "name": "Puestos de Caza y Aguardos a Medida",
        "description": "Puestos de caza con panel sándwich en Talavera de la Reina",
        "areaServed": "Talavera de la Reina",
        "priceRange": "100 EUR"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
