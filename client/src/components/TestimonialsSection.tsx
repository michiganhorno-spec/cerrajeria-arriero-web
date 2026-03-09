import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Adrián Fernández",
    rating: 5,
    text: "Sandro nos ha dado un servicio excelente, es un profesional de los pies a la cabeza. Me ha instalado una puerta seccional con un acabado impecable y materiales de primera calidad.",
  },
  {
    name: "Aaron Diaz",
    rating: 5,
    text: "Te ayudan y asesoran desde el primer momento. Son muy profesionales, todo en el tiempo acordado y el acabado impecable. Los recomiendo al 100%.",
  },
  {
    name: "Ivan Gonzalez",
    rating: 5,
    text: "Muy profesionales, les encargué la instalación de una puerta corredera para mi finca y estuvieron pendientes del proyecto en todo momento. 100% recomendables.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ⭐ TESTIMONIOS DE NUESTROS CLIENTES
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-orange-500 text-orange-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-orange-400">5.0 (23 reseñas)</span>
          </div>
          
          <p className="text-gray-400 text-lg">
            Calificación 5 estrellas en Google gracias a nuestra seriedad y satisfacción del cliente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-orange-600/30 hover:border-orange-500 transition-all hover:shadow-lg hover:shadow-orange-500/20 p-6"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-500 text-orange-500" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="text-orange-400 font-semibold text-sm">
                — {testimonial.name}
              </p>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-background border border-orange-600/30 rounded-lg p-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">🔍</span>
              <span className="text-white font-bold">Google</span>
            </div>
            <div className="flex gap-1 justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
              ))}
            </div>
            <p className="text-orange-400 font-semibold">Calificación 5 estrellas</p>
            <p className="text-gray-400 text-sm">23 reseñas verificadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
