import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

interface ServiceCardWithGalleryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  coverImage: string;
  slug: string;
  galleryImages: Array<{
    url: string;
    alt: string;
    title: string;
  }>;
}

export default function ServiceCardWithGallery({
  icon,
  title,
  description,
  coverImage,
  slug,
  galleryImages,
}: ServiceCardWithGalleryProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <Card className="bg-gray-900 border-orange-600/30 hover:border-orange-600 transition-colors p-6 h-full flex flex-col cursor-pointer" onClick={() => window.location.href = `/servicios/${slug}`}>


        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>

        {/* Cover Image */}
        <div className="mb-4 rounded-lg overflow-hidden h-48 bg-gray-800">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-6 flex-grow">{description}</p>

        {/* Gallery Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowGallery(true);
            setCurrentImageIndex(0);
          }}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Ver Galería ({galleryImages.length} fotos)
        </button>
      </Card>

      {/* Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          {/* Close Button */}
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Main Image Container */}
          <div className="w-full max-w-4xl px-4">
            {/* Image */}
            <div className="relative bg-gray-900 rounded-lg overflow-hidden mb-4">
              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="text-center mb-6">
              <h3 className="text-white text-xl font-bold mb-2">
                {galleryImages[currentImageIndex].title}
              </h3>
              <p className="text-gray-400">
                {currentImageIndex + 1} de {galleryImages.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handlePrevious}
                className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 overflow-x-auto px-4 py-2 bg-gray-800 rounded-lg max-w-2xl">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? "border-orange-500"
                        : "border-gray-600 hover:border-orange-400"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
