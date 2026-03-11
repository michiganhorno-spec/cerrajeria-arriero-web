import { Phone, MessageCircle, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
  category: string;
  features: string[];
  locations: string[];
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Puertas Seccionales a Medida en Talavera de la Reina",
    price: "250 EUR",
    description: "Puertas seccionales de alta calidad fabricadas a medida en Talavera de la Reina, Pepino, Cebolla y Mejorada. Sistemas de apertura suave y silenciosa con mecanismos de seguridad avanzados. Ideales para garajes, naves industriales y accesos comerciales. Fabricación en acero galvanizado y aluminio soldado con acabados profesionales. Instalación rápida y garantizada.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina.jpg",
    category: "Puertas",
    features: [
      "Acero galvanizado y aluminio soldado de primera calidad",
      "Sistemas de apertura suave y silenciosa",
      "Mecanismos de seguridad avanzados",
      "Instalación rápida y garantizada",
      "Mantenimiento y reparación disponible"
    ],
    locations: ["Talavera de la Reina", "Pepino", "Cebolla", "Mejorada", "Seguirilla", "Talavera la Nueva"]
  },
  {
    id: "2",
    title: "Rejas de Seguridad de Hierro Macizo a Medida en Talavera",
    price: "150 EUR",
    description: "Rejas de seguridad personalizadas en hierro macizo y aluminio soldado para ventanas, balcones y accesos en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva. Máxima protección con diseños tradicionales y modernos. Fabricación artesanal con soldadura de calidad y acabados profesionales. Resistencia garantizada contra intentos de robo.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera.jpg",
    category: "Seguridad",
    features: [
      "Hierro macizo y aluminio soldado de primera calidad",
      "Diseños tradicionales y modernos personalizados",
      "Fabricación artesanal con soldadura de calidad",
      "Resistencia garantizada contra intentos de robo",
      "Instalación segura y rápida"
    ],
    locations: ["Talavera de la Reina", "Cebolla", "Seguirilla", "Mejorada", "Talavera la Nueva", "Pepino"]
  },
  {
    id: "3",
    title: "Puertas Automáticas de Hierro y Aluminio Soldado en Talavera",
    price: "200 EUR",
    description: "Puertas automáticas a medida de hierro y aluminio soldado con sistemas de apertura suave, silenciosa y segura en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva y El Chaparral. Soluciones personalizadas para garajes, accesos comerciales y residenciales. Sistemas de cierre automático y controlado. Tecnología de última generación con mandos a distancia.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera.jpg",
    category: "Puertas",
    features: [
      "Sistemas de apertura suave, silenciosa y segura",
      "Tecnología de última generación",
      "Mandos a distancia y controles de acceso",
      "Instalación profesional con garantía",
      "Mantenimiento y reparación especializada"
    ],
    locations: ["Talavera de la Reina", "Montecarlo", "Prado del Arca", "Pueblanueva", "El Chaparral", "Castillo Bayuela"]
  },
  {
    id: "4",
    title: "Barandillas y Balcones de Hierro a Medida en Talavera",
    price: "100 EUR",
    description: "Barandillas y balcones de hierro a medida con diseños clásicos y contemporáneos en Talavera de la Reina, Pepino, Castillo Bayuela, Mejorada y Cebolla. Fabricación artesanal en hierro soldado con acabados profesionales. Seguridad y estética garantizadas. Personalizable según tus preferencias de diseño. Resistencia estructural y durabilidad garantizadas.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/industrial_background_sparks_d80625e8.jpg",
    category: "Barandillas",
    features: [
      "Diseños clásicos y contemporáneos personalizados",
      "Fabricación artesanal en hierro soldado",
      "Acabados profesionales de alta calidad",
      "Resistencia estructural y durabilidad",
      "Instalación profesional y rápida"
    ],
    locations: ["Talavera de la Reina", "Pepino", "Castillo Bayuela", "Mejorada", "Cebolla", "Nuño Gómez"]
  },
  {
    id: "5",
    title: "Pérgolas y Cubiertas con Panel Sándwich en Talavera",
    price: "180 EUR",
    description: "Pérgolas metálicas y cubiertas con panel sándwich para ampliar tu espacio habitable con protección total en Talavera de la Reina, Belvís de la Jara, Sevilleja, Cervera de los Montes y Nuño Gómez. Excelente aislamiento térmico y acústico. Diseño moderno y funcional. Fabricación en hierro y aluminio soldado. Instalación profesional garantizada. Resistencia a la intemperie. Aumenta el valor de tu propiedad.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/metal_welding_close_up_aedbc5e1.jpg",
    category: "Cubiertas",
    features: [
      "Panel sándwich de alta densidad",
      "Excelente aislamiento térmico y acústico",
      "Diseño moderno y funcional",
      "Resistencia a la intemperie",
      "Instalación profesional garantizada"
    ],
    locations: ["Talavera de la Reina", "Belvís de la Jara", "Sevilleja", "Cervera de los Montes", "Nuño Gómez", "San Román"]
  },
  {
    id: "6",
    title: "Cancelas de Hierro a Medida en Talavera de la Reina",
    price: "150 EUR",
    description: "Cancelas de hierro a medida en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva y Castillo Bayuela. Combinan resistencia estructural con diseño profesional. Adaptadas a cualquier estilo arquitectónico y necesidad de seguridad. Fabricación en hierro y aluminio soldado con acabados de calidad. Instalación rápida y segura. Protección total para parcelas, fincas y terrenos.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina.jpg",
    category: "Seguridad",
    features: [
      "Resistencia estructural y diseño profesional",
      "Adaptadas a cualquier estilo arquitectónico",
      "Fabricación en hierro y aluminio soldado",
      "Acabados de calidad profesional",
      "Instalación rápida y segura"
    ],
    locations: ["Talavera de la Reina", "Real de San Vicente", "San Román", "Pueblanueva", "Castillo Bayuela", "Hinojosa de San Vicente"]
  },
  {
    id: "7",
    title: "Mobiliario Industrial Metálico a Medida en Talavera",
    price: "120 EUR",
    description: "Mobiliario industrial personalizado en hierro y aluminio soldado en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos. Mesas, estanterías, armarios y estructuras robustas para tu negocio. Diseño funcional y profesional. Fabricación artesanal con acabados de calidad. Solución completa para almacenes, talleres y espacios industriales. Resistencia y durabilidad garantizadas.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera.jpg",
    category: "Mobiliario",
    features: [
      "Mesas, estanterías, armarios y estructuras robustas",
      "Diseño funcional y profesional",
      "Fabricación artesanal con acabados de calidad",
      "Resistencia y durabilidad garantizadas",
      "Personalizable según tus necesidades"
    ],
    locations: ["Talavera de la Reina", "Hinojosa de San Vicente", "Marrupe", "Sotillo de las Palomas", "Serranillos", "Real de San Vicente"]
  },
  {
    id: "8",
    title: "Mobiliario Industrial de Hierro Soldado a Medida en Talavera",
    price: "140 EUR",
    description: "Mobiliario industrial de hierro soldado a medida en Talavera de la Reina, Playa, El Chaparral, Montecarlo y Prado del Arca. Estructuras robustas y duraderas para almacenes, fábricas y talleres. Mesas de trabajo, estanterías de carga pesada, armarios y racks personalizados. Fabricación artesanal con soldadura de calidad. Acabados profesionales. Diseño funcional y resistente. Instalación garantizada.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/industrial_background_sparks_d80625e8.jpg",
    category: "Mobiliario",
    features: [
      "Estructuras robustas y duraderas",
      "Mesas de trabajo y estanterías de carga pesada",
      "Fabricación artesanal con soldadura de calidad",
      "Acabados profesionales",
      "Diseño funcional y resistente"
    ],
    locations: ["Talavera de la Reina", "Playa", "El Chaparral", "Montecarlo", "Prado del Arca", "Cornicabral"]
  },
  {
    id: "9",
    title: "Automatismos para Puertas y Portones en Talavera de la Reina",
    price: "160 EUR",
    description: "Instalación de automatismos profesionales para puertas y portones en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo. Sistemas de apertura suave, segura y controlada. Tecnología de última generación. Mandos a distancia y controles de acceso avanzados. Mantenimiento y reparación especializada. Seguridad garantizada para tu hogar o negocio. Instalación profesional y rápida.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/metal_welding_close_up_aedbc5e1.jpg",
    category: "Automatismos",
    features: [
      "Sistemas de apertura suave, segura y controlada",
      "Tecnología de última generación",
      "Mandos a distancia y controles de acceso avanzados",
      "Mantenimiento y reparación especializada",
      "Instalación profesional y rápida"
    ],
    locations: ["Talavera de la Reina", "Cornicabral", "Cervines", "Las Nieves", "Espinosillo", "Playa"]
  }
];

export default function Productos() {
  const [, navigate] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
          <h1 className="text-4xl font-bold">Catálogo de Productos</h1>
          <p className="text-orange-100 mt-2">Soluciones de carpintería metálica en Talavera de la Reina</p>
        </div>
      </header>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer bg-card border-border"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-orange-600 font-semibold mb-2">{product.category}</div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-600">{product.price}</span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition-colors">
                    Ver detalles
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
            <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-2xl hover:opacity-80"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="mb-6">
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                <div className="text-3xl font-bold text-orange-600 mb-4">{selectedProduct.price}</div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Características</h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-card-foreground">
                      <span className="text-orange-600 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Zonas de Cobertura</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.locations.map((location, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="tel:+34925701792"
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone size={20} />
                  Llamar
                </a>
                <a
                  href="https://wa.me/34661622160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
