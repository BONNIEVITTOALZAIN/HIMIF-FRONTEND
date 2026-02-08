import api from "../utils/api";

export const KegiatanService = {
  getAll: () => api.get("/kegiatan"),
  getById: (id) => api.get(`/kegiatan/${id}`),
  create: (data) => api.post("/kegiatan", data),
  update: (id, data) => api.post(`/kegiatan/${id}`, data),
  delete: (id) => api.delete(`/kegiatan/${id}`),
};
