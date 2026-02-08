import api from "../utils/api";

export const AuthService = {
  login: (data) => api.post("/login", data),
  logout: () => api.post("/logout"),
  me: () => api.get("/me"),
};
