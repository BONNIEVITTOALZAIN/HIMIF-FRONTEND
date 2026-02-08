import api from "../utils/api";

export const VerifikasiKasService = {
  getAll: () => api.get("/verifikasi-kas"),
  verify: (id, data) => api.post(`/verifikasi-kas/${id}`, data),
  update: (id, data) => api.post(`/verifikasi-kas/update/${id}`, data),
  delete: (id) => api.delete(`/verifikasi-kas/${id}`),
};
