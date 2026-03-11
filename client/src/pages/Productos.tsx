import { useState } from "react";
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
    title: "Rejas de Seguridad de Hierro Macizo a Medida en Talavera",
    price: "150 EUR",
    description: "Fabricamos e instalamos rejas de hierro macizo a medida para ventanas y accesos en Talavera de la Reina y alrededores. Nuestras rejas combinan máxima protección, durabilidad y acabados estéticos de alta calidad, con tratamientos anticorrosivos y lacado al horno profesional.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina.jpg",
    category: "Seguridad",
    features: [
      "Hierro macizo y perfiles de acero de primera calidad",
      "Diseños modernos, minimalistas y clásicos reforzados",
      "Tratamientos anticorrosivos y lacado al horno",
      "Instalación profesional garantizada",
      "Presupuesto personalizado sin compromiso"
    ],
    locations: ["Talavera de la Reina", "Pepino", "Cebolla", "Mejorada", "Seguirilla", "Real de San Vicente", "San Román"]
  },
  {
    id: "2",
    title: "Puertas Correderas Metálicas a Medida en Talavera",
    price: "200 EUR",
    description: "Fabricamos e instalamos puertas correderas metálicas a medida en Talavera de la Reina y alrededores. Nuestras puertas combinan robustez, precisión y durabilidad, ideales para garajes, fincas y accesos industriales. Construcción reforzada con acabado lacado al horno resistente a la intemperie.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera.jpg",
    category: "Puertas",
    features: [
      "Estructuras en hierro, acero o aluminio premium",
      "Acabado lacado al horno resistente a la intemperie",
      "Herrajes y rodamientos de alta calidad",
      "Preparada para automatización",
      "Deslizamiento suave y silencioso"
    ],
    locations: ["Talavera de la Reina", "Montecarlo", "Prado del Arca", "El Chaparral", "Pueblanueva", "Castillo Bayuela"]
  },
  {
    id: "3",
    title: "Cancelas Metálicas de Seguridad a Medida en Talavera",
    price: "150 EUR",
    description: "Fabricamos e instalamos cancelas de hierro a medida en Talavera de la Reina y alrededores. Nuestras cancelas combinan robustez, diseño y máxima seguridad, ofreciendo durabilidad frente a la intemperie con tratamientos anticorrosivos y acabados profesionales.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera.jpg",
    category: "Seguridad",
    features: [
      "Diseños modernos, minimalistas y clásicos reforzados",
      "Tratamientos anticorrosivos profesionales",
      "Acabados de alta calidad",
      "Instalación profesional garantizada",
      "Adaptadas a cualquier medida"
    ],
    locations: ["Talavera de la Reina", "Pepino", "Cebolla", "La Jara", "Comarca", "Belvís de la Jara"]
  },
  {
    id: "4",
    title: "Barandillas y Balcones Metálicos a Medida en Talavera",
    price: "100 EUR",
    description: "Fabricamos e instalamos barandillas y balcones de hierro en Talavera de la Reina y alrededores. Personalizamos cada diseño según tu vivienda o edificio, combinando seguridad, durabilidad y estilo. Servicio profesional y garantía de instalación.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/industrial_background_sparks_d80625e8.jpg",
    category: "Barandillas",
    features: [
      "Opciones modernas, minimalistas o clásicas reforzadas",
      "Servicio profesional y garantía de instalación",
      "Personalización según tu vivienda o edificio",
      "Combinación de seguridad, durabilidad y estilo",
      "Presupuesto sin compromiso"
    ],
    locations: ["Talavera de la Reina", "Pepino", "Cebolla", "Mejorada", "Castillo Bayuela", "Nuño Gómez"]
  },
  {
    id: "5",
    title: "Puestos de Caza y Aguardos a Medida en Talavera",
    price: "100 EUR",
    description: "Fabricamos e instalamos puestos de caza y casetas para aguardos nocturnos a medida en Talavera de la Reina y alrededores. Material de alta calidad con panel sándwich de alta densidad para aislamiento térmico y acústico profesional.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/metal_welding_close_up_aedbc5e1.jpg",
    category: "Equipamiento Cinegético",
    features: [
      "Panel sándwich de alta densidad para aislamiento térmico",
      "Estructura robusta con acabados de cerrajería industrial",
      "Diseños personalizables imitación madera o lacados",
      "Ventanas silenciosas y cero condensación",
      "Instalación profesional garantizada"
    ],
    locations: ["Talavera de la Reina", "Comarca de Talavera", "La Jara", "Sevilleja", "Cervera de los Montes"]
  }
];

export default function Productos() {
  const [, navigate] = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-black/80 border-b border-orange-500 py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
            >
              <ArrowLeft size={20} />
              <span>Volver</span>
            </a>
            <h1 className="text-3xl font-bold text-white">Catálogo de Productos</h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Explora nuestro catálogo completo de productos de carpintería metálica. Todos nuestros trabajos son fabricados a medida y personalizados según tus necesidades. Presupuesto sin compromiso.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <Card
                key={product.id}
                className="bg-gray-900 border-orange-500/30 hover:border-orange-500 transition-colors cursor-pointer overflow-hidden group"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden bg-black">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    {product.price}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <div className="text-orange-400 text-sm font-semibold mb-2">{product.category}</div>
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Locations */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Disponible en:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.locations.slice(0, 3).map((loc, idx) => (
                        <span key={idx} className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">
                          {loc}
                        </span>
                      ))}
                      {product.locations.length > 3 && (
                        <span className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded">
                          +{product.locations.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Ver Detalles
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="bg-gray-900 border-orange-500 max-w-2xl w-full my-8">
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="float-right text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>

              {/* Product Image */}
              <div className="mb-6">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-orange-400 font-semibold mb-2">{selectedProduct.category}</p>
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProduct.title}
                    </h2>
                  </div>
                  <div className="text-2xl font-bold text-orange-500">
                    {selectedProduct.price}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-lg">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Características principales:</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <span className="text-orange-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Locations */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Disponible en:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.locations.map((loc, idx) => (
                      <span key={idx} className="bg-orange-900/30 text-orange-300 px-3 py-1 rounded">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-6">
                  <p className="text-gray-300 mb-4">
                    Solicita tu presupuesto personalizado sin compromiso. Nuestro equipo de expertos te asesorará sobre la mejor solución para tu proyecto.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:925701792"
                    className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1"
                  >
                    <Phone size={18} />
                    📞 Llamar: 925 70 17 92
                  </a>

                  <a
                    href={`https://wa.me/34661622160?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(selectedProduct.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex-1"
                  >
                    <MessageCircle size={18} />
                    💬 WhatsApp: 661 62 21 60
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
