import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "blue",
}) {
  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-500 to-blue-600",
    green: "bg-gradient-to-br from-green-500 to-green-600",
    purple: "bg-gradient-to-br from-purple-500 to-purple-600",
    orange: "bg-gradient-to-br from-orange-500 to-orange-600",
    pink: "bg-gradient-to-br from-pink-500 to-pink-600",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg ${colorClasses[color]} text-white`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
