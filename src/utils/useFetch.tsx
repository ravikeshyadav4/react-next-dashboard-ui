import { useState, useEffect } from 'react';

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        
        setData(result.title);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  console.log(data);
  return { data, loading, error };
}

export default useFetch;
