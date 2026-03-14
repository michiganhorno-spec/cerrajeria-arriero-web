import { useParams, useLocation } from "wouter";
import { ChevronLeft, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Datos de servicios con URLs de CDN
const servicios: Record<string, any> = {
  "puertas-correderas-automaticas": {
    title: "Puertas Correderas Automáticas de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-correderas-automaticas",
    description: "Puertas correderas automáticas a medida de hierro y aluminio soldado con sistemas de apertura suave, silenciosa y segura en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva y El Chaparral.",
    content: `En Cerrajería Arriero instalamos puertas correderas automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca. Nuestras puertas correderas combinan tecnología avanzada, seguridad y comodidad, siendo ideales para accesos comerciales, residenciales, hospitales, oficinas y espacios públicos.

Disponemos de sistemas de última generación con sensores de movimiento, control de acceso y sistemas de seguridad integrados.

## Ventajas de las puertas correderas automáticas

Nuestras puertas correderas ofrecen múltiples beneficios:

- Apertura suave y silenciosa.
- Sistemas de seguridad avanzados.
- Control de acceso integrado.
- Eficiencia energética.
- Compatibilidad con sistemas existentes.

## Instalación de puertas correderas automáticas

Realizamos la instalación de puertas correderas automáticas en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Nuestro equipo se encarga de la instalación, configuración y mantenimiento especializado.

## Presupuesto para puertas correderas automáticas

Solicita presupuesto sin compromiso para tus puertas correderas automáticas. Asesoramiento personalizado y soluciones adaptadas a tus necesidades.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_93c6539c.jpg",
    galleryImages: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_bcd8e5ee.jpg",
        title: "Puerta Corredera Automática Talavera de la Reina - Sistema Motorizado",
        alt: "Puerta corredera automática en Talavera con sistema motorizado profesional"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_08f0a94d.jpg",
        title: "Puerta Corredera Automática Pepino - Hierro Soldado",
        alt: "Puerta corredera automática en Pepino con hierro soldado"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_5b3550f2.jpg",
        title: "Puerta Corredera Automática Cebolla - Control de Acceso",
        alt: "Puerta corredera automática en Cebolla con control de acceso"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_5b3550f2.jpg",
        title: "Puerta Corredera Automática Mejorada - Instalación Profesional",
        alt: "Puerta corredera automática en Mejorada con instalación profesional"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e7681138.jpg",
        title: "Puerta Corredera Automática Talavera la Nueva - Sistema Avanzado",
        alt: "Puerta corredera automática en Talavera la Nueva"
      }
    ]
  },
  "rejas-seguridad": {
    title: "Rejas de Seguridad de Hierro a Medida en Talavera de la Reina",
    slug: "rejas-seguridad",
    description: "Rejas de seguridad personalizadas en hierro macizo y aluminio soldado en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva.",
    content: `En Cerrajería Arriero fabricamos rejas de seguridad personalizadas en hierro macizo y aluminio soldado en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva. Nuestras rejas combinan máxima protección con diseño profesional.

Disponemos de diferentes estilos y acabados que se adaptan a cualquier arquitectura, desde diseños tradicionales hasta contemporáneos.

## Ventajas de las rejas de seguridad

Nuestras rejas ofrecen múltiples beneficios:

- Máxima protección contra robos.
- Diseños personalizados y elegantes.
- Acabados profesionales de calidad.
- Resistencia a la corrosión.
- Compatibilidad con automatización.

## Instalación de rejas de seguridad

Realizamos la instalación de rejas de seguridad en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Fabricación artesanal con soldadura de calidad.

## Presupuesto para rejas de seguridad

Contacta con nosotros para solicitar presupuesto sin compromiso para tus rejas de seguridad.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-rejas-seguridad-portada-talavera-reina_73976128.jpg",
    galleryImages: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_73976128.jpg",
        title: "Reja de Seguridad Talavera de la Reina - Hierro Forjado",
        alt: "Reja de seguridad en Talavera con hierro forjado profesional"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_add28802.jpg",
        title: "Reja de Seguridad Pepino - Diseño Personalizado",
        alt: "Reja de seguridad en Pepino con diseño personalizado"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_91e49c74.jpg",
        title: "Reja de Seguridad Cebolla - Protección Total",
        alt: "Reja de seguridad en Cebolla con protección total"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_91e49c74.jpg",
        title: "Reja de Seguridad Mejorada - Acabado Profesional",
        alt: "Reja de seguridad en Mejorada con acabado profesional"
      }
    ]
  },
  "puertas-entrada-vivienda": {
    title: "Puertas de Entrada a Vivienda de Hierro y Aluminio en Talavera de la Reina",
    slug: "puertas-entrada-vivienda",
    description: "Puertas de entrada a vivienda fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas de entrada a vivienda en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Nuestras puertas de entrada son la solución perfecta para combinar seguridad, elegancia y durabilidad en tu hogar.

Disponemos de diseños personalizados en hierro y aluminio soldado, adaptados a cualquier estilo arquitectónico. Cada puerta se fabrica a medida con sistemas de cierre de seguridad avanzados.

## Ventajas de las puertas de entrada a vivienda

Nuestras puertas ofrecen múltiples beneficios:

- Seguridad y protección total para tu hogar.
- Diseños personalizados y elegantes.
- Sistemas de cierre de seguridad avanzados.
- Aislamiento térmico y acústico.
- Acabados profesionales de calidad.
- Resistencia a la intemperie y durabilidad garantizada.

## Instalación de puertas de entrada a medida

Realizamos la instalación de puertas de entrada en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Nuestro equipo se encarga de la fabricación, transporte e instalación completa.

## Presupuesto para puertas de entrada

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas de entrada.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_ce7f6c3f.jpg",
    galleryImages: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_ce7f6c3f.jpg",
        title: "Puerta de Entrada Talavera de la Reina - Hierro y Aluminio",
        alt: "Puerta de entrada en Talavera con hierro y aluminio"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_5d91fc72.jpg",
        title: "Puerta de Entrada Pepino - Diseño Elegante",
        alt: "Puerta de entrada en Pepino con diseño elegante"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_eec65455.jpg",
        title: "Puerta de Entrada Cebolla - Seguridad Garantizada",
        alt: "Puerta de entrada en Cebolla con seguridad garantizada"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_56281770.jpg",
        title: "Puerta de Entrada Mejorada - Acabado Profesional",
        alt: "Puerta de entrada en Mejorada con acabado profesional"
      }
    ]
  },
  "puertas-portones": {
    title: "Puertas y Portones Automáticos en Talavera de la Reina",
    slug: "puertas-portones",
    description: "Puertas y portones automáticos de última generación en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas y portones automáticos en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo. Nuestros portones combinan seguridad, tecnología y diseño profesional.

Disponemos de sistemas de última generación con mandos a distancia, controles de acceso y sistemas de seguridad integrados.

## Ventajas de los portones automáticos

Nuestros portones ofrecen múltiples beneficios:

- Apertura suave, segura y controlada.
- Tecnología avanzada con mando a distancia.
- Seguridad garantizada.
- Acabados profesionales de calidad.
- Mantenimiento y reparación especializada.

## Instalación de portones automáticos

Realizamos la instalación de puertas y portones en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación profesional y rápida con garantía.

## Presupuesto para portones automáticos

Solicita presupuesto sin compromiso para tus puertas y portones automáticos.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_1325cd04.jpg",
    galleryImages: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_b61fc7ff.jpg",
        title: "Portón Automático Talavera de la Reina - Sistema Motorizado",
        alt: "Portón automático en Talavera con sistema motorizado"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_6183c823.jpg",
        title: "Portón Automático Pepino - Hierro Soldado",
        alt: "Portón automático en Pepino con hierro soldado"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_2b3d5ed7.jpg",
        title: "Portón Automático Cebolla - Control de Acceso",
        alt: "Portón automático en Cebolla con control de acceso"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_2b3d5ed7.jpg",
        title: "Portón Automático Mejorada - Instalación Profesional",
        alt: "Portón automático en Mejorada con instalación profesional"
      }
    ]
  },
  "puertas-portales-comunidad": {
    title: "Puertas de Portales para Comunidades en Talavera de la Reina",
    slug: "puertas-portales-comunidad",
    description: "Puertas de portales para comunidades a medida en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca.",
    content: `En Cerrajería Arriero fabricamos e instalamos puertas de portales para comunidades en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca. Nuestras puertas son la solución ideal para accesos comunitarios seguros, modernos y funcionales.

Disponemos de sistemas de última generación con control de acceso, cierre automático y cristal de seguridad templado. Cada puerta se personaliza según las necesidades exactas de tu comunidad.

## Ventajas de las puertas de portales para comunidades

Nuestras puertas ofrecen múltiples beneficios:

- Seguridad y control de acceso garantizado.
- Diseño moderno y profesional.
- Cierre automático y sistemas de seguridad integrados.
- Cristal templado de seguridad.
- Acabados duraderos: Hierro, Aluminio, Lacado al Horno.
- Fácil mantenimiento y limpieza.
- Resistencia a la intemperie.

## Instalación de puertas de portales a medida

Realizamos la instalación de puertas de portales en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera.

## Presupuesto para puertas de portales

Contacta con nosotros para solicitar presupuesto sin compromiso para tus puertas de portales.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_be99162f.jpg",
    galleryImages: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_b52351ee.jpg",
        title: "Puerta de Portal Talavera de la Reina - Acceso Comunitario",
        alt: "Puerta de portal en Talavera para acceso comunitario"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_a6a20823.jpg",
        title: "Puerta de Portal Pepino - Seguridad Comunitaria",
        alt: "Puerta de portal en Pepino para seguridad comunitaria"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_6bcd4955.jpg",
        title: "Puerta de Portal Cebolla - Control de Acceso",
        alt: "Puerta de portal en Cebolla con control de acceso"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_6bcd4955.jpg",
        title: "Puerta de Portal Mejorada - Instalación Profesional",
        alt: "Puerta de portal en Mejorada con instalación profesional"
      }
    ]
  },
  "cerramientos-industriales": {
    title: "Cerramientos Industriales de Hierro y Cristal - Separadores de Espacio en Talavera de la Reina",
    slug: "cerramientos-industriales",
    description: "Cerramientos industriales de hierro y cristal para separadores de espacio en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos.",
    content: `En Cerrajería Arriero diseñamos y construimos cerramientos industriales de hierro y cristal en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos. Nuestros cerramientos son la solución moderna para separadores de espacio.

Disponemos de estructura de hierro soldado y cristal templado de seguridad que permite visibilidad total con aislamiento.

## Ventajas de los cerramientos industriales

Nuestros cerramientos ofrecen múltiples beneficios:

- Visibilidad total del espacio.
- Aislamiento acústico y térmico.
- Estructura resistente.
- Cristal templado de seguridad.
- Diseño moderno y profesional.

## Instalación de cerramientos industriales

Realizamos la instalación de cerramientos en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvis, Sevilleja y Cervera. Instalación rápida y garantizada.

## Presupuesto para cerramientos industriales

Solicita presupuesto sin compromiso para tus cerramientos.`,
    coverImage: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_ecebc238.jpg",
    galleryImages: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_95c25621.jpg",
        title: "Cerramiento Industrial Talavera de la Reina - Hierro y Cristal",
        alt: "Cerramiento industrial en Talavera con hierro y cristal"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_be4a5729.jpg",
        title: "Cerramiento Industrial Pepino - Separador de Espacio",
        alt: "Cerramiento industrial en Pepino como separador de espacio"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_d258bc12.jpg",
        title: "Cerramiento Industrial Cebolla - Visibilidad Total",
        alt: "Cerramiento industrial en Cebolla con visibilidad total"
      },
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_8f128749.jpg",
        title: "Cerramiento Industrial Mejorada - Acabado Profesional",
        alt: "Cerramiento industrial en Mejorada con acabado profesional"
      }
    ]
  }
};

export default function ServiceDetail() {
  const [location] = useLocation();
  const params = useParams();
  const slug = params.slug as string;
  const service = servicios[slug];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servicio no encontrado</h1>
          <a href="/" className="text-orange-500 hover:text-orange-600">
            ← Volver a inicio
          </a>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % service.galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + service.galleryImages.length) % service.galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-8">
        <div className="container mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 mb-4 hover:opacity-80">
            <ChevronLeft size={20} />
            Volver a Inicio
          </a>
          <h1 className="text-4xl font-bold">{service.title}</h1>
          <p className="text-orange-100 mt-2">{service.description}</p>
        </div>
      </header>

      {/* Portada */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <img
            src={service.coverImage}
            alt={service.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 bg-card text-card-foreground rounded-lg mx-4 mb-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-invert max-w-none">
            {service.content.split('\n\n').map((paragraph: string, idx: number) => (
              <div key={idx}>
                {paragraph.startsWith('##') ? (
                  <h2 className="text-2xl font-bold mt-8 mb-4 text-orange-500">
                    {paragraph.replace('## ', '')}
                  </h2>
                ) : paragraph.startsWith('-') ? (
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {paragraph.split('\n').map((item: string, i: number) => (
                      <li key={i} className="text-gray-300">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Galería de Trabajos</h2>
          
          <div className="mb-8">
            <img
              src={service.galleryImages[currentImageIndex].url}
              alt={service.galleryImages[currentImageIndex].alt}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <p className="text-center text-sm text-gray-400 mt-4">
              {service.galleryImages[currentImageIndex].title}
            </p>
          </div>

          <div className="flex justify-between items-center gap-4 mb-8">
            <Button
              onClick={prevImage}
              variant="outline"
              className="flex-1"
            >
              ← Anterior
            </Button>
            <span className="text-sm text-gray-400">
              {currentImageIndex + 1} / {service.galleryImages.length}
            </span>
            <Button
              onClick={nextImage}
              variant="outline"
              className="flex-1"
            >
              Siguiente →
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {service.galleryImages.map((img: any, idx: number) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentImageIndex
                    ? 'border-orange-500 scale-105'
                    : 'border-gray-700 hover:border-orange-400'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¿Interesado en este servicio?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/c/34661622160"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href="tel:925701792"
              className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={20} />
              Llamar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
