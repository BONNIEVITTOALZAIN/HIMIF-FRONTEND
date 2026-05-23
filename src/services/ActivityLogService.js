import api from "../utils/api";

export const ActivityLogService = {
  // Mocked because /activity-logs is not available in backend
  getAll: () => Promise.resolve({ data: { data: [] } }),
  clear: () => Promise.resolve(),
};
