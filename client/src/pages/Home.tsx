import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Wrench, Zap, Shield, DoorOpen, Package } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";

const INDUSTRIAL_BG_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/industrial_background_sparks_d80625e8.jpg";
const INDUSTRIAL_BG_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/metal_welding_close_up_aedbc5e1.jpg";

export default function Home() {
  const { user } = useAuth();
  const [showContactForm, setShowContactForm] = useState(false);

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
          <div className="mb-6 inline-block">
            <span className="text-6xl">🔒</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            CERRAJERÍA L. ARRIERO
          </h1>
          
          <p className="text-xl md:text-2xl text-orange-400 mb-2">
            Carpintería Metálica y Cerrajería Profesional
          </p>
          
          <div className="border-2 border-orange-500 inline-block px-6 py-3 mb-8">
            <p className="text-lg font-semibold text-white">
              + 25 AÑOS DE EXPERIENCIA EN TALAVERA DE LA REINA
            </p>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Soluciones de seguridad y diseño para tu hogar o negocio
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:925701792"
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} />
              📞 925 70 17 92
            </a>
            
            <a 
              href="https://wa.me/34661622160"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <MessageCircle size={20} />
              💬 WhatsApp: 661 62 21 60
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
            NUESTROS SERVICIOS ESPECIALIZADOS
          </h2>
          
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Soluciones de seguridad y diseño para tu hogar o negocio
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <ServiceCard
              icon={<Shield size={32} />}
              title="Carpintería Metálica y Cerrajería"
              description="Especialistas en la transformación del hierro y aluminio en soluciones funcionales y elegantes. Rejas de seguridad, cancelas de hierro robustas y barandillas personalizadas."
            />
            
            <ServiceCard
              icon={<DoorOpen size={32} />}
              title="Puertas Automáticas de Hierro y Aluminio"
              description="Puertas automáticas a medida con sistemas de apertura suave y silenciosa. Soluciones personalizadas para garajes, accesos residenciales y fincas."
            />
            
            <ServiceCard
              icon={<Zap size={32} />}
              title="Cerramientos y Vallas de Seguridad"
              description="Cerramientos metálicos que combinan resistencia estructural con diseño profesional. Adaptados a cualquier estilo arquitectónico."
            />
            
            <ServiceCard
              icon={<Shield size={32} />}
              title="Instalación de Rejas y Cancelas"
              description="Rejas personalizadas en hierro y aluminio soldado que ofrecen máxima protección. Cancelas correderas para acceso controlado."
              image="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera_b4b99360.jpg"
            />
            
            <ServiceCard
              icon={<Package size={32} />}
              title="Puertas Seccionales para Garajes"
              description="Instalación y reparación de puertas seccionales de alta calidad. Sistemas de apertura suave y segura con tecnología actual."
            />
            
            <ServiceCard
              icon={<Wrench size={32} />}
              title="Cerramientos de Cubierta con Panel Sándwich"
              description="Solución perfecta para ampliar tu espacio habitable. Excelente aislamiento térmico y acústico durante todo el año."
            />
          </div>
          
          {/* Button to Projects Page */}
          <div className="flex justify-center mt-12">
            <a
              href="/trabajos-realizados"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Ver Todos Nuestros Trabajos Realizados
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

      {/* Footer */}
      <footer className="bg-black/80 text-gray-400 py-12 border-t border-orange-600/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">Contacto</h3>
              <p className="mb-2">📞 925 70 17 92</p>
              <p className="mb-2">💬 661 62 21 60 (WhatsApp)</p>
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
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-sm">
              © 2026 Cerrajería L. Arriero. Todos los derechos reservados.
            </p>
            <p className="text-sm mt-2 text-orange-400">
              Especialistas en carpintería metálica y cerrajería profesional en Talavera de la Reina
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description, image }: { icon: React.ReactNode; title: string; description: string; image?: string }) {
  return (
    <Card className="bg-secondary border-orange-600/30 hover:border-orange-500 transition-colors p-6 overflow-hidden">
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
    </Card>
  );
}
