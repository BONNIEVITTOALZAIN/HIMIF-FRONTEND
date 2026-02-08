import api from "../utils/api";

export const MediaKegiatanService = {
  getAll: () => api.get("/media-kegiatan"),
  create: (data) => api.post("/media-kegiatan", data),
  update: (id, data) => api.post(`/media-kegiatan/${id}`, data),
  delete: (id) => api.delete(`/media-kegiatan/${id}`),
};
