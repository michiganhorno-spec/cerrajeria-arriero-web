import { useState } from "react";
import { Card } from "@/components/ui/card";
import { X, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "reja-1",
    title: "Reja de Hierro Negro Tradicional",
    description: "Reja de hierro negro con diseño tradicional español, soldada profesionalmente con acabado de calidad superior. Trabajo personalizado que combina seguridad y elegancia.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera_b4b99360.jpg",
    alt: "Reja de hierro negro personalizada - Cerrajería L. Arriero Talavera de la Reina",
    category: "Rejas",
  },
  {
    id: "reja-2",
    title: "Reja de Hierro Gris Moderno",
    description: "Reja de hierro gris con diseño moderno y marco profesional. Perfecta para viviendas contemporáneas que buscan seguridad sin sacrificar el diseño.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-gris-moderno-talavera_88223c0d.jpg",
    alt: "Reja de hierro gris moderno - Trabajos de cerrajería en Talavera",
    category: "Rejas",
  },
  {
    id: "reja-3",
    title: "Reja de Aluminio Azul Moderno",
    description: "Reja de aluminio azul con diseño moderno y limpio. Excelente relación entre seguridad y estética. Ideal para espacios modernos y contemporáneos.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-aluminio-azul-talavera-reina_03362468.jpg",
    alt: "Reja de aluminio azul moderno - Cerrajería profesional Talavera",
    category: "Rejas",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-secondary border-b border-orange-600/30 py-6 sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center gap-4">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
          >
            <ArrowLeft size={24} />
            <span className="font-semibold">Volver</span>
          </button>
          <h1 className="text-3xl font-bold text-white">Trabajos Realizados</h1>
        </div>
      </header>

      {/* Projects Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Descubre nuestros trabajos realizados. Cada proyecto refleja nuestro compromiso con la calidad y la excelencia en carpintería metálica y cerrajería profesional.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group overflow-hidden rounded-lg"
              >
                <div className="relative h-80 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <p className="text-orange-400 text-sm font-semibold">{project.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Proyecto Ampliado */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
            >
              <X size={32} />
            </button>

            <Card className="bg-secondary border-orange-600/30 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.alt}
                className="w-full h-auto"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-orange-400 font-semibold mb-6 text-lg">
                  {selectedProject.category}
                </p>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:925701792"
                    className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                  >
                    📞 Llamar: 925 70 17 92
                  </a>
                  <a
                    href="https://wa.me/34661622160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                  >
                    💬 WhatsApp: 661 62 21 60
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
