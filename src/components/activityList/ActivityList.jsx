export default function ActivityList({ activity }) {
  const getActionColor = (action) => {
    const colors = {
      CREATE: "bg-green-100 text-green-700",
      UPDATE: "bg-blue-100 text-blue-700",
      DELETE: "bg-red-100 text-red-700",
    };
    return colors[action] || "bg-gray-100 text-gray-700";
  };

  const getTimeAgo = (date) => {
    const now = new Date();
    const activityDate = new Date(date);
    const diffInMinutes = Math.floor((now - activityDate) / 60000);
    
    if (diffInMinutes < 1) {
      return 'Baru saja';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} menit yang lalu`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return hours === 1 ? '1 jam yang lalu' : `${hours} jam yang lalu`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return days === 1 ? '1 hari yang lalu' : `${days} hari yang lalu`;
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          {activity.user?.charAt(0) || "A"}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-semibold text-gray-900 text-sm">
            {activity.user}
          </span>

          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${getActionColor(
              activity.action
            )}`}
          >
            {activity.action}
          </span>

          <span className="text-gray-500 text-xs">
            {activity.entity}
          </span>
        </div>

        <p className="text-gray-600 text-sm">{activity.description}</p>
        <p className="text-gray-400 text-xs mt-1">
          {getTimeAgo(activity.created_at)}
        </p>
      </div>
    </div>
  );
}
