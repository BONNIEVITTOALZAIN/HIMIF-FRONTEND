import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Compass, Award } from 'lucide-react';

const sejarahData = [
  {
    id: 0,
    type: "cover",
    title: "SEJARAH",
    subtitle: "Perjalanan Kami",
    desc: "Klik susunan card ini untuk menceritakan lembaran sejarah kebanggaan kami secara berurutan.",
    year: "20XX"
  },
  {
    id: 1,
    type: "content",
    title: "Awal Berdiri",
    desc: "Didirikan dengan semangat kebersamaan dan inovasi, HIMIF menjadi wadah perintis bagi mahasiswa Informatika. Ini adalah titik awal dari semua pencapaian besar kami.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    type: "content",
    title: "Masa Perkembangan",
    desc: "Memulai berbagai program kerja unggulan, kompetisi bergengsi, dan pengabdian masyarakat pertama yang mendulang kesuksesan besar di kancah mahasiswa.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    type: "content",
    title: "Era Digitalisasi",
    desc: "Bergerak secara adaptif mengikuti arus teknologi yang dinamis, membentuk divisi-divisi spesifik untuk pengembangan Hard Skill & Soft Skill mahasiswa IT.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    type: "content",
    title: "HIMIF Saat Ini",
    desc: "Menjadi himpunan unggulan yang adaptif, inovatif, dan terus mencetak generasi berprestasi. Masa depan ekosistem IT ada di tangan kita bersama!",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  }
];

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/40 border border-red-900/50 mb-6 drop-shadow-md">
            <Users className="w-5 h-5 text-red-500" />
            <span className="text-white font-medium text-sm tracking-wide">Tentang Kami</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
            Mengenal <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">HIMIF</span><br className="hidden md:block"/> Lebih Dekat
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">Himpunan Mahasiswa Informatika  adalah organisasi mahasiswa program studi Informatika yang khusus untuk mahasiswa program studi Informatika
            Yang sudah berdiri sejak tahun 20. Hadirnya HIMIF menjadi wadah bagi seluruh mahasiswa program studi Informatika untuk mengembangkan minat, bakat, serta kemampuan akademik dan non-akademik di bidang teknologi informasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Target className="w-8 h-8"/>, title: "Visi Meraih Masa Depan", desc: "Menjadi himpunan unggulan yang adaptif terhadap perkembangan teknologi dan senantiasa berkontribusi aktif secara mandiri." },
            { icon: <Compass className="w-8 h-8"/>, title: "Misi Berkembang", desc: "Memfasilitasi setiap anggota dalam pengembangan hardskill dan softskill secara simultan melalui program-program edukatif." },
            { icon: <Award className="w-8 h-8"/>, title: "Solidaritas Tinggi", desc: "Membangun rasa kekeluargaan dan jaringan relasi yang mengikat kuat antar sesama elemen civitas akademika dan mahasiswa informatika." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-zinc-900/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-red-900/30 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
            >
              <div className="w-16 h-16 bg-linear-to-br from-red-500/20 to-red-900/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div 
        className='w-full min-h-[80vh] flex relative items-center justify-center py-20 px-6 cursor-pointer perspective-1000 group'
        onClick={() => setActiveIndex((prev) => (prev + 1) % sejarahData.length)}
      >
        {sejarahData.map((data, index) => {
          // Menghitung jarak card dari index aktif (0 berarti card paling depan)
          const diff = (index - activeIndex + sejarahData.length) % sejarahData.length;
          
          // Style dan Animasi bertingkat berdasarkan urutan kedalaman
          const isActive = diff === 0;
          const zIndexVal = sejarahData.length - diff;
          
          // Animasi properties berdasarkan jarak antrian
          const rotateVal = diff === 0 ? 2 : diff === 1 ? -2 : diff === 2 ? -4 : diff === 3 ? 4 : -6;
          const scaleVal = 1 - (diff * 0.05); // 1, 0.95, 0.90, 0.85, 0.80
          const yVal = diff * -15; // 0, -15, -30, -45, -60
          const opacityVal = diff > 2 ? 0 : 1 - (diff * 0.2); // Tampilkan maks 3 di belakang, atau buram bertahap

          return (
            <motion.div 
              key={data.id}
              initial={false}
              animate={{ 
                rotate: rotateVal, 
                scale: scaleVal,
                zIndex: zIndexVal,
                y: yVal,
                opacity: opacityVal
              }}
              whileHover={isActive ? { rotate: 0, scale: 1.02, y: -5 } : {}}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className={`w-full md:w-9/12 max-w-4xl h-[450px] md:h-[500px] absolute rounded-[2.5rem] overflow-hidden shadow-2xl transition-shadow duration-500 will-change-transform
                ${isActive ? 'group-hover:shadow-[0_20px_60px_rgba(220,38,38,0.15)] bg-zinc-900 border-red-500/50' : 'bg-zinc-900 border-red-900/30'} 
                border flex flex-col md:flex-row`}
            >
              {data.type === "cover" ? (
                // LAYOUT COVER
                <>
                  <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-700 ${isActive ? 'opacity-10 group-hover:opacity-20' : 'opacity-0'}`}>
                     <h2 className="text-8xl md:text-[150px] font-black text-white whitespace-nowrap rotate-[-5deg] tracking-tighter">
                        {data.title}
                     </h2>
                  </div>
                  
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 pointer-events-none">
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 border border-zinc-700/50">
                       <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                       <span className="text-zinc-300 font-medium text-xs md:text-sm tracking-widest uppercase">{data.subtitle}</span>
                     </div>
                     <p className={`mt-6 text-zinc-400 font-light text-sm md:text-base max-w-[200px] md:max-w-xs leading-relaxed transition-all duration-500 ${isActive ? 'opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0' : 'opacity-0'}`}>
                       {data.desc}
                     </p>
                  </div>
                  
                  <div className={`w-40 h-40 md:w-64 md:h-64 flex flex-col justify-end items-end p-6 md:p-10 border-t border-l absolute bottom-0 right-0
                    bg-linear-to-tl from-red-600 to-red-500/20 rounded-tl-full border-red-400/30 shadow-[-10px_-10px_30px_rgba(220,38,38,0.1)] 
                    transition-all duration-500 z-10 pointer-events-none ${isActive ? 'group-hover:w-48 group-hover:h-48 md:group-hover:w-72 md:group-hover:h-72' : ''}`}>
                      <span className="text-white/80 font-medium text-xs md:text-sm tracking-widest uppercase md:mb-1">Berdiri Sejak</span>
                      <span className="text-white font-black text-2xl md:text-5xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{data.year}</span>
                  </div>
                </>
              ) : (
                // LAYOUT CONTENT GAMBAR+TEKS
                <>
                  {/* Sisi Kiri: Gambar */}
                  <div className="w-full md:w-5/12 h-2/5 md:h-full bg-red-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700" style={{ backgroundImage: `url(${data.img})` }}></div>
                    <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-zinc-900/90 md:from-zinc-900 via-zinc-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 md:bottom-10 md:left-10 z-10 w-full pr-4">
                       <h3 className="text-white font-black text-2xl md:text-3xl drop-shadow-lg leading-tight w-11/12">{data.title}</h3>
                    </div>
                  </div>
                  
                  {/* Sisi Kanan: Teks Sejarah */}
                  <div className="w-full md:w-7/12 h-3/5 md:h-full p-6 md:p-10 flex flex-col justify-center relative">
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 70%)' }}></div>
                    <p className="text-zinc-300 font-light text-xs md:text-sm lg:text-base leading-relaxed lg:leading-loose relative z-10">
                      {data.desc}
                    </p>
                    
                    <div className="mt-4 md:mt-8 relative z-10">
                       <button className="px-5 py-2 md:px-6 md:py-2 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs md:text-sm font-semibold transition-colors duration-300 shadow-[0_0_15px_rgba(220,38,38,0.4)] relative overflow-hidden group/btn">
                         <span className="relative z-10">Tumpuk (Lanjut)</span>
                         <div className="absolute inset-0 bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100 z-0"></div>
                       </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default AboutMe;