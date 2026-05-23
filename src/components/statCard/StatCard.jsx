import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "blue",
}) {
  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/10 text-blue-400 border-blue-500/20",
    green: "from-emerald-500/20 to-emerald-600/10 text-emerald-400 border-emerald-500/20",
    purple: "from-purple-500/20 to-purple-600/10 text-purple-400 border-purple-500/20",
    orange: "from-orange-500/20 to-orange-600/10 text-orange-400 border-orange-500/20",
    pink: "from-pink-500/20 to-pink-600/10 text-pink-400 border-pink-500/20",
    red: "from-red-500/20 to-red-600/10 text-red-400 border-red-500/20",
  };

  const selectedColor = colorClasses[color] || colorClasses.blue;

  return (
    <div className="relative group overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedColor} border shadow-inner`}>
            {Icon && <Icon className="w-6 h-6" />}
          </div>
        </div>

        <div className="space-y-1">
          <p className="text-zinc-400 text-sm font-medium tracking-wide">{title}</p>
          <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
        </div>
      </div>
    </div>
  );
}