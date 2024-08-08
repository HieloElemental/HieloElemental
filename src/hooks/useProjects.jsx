import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setProjects] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://api.github.com/users/HieloElemental/repos"
      );
      const data = await response.json();
      await setProjects(data);
      setIsLoading(false);
      setError(null);
    } catch (e) {
      setIsLoading(false);
      setError(e);
    }
  };

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    !error && fetchData();
  }, [error]);

  return { projects, isLoading, error, clearError };
};

export default useProjects;
