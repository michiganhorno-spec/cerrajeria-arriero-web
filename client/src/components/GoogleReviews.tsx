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
    <div className="w-full bg-gradient-to-r from-orange-50 to-orange-100 py-12 px-4">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Más de 40 años de confianza en Talavera de la Reina
        </p>

        <div className="relative bg-white rounded-lg shadow-lg p-8 min-h-64 flex flex-col justify-between">
          {/* Review Content */}
          <div>
            {/* Rating */}
            <div className="mb-4">
              {renderStars(currentReview.rating)}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
              "{currentReview.text}"
            </p>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 border-t pt-6">
            {currentReview.profilePhoto && (
              <img
                src={currentReview.profilePhoto}
                alt={currentReview.author}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-gray-900">{currentReview.author}</p>
              <p className="text-sm text-gray-500">{currentReview.date}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition shadow-md"
              aria-label="Reseña anterior"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2">
            <button
              onClick={handleNext}
              className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition shadow-md"
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
                  index === currentIndex ? 'bg-orange-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Ir a reseña ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Logo */}
        <div className="flex justify-center mt-6">
          <p className="text-sm text-gray-600">
            Reseñas verificadas de <span className="font-semibold">Google</span>
          </p>
        </div>
      </div>
    </div>
  );
}
