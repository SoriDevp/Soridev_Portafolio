import { useState, useEffect, useCallback } from 'react';
import jsonData from '../data/projects.json';

export const useProjectsData = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(jsonData);
    setLoading(false);
  }, []);

  const getProjectById = useCallback((id) => {
    return projects.find((p) => p.id === id);
  }, [projects]);

  return { projects, loading, getProjectById };
};
