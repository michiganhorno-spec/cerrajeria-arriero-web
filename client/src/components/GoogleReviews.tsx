import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

interface GoogleReviewsProps {
  reviews: Review[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export function GoogleReviews({ 
  reviews, 
  autoRotate = true, 
  rotationInterval = 5000 
}: GoogleReviewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);

  useEffect(() => {
    if (!isAutoRotating || reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [isAutoRotating, reviews.length, rotationInterval]);

  if (reviews.length === 0) return null;

  const currentReview = reviews[currentIndex];

  const handlePrev = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoRotating(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="w-full bg-gray-900/50 border-t border-gray-800 py-16 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-400 mb-6">
            Más de 40 años de confianza en Talavera de la Reina
          </p>
        </div>

        <div className="relative bg-gray-800/50 border border-gray-700 rounded-lg shadow-2xl p-8 md:p-12 min-h-80 flex flex-col justify-between">
          {/* Review Content */}
          <div>
            {/* Rating */}
            <div className="mb-4">
              {renderStars(currentReview.rating)}
            </div>

            {/* Review Text */}
            <p className="text-gray-200 text-lg mb-8 italic leading-relaxed">
              "{currentReview.text}"
            </p>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
            {currentReview.profilePhoto && (
              <img
                src={currentReview.profilePhoto}
                alt={currentReview.author}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-white">{currentReview.author}</p>
              <p className="text-sm text-gray-500">{currentReview.date}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 hidden md:block">
            <button
              onClick={handlePrev}
              className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition shadow-md"
              aria-label="Reseña anterior"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:block">
            <button
              onClick={handleNext}
              className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-full transition shadow-md"
              aria-label="Siguiente reseña"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoRotating(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex ? 'bg-orange-500 w-6' : 'bg-gray-600'
                }`}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Logo and Link */}
        <div className="flex flex-col items-center justify-center mt-8 gap-4">
          <p className="text-sm text-gray-400">
            Reseñas verificadas de <span className="font-semibold text-white">Google</span>
          </p>
          <a
            href="https://www.google.com/search?q=Cerrajer%C3%ADa+L.+Arriero+-+Carpinter%C3%ADa+Met%C3%A1lica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
