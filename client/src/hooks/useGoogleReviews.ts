import { useState, useEffect } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

// Reseñas REALES de Google Maps - Cerrajería L. Arriero
// Extraídas el 14 de marzo de 2026 - Calificación: 5.0 estrellas (23 reseñas)
const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Vanesa BM',
    rating: 5,
    text: 'Estoy muy contenta con la cerrajería L. Arriero. Me instalaron una puerta de garaje corredera motorizada, y el resultado fue impecable. Cumplieron los plazos, trabajaron con gran profesionalidad y prestaron atención a cada detalle. El trabajo fue limpio y bien terminado. Es un placer encontrar gente como ellos. Muy recomendado.',
    date: 'hace 3 semanas',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '2',
    author: 'Adrián Fernández',
    rating: 5,
    text: 'Sandro nos ha dado un servicio excelente, es un profesional de los pies a la cabeza. Me ha instalado una puerta seccional con un acabado impecable y materiales de primera calidad. Su experiencia y atención al detalle son evidentes.',
    date: 'hace 1 mes',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '3',
    author: 'Ivan Gonzalez',
    rating: 5,
    text: 'Muy profesionales, les encargué la instalación de una puerta corredera para mi finca y estuvieron pendientes del proyecto en todo momento, desde la colocación del carril inferior hasta la instalación final. Muy contento con el trabajo, 100% recomendables.',
    date: 'hace 1 mes',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '4',
    author: 'Aaron Diaz',
    rating: 5,
    text: 'Te ayudan y asesoran desde el primer momento. Son muy profesionales, todo en el tiempo acordado y el acabado impecable. Los recomiendo al 100%, y Sandro es un gran profesional.',
    date: 'hace 1 mes',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '5',
    author: 'Ana Belen Yuste Suela',
    rating: 5,
    text: 'Encargué rejas para las ventanas de mi casa y una puerta de garaje corredera motorizada, ¡y fueron fantásticos! ¡Trabajo limpio e impecable! ¡100% recomendado!',
    date: 'hace 3 semanas',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  }
];

export function useGoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        
        // Por ahora usamos reseñas reales de Google Maps
        // En el futuro, aquí iría la llamada a la API de Google Places
        // const response = await fetch('/api/google-reviews');
        // const data = await response.json();
        // setReviews(data);
        
        // Simulamos un delay de red
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setReviews(MOCK_REVIEWS);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar reseñas');
        setReviews(MOCK_REVIEWS); // Fallback a reseñas reales
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
}
