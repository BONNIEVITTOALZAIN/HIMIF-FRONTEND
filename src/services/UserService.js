import api from "../utils/api";

export const UserService = {
  getAll: () => api.get("/users"),
  getById: (id) => api.get(`/users/${id}`),
  create: (data) => api.post("/users", data),
  update: (id, data) => api.post(`/users/${id}`, data),
  delete: (id) => api.delete(`/users/${id}`),
};
