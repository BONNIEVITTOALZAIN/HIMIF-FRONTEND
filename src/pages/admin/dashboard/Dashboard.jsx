import { useEffect, useState } from "react";
import {
   Users,
  UserCheck,
  Layers,
  ClipboardList,
  CalendarCheck,
  Activity,
  Trash2,
  RefreshCw,
} from "lucide-react";

import StatCard from "../../../components/statCard/StatCard";
import ActivityList from "../../../components/activityList/ActivityList";
import Sidebar from "../../../components/sidebar/Sidebar";
import { UserService } from "../../../services/UserService";
import { AnggotaService } from "../../../services/AnggotaService";
import { DivisiService } from "../../../services/DivisiService";
import { ProgramKerjaService } from "../../../services/ProgramKerjaService";
import { KegiatanService } from "../../../services/KegiatanService";
import { ActivityLogService } from "../../../services/ActivityLogService";


export default function Dashboard() {
  const [stats, setStats] = useState({
    users: 0,
    anggota: 0,
    divisi: 0,
    proker: 0,
    kegiatan: 0,
  });

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchDashboard = async () => {
    try {
      const [users, anggota, divisi, proker, kegiatan, activityLogs] = await Promise.all([
        UserService.getAll(),
        AnggotaService.getAll(),
        DivisiService.getAll(),
        ProgramKerjaService.getAll(),
        KegiatanService.getAll(),
        ActivityLogService.getAll(),
      ]);

      setStats({
        users: users.data.data.length,
        anggota: anggota.data.data.length,
        divisi: divisi.data.data.length,
        proker: proker.data.data.length,
        kegiatan: kegiatan.data.data.length,
      });

      setActivities(activityLogs.data.data || []);
    } catch (error) {
      console.error("Gagal load dashboard", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchDashboard();
  };

  const handleClearLogs = async () => {
    if (window.confirm("Yakin ingin menghapus semua activity logs?")) {
      try {
        await ActivityLogService.clear();
        setActivities([]);
      } catch (error) {
        console.error("Gagal menghapus logs", error);
        alert("Gagal menghapus activity logs");
      }
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 font-medium">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Selamat datang kembali</p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 transition-colors duration-150 disabled:opacity-50 text-white shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-red-500" : ""}`} />
            <span className="font-medium text-sm">Refresh</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
          <StatCard title="Total User" value={stats.users} icon={Users} color="blue" />
          <StatCard title="Total Anggota" value={stats.anggota} icon={UserCheck} color="green"/>
          <StatCard title="Divisi" value={stats.divisi} icon={Layers} color="purple" />
          <StatCard title="Program Kerja" value={stats.proker} icon={ClipboardList} color="orange" />
          <StatCard title="Kegiatan" value={stats.kegiatan} icon={CalendarCheck} color="pink" />
        </div>

        <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-xl border border-white/5 mt-8 overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-red-500 to-red-800 rounded-xl shadow-inner border border-red-500/20">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Activity Log</h2>
                  <p className="text-sm text-gray-400">Aktivitas terbaru sistem</p>
                </div>
              </div>
              {activities.length > 0 && (
                <button
                  onClick={handleClearLogs}
                  className="flex items-center space-x-2 px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors duration-150 border border-transparent hover:border-red-500/20"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Clear Logs</span>
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            {activities.length > 0 ? (
              activities.slice(0, 10).map((activity) => (
                <ActivityList key={activity.id} activity={activity} />
              ))
            ) : (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-zinc-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5">
                  <Activity className="w-8 h-8 text-gray-500" />
                </div>
                <p className="text-gray-300 font-medium">Belum ada aktivitas</p>
                <p className="text-gray-500 text-sm mt-1">Activity log akan muncul di sini</p>
              </div>
            )}
          </div>
          {activities.length > 10 && (
            <div className="p-4 border-t border-white/5 text-center bg-zinc-900/50">
              <button className="text-red-400 hover:text-red-300 font-medium text-sm transition-colors">
                Lihat semua aktivitas →
              </button>
            </div>
          )}
        </div>
    </div>
  );
}

