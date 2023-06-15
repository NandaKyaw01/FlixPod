import { Link } from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import { useBookmark } from "../hooks/useBookmark";
import BookmarkCard from "./basic/BookmarkCard";
import withAuth from "../hoc/withAuth";

const Bookmark = ({ state }) => {
  const {
    data: bookmarkList,
    error: bookmarkError,
    isLoading: bookmarkIsLoading,
  } = useBookmark();

  if (bookmarkError) return <div>{bookmarkError}</div>;

  return (
    <AppLayout state={state}>
      {/* Movie Main Page  */}
      <div className="custom-container">
        <div className="title ">Bookmarks</div>
        <div className="row">
          {!bookmarkIsLoading &&
            bookmarkList.map((item) => (
              <div
                key={item.id}
                className="col-6 col-md-4 col-lg-3 pe-4 pb-4 grid-card"
              >
                <Link to={`/movie/${item.movie_id}`}>
                  <BookmarkCard movie_id={item.movie_id} />
                </Link>
              </div>
            ))}
        </div>

        {/* {!popularMovieLoading && (
          <div style={{ textAlign: "center" }}>
            <Loadingv2 />
          </div>
        )} */}
      </div>
    </AppLayout>
  );
};

export default withAuth(Bookmark);
