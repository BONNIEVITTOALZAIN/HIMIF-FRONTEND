import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Compass, CheckCircle2, CalendarDays, Users, Network, Instagram, Youtube, Linkedin, Github } from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import FlipWords from '../components/Ui/flip-words'
import '../css/Home.css';
import '../css/HomeAnimations.css';
const Home = () => {
  const [particles, setParticles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [instaIndex, setInstaIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/images/IMG_0087.jpg",
      title: "Questify",
      description: "Malam Akrab untuk mahasiswa Informatika"
    },
    {
      id: 2,
      src: "/images/IMG_2813.jpg",
      title: "IFEST 5.0",
      description: "Perlombaan inovasi mahasiswa"
    },
    {
      id: 3,
      src: "/images/IMG_6032.JPG",
      title: "IF ANNIVERSARY",
      description: "Ulang tahun Himpunan Mahasiswa Informatika"
    },
    {
      id: 4,
      src: "/images/IMG_6963.jpg",
      title: "PENGABDIAN",
      description: "Pengabdian kepada masyarakat"
    },
    {
      id: 5,
      src: "/images/DSC06046.JPG",
      title: "MUBES",
      description: "Musyawarah Bersama Mahasiswa Informatika"
    },
    {
      id: 6,
      src: "/images/IMG_6963.jpg",
      title: "PENGABDIAN",
      description: "Pengabdian kepada masyarakat"
    },

  ];

  const activities = [
    {
      id: 1,
      title: "IFEST 5.0",
      date: "Oktober",
      desc: "Ajang inovasi dan kreasi teknologi kompetitif tingkat pelajar dan mahasiswa berskala nasional.",
      image: "/images/IMG_2813.jpg",
      icon: <Target className="w-6 h-6 text-red-500" />
    },
    {
      id: 2,
      title: "Malam Keakraban",
      date: "Desember",
      desc: "Wadah untuk menyatukan dan meningkatkan solidaritas keakraban antar mahasiswa dan pengurus himpunan.",
      image: "/images/IMG_0087.jpg",
      icon: <Users className="w-6 h-6 text-red-500" />
    },
    {
      id: 3,
      title: "Pengabdian Masyarakat",
      date: "Agustus",
      desc: "Turun langsung memberikan edukasi pengenalan teknologi informasi yang bermanfaat bagi masyarakat sekolah sekitar.",
      image: "/images/IMG_6963.jpg",
      icon: <Network className="w-6 h-6 text-red-500" />
    },
    {
      id: 4,
      title: "IF Anniversary",
      date: "Juli",
      desc: "Puncak perayaan hari jadi kebanggaan Himpunan Mahasiswa Informatika penuh euforia dan momen meriah.",
      image: "/images/IMG_6032.JPG",
      icon: <CalendarDays className="w-6 h-6 text-red-500" />
    }
  ];

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 10 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 12 + 8,
    }));
    setParticles(particleArray);

    // Auto-rotate gallery images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);

    }, 4000);

    const instaInterval = setInterval(() => {
      setInstaIndex((prev) => (prev + 1) % galleryImages.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(instaInterval);
    };
  }, []);

  return (
    <div className="no-scrollbar min-h-screen relative overflow-y-scroll bg-black text-white">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-red-600 rounded-full opacity-30 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Floating Glow Decorations */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-800 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700 rounded-full blur-[150px] opacity-10 animate-pulse"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 min-h-screen flex flex-col p-6"
      >
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            {/* Left Side - Main Text */}
            <div className="text-center lg:text-left">
              <div className="h-auto w-auto">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight">
                  <span className="block animate-text bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent bg-[length:200%_200%]">
                    Salam Informatika !!
                  </span>
                  <div className="mt-4"></div>
                  <FlipWords words={['Mudah', 'Kreatif', 'Berwawasan Global']} className="text-gray-300" />
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                  Himpunan Mahasiswa Informatika Multidata Palembang — Wadah untuk mengembangkan kreativitas, inovasi, dan potensi mahasiswa informatika dalam menghadapi era teknologi digital.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300 btn-primary outline-none focus:outline-none">
                  Bergabung Sekarang
                </button>
                <button className="px-8 py-4 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold rounded-xl transition-all duration-300 btn-primary bg-black/50 backdrop-blur-md outline-none focus:outline-none">
                  Lihat Kegiatan
                </button>
              </div>
            </div>

            {/* Right Side - Photo Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              {/* Main Gallery Container */}
              <div className="relative bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8 border border-red-900/30 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:border-red-500/50 transition-all duration-500 group">

                {/* Gallery Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Galeri Kegiatan</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto rounded-full"></div>
                </div>

                {/* Main Image Display */}
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-2xl transition-all duration-500 ring-1 ring-white/10 group-hover:ring-red-500/50">
                  <div className="relative h-80 bg-zinc-800">
                    <img
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].title}
                      as={motion.img} className="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    {/* Image Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-xl mb-1 drop-shadow-md tracking-wide">
                        {galleryImages[currentImageIndex].title}
                      </h4>
                      <p className="text-gray-300 text-sm drop-shadow-sm font-light">
                        {galleryImages[currentImageIndex].description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="grid grid-cols-6 gap-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative h-12 md:h-16 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-md outline-none focus:outline-none ${index === currentImageIndex
                        ? 'ring-2 ring-red-500 scale-105 shadow-[0_0_15px_rgba(220,38,38,0.5)] z-10'
                        : 'opacity-50 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all duration-300"></div>
                    </button>
                  ))}
                </div>

                {/* Gallery Stats */}
                <div className="mt-8 grid grid-cols-3 gap-2 md:gap-4 text-center">
                  <div className="w-auto h-auto bg-zinc-950/60 backdrop-blur-md rounded-xl p-3 md:p-4 border border-red-900/20 hover:border-red-500/30 transition-all duration-300 flex space-x-2 items-center justify-center group hover:-translate-y-1 shadow-md hover:shadow-red-500/10">
                    <CalendarDays className="w-6 pt-2 h-6 md:w-7 md:h-7 text-red-500 mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                    <div className="text-xl md:text-lg font-black text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">6+</div>
                    <div className="text-gray-400 text-[5px] md:text-xs uppercase tracking-wider mt-1 font-semibold">Kegiatan</div>
                  </div>
                  <div className="w-auto h-auto  bg-zinc-950/60 backdrop-blur-md rounded-xl p-3 md:p-4 border border-red-900/20 hover:border-red-500/30 transition-all duration-300 flex space-x-2 items-center justify-center group hover:-translate-y-1 shadow-md hover:shadow-red-500/10">
                    <Users className="w-6 pt-2 h-6 md:w-7 md:h-7 text-red-500 mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                    <div className="text-xl md:text-lg font-black text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">50+</div>
                    <div className="text-gray-400 text-[5px] md:text-xs uppercase tracking-wider mt-1 font-semibold">Anggota</div>
                  </div>
                  <div className="w-auto h-auto  bg-zinc-950/60 backdrop-blur-md rounded-xl p-3 md:p-4 border border-red-900/20 hover:border-red-500/30 transition-all duration-300 flex space-x-2 items-center justify-center group hover:-translate-y-1 shadow-md hover:shadow-red-500/10">
                    <Network className="w-6 pt-2 h-6 md:w-7 md:h-7 text-red-500 mb-2 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                    <div className="text-xl md:text-lg font-black text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">4</div>
                    <div className="text-gray-400 text-[5px] md:text-xs uppercase tracking-wider mt-1 font-semibold">Divisi</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements Around Gallery */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-600/10 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-red-800/20 rounded-full blur-3xl animate-pulse pointer-events-none z-0"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start pt-20 pb-32 overflow-hidden border-t border-red-900/30">
        {/* Background Accents for About Section */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-900/20 to-transparent pointer-events-none blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-900/10 to-transparent pointer-events-none blur-3xl rounded-full"></div>

        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center justify-start text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">About </span>
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">HIMIF</span>
            </h2>
            <div className="relative w-full rounded-3xl  md:p-12 shadow-2xl max-w-4xl  hover:border-red-500/50 transition-colors duration-500">
              <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light relative z-10 ">
                Himpunan Mahasiswa Informatika Multidata Palembang (HIMIF) merupakan organisasi kemahasiswaan yang menjadi wadah pengembangan potensi, kreativitas, dan inovasi mahasiswa Informatika di Universitas Multi Data Palembang.
              </p>
            </div>
          </motion.div>
          {/* Stats/Highlight Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 relative z-10 px-4"
          >
            {/* Card 1: Est 2013 */}
            <div className="relative group bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-500 shadow-xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <CalendarDays className="w-8 h-8 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-wide mb-3 drop-shadow-md">Est. 2013</h4>
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                  Telah berpengalaman lebih dari sedekade dalam memfasilitasi dan mengembangkan potensi mahasiswa Informatika.
                </p>
              </div>
            </div>

            {/* Card 2: 4 Divisi */}
            <div className="relative group bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-500 shadow-xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <Network className="w-8 h-8 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-wide mb-3 drop-shadow-md">4 Divisi</h4>
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                  Terdiri dari 4 divisi utama yang bersinergi secara solid untuk merealisasikan seluruh visi dan program kerja himpunan.
                </p>
              </div>
            </div>

            {/* Card 3: 7+ Kegiatan */}
            <div className="relative group bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-500 shadow-xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <Target className="w-8 h-8 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>
                <h4 className="text-2xl font-bold text-white tracking-wide mb-3 drop-shadow-md">7+ Kegiatan</h4>
                <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed">
                  Sangat aktif dalam menyelenggarakan berbagai kegiatan edukatif dan inspiratif secara rutin setiap tahunnya.
                </p>
              </div>
            </div>
          </motion.div>
          {/* Visi & Misi Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-5xl grid md:grid-cols-2 gap-8 lg:gap-12 mt-4"
          >
            {/* Visi Card */}
            <div className="relative group bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-red-500/50 transition-all duration-500 shadow-xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <Target className="w-10 h-10 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-md">VISI</h3>

                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  Menjadi organisasi kemahasiswaan yang <span className="font-semibold text-white">inovatif, progresif,</span> dan berdaya saing tinggi dalam mengoptimalkan potensi mahasiswa Informatika yang selaras dengan perkembangan teknologi global.
                </p>
              </div>
            </div>
            {/* Misi Card */}
            <div className="relative group bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-red-500/50 transition-all duration-500 shadow-xl overflow-hidden hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center h-full">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                  <Compass className="w-10 h-10 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 tracking-wide drop-shadow-md text-center">MISI</h3>

                <ul className="text-gray-300 text-base lg:text-lg leading-relaxed font-light space-y-4 w-full">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <span>Menyelenggarakan program kerja inovatif yang mendukung peningkatan *hard-skill* maupun *soft-skill*.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <span>Membangun ekosistem kolaborasi yang sinergis dengan civitas akademika dan stakeholder eksternal.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <span>Menciptakan ruang apresiasi dan penyalur aspirasi yang progresif bagi mahasiswa.</span>
                  </li>
                </ul>
              </div>
            </div>
                        
          </motion.div>
        </div>
      </div>

      {/* Kegiatan / Program Kerja Section */}
      <div className="relative w-full min-h-screen bg-gradient-to-b from-black via-red-950/20 to-black flex flex-col items-center justify-start pt-20 pb-32 overflow-hidden border-t border-red-900/30">
        
        {/* Background Accents for Kegiatan Section */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-900/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-800/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Program </span>
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Kerja</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
              Berbagai kegiatan spektakuler dan berkelanjutan yang kami selenggarakan secara rutin untuk mewadahi minat, bakat, serta kreativitas seluruh elemen Mahasiswa Informatika.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {activities.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-gradient-to-br from-black to-red-950/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-red-900/30 hover:border-red-500/60 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-10px_rgba(220,38,38,0.4)]"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-red-600/30 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Floating Date Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-red-500/50 flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    <CalendarDays className="w-4 h-4 text-red-500" />
                    <span className="text-xs text-gray-200 font-bold uppercase tracking-wider">{item.date}</span>
                  </div>
                  
                  {/* Gradient Overlay for seamless blend */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black border-b-transparent to-transparent z-10"></div>
                </div>

                {/* Content Container */}
                <div className="p-8 relative z-20 -mt-2">
                  {/* Icon floating */}
                  <div className="absolute -top-10 left-8 w-14 h-14 bg-black rounded-2xl border border-red-500/50 flex items-center justify-center shadow-[0_10px_30px_rgba(220,38,38,0.3)] group-hover:scale-110 group-hover:border-red-400 group-hover:shadow-[0_10px_40px_rgba(220,38,38,0.5)] transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3 font-light">
                      {item.desc}
                    </p>
                    
                    <button className="text-red-500 text-sm font-semibold flex items-center gap-2 group/btn uppercase tracking-wider">
                      Lihat Detail 
                      <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300 text-red-400">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center py-24 overflow-hidden border-t border-red-900/30">
        
        {/* Floating Background Circles */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-red-600 rounded-full opacity-20 mix-blend-screen blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-red-800 rounded-full opacity-20 mix-blend-screen blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-red-500 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute bottom-10 right-0 w-64 h-64 bg-red-900 rounded-full opacity-20 blur-[100px]"></div>

        <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start lg:pr-12"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/30 backdrop-blur-md border border-red-900/50 mb-8 hover:bg-red-900/40 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.2)]">
              <Instagram className="w-5 h-5 text-red-500" />
              <span className="text-white font-medium">@hmif.umdp</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
              Ikuti kami di Instagram untuk update terbaru dan kegiatan seru!
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light drop-shadow-sm">
              Tetap terhubung dengan HMIF umdp dan jangan lewatkan acara menarik, workshop, dan highlight komunitas kami.
            </p>
            
            <a 
              href="https://instagram.com/hmif.umdp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300"
            >
              Ikuti Kami
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </motion.div>

          {/* Right Content - Instagram Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 z-20"
          >
            <div className="bg-zinc-900/50 backdrop-blur-md p-2 sm:p-3 rounded-2xl sm:rounded-3xl shadow-[0_0_40px_rgba(220,38,38,0.15)] relative border border-red-900/30">
              <div className="bg-black rounded-xl sm:rounded-2xl overflow-hidden relative border border-red-900/20">
                {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 bg-zinc-950/90 backdrop-blur-md border-b border-red-900/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-red-900 p-[2px] flex items-center justify-center shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
                        <Instagram className="w-4 h-4 text-red-500" />
                      </div>
                    </div>
                    <span className="text-white font-medium text-sm tracking-wide">hmif.umdp</span>
                  </div>
                  <div className="flex items-center gap-[3px]">
                     <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                     <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                     <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Image Grid */}
                <div className="grid grid-cols-2 gap-1 bg-zinc-950 p-1">
                  {[0, 1, 2, 3].map((offset) => {
                    const imgIndex = (instaIndex + offset) % galleryImages.length;
                    const img = galleryImages[imgIndex];
                    return (
                      <div key={offset} className="relative aspect-square overflow-hidden group bg-zinc-900 rounded-lg">
                        <AnimatePresence mode="popLayout">
                          <motion.img 
                            key={img.src}
                            src={img.src} 
                            alt={img.title}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-10">
                          <Instagram className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] scale-50 group-hover:scale-100 transition-transform duration-300" />
                          <span className="text-white text-xs font-semibold px-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">{img.title}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Floating Square decoration */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-600/20 rounded-xl blur-md -z-10 rotate-12"></div>
            <div className="absolute top-1/2 -right-8 w-20 h-20 bg-red-800/20 rounded-full blur-md -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;