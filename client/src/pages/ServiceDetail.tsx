import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';

const serviceData = {
  "puertas-correderas-automaticas": {
    title: "Puertas Correderas Automáticas",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-correderas-automaticas-portada-talavera-reina_93c6539c.jpg", title: "Puerta Corredera Automática Gris en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-correderas-automaticas-talavera-reina_bcd8e5ee.jpg", title: "Puerta Corredera Automática Instalada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-puertas-correderas-automaticas-talavera-reina_45177c2a.jpg", title: "Puerta Corredera Automática de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-puertas-correderas-automaticas-talavera-reina_ad1874a8.jpg", title: "Puerta Corredera Automática Fabricada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-puertas-correderas-automaticas-talavera-reina_3294ea82.jpg", title: "Puerta Corredera Automática Personalizada en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-correderas-automaticas-talavera-reina_08f0a94d.jpg", title: "Puerta Corredera Automática de Hierro en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-correderas-automaticas-talavera-reina_7207e14b.jpg", title: "Puerta Corredera Automática Soldada en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-correderas-automaticas-talavera-reina_5b3550f2.jpg", title: "Puerta Corredera Automática Instalada en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-correderas-automaticas-talavera-reina_e7681138.jpg", title: "Puerta Corredera Automática con Control Remoto" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-correderas-automaticas-talavera-reina_9ada3cb2.jpg", title: "Puerta Corredera Automática de Seguridad" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-correderas-automaticas-talavera-reina_63e3aee5.jpg", title: "Puerta Corredera Automática Resistente" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-correderas-automaticas-talavera-reina_f6554cf3.jpg", title: "Puerta Corredera Automática Moderna" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-correderas-automaticas-talavera-reina_bc288add.jpg", title: "Puerta Corredera Automática Profesional" },
    ],
  },
  "rejas-seguridad": {
    title: "Rejas de Seguridad",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-rejas-seguridad-talavera-reina_73976128.jpg", title: "Reja de Seguridad Negra en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-rejas-seguridad-talavera-reina_add28802.jpg", title: "Reja de Seguridad Forjada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-rejas-seguridad-talavera-reina_c013da21.jpg", title: "Reja de Seguridad Personalizada en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-rejas-seguridad-talavera-reina_91e49c74.jpg", title: "Reja de Seguridad Resistente en Mejorada" },
    ],
  },
  "puertas-entrada-vivienda": {
    title: "Puertas de Entrada a Vivienda",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-entrada-vivienda-talavera-reina_ce7f6c3f.jpg", title: "Puerta de Entrada a Vivienda de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-entrada-vivienda-talavera-reina_5d91fc72.jpg", title: "Puerta de Entrada a Vivienda Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-entrada-vivienda-talavera-reina_04586d8a.jpg", title: "Puerta de Entrada a Vivienda de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-entrada-vivienda-talavera-reina_56281770.jpg", title: "Puerta de Entrada a Vivienda Moderna en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-entrada-vivienda-talavera-reina_eec65455.jpg", title: "Puerta de Entrada a Vivienda Forjada en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-entrada-vivienda-talavera-reina_c3074f5f.jpg", title: "Puerta de Entrada a Vivienda Soldada en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-entrada-vivienda-talavera-reina_b2226cdc.jpg", title: "Puerta de Entrada a Vivienda Resistente en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-entrada-vivienda-talavera-reina_1a6f980a.jpg", title: "Puerta de Entrada a Vivienda de Seguridad en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-entrada-vivienda-talavera-reina_75da421f.jpg", title: "Puerta de Entrada a Vivienda Profesional" },
    ],
  },
  "puertas-portones": {
    title: "Puertas y Portones",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portones-portada-talavera-reina_1325cd04.jpg", title: "Puerta Portón de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portones-talavera-reina_b61fc7ff.jpg", title: "Puerta Portón Personalizado en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portones-talavera-reina_6183c823.jpg", title: "Puerta Portón de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portones-talavera-reina_11a34807.jpg", title: "Puerta Portón Forjado en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portones-talavera-reina_2b3d5ed7.jpg", title: "Puerta Portón Soldado en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portones-talavera-reina_6255d1b7.jpg", title: "Puerta Portón Resistente en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portones-talavera-reina_a4c10757.jpg", title: "Puerta Portón Moderno en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portones-talavera-reina_7934018a.jpg", title: "Puerta Portón de Seguridad en Cervera" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/8-puertas-portones-talavera-reina_28cb982e.jpg", title: "Puerta Portón Profesional" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/9-puertas-portones-talavera-reina_aa396d60.jpg", title: "Puerta Portón Personalizada" },
    ],
  },
  "puertas-portales-comunidad": {
    title: "Puertas de Portales para Comunidades",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-puertas-portales-comunidad-portada-talavera-reina_be99162f.jpg", title: "Puerta de Portal para Comunidad en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-puertas-portales-comunidad-talavera-reina_b52351ee.jpg", title: "Puerta de Portal Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-puertas-portales-comunidad-talavera-reina_a6a20823.jpg", title: "Puerta de Portal de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-puertas-portales-comunidad-talavera-reina_754130f6.jpg", title: "Puerta de Portal Forjada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-puertas-portales-comunidad-talavera-reina_6bcd4955.jpg", title: "Puerta de Portal Soldada en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-puertas-portales-comunidad-talavera-reina_b75056ff.jpg", title: "Puerta de Portal Resistente en Belvís" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/6-puertas-portales-comunidad-talavera-reina_f4a3869f.jpg", title: "Puerta de Portal Moderna en Sevilleja" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/7-puertas-portales-comunidad-talavera-reina_0f668ed3.jpg", title: "Puerta de Portal Profesional en Cervera" },
    ],
  },
  "cerramientos-industriales": {
    title: "Cerramientos Industriales de Hierro y Cristal",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cerramientos-industriales-hierro-cristal-portada-talavera-reina_ecebc238.jpg", title: "Cerramiento Industrial de Hierro y Cristal en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cerramientos-industriales-hierro-cristal-talavera-reina_95c25621.jpg", title: "Cerramiento Industrial Personalizado en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-cerramientos-industriales-hierro-cristal-talavera-reina_be4a5729.jpg", title: "Cerramiento Industrial de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-cerramientos-industriales-hierro-cristal-talavera-reina_d258bc12.jpg", title: "Cerramiento Industrial Forjado en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-cerramientos-industriales-hierro-cristal-talavera-reina_8f128749.jpg", title: "Cerramiento Industrial Soldado en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-cerramientos-industriales-hierro-cristal-talavera-reina_8f356ad1.jpg", title: "Cerramiento Industrial Resistente en Belvís" },
    ],
  },
  "pergolas-cubiertas": {
    title: "Pérgolas y Cubiertas con Panel Sándwich",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-pergolas-cubiertas-portada-talavera-reina_395a6411.jpg", title: "Pérgola con Panel Sándwich en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-pergolas-cubiertas-talavera-reina_e1793570.jpg", title: "Pérgola Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/2-pergolas-cubiertas-talavera-reina_49a96170.jpg", title: "Pérgola de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/3-pergolas-cubiertas-talavera-reina_fe1329cf.jpg", title: "Pérgola Forjada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/4-pergolas-cubiertas-talavera-reina_350cff06.jpg", title: "Pérgola Soldada en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/5-pergolas-cubiertas-talavera-reina_d668f0f4.jpg", title: "Pérgola Resistente en Belvís" },
    ],
  },
  "cancelas-hierro": {
    title: "Cancelas de Hierro",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-cancelas-hierro-portada-talavera-reina_c512473c.jpg", title: "Cancela de Hierro a Medida en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-cancelas-hierro-talavera-reina_abdcae0c.jpg", title: "Cancela de Hierro Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-cancelas-hierro-talavera-reina_962d5790.jpg", title: "Cancela de Hierro Forjada en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-cancelas-hierro-talavera-reina_1529cc68.jpg", title: "Cancela de Hierro Soldada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-cancelas-hierro-talavera-reina_04154690.jpg", title: "Cancela de Hierro Resistente en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-cancelas-hierro-talavera-reina_f3507705.jpg", title: "Cancela de Hierro Moderna en Belvís" },
    ],
  },
  "barandillas-escaleras": {
    title: "Barandillas, Balcones y Escaleras",
    gallery: [
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/0-barandillas-escaleras-portada-talavera-reina_4e1e768a.jpg", title: "Barandilla de Escalera de Hierro en Talavera de la Reina" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/1-barandillas-escaleras-talavera-reina_266683c3.jpg", title: "Barandilla Personalizada en Pepino" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/10-barandillas-escaleras-talavera-reina_eee31ad2.jpg", title: "Barandilla de Aluminio en Cebolla" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/11-barandillas-escaleras-talavera-reina_aefdcf47.jpg", title: "Barandilla Forjada en Mejorada" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/12-barandillas-escaleras-talavera-reina_09d8d9c0.jpg", title: "Barandilla Soldada en Talavera la Nueva" },
      { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/13-barandillas-escaleras-talavera-reina_61058adf.jpg", title: "Barandilla Resistente en Belvís" },
    ],
  },
};

export default function ServiceDetail() {
  const [location] = useLocation();
  const slug = location.split('/').pop() || '';
  const service = serviceData[slug as keyof typeof serviceData];
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!service) {
    return <div className="text-center py-20">Servicio no encontrado</div>;
  }

  const currentPhoto = service.gallery[currentIndex];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">{service.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <div className="lg:col-span-2">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white font-semibold">{currentPhoto.title}</p>
                <p className="text-gray-300 text-sm">{currentIndex + 1} / {service.gallery.length}</p>
              </div>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => setCurrentIndex((currentIndex - 1 + service.gallery.length) % service.gallery.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentIndex((currentIndex + 1) % service.gallery.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="space-y-4">
            <h3 className="font-semibold">Galería ({service.gallery.length} fotos)</h3>
            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {service.gallery.map((photo: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentIndex ? 'border-orange-500' : 'border-gray-300'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                  <p className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-1 truncate">
                    {index + 1}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">¿Te interesa este servicio?</h2>
          <p className="text-gray-600 mb-6">Contacta con nosotros para más información y presupuesto</p>
          <div className="flex gap-4">
            <a href="tel:925701792" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold">
              📞 Llamar
            </a>
            <a href="https://wa.me/34661622160" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
