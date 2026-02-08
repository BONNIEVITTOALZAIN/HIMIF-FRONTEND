import api from "../utils/api";

export const BuktiPembayaranService = {
  getAll: () => api.get("/bukti-pembayaran"),
  create: (data) => api.post("/bukti-pembayaran", data),
  update: (id, data) => api.post(`/bukti-pembayaran/${id}`, data),
  delete: (id) => api.delete(`/bukti-pembayaran/${id}`),
};
