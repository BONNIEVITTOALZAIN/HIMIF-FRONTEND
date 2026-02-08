import api from "../utils/api";

export const ActivityLogService = {
  getAll: () => api.get("/activity-logs"),
  clear: () => api.delete("/activity-logs/clear"),
};
