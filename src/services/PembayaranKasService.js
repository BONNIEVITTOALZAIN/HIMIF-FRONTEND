import api from "../utils/api";

export const PembayaranKasService = {
  getAll: () => api.get("/pembayaran-kas"),
  getById: (id) => api.get(`/pembayaran-kas/${id}`),
  create: (data) => api.post("/pembayaran-kas", data),
  update: (id, data) => api.post(`/pembayaran-kas/${id}`, data),
  delete: (id) => api.delete(`/pembayaran-kas/${id}`),
};
