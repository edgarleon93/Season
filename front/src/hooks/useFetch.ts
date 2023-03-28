import { useState } from 'react';

export function useFetch(url: string, init?: RequestInit) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const doFetch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, init);
      const data = await response.json();
      setData(data);
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  };

  return { data, loading, error, refetch: doFetch };
}
