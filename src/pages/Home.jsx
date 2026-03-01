import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Compass, CheckCircle2, CalendarDays, Users, Network } from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import FlipWords from '../components/Ui/flip-words'
import '../css/Home.css';
import '../css/HomeAnimations.css';
const Home = () => {
  const [particles, setParticles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
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

    return () => clearInterval(interval);
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
      <motion.div className="relative z-10 min-h-screen flex flex-col animate-fade-in-up p-6">
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
            <div className="relative mt-12 lg:mt-0">
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
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start pt-20 pb-32 overflow-hidden border-t border-red-900/30">
        {/* Background Accents for About Section */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-red-900/20 to-transparent pointer-events-none blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-red-900/10 to-transparent pointer-events-none blur-3xl rounded-full"></div>

        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-start text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">About </span>
              <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">HIMIF</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-800 mx-auto rounded-full mb-12"></div>

            <div className="relative backdrop-blur-xl bg-zinc-900/40 rounded-3xl p-8 md:p-12 border border-red-900/30 shadow-2xl max-w-4xl w-full hover:border-red-500/50 transition-colors duration-500">
              <div className="absolute -top-6 -left-2 text-red-500/20 text-8xl md:text-9xl font-serif">"</div>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light relative z-10 py-6">
                Himpunan Mahasiswa Informatika Multidata Palembang (HIMIF) merupakan organisasi kemahasiswaan yang menjadi wadah pengembangan potensi, kreativitas, dan inovasi mahasiswa Informatika di Universitas Multi Data Palembang.
                Kami hadir sebagai ruang kolaborasi dan aspirasi yang mendukung peningkatan kompetensi akademik maupun non-akademik melalui berbagai kegiatan berdaya saing tinggi.
              </p>
              <div className="absolute -bottom-16 -right-2 text-red-500/20 text-8xl md:text-9xl font-serif">"</div>
            </div>
          </div>

          {/* Visi & Misi Section */}
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 lg:gap-12 mt-4">
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
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;