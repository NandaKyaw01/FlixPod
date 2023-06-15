import authHeader from "../services/authHeader";
import useFetchComment from "./generic/useFetchComment";

export const useComment = (movie_id) =>
  useFetchComment(`/api/comments/${movie_id}`, {}, []);
