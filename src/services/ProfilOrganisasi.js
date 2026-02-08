import api from "../utils/api";

export const ProfilOrganisasiService = {
  getAll: () => api.get("/profil-organisasi"),
  create: (data) => api.post("/profil-organisasi", data),
  update: (id, data) => api.post(`/profil-organisasi/${id}`, data),
  delete: (id) => api.delete(`/profil-organisasi/${id}`),
};
