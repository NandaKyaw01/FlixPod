import { useEffect } from "react";
import useFetch from "./useFetch";
import useFetchPagination from "./useFetchPagination";

export const useMovie = (param) =>
  useFetch(
    `/movie/${param}`,
    {
      params: {
        language: "en-US",
      },
    },
    []
  );

export const useMovieList = (param, pageNumber) =>
  useFetchPagination(
    `/movie/${param}`,
    {
      params: {
        language: "en-US",
        page: pageNumber,
      },
    },
    [pageNumber]
  );

export const useMovieDetail = (id) => {
  return useFetch(
    `/movie/${id}`,
    {
      params: {
        language: "en-US",
      },
    },
    [id]
  );
};
export const useMovieCast = (id) =>
  useFetch(
    `/movie/${id}/credits`,
    {
      params: {
        language: "en-US",
      },
    },
    [id]
  );
export const useMovieRecom = (id, pageNumber) =>
  useFetch(
    `/movie/${id}/recommendations`,
    {
      params: {
        language: "en-US",
        page: pageNumber,
      },
    },
    [pageNumber, id]
  );

export const useMoviePhotos = (id) =>
  useFetch(
    `/movie/${id}/images`,
    {
      params: {},
    },
    [id]
  );
