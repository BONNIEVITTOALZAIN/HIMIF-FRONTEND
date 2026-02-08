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
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl p-8 mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-500 mt-1">Selamat datang kembali</p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-150 disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
            <span className="font-medium text-sm">Refresh</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <StatCard title="Total User" value={stats.users} icon={Users} color="blue" />
          <StatCard title="Total Anggota" value={stats.anggota} icon={UserCheck} color="green"/>
          <StatCard title="Divisi" value={stats.divisi} icon={Layers} color="purple" />
          <StatCard title="Program Kerja" value={stats.proker} icon={ClipboardList} color="orange" />
          <StatCard title="Kegiatan" value={stats.kegiatan} icon={CalendarCheck} color="pink" />
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-8 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Activity Log</h2>
                  <p className="text-sm text-gray-500">Aktivitas terbaru sistem</p>
                </div>
              </div>
              {activities.length > 0 && (
                <button
                  onClick={handleClearLogs}
                  className="flex items-center space-x-2 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-150"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Clear Logs</span>
                </button>
              )}
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {activities.length > 0 ? (
              activities.slice(0, 10).map((activity) => (
                <ActivityList key={activity.id} activity={activity} />
              ))
            ) : (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">Belum ada aktivitas</p>
                <p className="text-gray-400 text-sm mt-1">Activity log akan muncul di sini</p>
              </div>
            )}
          </div>

          {activities.length > 10 && (
            <div className="p-4 border-t border-gray-100 text-center">
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Lihat semua aktivitas →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

