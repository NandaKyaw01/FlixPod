import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../utils/api";

const useFetchPagination = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          setData((pre) => [...pre, ...res.data.results]);
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

export default useFetchPagination;
