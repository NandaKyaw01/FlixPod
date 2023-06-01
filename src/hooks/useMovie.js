import useData from "./useData";

export const useMovie = (param, pageNumber) =>
  useData(
    `/movie/${param}`,
    {
      params: {
        language: "en-US",
        page: pageNumber,
      },
    },
    [pageNumber]
  );

export const useMovieDetail = (id) =>
  useData(
    `/movie/${id}`,
    {
      params: {
        language: "en-US",
      },
    },
    []
  );

export const useMovieCast = (id) =>
  useData(
    `/movie/${id}/credits`,
    {
      params: {
        language: "en-US",
      },
    },
    []
  );
export const useMovieRecom = (id, pageNumber) =>
  useData(
    `/movie/${id}/recommendations`,
    {
      params: {
        language: "en-US",
        page: pageNumber,
      },
    },
    [pageNumber]
  );

export const useMoviePhotos = (id) =>
  useData(
    `/movie/${id}/images`,
    {
      params: {},
    },
    []
  );
