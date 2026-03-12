import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

const TRABAJOS = [
  {
    id: 1,
    titulo: "Puerta Seccional Talavera de la Reina - Acabado Profesional",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-talavera-reina-1_8e112a6e.jpg",
    descripcion: "Puerta seccional de alta calidad instalada en Talavera de la Reina con mecanismo automático y acabado profesional.",
    categoria: "Puertas Seccionales",
    ubicacion: "Talavera de la Reina"
  },
  {
    id: 2,
    titulo: "Puerta Seccional Automática - Garaje Pepino",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-automatica-talavera-2_0bb6558e.jpg",
    descripcion: "Puerta seccional automática instalada en Pepino con sistema de apertura suave y silenciosa.",
    categoria: "Puertas Seccionales",
    ubicacion: "Pepino"
  },
  {
    id: 3,
    titulo: "Puerta Seccional para Garaje - Cebolla",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-garaje-talavera-3_965be917.jpg",
    descripcion: "Puerta seccional robusta para garaje en Cebolla con acabado en acero galvanizado.",
    categoria: "Puertas Seccionales",
    ubicacion: "Cebolla"
  },
  {
    id: 4,
    titulo: "Puerta Seccional Metálica - Mejorada",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-metalica-talavera-4_7390da26.jpg",
    descripcion: "Puerta seccional metálica de seguridad instalada en Mejorada con protección avanzada.",
    categoria: "Puertas Seccionales",
    ubicacion: "Mejorada"
  },
  {
    id: 5,
    titulo: "Puerta Seccional de Hierro - Talavera la Nueva",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-hierro-talavera-5_9ed978ba.jpg",
    descripcion: "Puerta seccional fabricada en hierro soldado en Talavera la Nueva con acabado profesional.",
    categoria: "Puertas Seccionales",
    ubicacion: "Talavera la Nueva"
  },
  {
    id: 6,
    titulo: "Puerta Seccional de Aluminio - Belvís de la Jara",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-aluminio-talavera-6_b6e321dd.jpg",
    descripcion: "Puerta seccional de aluminio soldado en Belvís de la Jara con excelente resistencia.",
    categoria: "Puertas Seccionales",
    ubicacion: "Belvís de la Jara"
  },
  {
    id: 7,
    titulo: "Puerta Seccional de Seguridad - Sevilleja",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-seguridad-talavera-7_ce76b07f.jpg",
    descripcion: "Puerta seccional con sistema de seguridad avanzado instalada en Sevilleja.",
    categoria: "Puertas Seccionales",
    ubicacion: "Sevilleja"
  },
  {
    id: 8,
    titulo: "Puerta Seccional Personalizada - Cervera de los Montes",
    imagen: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/puerta-seccional-personalizada-talavera-8_4001a2bf.jpg",
    descripcion: "Puerta seccional personalizada según especificaciones del cliente en Cervera de los Montes.",
    categoria: "Puertas Seccionales",
    ubicacion: "Cervera de los Montes"
  }
];

export default function TrabajosRealizados() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-6">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h1 className="text-4xl font-bold">Trabajos Realizados</h1>
          <p className="text-orange-100 mt-2">Puertas Seccionales en Talavera de la Reina y Alrededores</p>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Galería de Puertas Seccionales</h2>
            <p className="text-gray-400 text-lg">
              Descubre nuestros trabajos realizados en puertas seccionales a medida en Talavera de la Reina y pueblos alrededores. 
              Cada proyecto es único y adaptado a las necesidades específicas de nuestros clientes.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRABAJOS.map((trabajo) => (
              <div
                key={trabajo.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64 bg-gray-800">
                  <img
                    src={trabajo.imagen}
                    alt={trabajo.titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {trabajo.categoria}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{trabajo.titulo}</h3>
                  <p className="text-gray-300 mb-4">{trabajo.descripcion}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-orange-400 text-sm font-semibold">📍 {trabajo.ubicacion}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas una Puerta Seccional?</h2>
          <p className="text-orange-100 mb-8 text-lg">
            Solicita tu presupuesto sin compromiso. Trabajamos en toda la zona de Talavera de la Reina y alrededores.
          </p>
          <a
            href="https://wa.me/34661622160?text=Hola,%20me%20interesa%20una%20puerta%20seccional%20a%20medida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Cerrajería L. Arriero | Carpintería Metálica Profesional</p>
          <p className="mb-2">Especialistas en Puertas Seccionales en Talavera de la Reina</p>
          <p className="text-sm">Más de 40 años de experiencia en la zona</p>
        </div>
      </section>
    </div>
  );
}
