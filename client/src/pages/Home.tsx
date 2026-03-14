import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Wrench, Zap, Shield, DoorOpen, Package } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceCardWithGallery from "@/components/ServiceCardWithGallery";
import { GoogleReviews } from "@/components/GoogleReviews";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";

const INDUSTRIAL_BG_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/industrial_background_sparks_d80625e8.jpg";
const INDUSTRIAL_BG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/metal_welding_close_up_aedbc5e1.jpg";

export default function Home() {
  const { user } = useAuth();
  const [showContactForm, setShowContactForm] = useState(false);
  const { reviews } = useGoogleReviews();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Industrial Background */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${INDUSTRIAL_BG_1}')`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Cerrajería L. Arriero
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-orange-400 mb-4">
            Carpintería Metálica Profesional en Talavera de la Reina
          </h2>
          
          <p className="text-xl md:text-2xl text-orange-400 mb-2">
            Rejas, Puertas Metálicas y Automáticas de Hierro y Aluminio Soldado
          </p>
          
          <div className="border-2 border-orange-500 inline-block px-6 py-3 mb-8">
            <p className="text-lg font-semibold text-white">
              + 40 AÑOS DE EXPERIENCIA EN TALAVERA DE LA REINA
            </p>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ofrecemos carpintería metálica profesional en Talavera de la Reina y sus urbanizaciones. Fabricamos e instalamos rejas de seguridad, puertas metálicas y automáticas de hierro y aluminio soldado, cerramientos metálicos, pérgolas con panel sándwich, mobiliario industrial a medida y automatismos para portones y puertas.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:925701792"
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              925 70 17 92
            </a>
            
            <a 
              href="https://wa.me/34661622160"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp: 661 62 21 60
            </a>
          </div>
          
          <button
            onClick={() => setShowContactForm(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Solicitar Presupuesto
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            Servicios de Carpintería Metálica en Talavera
          </h2>
          
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Todos nuestros trabajos son personalizados y adaptados a las necesidades de cada cliente, combinando calidad, resistencia y diseño profesional.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <ServiceCardWithGallery
              icon={<Shield size={32} />}
              title="Rejas de Seguridad de Hierro a Medida en Talavera de la Reina"
              slug="rejas-seguridad"
              description="Rejas de seguridad personalizadas en hierro macizo y aluminio soldado para ventanas, balcones y accesos en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva. Máxima protección con diseños tradicionales y modernos adaptados a tu estilo arquitectónico. Fabricación artesanal con soldadura de calidad y acabados profesionales. Instalación segura y rápida. Resistencia garantizada contra intentos de robo. Confía en la experiencia de más de 40 años en carpintería metálica."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera_b4b99360.jpg"
              galleryImages={[
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-seguridad-mejorada-4_d03023be.jpg",
                  title: "Reja de Seguridad Tradicional Mejorada - Hierro Negro Forjado Clasico",
                  alt: "Reja de seguridad tradicional en Mejorada con hierro forjado negro, diseño clasico y proteccion garantizada para accesos"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina_1d126599.jpg",
                  title: "Reja de Seguridad Aluminio Azul Talavera de la Reina - Diseño Moderno Elegante",
                  alt: "Reja de seguridad de aluminio lacado azul en Talavera de la Reina, diseño moderno y elegante para ventanas y balcones"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera_133b6b01.jpg",
                  title: "Reja de Seguridad Hierro Gris Moderno Talavera - Diseño Contemporaneo",
                  alt: "Reja de seguridad moderna en Talavera con hierro soldado lacado gris, diseño contemporaneo y proteccion profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-barrotes-macizos-adornos-talavera-1_1e1e8d35.jpg",
                  title: "Reja de Seguridad Barrotes Macizos con Adornos Talavera de la Reina - Hierro Forjado Artesanal",
                  alt: "Reja de seguridad con barrotes macizos y adornos en Talavera de la Reina, hierro forjado artesanal, proteccion y elegancia"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-barrotes-adornos-lacado-al-horno-talavera-2_84822e12.jpg",
                  title: "Reja de Seguridad Barrotes con Adornos Lacado al Horno Talavera - Acabado Profesional",
                  alt: "Reja de seguridad con barrotes y adornos lacados al horno en Talavera, acabado profesional y resistencia garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-forja-tradicional-talavera-3_2453fb77.jpg",
                  title: "Reja de Forja Tradicional Talavera de la Reina - Hierro Macizo Artesanal",
                  alt: "Reja de forja tradicional en Talavera de la Reina, hierro macizo artesanal, diseño clasico y proteccion total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-castellana-lacado-al-horno-talavera-4_4e8f0ee7.jpg",
                  title: "Reja Modelo Castellana Lacado al Horno Talavera - Diseño Tradicional Elegante",
                  alt: "Reja modelo castellana lacada al horno en Talavera de la Reina, diseño tradicional elegante, proteccion y estilo"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-01-IMG20250120120057_7d60377b.jpg",
                  title: "Reja de Seguridad en Talavera de la Reina - Hierro Macizo",
                  alt: "Reja de Seguridad en Talavera de la Reina Hierro Macizo"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-02-IMG_20160830_104814_846574e5.jpg",
                  title: "Protección Ventana en Cebolla - Reja Personalizada",
                  alt: "Protección Ventana en Cebolla Reja Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-03-IMG_20210928_104226_4725745b.jpg",
                  title: "Reja Profesional en Seguirilla - Acabado de Calidad",
                  alt: "Reja Profesional en Seguirilla Acabado de Calidad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/rejas-04-reja_d96fd5df.jpg",
                  title: "Reja de Seguridad en Mejorada - Hierro Macizo",
                  alt: "Reja de Seguridad en Mejorada Hierro Macizo"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<DoorOpen size={32} />}
              title="Puertas Correderas Automáticas de Hierro y Aluminio en Talavera de la Reina"
              slug="puertas-correderas-automaticas"
              description="Puertas correderas automáticas a medida de hierro y aluminio soldado con sistemas de apertura suave, silenciosa y segura en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva y El Chaparral. Soluciones personalizadas para garajes, accesos comerciales y residenciales. Sistemas de cierre automático y controlado para máxima seguridad y comodidad. Diseños modernos y tradicionales. Instalación profesional con garantía. Tecnología de última generación con mandos a distancia."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_93c6539c.jpg"
              galleryImages={[
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
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e7681138.jpg",
                  title: "Puerta Corredera Automática Cebolla - Control de Acceso",
                  alt: "Puerta corredera automática en Cebolla con control de acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_5b3550f2.jpg",
                  title: "Puerta Corredera Automática Mejorada - Instalación Profesional",
                  alt: "Puerta corredera automática en Mejorada con instalación profesional"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-01-52588611_2179120735443021_5408929809394827264_n_bd693a87.jpg",
                  title: "Puerta Corredera Automática en Talavera de la Reina - Control de Acceso",
                  alt: "Puerta Corredera Automática en Talavera de la Reina Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-03-IMG-20201126-WA0010_e9309add.jpg",
                  title: "Puerta Corredera Motorizada en Montecarlo - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en Montecarlo Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-04-IMG20240213153926_af510ccf.jpg",
                  title: "Acceso Automático en Prado del Arca - Puerta Corredera Segura",
                  alt: "Acceso Automático en Prado del Arca Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-05-IMG20240213154204_3726e8e1.jpg",
                  title: "Puerta Corredera Automática en Pueblanueva - Control de Acceso",
                  alt: "Puerta Corredera Automática en Pueblanueva Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-06-IMG20250612112032_5fe008fc.jpg",
                  title: "Puerta Corredera Motorizada en El Chaparral - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en El Chaparral Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-07-IMG20250626115424_0bcde9e1.jpg",
                  title: "Acceso Automático en Talavera de la Reina - Puerta Corredera Segura",
                  alt: "Acceso Automático en Talavera de la Reina Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-08-IMG_20160714_144644_3078dbb7.jpg",
                  title: "Puerta Corredera Automática en Montecarlo - Control de Acceso",
                  alt: "Puerta Corredera Automática en Montecarlo Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-09-IMG_20191009_164611_285e9e90.jpg",
                  title: "Puerta Corredera Motorizada en Prado del Arca - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en Prado del Arca Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-10-IMG_20211018_115325_3acacc26.jpg",
                  title: "Acceso Automático en Pueblanueva - Puerta Corredera Segura",
                  alt: "Acceso Automático en Pueblanueva Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-11-IMG_20221028_101439_1314bcf0.jpg",
                  title: "Puerta Corredera Automática en El Chaparral - Control de Acceso",
                  alt: "Puerta Corredera Automática en El Chaparral Control de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-12-IMG_20230206_114525_e1cd3f63.jpg",
                  title: "Puerta Corredera Motorizada en Talavera de la Reina - Sistema Profesional",
                  alt: "Puerta Corredera Motorizada en Talavera de la Reina Sistema Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-portada_24f45dd5.jpg",
                  title: "Acceso Automático en Montecarlo - Puerta Corredera Segura",
                  alt: "Acceso Automático en Montecarlo Puerta Corredera Segura"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-correderas-02-DSC03837_e35f0e44.JPG",
                  title: "Puerta Corredera Automática en Prado del Arca - Control de Acceso",
                  alt: "Puerta Corredera Automática en Prado del Arca Control de Acceso"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<Zap size={32} />}
              title="Cancelas de Hierro a Medida en Talavera de la Reina"
              slug="cancelas-hierro"
              description="Cancelas de hierro a medida en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva y Castillo Bayuela. Combinan resistencia estructural con diseño profesional. Adaptadas a cualquier estilo arquitectónico y necesidad de seguridad. Fabricación en hierro y aluminio soldado con acabados de calidad. Instalación rápida y segura. Protección total para parcelas, fincas, terrenos y accesos. Soluciones personalizadas."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_1558188b.jpg"
              galleryImages={[
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_5c124a04.jpg",
                  title: "Cancela de Hierro Talavera de la Reina - Diseño Tradicional",
                  alt: "Cancela de hierro en Talavera con diseño tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_1adf2291.jpg",
                  title: "Cancela de Hierro Pepino - Acabado Profesional",
                  alt: "Cancela de hierro en Pepino con acabado profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_b89a2a1c.jpg",
                  title: "Cancela de Hierro Cebolla - Seguridad Garantizada",
                  alt: "Cancela de hierro en Cebolla con seguridad garantizada"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-01-52638728_407893416448731_5071050010733314048_n_c4cbce16.jpg",
                  title: "Cancela de Hierro en Talavera de la Reina - Diseño Tradicional",
                  alt: "Cancela de Hierro en Talavera de la Reina Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-02-52806621_2230661347198210_4117361340224372736_n_97a75fc9.jpg",
                  title: "Acceso Seguro en Real de San Vicente - Cancela Personalizada",
                  alt: "Acceso Seguro en Real de San Vicente Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-03-IMG20250130095956_18f5aec0.jpg",
                  title: "Cancela Automática en San Román - Protección Total",
                  alt: "Cancela Automática en San Román Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-04-IMG20250527103749_e7deb337.jpg",
                  title: "Cancela de Hierro en Pueblanueva - Diseño Tradicional",
                  alt: "Cancela de Hierro en Pueblanueva Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-05-IMG_20141222_180107_f69eda09.jpg",
                  title: "Acceso Seguro en Castillo Bayuela - Cancela Personalizada",
                  alt: "Acceso Seguro en Castillo Bayuela Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-06-IMG_20180131_110833_c1de96a9.jpg",
                  title: "Cancela Automática en Talavera de la Reina - Protección Total",
                  alt: "Cancela Automática en Talavera de la Reina Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-07-IMG_20191025_103935_de712213.jpg",
                  title: "Cancela de Hierro en Real de San Vicente - Diseño Tradicional",
                  alt: "Cancela de Hierro en Real de San Vicente Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-08-IMG_20230214_090314_e0230845.jpg",
                  title: "Acceso Seguro en San Román - Cancela Personalizada",
                  alt: "Acceso Seguro en San Román Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-12-SAVE_20190506_174112_3841e933.jpg",
                  title: "Cancela Automática en Pueblanueva - Protección Total",
                  alt: "Cancela Automática en Pueblanueva Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-13-big-es-puerta-con-ventanuco_bf070fa7.jpg",
                  title: "Cancela de Hierro en Castillo Bayuela - Diseño Tradicional",
                  alt: "Cancela de Hierro en Castillo Bayuela Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-portada_6caf687a.jpg",
                  title: "Acceso Seguro en Talavera de la Reina - Cancela Personalizada",
                  alt: "Acceso Seguro en Talavera de la Reina Cancela Personalizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-09-P1010038_3fde97ba.JPG",
                  title: "Cancela Automática en Real de San Vicente - Protección Total",
                  alt: "Cancela Automática en Real de San Vicente Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-10-P1010050_c3d21ccd.JPG",
                  title: "Cancela de Hierro en San Román - Diseño Tradicional",
                  alt: "Cancela de Hierro en San Román Diseño Tradicional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cancelas-11-P1010052_72f8c412.JPG",
                  title: "Acceso Seguro en Pueblanueva - Cancela Personalizada",
                  alt: "Acceso Seguro en Pueblanueva Cancela Personalizada"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<Package size={32} />}
              title="Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina"
              slug="pergolas-cubiertas"
              description="Pérgolas metálicas y cubiertas con panel sándwich para ampliar tu espacio habitable con protección total en Talavera de la Reina, Belvís de la Jara, Sevilleja, Cervera de los Montes y Nuño Gómez. Excelente aislamiento térmico y acústico. Diseño moderno y funcional. Fabricación en hierro y aluminio soldado. Instalación profesional garantizada. Ideal para terrazas, patios y espacios exteriores. Resistencia a la intemperie. Aumenta el valor de tu propiedad."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_36a7b11e.jpg"
              galleryImages={[
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_ccf48341.jpg",
                  title: "Pérgola y Cubierta Talavera de la Reina - Panel Sándwich",
                  alt: "Pérgola y cubierta en Talavera con panel sándwich"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_5bd5eeb7.jpg",
                  title: "Pérgola Pepino - Aislamiento Térmico",
                  alt: "Pérgola en Pepino con aislamiento térmico"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_368f8f76.jpg",
                  title: "Cubierta Cebolla - Protección Total",
                  alt: "Cubierta en Cebolla con protección total"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-01-IMG_20210305_103314_e87c9862.jpg",
                  title: "Pérgola Metálica en Talavera de la Reina - Panel Sándwich",
                  alt: "Pérgola Metálica en Talavera de la Reina Panel Sándwich"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-02-IMG_20210305_105443_517a3b2e.jpg",
                  title: "Cubierta Profesional en Belvís de la Jara - Aislamiento Térmico",
                  alt: "Cubierta Profesional en Belvís de la Jara Aislamiento Térmico"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-03-IMG_20210305_105509_e577ba33.jpg",
                  title: "Pérgola Terraza en Sevilleja - Protección Total",
                  alt: "Pérgola Terraza en Sevilleja Protección Total"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-04-IMG_20211028_161903_fee72a7f.jpg",
                  title: "Pérgola Metálica en Cervera de los Montes - Panel Sándwich",
                  alt: "Pérgola Metálica en Cervera de los Montes Panel Sándwich"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-portada_08ece2ac.jpg",
                  title: "Cubierta Profesional en Nuño Gómez - Aislamiento Térmico",
                  alt: "Cubierta Profesional en Nuño Gómez Aislamiento Térmico"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/pergolas-06-received_966731537436431_e3dad23c.jpeg",
                  title: "Pérgola Terraza en Talavera de la Reina - Protección Total",
                  alt: "Pérgola Terraza en Talavera de la Reina Protección Total"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<Wrench size={32} />}
              title="Cerramientos Industriales de Hierro y Cristal - Separadores de Espacio en Talavera de la Reina"
              slug="cerramientos-industriales"
              description="Cerramientos industriales de hierro y cristal para separadores de espacio en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos. Soluciones modernas para oficinas, almacenes, talleres y espacios industriales. Diseño funcional con estructura de hierro soldado y cristal templado. Permite visibilidad y aislamiento. Acabados profesionales de calidad. Instalación rápida y garantizada. Personalizable según tus necesidades de espacio."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_ecebc238.jpg"
              galleryImages={[
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
                  title: "Cerramiento Industrial Cebolla - Cristal Templado",
                  alt: "Cerramiento industrial en Cebolla con cristal templado"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-01-IMG20241209171008_6c900aa9.jpg",
                  title: "Cerramiento Industrial en Talavera de la Reina - Hierro y Cristal",
                  alt: "Cerramiento Industrial en Talavera de la Reina Hierro y Cristal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-02-IMG20250130114904_2c34635c.jpg",
                  title: "Separador de Espacio en Hinojosa de San Vicente - Estructura Profesional",
                  alt: "Separador de Espacio en Hinojosa de San Vicente Estructura Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-03-IMG_20220217_181138_05ea9b0c.jpg",
                  title: "Cerramiento de Oficina en Marrupe - Cristal Templado",
                  alt: "Cerramiento de Oficina en Marrupe Cristal Templado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-05-cerramiento1_f3790f7d.jpg",
                  title: "Cerramiento Industrial en Sotillo de las Palomas - Hierro y Cristal",
                  alt: "Cerramiento Industrial en Sotillo de las Palomas Hierro y Cristal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-portada_82928217.jpg",
                  title: "Separador de Espacio en Serranillos - Estructura Profesional",
                  alt: "Separador de Espacio en Serranillos Estructura Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/cerramientos-04-P1010032_da08a951.JPG",
                  title: "Cerramiento de Oficina en Talavera de la Reina - Cristal Templado",
                  alt: "Cerramiento de Oficina en Talavera de la Reina Cristal Templado"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<Zap size={32} />}
              title="Puertas y Portones en Talavera de la Reina"
              slug="puertas-portones"
              description="Puertas y portones automáticos de última generación en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo. Sistemas de apertura suave, segura y controlada. Tecnología avanzada con mandos a distancia y controles de acceso. Fabricación en hierro y aluminio soldado. Mantenimiento y reparación especializada. Seguridad garantizada para tu hogar o negocio. Instalación profesional y rápida."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-1_46a7a963.jpg"
              galleryImages={[
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-1_46a7a963.jpg",
                  title: "Puerta Automática Talavera de la Reina - Sistema Motorizado Profesional",
                  alt: "Puerta automática en Talavera de la Reina con sistema motorizado profesional, apertura suave y controlada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-2_f1dd0fd1.jpg",
                  title: "Puerta Automática Pepino - Hierro Soldado Motorizado",
                  alt: "Puerta automática en Pepino con hierro soldado y sistema motorizado, seguridad y confort garantizados"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-3_d7f6d033.jpg",
                  title: "Puerta Automática Cebolla - Control de Acceso Avanzado",
                  alt: "Puerta automática en Cebolla con control de acceso avanzado, mando a distancia y seguridad profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-porton-automatico-talavera-8_f91d15c0.jpg",
                  title: "Puerta y Portón Automático Talavera - Instalación Profesional",
                  alt: "Puerta y portón automático en Talavera de la Reina con instalación profesional y mantenimiento garantizado"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-02-IMG-20201215-WA0001_07853c16.jpg",
                  title: "Puerta Portón en Talavera de la Reina - Automatismo Profesional",
                  alt: "Puerta Portón en Talavera de la Reina Automatismo Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-03-IMG-20230214-WA0005_e414fdfa.jpg",
                  title: "Portón Garaje en Cornicabral - Seguridad Máxima",
                  alt: "Portón Garaje en Cornicabral Seguridad Máxima"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-04-IMG20250430171643_965b1d38.jpg",
                  title: "Puerta Automática en Cervines - Sistema Motorizado",
                  alt: "Puerta Automática en Cervines Sistema Motorizado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-05-IMG_20190522_122246_34b6a8ef.jpg",
                  title: "Puerta Portón en Las Nieves - Automatismo Profesional",
                  alt: "Puerta Portón en Las Nieves Automatismo Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-06-IMG_20200806_125505_463b2013.jpg",
                  title: "Portón Garaje en Espinosillo - Seguridad Máxima",
                  alt: "Portón Garaje en Espinosillo Seguridad Máxima"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-07-IMG_20200916_104417_06f52457.jpg",
                  title: "Puerta Automática en Talavera de la Reina - Sistema Motorizado",
                  alt: "Puerta Automática en Talavera de la Reina Sistema Motorizado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-08-IMG_20230412_113102_ceb0839b.jpg",
                  title: "Puerta Portón en Cornicabral - Automatismo Profesional",
                  alt: "Puerta Portón en Cornicabral Automatismo Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-portada_daae3efc.jpg",
                  title: "Portón Garaje en Cervines - Seguridad Máxima",
                  alt: "Portón Garaje en Cervines Seguridad Máxima"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-01-DSC03835_061ed6f2.JPG",
                  title: "Puerta Automática en Las Nieves - Sistema Motorizado",
                  alt: "Puerta Automática en Las Nieves Sistema Motorizado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-portones-09-P1010034_589b62f2.JPG",
                  title: "Puerta Portón en Espinosillo - Automatismo Profesional",
                  alt: "Puerta Portón en Espinosillo Automatismo Profesional"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<DoorOpen size={32} />}
              title="Puertas Seccionales a Medida en Talavera de la Reina"
              slug="puertas-seccionales"
              description="Puertas seccionales de alta calidad fabricadas a medida en Talavera de la Reina, Pepino, Cebolla y Mejorada. Sistemas de apertura suave y silenciosa con mecanismos de seguridad avanzados. Ideales para garajes, naves industriales y accesos comerciales. Fabricación en acero galvanizado y aluminio soldado con acabados profesionales. Instalación rápida y garantizada. Mantenimiento y reparación disponible."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-talavera-reina-1_8e112a6e.jpg"
              galleryImages={[
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-talavera-reina-1_8e112a6e.jpg",
                  alt: "Puerta Seccional Panel Sandwich Talavera de la Reina - Acabado Madera Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Talavera de la Reina - Acabado Madera Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-automatica-talavera-2_0bb6558e.jpg",
                  alt: "Puerta Seccional Panel Sandwich Pepino - Lacado al Horno RAL Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Pepino - Lacado al Horno RAL Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-garaje-talavera-3_965be917.jpg",
                  alt: "Puerta Seccional Panel Sandwich Cebolla - Acabado Profesional Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Cebolla - Acabado Profesional Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-metalica-talavera-4_7390da26.jpg",
                  alt: "Puerta Seccional Panel Sandwich Mejorada - Lacado al Horno Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Mejorada - Lacado al Horno Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-hierro-talavera-5_9ed978ba.jpg",
                  alt: "Puerta Seccional Panel Sandwich Talavera la Nueva - Acabado Madera Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Talavera la Nueva - Acabado Madera Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-aluminio-talavera-6_b6e321dd.jpg",
                  alt: "Puerta Seccional Panel Sandwich Belvis de la Jara - Lacado al Horno RAL Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Belvis de la Jara - Lacado al Horno RAL Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-seguridad-talavera-7_ce76b07f.jpg",
                  alt: "Puerta Seccional Panel Sandwich Sevilleja - Acabado Profesional Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Sevilleja - Acabado Profesional Automatizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-personalizada-talavera-8_4001a2bf.jpg",
                  alt: "Puerta Seccional Panel Sandwich Cervera de los Montes - Lacado al Horno Automatizada con Motor",
                  title: "Puerta Seccional Panel Sandwich Cervera de los Montes - Lacado al Horno Automatizada"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<DoorOpen size={32} />}
              title="Puertas de Portales para Comunidades en Talavera de la Reina"
              slug="puertas-portales-comunidad"
              description="Puertas de portales para comunidades a medida en Talavera de la Reina, Pepino, Cebolla, Mejorada y comarca. Soluciones modernas y seguras para accesos comunitarios. Fabricación en hierro y aluminio soldado con cristal de seguridad. Diseño funcional y profesional. Sistemas de cierre automático y control de acceso. Acabados de calidad garantizados. Instalación rápida y profesional. Protección y seguridad para tu comunidad."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_be99162f.jpg"
              galleryImages={[
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
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_6bcd4955.jpg",
                  title: "Puerta de Portal Cebolla - Cristal de Seguridad",
                  alt: "Puerta de portal en Cebolla con cristal de seguridad"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-01-DSC03849_fda6941e.jpg",
                  title: "Puerta de Portal en Talavera de la Reina - Cristal de Seguridad",
                  alt: "Puerta de Portal en Talavera de la Reina Cristal de Seguridad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-02-IMG-20230228-WA0000_9512e82f.jpg",
                  title: "Acceso Comunitario en Pepino - Control Profesional",
                  alt: "Acceso Comunitario en Pepino Control Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-03-IMG20240704130233_77dd07c2.jpg",
                  title: "Puerta Automática en Cebolla - Sistema de Acceso",
                  alt: "Puerta Automática en Cebolla Sistema de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-04-IMG_20160207_182031_83c11f22.jpg",
                  title: "Puerta de Portal en Mejorada - Cristal de Seguridad",
                  alt: "Puerta de Portal en Mejorada Cristal de Seguridad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-05-IMG_20170808_160746_7bc2b5bd.jpg",
                  title: "Acceso Comunitario en Comarca - Control Profesional",
                  alt: "Acceso Comunitario en Comarca Control Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-06-IMG_20190306_152416_99a1d93f.jpg",
                  title: "Puerta Automática en Talavera de la Reina - Sistema de Acceso",
                  alt: "Puerta Automática en Talavera de la Reina Sistema de Acceso"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-07-IMG_20211020_174002_c704d935.jpg",
                  title: "Puerta de Portal en Pepino - Cristal de Seguridad",
                  alt: "Puerta de Portal en Pepino Cristal de Seguridad"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/portales-portada_5383c39f.jpg",
                  title: "Acceso Comunitario en Cebolla - Control Profesional",
                  alt: "Acceso Comunitario en Cebolla Control Profesional"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<DoorOpen size={32} />}
              title="Puertas de Entrada a Vivienda de Hierro y Aluminio en Talavera de la Reina"
              slug="puertas-entrada-vivienda"
              description="Puertas de entrada a vivienda fabricadas a medida en hierro y aluminio soldado en Talavera de la Reina, Pepino, Cebolla, Mejorada, Talavera la Nueva, Belvís, Sevilleja y Cervera. Seguridad y elegancia para tu hogar. Diseños personalizados que se adaptan a cualquier fachada. Sistemas de cierre de seguridad avanzados. Acabados profesionales de calidad. Aislamiento térmico y acústico. Instalación rápida y garantizada. Protección total para tu entrada principal."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_ce7f6c3f.jpg"
              galleryImages={[
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
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_eec65455.jpg",
                  title: "Puerta de Entrada Cebolla - Seguridad Garantizada",
                  alt: "Puerta de entrada en Cebolla con seguridad garantizada"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-01-IMG-20190928-WA0012_93e4eca9.jpg",
                  title: "Puerta de Entrada en Talavera de la Reina - Seguridad Garantizada",
                  alt: "Puerta de Entrada en Talavera de la Reina Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-02-IMG-20201126-WA0011_38e2ac49.jpg",
                  title: "Puerta Vivienda en Pepino - Hierro y Aluminio",
                  alt: "Puerta Vivienda en Pepino Hierro y Aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-03-IMG20240201161500_1fb8b4e1.jpg",
                  title: "Acceso Principal en Cebolla - Diseño Elegante",
                  alt: "Acceso Principal en Cebolla Diseño Elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-04-IMG_20190221_103245_974085a0.jpg",
                  title: "Puerta de Entrada en Mejorada - Seguridad Garantizada",
                  alt: "Puerta de Entrada en Mejorada Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-05-IMG_20210728_121954_00635ec4.jpg",
                  title: "Puerta Vivienda en Talavera la Nueva - Hierro y Aluminio",
                  alt: "Puerta Vivienda en Talavera la Nueva Hierro y Aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-06-IMG_20230615_191842_d02e05de.jpg",
                  title: "Acceso Principal en Talavera de la Reina - Diseño Elegante",
                  alt: "Acceso Principal en Talavera de la Reina Diseño Elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-07-IMG_20231011_121100_4e41158a.jpg",
                  title: "Puerta de Entrada en Pepino - Seguridad Garantizada",
                  alt: "Puerta de Entrada en Pepino Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-08-IMG_20231011_121139_e7fd95e8.jpg",
                  title: "Puerta Vivienda en Cebolla - Hierro y Aluminio",
                  alt: "Puerta Vivienda en Cebolla Hierro y Aluminio"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puertas-entrada-portada_938a5f08.jpg",
                  title: "Acceso Principal en Mejorada - Diseño Elegante",
                  alt: "Acceso Principal en Mejorada Diseño Elegante"
                }
              ]}
            />
            
            <ServiceCardWithGallery
              icon={<Wrench size={32} />}
              title="Barandillas, Balcones y Escaleras de Hierro a Medida en Talavera de la Reina"
              slug="barandillas-escaleras"
              description="Barandillas, balcones y escaleras de hierro a medida con diseños clásicos y contemporáneos en Talavera de la Reina, Pepino, Castillo Bayuela, Mejorada y Cebolla. Fabricación artesanal en hierro soldado con acabados profesionales. Seguridad y estética garantizadas para tu hogar o negocio. Personalizable según tus preferencias de diseño. Resistencia estructural y durabilidad. Instalación profesional y rápida."
              coverImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_be14427c.jpg"
              galleryImages={[
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_72e0db48.jpg",
                  title: "Barandilla Escalera Hierro Talavera de la Reina - Diseño Profesional",
                  alt: "Barandilla escalera de hierro en Talavera de la Reina con diseño profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_44dc43fe.jpg",
                  title: "Barandilla Escalera Interior Pepino - Hierro Forjado",
                  alt: "Barandilla escalera interior en Pepino con hierro forjado"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_bf8c8876.jpg",
                  title: "Barandilla Escalera Exterior Cebolla - Seguridad Garantizada",
                  alt: "Barandilla escalera exterior en Cebolla con seguridad garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_acb5dce0.jpg",
                  title: "Barandilla Balcón Mejorada - Diseño Elegante",
                  alt: "Barandilla balcón en Mejorada con diseño elegante"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_e263396e.jpg",
                  title: "Barandilla Escalera Profesional Castillo Bayuela - Acabado Artesanal",
                  alt: "Barandilla escalera profesional en Castillo Bayuela con acabado artesanal"
                }
              ,
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-02-IMG-20200622-WA0006_e8d8ae34.jpg",
                  title: "Barandilla de Hierro en Talavera de la Reina - Diseño Profesional",
                  alt: "Barandilla de Hierro en Talavera de la Reina Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-03-IMG20250318091906_30de8bff.jpg",
                  title: "Escalera de Hierro Forjado en Pepino - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Pepino Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-04-IMG20250429175425_63692a78.jpg",
                  title: "Balcón de Hierro en Castillo Bayuela - Acabado Artesanal",
                  alt: "Balcón de Hierro en Castillo Bayuela Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-05-IMG20250821121520_04b51cdf.jpg",
                  title: "Barandilla de Hierro en Mejorada - Diseño Profesional",
                  alt: "Barandilla de Hierro en Mejorada Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-06-IMG20251028140545_38019670.jpg",
                  title: "Escalera de Hierro Forjado en Cebolla - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Cebolla Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-07-IMG_20181008_110245_236ab001.jpg",
                  title: "Balcón de Hierro en Talavera de la Reina - Acabado Artesanal",
                  alt: "Balcón de Hierro en Talavera de la Reina Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-08-IMG_20200326_101236_67adbae6.jpg",
                  title: "Barandilla de Hierro en Pepino - Diseño Profesional",
                  alt: "Barandilla de Hierro en Pepino Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-09-IMG_20210909_104059_b09014b7.jpg",
                  title: "Escalera de Hierro Forjado en Castillo Bayuela - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Castillo Bayuela Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-10-IMG_20210909_104557_c03b3357.jpg",
                  title: "Balcón de Hierro en Mejorada - Acabado Artesanal",
                  alt: "Balcón de Hierro en Mejorada Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-11-IMG_20211130_174548_9fc903d2.jpg",
                  title: "Barandilla de Hierro en Cebolla - Diseño Profesional",
                  alt: "Barandilla de Hierro en Cebolla Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-12-IMG_20220211_111103_26635661.jpg",
                  title: "Escalera de Hierro Forjado en Talavera de la Reina - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Talavera de la Reina Seguridad Garantizada"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-13-SAVE_20210524_192203_dbe83cce.jpg",
                  title: "Balcón de Hierro en Pepino - Acabado Artesanal",
                  alt: "Balcón de Hierro en Pepino Acabado Artesanal"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-portada_3563df1c.jpg",
                  title: "Barandilla de Hierro en Castillo Bayuela - Diseño Profesional",
                  alt: "Barandilla de Hierro en Castillo Bayuela Diseño Profesional"
                },
                {
                  url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/barandillas-01-DSC03751_f3ad262a.JPG",
                  title: "Escalera de Hierro Forjado en Mejorada - Seguridad Garantizada",
                  alt: "Escalera de Hierro Forjado en Mejorada Seguridad Garantizada"
                }
              ]}
            />
          </div>
          
          {/* Buttons to Projects, Productos and Blog */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
            <a
              href="https://wa.me/c/34661622160"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Ver Catálogo en WhatsApp
            </a>
            <a
              href="/blog"
              className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Leer Nuestro Blog
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            REPARACIONES Y TRABAJOS A MEDIDA
          </h2>
          
          <p className="text-center text-gray-300 mb-4">
            Soluciones de seguridad y diseño para tu hogar o negocio
          </p>
          
          <p className="text-center text-orange-400 font-semibold mb-12 text-lg">
            Compromiso • Seriedad • Satisfacción
          </p>
          
          {showContactForm ? (
            <ContactForm onClose={() => setShowContactForm(false)} />
          ) : (
            <div className="text-center">
              <Button
                onClick={() => setShowContactForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              >
                Solicitar Presupuesto Sin Compromiso
                     </Button>
            </div>
          )}
        </div>
      </section>

      {/* Google Reviews Section */}
      {reviews.length > 0 && (
        <GoogleReviews reviews={reviews} autoRotate={true} rotationInterval={5000} />
      )}

      {/* Location Section */}      <section className="py-16 bg-secondary border-t border-orange-600/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            📍 UBICACIÓN Y ZONA DE COBERTURA
          </h2>      
          <p className="text-center text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Visítanos en nuestro taller o solicita presupuesto para tu zona
          </p>
          
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border-2 border-orange-600/30">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6794656789!2d-4.82416!3d40.0007457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd401bcc43905b03%3A0x1deee5eef1491310!2sCerrajer%C3%ADa%20L.%20Arriero%20-%20Carpinter%C3%ADa%20Met%C3%A1lica!5e0!3m2!1ses!2ses!4v1741543200000"
            />
          </div>
          
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary p-6 rounded-lg border border-orange-600/30">
              <h3 className="text-xl font-bold text-white mb-4">📍 Ubicación</h3>
              <p className="text-gray-300 mb-2">
                <strong>Pol. Ind. Valdefuentes</strong>
              </p>
              <p className="text-gray-300 mb-2">
                Calle Principal, 10
              </p>
              <p className="text-gray-300 mb-4">
                45638 Pepino, Toledo
              </p>
              <p className="text-orange-400 font-semibold">252G+78 Pepino, Spain</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg border border-orange-600/30">
              <h3 className="text-xl font-bold text-white mb-4">📞 Contacto</h3>
              <div className="space-y-3">
                <a href="tel:925701792" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors">
                  <span>☎️</span>
                  <span>925 70 17 92</span>
                </a>
                <a href="https://wa.me/34661622160" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors">
                  <span>💬</span>
                  <span>661 62 21 60 (WhatsApp)</span>
                </a>
                <a href="mailto:cerrajeria_l.arriero@hotmail.com" className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors">
                  <span>✉️</span>
                  <span>cerrajeria_l.arriero@hotmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section - Discreta para SEO */}
      <section className="py-12 bg-background border-t border-orange-600/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm mb-6">
            Servicio profesional en Talavera de la Reina y alrededores
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Talavera de la Reina",
              "Pepino",
              "Cebolla",
              "Mejorada",
              "Seguirilla",
              "Talavera la Nueva",
              "Belvís de la Jara",
              "Sevilleja",
              "Cervera de los Montes",
              "San Román",
              "Pueblanueva",
              "Castillo Bayuela",
              "Nuño Gómez",
              "Hinojosa de San Vicente",
              "Real de San Vicente",
              "Marrupe",
              "Sotillo de las Palomas",
              "Serranillos",
              "Playa",
              "El Chaparral",
              "Montecarlo",
              "Prado del Arca",
              "Cornicabral",
              "Cervines",
              "Las Nieves",
              "Espinosillo",
            ].map((pueblo) => (
              <span key={pueblo} className="text-xs text-gray-600 bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700/50">
                {pueblo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-400 py-12 border-t border-orange-600/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 pb-8 border-b border-gray-700 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Cerrajeria L. Arriero</h2>
            <p className="text-orange-400 font-semibold">Carpinteria Metalica Profesional</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Contacto</h3>
              <p className="mb-2">📞 925 70 17 92</p>
              <p className="mb-2">💬 661 62 21 60 (WhatsApp)</p>
              <p className="mb-2">✉️ <a href="mailto:cerrajeria_l.arriero@hotmail.com" className="text-orange-400 hover:text-orange-300">cerrajeria_l.arriero@hotmail.com</a></p>
              <p>📍 Pol. Ind. Valdefuentes, Pepino, Toledo</p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Horario</h3>
              <p className="mb-2">Lunes - Viernes: 8:00 - 19:30</p>
              <p className="mb-2">Sábado: 9:00 - 14:00</p>
              <p>Domingo: Cerrado</p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Servicios</h3>
              <p className="mb-2">Presupuesto sin compromiso</p>
              <p className="mb-2">Instalación profesional</p>
              <p>Garantía en todos nuestros trabajos</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex justify-center gap-8 mb-6">
              <a href="https://www.facebook.com/CerrajeriaLArriero/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors text-2xl" title="Facebook">
                f
              </a>
              <a href="https://www.instagram.com/cerrajerialuisarriero/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition-colors text-2xl" title="Instagram">
                📷
              </a>
            </div>
            <p className="text-sm text-center">
              © 2026 Cerrajería L. Arriero. Todos los derechos reservados.
            </p>
            <p className="text-sm mt-2 text-orange-400 text-center">
              Especialistas en carpintería metálica y cerrajería profesional en Talavera de la Reina
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34661622160?text=Hola%2C%20quiero%20solicitar%20presupuesto%20para%20un%20trabajo%20de%20carpinter%C3%ADa%20met%C3%A1lica."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
        title="Solicitar presupuesto por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

function ServiceCard({ icon, title, description, image, slug }: { icon: React.ReactNode; title: string; description: string; image?: string; slug?: string }) {
  const handleClick = () => {
    if (slug) {
      window.location.href = `/servicios/${slug}`;
    }
  };

  return (
    <Card 
      onClick={handleClick}
      className={`bg-secondary border-orange-600/30 hover:border-orange-500 transition-colors p-6 overflow-hidden ${slug ? 'cursor-pointer hover:shadow-lg hover:shadow-orange-500/20' : ''}`}
    >
      {image && (
        <div className="mb-4 -mx-6 -mt-6 h-40 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
      {slug && (
        <div className="mt-4 text-orange-500 font-semibold text-sm hover:text-orange-400">
          Ver más →
        </div>
      )}
    </Card>
  );
}
