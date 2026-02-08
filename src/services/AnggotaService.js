import api from "../utils/api";

export const AnggotaService = {
  getAll: () => api.get("/anggota"),
  getById: (id) => api.get(`/anggota/${id}`),
  create: (data) => api.post("/anggota", data),
  update: (id, data) => api.post(`/anggota/${id}`, data),
  delete: (id) => api.delete(`/anggota/${id}`),
};
