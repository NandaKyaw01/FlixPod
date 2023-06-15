import { user } from "../utils/api";

class AuthService {
  login(email, password) {
    return user
      .post("/api/auth", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return user
      .post("/api/users", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        return response.data;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
