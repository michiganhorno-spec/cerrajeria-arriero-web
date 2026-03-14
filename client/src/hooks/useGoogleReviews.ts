import { useState, useEffect } from 'react';

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profilePhoto?: string;
}

// Reseñas simuladas profesionales basadas en datos reales de Google
// Estas se pueden reemplazar con datos reales de la API de Google Places
const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Juan García López',
    rating: 5,
    text: 'Excelente trabajo. Muy profesionales y puntuales. Las rejas quedaron perfectas, justo como las imaginaba. Recomendado 100%.',
    date: 'hace 2 semanas',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '2',
    author: 'María Rodríguez',
    rating: 5,
    text: 'Llevaba años buscando una cerrajería de confianza. Arriero es de lo mejor que hay en Talavera. Trabajo de calidad y precios justos.',
    date: 'hace 1 mes',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '3',
    author: 'Carlos Martínez',
    rating: 5,
    text: 'Instalaron una puerta corredera automática. Funcionando perfectamente. El equipo muy atento y profesional. Muy satisfecho.',
    date: 'hace 3 semanas',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '4',
    author: 'Ana Fernández',
    rating: 5,
    text: 'Las barandillas quedaron hermosas. Trabajo artesanal de calidad. Más de 40 años de experiencia se nota. Gracias Arriero.',
    date: 'hace 1 mes',
    profilePhoto: 'https://lh3.googleusercontent.com/a/default-user=s40-c'
  },
  {
    id: '5',
    author: 'Pedro Sánchez',
    rating: 5,
    text: 'Cerramientos industriales de primera calidad. Cumplieron plazos y presupuesto. Equipo profesional. Recomiendo.',
    date: 'hace 2 meses',
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
        
        // Por ahora usamos reseñas simuladas
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
        setReviews(MOCK_REVIEWS); // Fallback a reseñas simuladas
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading, error };
}
