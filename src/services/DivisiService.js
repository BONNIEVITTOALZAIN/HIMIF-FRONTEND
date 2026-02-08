import api from "../utils/api";

export const DivisiService = {
  getAll: () => api.get("/divisi"),
  create: (data) => api.post("/divisi", data),
  update: (id, data) => api.post(`/divisi/${id}`, data),
  delete: (id) => api.delete(`/divisi/${id}`),
};
