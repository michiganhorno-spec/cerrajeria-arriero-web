import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, Star, Wrench, Zap, Shield, DoorOpen, Package } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceCardWithGallery from "@/components/ServiceCardWithGallery";

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
            <ServiceCard
              icon={<Shield size={32} />}
              title="Rejas de Seguridad de Hierro a Medida en Talavera de la Reina"
              description="Rejas de seguridad personalizadas en hierro macizo y aluminio soldado para ventanas, balcones y accesos en Talavera de la Reina, Cebolla, Seguirilla, Mejorada y Talavera la Nueva. Máxima protección con diseños tradicionales y modernos adaptados a tu estilo arquitectónico. Fabricación artesanal con soldadura de calidad y acabados profesionales. Instalación segura y rápida. Resistencia garantizada contra intentos de robo. Confía en la experiencia de más de 40 años en carpintería metálica."
              image="https://d2xsxph8kpxj0f.cloudfront.net/310519663416298541/7CbMk8hTL6QGCD7YZB5hE6/reja-hierro-negro-tradicional-talavera_b4b99360.jpg"
            />
            
            <ServiceCard
              icon={<DoorOpen size={32} />}
              title="Puertas Automáticas de Hierro y Aluminio Soldado en Talavera de la Reina"
              description="Puertas automáticas a medida de hierro y aluminio soldado con sistemas de apertura suave, silenciosa y segura en Talavera de la Reina, Montecarlo, Prado del Arca, Pueblanueva y El Chaparral. Soluciones personalizadas para garajes, accesos comerciales y residenciales. Sistemas de cierre automático y controlado para máxima seguridad y comodidad. Diseños modernos y tradicionales. Instalación profesional con garantía. Tecnología de última generación con mandos a distancia."
            />
            
            <ServiceCard
              icon={<Zap size={32} />}
              title="Cancelas de Hierro a Medida en Talavera de la Reina"
              description="Cancelas de hierro a medida en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva y Castillo Bayuela. Combinan resistencia estructural con diseño profesional. Adaptadas a cualquier estilo arquitectónico y necesidad de seguridad. Fabricación en hierro y aluminio soldado con acabados de calidad. Instalación rápida y segura. Protección total para parcelas, fincas, terrenos y accesos. Soluciones personalizadas."
            />
            
            <ServiceCard
              icon={<Package size={32} />}
              title="Pérgolas y Cubiertas con Panel Sándwich en Talavera de la Reina"
              description="Pérgolas metálicas y cubiertas con panel sándwich para ampliar tu espacio habitable con protección total en Talavera de la Reina, Belvís de la Jara, Sevilleja, Cervera de los Montes y Nuño Gómez. Excelente aislamiento térmico y acústico. Diseño moderno y funcional. Fabricación en hierro y aluminio soldado. Instalación profesional garantizada. Ideal para terrazas, patios y espacios exteriores. Resistencia a la intemperie. Aumenta el valor de tu propiedad."
            />
            
            <ServiceCard
              icon={<Wrench size={32} />}
              title="Mobiliario Industrial Metálico a Medida en Talavera de la Reina"
              description="Mobiliario industrial personalizado en hierro y aluminio soldado en Talavera de la Reina, Hinojosa de San Vicente, Marrupe, Sotillo de las Palomas y Serranillos. Mesas, estanterías, armarios y estructuras robustas para tu negocio. Diseño funcional y profesional. Fabricación artesanal con acabados de calidad. Solución completa para almacenes, talleres y espacios industriales. Resistencia y durabilidad garantizadas. Personalizable según tus necesidades."
            />
            
            <ServiceCard
              icon={<Zap size={32} />}
              title="Automatismos para Puertas y Portones en Talavera de la Reina"
              description="Instalación de automatismos profesionales para puertas y portones en Talavera de la Reina, Cornicabral, Cervines, Las Nieves y Espinosillo. Sistemas de apertura suave, segura y controlada. Tecnología de última generación. Mandos a distancia y controles de acceso avanzados. Mantenimiento y reparación especializada. Seguridad garantizada para tu hogar o negocio. Instalación profesional y rápida."
            />
            
            <ServiceCardWithGallery
              icon={<DoorOpen size={32} />}
              title="Puertas Seccionales a Medida en Talavera de la Reina"
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
            
            <ServiceCard
              icon={<Shield size={32} />}
              title="Mobiliario Industrial de Hierro Soldado a Medida en Talavera de la Reina"
              description="Mobiliario industrial de hierro soldado a medida en Talavera de la Reina, Playa, El Chaparral, Montecarlo y Prado del Arca. Estructuras robustas y duraderas para almacenes, fábricas y talleres. Mesas de trabajo, estanterías de carga pesada, armarios y racks personalizados. Fabricación artesanal con soldadura de calidad. Acabados profesionales. Diseño funcional y resistente. Instalación garantizada."
            />
            
            <ServiceCard
              icon={<Shield size={32} />}
              title="Cerramientos y Vallas Metálicas a Medida en Talavera de la Reina"
              description="Cerramientos y vallas metálicas de seguridad a medida en Talavera de la Reina, Real de San Vicente, San Román, Pueblanueva y Castillo Bayuela. Combinan resistencia estructural con diseño profesional. Adaptados a cualquier estilo arquitectónico y necesidad de seguridad. Fabricación en hierro y aluminio soldado con acabados de calidad. Instalación rápida y segura. Protección total para parcelas, fincas, terrenos y accesos. Soluciones personalizadas para cada proyecto."
            />
            
            <ServiceCard
              icon={<Wrench size={32} />}
              title="Barandillas y Balcones de Hierro a Medida en Talavera de la Reina"
              description="Barandillas y balcones de hierro a medida con diseños clásicos y contemporáneos en Talavera de la Reina, Pepino, Castillo Bayuela, Mejorada y Cebolla. Fabricación artesanal en hierro soldado con acabados profesionales. Seguridad y estética garantizadas para tu hogar o negocio. Personalizable según tus preferencias de diseño. Resistencia estructural y durabilidad. Instalación profesional y rápida."
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

      {/* Google Maps Section */}
      <section className="py-16 md:py-24 bg-background">
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
