import { MessageCircle, ArrowLeft, ShoppingCart } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Productos() {
  const [, navigate] = useLocation();

  useEffect(() => {
    // Redirect to WhatsApp catalog after 2 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://wa.me/c/34661622160";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft size={20} />
            Volver
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="text-center px-4 max-w-2xl">
        <div className="mb-8">
          <MessageCircle size={80} className="mx-auto text-green-600 mb-6" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Catálogo de Productos
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Accede a nuestro catálogo completo con todas las fotos de nuestros trabajos en <strong>WhatsApp Business</strong>
        </p>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 mb-8">
          <p className="text-white text-lg mb-6">
            Verás todos nuestros productos, servicios y trabajos realizados en Talavera de la Reina y alrededores
          </p>

          <a
            href="https://wa.me/c/34661622160"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <MessageCircle size={24} />
            Abrir Catálogo en WhatsApp
          </a>
        </div>

        <p className="text-gray-400 mb-6">
          Si no se abre automáticamente, haz clic en el botón anterior
        </p>

        <div className="bg-gray-800 rounded-lg p-6 text-left">
          <h3 className="text-white font-bold mb-4">¿Qué encontrarás en nuestro catálogo?</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Fotos reales de todos nuestros trabajos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Rejas de seguridad personalizadas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Puertas metálicas y automáticas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Cerramientos y vallas metálicas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Pérgolas y cubiertas con panel sándwich</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Mobiliario industrial a medida</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Automatismos para puertas y portones</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Consulta directa con nuestro equipo</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-gray-400">
          <p className="text-sm">
            Cerrajería L. Arriero | Carpintería Metálica Profesional en Talavera de la Reina
          </p>
          <p className="text-sm mt-2">
            Más de 40 años de experiencia
          </p>
        </div>
      </div>
    </div>
  );
}
