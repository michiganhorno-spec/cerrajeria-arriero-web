import { useState, useEffect, useRef } from 'react';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string; // Para indicar tamaños en diferentes breakpoints
}

/**
 * Componente ImageOptimized con:
 * - Lazy loading (carga solo cuando se ve en pantalla)
 * - Responsive images (diferentes tamaños según dispositivo)
 * - Compresión automática en CDN
 * - Placeholder mientras carga
 */
export function ImageOptimized({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: ImageOptimizedProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return; // No lazy load si es prioritario

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '50px' } // Cargar 50px antes de que sea visible
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generar srcset para responsive images
  const generateSrcSet = (url: string) => {
    // Agregar parámetros de CloudFront para optimización
    const baseUrl = url.includes('?') ? url : url;
    return `
      ${baseUrl}?w=320&q=85 320w,
      ${baseUrl}?w=480&q=85 480w,
      ${baseUrl}?w=640&q=85 640w,
      ${baseUrl}?w=960&q=85 960w,
      ${baseUrl}?w=1280&q=85 1280w,
      ${baseUrl}?w=1920&q=85 1920w
    `;
  };

  return (
    <img
      ref={imgRef}
      src={isInView || priority ? src : 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3C/svg%3E'}
      srcSet={isInView || priority ? generateSrcSet(src) : undefined}
      sizes={sizes}
      alt={alt}
      className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      width={width}
      height={height}
      onLoad={() => setIsLoaded(true)}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
