import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Newspaper } from 'lucide-react';

const News = () => {
  const newsList = [
    { id: 1, title: "Pendaftaran Kepengurusan Baru HIMIF Telah Dibuka!", date: "24 Mar 2026", category: "Pengumuman", image: "/images/IMG_2813.jpg", excerpt: "Bergabunglah bersama kami dan jadilah bagian dari perubahan positif di lingkungan kampus. Persiapkan berkas pendaftaran Anda!" },
    { id: 2, title: "Recap Keseruan Acara IFEST 5.0 Nasional", date: "15 Mar 2026", category: "Event", image: "/images/IMG_0087.jpg", excerpt: "Melihat kembali antusiasme ratusan peserta dari berbagai universitas yang telah memeriahkan dan mengikuti perlombaan inovasi teknologi." },
    { id: 3, title: "Workshop UI/UX Design Kolaborasi dengan Praktisi", date: "02 Mar 2026", category: "Workshop", image: "/images/IMG_6032.JPG", excerpt: "Diisi oleh pemateri UX Designer profesional, workshop gratis ini mengupas tuntas teknik membuat desain modern berbasis human-centered." },
    { id: 4, title: "Mubes 2026: Regenerasi Kepemimpinan Baru", date: "20 Feb 2026", category: "Internal", image: "/images/DSC06046.JPG", excerpt: "Musyawarah Bersama mahasiswa aktif informatika untuk mengevaluasi kinerja dan menunjuk tongkat estafet kepemimpinan baru tahun ini." },
    { id: 5, title: "Pengabdian Masyarakat di Desa Binaan", date: "10 Jan 2026", category: "Pengabdian", image: "/images/IMG_6963.jpg", excerpt: "HIMIF terjun langsung ke desa untuk memberikan edukasi pentingnya literasi digital dan keamanan data internet untuk anak-anak sekolah." },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/40 border border-red-900/50 mb-6 drop-shadow-md">
            <Newspaper className="w-5 h-5 text-red-500" />
            <span className="text-white font-medium text-sm tracking-wide">Portal Informasi</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Berita & <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Update</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Dapatkan informasi terkini dan bacaan menarik mengenai kegiatan himpunan, pengumuman kampus, hingga artikel berita teknologi dari HIMIF.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news, idx) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-gradient-to-b from-zinc-900/80 to-black group rounded-3xl overflow-hidden border border-red-900/20 hover:border-red-500/50 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(220,38,38,0.15)] hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute top-4 left-4 z-20 bg-red-600/90 text-white text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg border border-red-500/50">
                  {news.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-xs mb-4 uppercase tracking-wider">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors line-clamp-2 leading-snug drop-shadow-sm">
                  {news.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8 line-clamp-3">
                  {news.excerpt}
                </p>
                <div className="mt-auto">
                    <button className="text-red-500 font-semibold text-sm flex items-center gap-2 group/btn hover:text-red-400 transition-colors uppercase tracking-widest">
                    Baca Selengkapnya
                    <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;