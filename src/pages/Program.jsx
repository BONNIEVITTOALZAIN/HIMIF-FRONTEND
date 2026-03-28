import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Network, CalendarDays } from 'lucide-react';

const Program = () => {
  const activities = [
    { id: 1, title: "IFEST 5.0", date: "Oktober", desc: "Ajang inovasi dan kreasi teknologi kompetitif tingkat pelajar dan mahasiswa berskala nasional.", image: "/images/IMG_2813.jpg", icon: <Target className="w-6 h-6 text-red-500" /> },
    { id: 2, title: "Malam Keakraban", date: "Desember", desc: "Wadah untuk menyatukan dan meningkatkan solidaritas keakraban antar mahasiswa dan pengurus himpunan.", image: "/images/IMG_0087.jpg", icon: <Users className="w-6 h-6 text-red-500" /> },
    { id: 3, title: "Pengabdian Masyarakat", date: "Agustus", desc: "Turun langsung memberikan edukasi pengenalan teknologi informasi yang bermanfaat bagi masyarakat sekolah sekitar.", image: "/images/IMG_6963.jpg", icon: <Network className="w-6 h-6 text-red-500" /> },
    { id: 4, title: "IF Anniversary", date: "Juli", desc: "Puncak perayaan hari jadi kebanggaan Himpunan Mahasiswa Informatika penuh euforia dan momen meriah.", image: "/images/IMG_6032.JPG", icon: <CalendarDays className="w-6 h-6 text-red-500" /> }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-800/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/40 border border-red-900/50 mb-6 drop-shadow-md">
            <Target className="w-5 h-5 text-red-500" />
            <span className="text-white font-medium text-sm tracking-wide">Kegiatan Kami</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Program <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Kerja</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Berbagai kegiatan spektakuler, rutin, dan inovatif yang diselenggarakan oleh HIMIF untuk mewadahi skill, minat, dan bakat mahasiswa Informatika secara luas dan proaktif.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {activities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-br from-zinc-900/80 to-black border border-red-900/30 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-500 group flex flex-col md:flex-row shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(220,38,38,0.15)] hover:-translate-y-2"
            >
              <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full blur-xl animate-pulse"></div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="p-2.5 bg-black rounded-lg border border-red-500/30 shadow-[0_5px_15px_rgba(220,38,38,0.2)] group-hover:border-red-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-red-400 font-bold text-sm tracking-widest uppercase">{item.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white inline-block drop-shadow-md group-hover:text-red-400 transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-8">{item.desc}</p>
                <button className="text-white hover:text-red-400 text-sm font-semibold transition-colors mt-auto inline-flex items-center gap-2 w-max uppercase tracking-wider group/btn">
                  Lihat Detail 
                  <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Program;