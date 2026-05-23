import { motion } from "framer-motion";
import { Clock, User, Activity, Edit, Plus, Trash2 } from "lucide-react";

export default function ActivityList({ activity }) {
  // Menentukan icon dan warna berdasarkan tipe aksi
  const getActionIcon = (action) => {
    switch (action?.toLowerCase()) {
      case "create":
      case "tambah":
        return <Plus className="w-4 h-4 text-emerald-400" />;
      case "update":
      case "edit":
        return <Edit className="w-4 h-4 text-blue-400" />;
      case "delete":
      case "hapus":
        return <Trash2 className="w-4 h-4 text-red-400" />;
      default:
        return <Activity className="w-4 h-4 text-purple-400" />;
    }
  };

  const getActionBg = (action) => {
    switch (action?.toLowerCase()) {
      case "create":
      case "tambah":
        return "bg-emerald-500/10 border border-emerald-500/20";
      case "update":
      case "edit":
        return "bg-blue-500/10 border border-blue-500/20";
      case "delete":
      case "hapus":
        return "bg-red-500/10 border border-red-500/20";
      default:
        return "bg-purple-500/10 border border-purple-500/20";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 hover:bg-zinc-800/50 transition-colors flex items-start gap-4 border-b border-white/5 last:border-0"
    >
      <div className={`p-2 rounded-xl flex-shrink-0 mt-1 ${getActionBg(activity?.action)}`}>
        {getActionIcon(activity?.action)}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-200 truncate">
          {activity?.description || "Melakukan sebuah aktivitas"}
        </p>
        
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span className="truncate max-w-[120px]">{activity?.user || "Sistem"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{activity?.timestamp || "Beberapa saat yang lalu"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}