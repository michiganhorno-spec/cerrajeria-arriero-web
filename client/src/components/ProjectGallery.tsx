import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "reja-1",
    title: "Reja de Hierro Negro Tradicional",
    description: "Reja de hierro negro con diseño tradicional español, soldada profesionalmente con acabado de calidad superior.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera_b4b99360.jpg",
    alt: "Reja de hierro negro personalizada - Cerrajería L. Arriero Talavera de la Reina",
    category: "Rejas",
  },
  {
    id: "reja-2",
    title: "Reja de Hierro Gris Moderno",
    description: "Reja de hierro gris con diseño moderno y marco profesional. Perfecta para viviendas contemporáneas.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera_88223c0d.jpg",
    alt: "Reja de hierro gris moderno - Trabajos de cerrajería en Talavera",
    category: "Rejas",
  },
  {
    id: "reja-3",
    title: "Reja de Hierro Amarillo Personalizada",
    description: "Reja de hierro con diseño tradicional español en pared amarilla. Trabajo personalizado según especificaciones del cliente.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-amarillo-personalizada-talavera_e1afa918.jpg",
    alt: "Reja de hierro personalizada con diseño tradicional español",
    category: "Rejas",
  },
  {
    id: "reja-4",
    title: "Reja de Aluminio Azul Moderno",
    description: "Reja de aluminio azul con diseño moderno y limpio. Excelente relación entre seguridad y estética.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina_03362468.jpg",
    alt: "Reja de aluminio azul moderno - Cerrajería profesional Talavera",
    category: "Rejas",
  },
];

export default function ProjectGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          GALERÍA DE PROYECTOS
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Descubre nuestros trabajos realizados. Cada proyecto refleja nuestro compromiso con la calidad y la excelencia en carpintería metálica.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="cursor-pointer group overflow-hidden rounded-lg"
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-orange-400 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Imagen Ampliada */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X size={32} />
            </button>

            <Card className="bg-secondary border-orange-600/30 overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-orange-400 font-semibold mb-4">
                  {selectedItem.category}
                </p>
                <p className="text-gray-300 mb-6">{selectedItem.description}</p>

                <div className="flex gap-4">
                  <a
                    href="tel:925701792"
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    📞 Llamar
                  </a>
                  <a
                    href="https://wa.me/34661622160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
}
