import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onContactClick?: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero', type: 'section' },
    { label: 'Servicios', id: 'services', type: 'section' },
    { label: 'Galería', id: 'gallery', type: 'section' },
    { label: 'Testimonios', id: 'testimonials', type: 'section' },
    { label: 'Contacto', id: 'contact', type: 'section' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-lg leading-tight">
                Cerrajería
              </h1>
              <p className="text-orange-400 text-xs font-semibold">L. Arriero</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-orange-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:661622160"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
              title="Llamar"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://wa.me/34661622160"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
              title="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-colors rounded-lg"
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-4 px-4 py-3 border-t border-gray-700/50 mt-4">
              <a
                href="tel:661622160"
                className="flex-1 flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg transition-colors"
              >
                <Phone size={18} />
                <span className="text-sm">Llamar</span>
              </a>
              <a
                href="https://wa.me/34661622160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
              >
                <MessageCircle size={18} />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
