import { useState, useEffect } from 'react';
import jsonData from '../data/education.json';

export const useEducationData = () => {
  const [education, setEducation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga asíncrona, como si fuera una API real.
    // Para un archivo local, esto es instantáneo, pero es una buena práctica.
    const timer = setTimeout(() => {
      setEducation(jsonData);
      setLoading(false);
    }, 500); // 500ms de delay para simular la carga

    return () => clearTimeout(timer); // Limpieza al desmontar el componente
  }, []);

  return { education, loading };
};
