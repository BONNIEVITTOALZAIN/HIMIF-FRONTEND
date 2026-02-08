import api from "../utils/api";

export const ProgramKerjaService = {
  getAll: () => api.get("/program-kerja"),
  getById: (id) => api.get(`/program-kerja/${id}`),
  create: (data) => api.post("/program-kerja", data),
  update: (id, data) => api.post(`/program-kerja/${id}`, data),
  delete: (id) => api.delete(`/program-kerja/${id}`),
};
