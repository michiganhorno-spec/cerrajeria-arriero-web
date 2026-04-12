interface ImageOptimizedProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

/**
 * Componente ImageOptimized con:
 * - Lazy loading nativo de HTML (Google lo entiende)
 * - Responsive images con srcset
 * - Compresión automática en CDN
 * - Sin JavaScript personalizado (más rápido)
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
  // Generar srcset para responsive images
  const generateSrcSet = (url: string) => {
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
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
