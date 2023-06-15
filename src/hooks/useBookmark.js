import authHeader from "../services/authHeader";
import useFetchBookmark from "./generic/useFetchBookmark";

export const useBookmark = () =>
  useFetchBookmark(
    `/api/bookmarks/`,
    {
      headers: authHeader(),
    },
    []
  );
