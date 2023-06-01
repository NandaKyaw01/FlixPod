import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../utils/api";

const useData = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get(endpoint, { signal: controller.signal, ...requestConfig })
        .then((res) => {
          if (res.data.results) {
            setData((pre) => [...pre, ...res.data.results]);
          } else if (res.data.cast) {
            setData([...res.data.cast, ...res.data.crew]);
          } else setData(res.data);

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

export default useData;
