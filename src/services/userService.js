import { user } from "../utils/api";
import authHeader from "./authHeader";

class UserService {
  addBookmark(data) {
    return user
      .post("/api/bookmarks/", data, { headers: authHeader() })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }

  removeBookmark(movie_id) {
    return user
      .delete("api/bookmarks/" + movie_id, { headers: authHeader() })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  getBookmark(movie_id) {
    return user
      .get("api/bookmarks/isbookmark/" + movie_id, { headers: authHeader() })
      .then((res) => {
        return res.data;
      });
    // .catch((err) => console.log(err));
  }

  getComment(movie_id) {
    return user.get("api/comments/" + movie_id).then((res) => {
      return res.data;
    });
  }

  addComment(data) {
    return user
      .post("/api/comments/", data, { headers: authHeader() })
      .then((res) => {
        return res.data;
      })
      .catch((err) => console.log(err.response.data));
  }
  //   getUserBoard() {
  //     return axios.get(API_URL + "user", { headers: authHeader() });
  //   }

  //   getModeratorBoard() {
  //     return axios.get(API_URL + "mod", { headers: authHeader() });
  //   }

  //   getAdminBoard() {
  //     return axios.get(API_URL + "admin", { headers: authHeader() });
  //   }
}

export default new UserService();
