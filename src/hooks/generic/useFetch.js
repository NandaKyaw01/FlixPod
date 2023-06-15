import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { movie } from "../../utils/api";

const useFetch = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      movie
        .get(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useFetch;
