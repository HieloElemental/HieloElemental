import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      try {
        const savedItem = localStorage.getItem(key);
        setItem(savedItem ? JSON.parse(savedItem) : initialValue);
      } catch (error) {
        console.error("Error reading localStorage key “" + key + "”:", error);
        setItem(initialValue);
      }
      setLoading(false);
    } else {
      try {
        localStorage.setItem(key, JSON.stringify(item));
      } catch (error) {
        console.error("Error writing localStorage key “" + key + "”:", error);
      }
    }
  }, [item, initialValue, key, loading]);

  return [loading, item, setItem];
}

export default useLocalStorage;
