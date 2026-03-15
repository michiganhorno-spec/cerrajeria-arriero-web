import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "6",
    title: "Protección contra Robos en Talavera: Rejas vs Cerramientos Industriales",
    excerpt: "¿Rejas o cerramientos industriales? Descubre cuál es la mejor opción para proteger tu hogar o negocio en Talavera de la Reina, Pepino y Cebolla.",
    content: "En Talavera de la Reina, la seguridad es fundamental. Tanto las rejas de hierro como los cerramientos industriales ofrecen protección, pero cada una tiene ventajas específicas. Las rejas son ideales para ventanas y balcones, permitiendo visibilidad y ventilación. Los cerramientos industriales son perfectos para espacios amplios que requieren separación total. En Carpintería L. Arriero, analizamos tu situación específica para recomendarte la solución más adecuada. Con más de 40 años de experiencia en Talavera, Pepino, Cebolla y alrededores, sabemos qué funciona mejor en cada caso.",
    author: "Carpintería L. Arriero",
    date: "2026-03-15",
    category: "Seguridad",
  },
  {
    id: "5",
    title: "Mantenimiento de Puertas Automáticas: Guía Completa para Talavera",
    excerpt: "Aprende cómo mantener tus puertas automáticas en perfecto estado. Consejos prácticos para alargar la vida útil de tus sistemas de apertura.",
    content: "Las puertas automáticas requieren mantenimiento regular para funcionar correctamente. En Talavera de la Reina, Carpintería L. Arriero ofrece servicios de mantenimiento preventivo que evitan averías costosas. Limpia los sensores mensualmente, revisa los mecanismos cada 6 meses y realiza lubricación anual. Si notas ruidos extraños o movimientos lentos, contacta con nosotros inmediatamente. Nuestro equipo especializado en Talavera, Pepino, Cebolla y comarca está disponible para reparaciones urgentes. Mantener tu puerta automática en buen estado garantiza seguridad, comodidad y durabilidad.",
    author: "Carpintería L. Arriero",
    date: "2026-03-14",
    category: "Mantenimiento",
  },
  {
    id: "4",
    title: "Diseño de Barandillas Modernas: Tendencias 2026 en Talavera",
    excerpt: "Descubre las tendencias en diseño de barandillas para 2026. Combinaciones de hierro, aluminio y cristal que transforman tu espacio.",
    content: "En 2026, las barandillas modernas combinan funcionalidad con estética contemporánea. Los diseños minimalistas con líneas rectas y materiales mixtos (hierro + cristal, aluminio + acero inoxidable) son tendencia en Talavera de la Reina. Las barandillas de seguridad para escaleras interiores ahora incorporan cristal templado que permite visibilidad total. En Carpintería L. Arriero, fabricamos barandillas personalizadas que se adaptan a tu estilo arquitectónico. Desde diseños clásicos tradicionales hasta contemporáneos minimalistas, tenemos la solución perfecta para tu hogar en Talavera, Pepino, Cebolla y alrededores.",
    author: "Carpintería L. Arriero",
    date: "2026-03-13",
    category: "Diseño",
  },
  {
    id: "1",
    title: "Rejas de Hierro Soldado: Seguridad y Estética en Talavera",
    excerpt: "Descubre cómo las rejas de hierro soldado combinan máxima protección con diseño profesional. Conoce los diferentes estilos y acabados disponibles.",
    content: "Las rejas de hierro soldado son la solución perfecta para proteger tu hogar o negocio sin sacrificar la estética. En Carpintería L. Arriero, fabricamos rejas personalizadas que se adaptan a cualquier arquitectura...",
    author: "Carpintería L. Arriero",
    date: "2026-03-10",
    category: "Rejas",
  },
  {
    id: "2",
    title: "Puertas Automáticas de Aluminio: Comodidad y Seguridad",
    excerpt: "Las puertas automáticas de aluminio ofrecen apertura suave y silenciosa. Perfectas para garajes, accesos y fincas. Conoce sus ventajas.",
    content: "Las puertas automáticas de aluminio son la solución moderna para accesos controlados. Con sistemas de apertura suave y segura, garantizan comodidad y protección...",
    author: "Carpintería L. Arriero",
    date: "2026-03-09",
    category: "Puertas",
  },
  {
    id: "3",
    title: "Pérgolas con Panel Sándwich: Amplía tu Espacio",
    excerpt: "Las pérgolas con panel sándwich son ideales para ampliar tu espacio habitable con excelente aislamiento térmico y acústico.",
    content: "Si buscas ampliar tu espacio sin grandes obras, las pérgolas con panel sándwich son la solución perfecta. Ofrecen excelente aislamiento térmico y acústico...",
    author: "Carpintería L. Arriero",
    date: "2026-03-08",
    category: "Pérgolas",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog de Carpintería Metálica
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl">
            Consejos, proyectos realizados y novedades sobre carpintería metálica en Talavera de la Reina
          </p>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedPost(post)}>
                {post.image && (
                  <div className="h-48 bg-gray-700 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-orange-600 text-white px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-white hover:text-orange-400">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {post.author}
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Leer más <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <Link href="/" className="text-orange-500 hover:text-orange-400 font-semibold flex items-center gap-2">
            ← Volver a Inicio
          </Link>
        </div>
      </section>
    </div>
  );
}
