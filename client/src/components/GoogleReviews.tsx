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
}

export function GoogleReviews({ reviews }: GoogleReviewsProps) {

  if (reviews.length === 0) return null;

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
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-400 mb-6">
            Más de 40 años de confianza en Talavera de la Reina
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-400/50 transition-colors flex flex-col"
            >
              {/* Rating */}
              <div className="mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-200 text-sm mb-6 flex-grow leading-relaxed line-clamp-4">
                "{review.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-700 pt-4">
                <p className="font-semibold text-white text-sm">{review.author}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Logo and Link */}
        <div className="flex flex-col items-center justify-center mt-12 gap-4">
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
