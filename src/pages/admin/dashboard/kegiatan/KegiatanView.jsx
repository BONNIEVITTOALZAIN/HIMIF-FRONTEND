import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, X, Search, CalendarCheck, RefreshCw } from "lucide-react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import { KegiatanService } from "../../../../services/KegiatanService";

export default function KegiatanView() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    tempat: "",
    tanggal: "",
    status: "Akan Datang",
  });

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const response = await KegiatanService.getAll();
      setData(response.data.data || []);
    } catch (error) {
      console.error("Gagal mengambil data kegiatan", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openModal = (item = null) => {
    if (item) {
      setEditingId(item.id);
      setFormData({
        nama: item.nama || item.judul || "",
        tempat: item.tempat || "",
        tanggal: item.tanggal || "",
        status: item.status || "Akan Datang",
      });
    } else {
      setEditingId(null);
      setFormData({ nama: "", tempat: "", tanggal: "", status: "Akan Datang" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await KegiatanService.update(editingId, formData);
      } else {
        await KegiatanService.create(formData);
      }
      closeModal();
      fetchData();
    } catch (error) {
      console.error("Gagal menyimpan data", error);
      alert("Gagal menyimpan data!");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kegiatan ini?")) {
      try {
        await KegiatanService.delete(id);
        fetchData();
      } catch (error) {
        console.error("Gagal menghapus data", error);
        alert("Gagal menghapus data!");
      }
    }
  };

  const filteredData = data.filter(
    (item) =>
      (item.nama?.toLowerCase().includes(searchQuery.toLowerCase()) || 
       item.judul?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <div className="max-w-8xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <CalendarCheck className="w-8 h-8 text-pink-500" />
              Kelola Kegiatan
            </h1>
            <p className="text-gray-400 mt-1">Manajemen aktivitas dan event HIMIF</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchData()}
              disabled={refreshing}
              className="flex items-center space-x-2 px-4 py-2 bg-zinc-900 border border-white/10 rounded-xl hover:bg-zinc-800 transition-colors disabled:opacity-50 text-white shadow-sm"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-pink-500" : ""}`} />
              <span className="font-medium text-sm hidden sm:inline">Refresh</span>
            </button>
            <button
              onClick={() => openModal()}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl hover:from-pink-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/20"
            >
              <Plus className="w-4 h-4" />
              <span className="font-medium text-sm">Tambah Kegiatan</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-zinc-900/50 backdrop-blur-md rounded-2xl shadow-xl border border-white/5 overflow-hidden">
          {/* Toolbar */}
          <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative max-w-md w-full">
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari kegiatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-950/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-sm text-white placeholder-gray-500"
              />
            </div>
            <div className="text-sm text-gray-400 font-medium">
              Total: <span className="text-white">{filteredData.length}</span> Kegiatan
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5">
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Nama Kegiatan</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tempat</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="w-8 h-8 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-400 text-sm">Memuat data...</p>
                    </td>
                  </tr>
                ) : filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-gray-500">
                      Tidak ada data yang ditemukan.
                    </td>
                  </tr>
                ) : (
                  <AnimatePresence>
                    {filteredData.map((item, index) => (
                      <motion.tr
                        key={item.id || index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className="hover:bg-white/5 transition-colors group"
                      >
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-200">{item.nama || item.judul}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-400">{item.tempat}</td>
                        <td className="px-6 py-4 text-sm text-gray-400">{item.tanggal}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            item.status === 'Selesai' ? 'bg-zinc-800/50 text-gray-400 border-white/10' : 
                            item.status === 'Berjalan' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-pink-500/10 text-pink-400 border-pink-500/20'
                          }`}>
                            {item.status || "Akan Datang"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => openModal(item)}
                              className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors border border-transparent hover:border-blue-500/20"
                              title="Edit"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                              title="Hapus"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                <h3 className="text-lg font-bold text-white">
                  {editingId ? "Edit Kegiatan" : "Tambah Kegiatan Baru"}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Nama Kegiatan</label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-white placeholder-gray-600"
                    placeholder="Masukkan nama kegiatan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Tempat</label>
                  <input
                    type="text"
                    name="tempat"
                    value={formData.tempat}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-white placeholder-gray-600"
                    placeholder="Lokasi kegiatan"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Tanggal</label>
                    <input
                      type="date"
                      name="tanggal"
                      value={formData.tanggal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-white [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">Status</label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-zinc-950 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all text-white"
                    >
                      <option value="Akan Datang">Akan Datang</option>
                      <option value="Berjalan">Berjalan</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10 mt-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-5 py-2.5 text-sm font-medium text-gray-300 bg-transparent border border-white/20 rounded-xl hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl hover:from-pink-400 hover:to-pink-500 transition-all shadow-lg shadow-pink-900/20"
                  >
                    {editingId ? "Simpan Perubahan" : "Simpan Data"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
