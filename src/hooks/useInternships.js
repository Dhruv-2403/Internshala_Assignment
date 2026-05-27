import { useState, useEffect } from 'react';
import { fetchInternships } from '../services/api';

/**
 * Custom hook to fetch and manage internships data
 * @returns {Object} { internships, isLoading, error, refetch }
 */
export const useInternships = () => {
  const [internships, setInternships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadInternships = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchInternships();
      setInternships(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadInternships();
  }, []);

  return {
    internships,
    isLoading,
    error,
    refetch: loadInternships,
  };
};
