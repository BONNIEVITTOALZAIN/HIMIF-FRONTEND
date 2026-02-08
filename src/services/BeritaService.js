import api from "../utils/api";

export const BeritaService = {
  getAll: () => api.get("/berita"),
  getById: (id) => api.get(`/berita/${id}`),
  create: (data) => api.post("/berita", data),
  update: (id, data) => api.post(`/berita/${id}`, data),
  delete: (id) => api.delete(`/berita/${id}`),
};
