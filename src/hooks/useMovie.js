import useData from "./useData";

const useMovie = (param, pageNumber) =>
  useData(
    `/movie/${param}`,
    {
      params: {
        language: "en-US",
        page: pageNumber,
      },
    },
    []
  );

export default useMovie;
