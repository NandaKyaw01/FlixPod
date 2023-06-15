import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { user } from "../../utils/api";

const useFetchBookmark = (endpoint, requestConfig, deps) => {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      user
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

export default useFetchBookmark;
