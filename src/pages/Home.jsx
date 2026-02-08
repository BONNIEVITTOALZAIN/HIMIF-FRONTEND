import { useState, useEffect } from "react";

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
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated Background Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-red-400 rounded-full opacity-40 animate-ping"
          style={{
            left: `${particle.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}

      {/* Floating Glow Decorations */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-red-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-300 rounded-full blur-3xl opacity-25 animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-white/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
            
            {/* Left Side - Main Text */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-gray-800 mb-6 leading-tight">
                <span className="block animate-text bg-gradient-to-r from-red-500 via-gray-800 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%]">
                  Salam Informatika !!
                </span>
                <span className="block text-red-600 mt-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] animate-pulse text-3xl md:text-4xl xl:text-5xl">
                  Muda, Kreatif, Berwawasan Global
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
                Himpunan Mahasiswa Informatika Multidata Palembang — Wadah untuk mengembangkan
                kreativitas, inovasi, dan potensi mahasiswa informatika
                dalam menghadapi era teknologi digital.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:scale-105">
                  Bergabung Sekarang
                </button>
                <button className="px-8 py-4 border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                  Lihat Kegiatan
                </button>
              </div>
            </div>

            {/* Right Side - Photo Gallery */}
            <div className="relative">
              {/* Main Gallery Container */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-gray-200/50 shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group">
                
                {/* Gallery Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Galeri Kegiatan</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
                </div>

                {/* Main Image Display */}
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-2xl transition-all duration-500 shadow-lg">
                  <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={galleryImages[currentImageIndex].src}
                      alt={galleryImages[currentImageIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Image Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                        {galleryImages[currentImageIndex].title}
                      </h4>
                      <p className="text-white/90 text-sm drop-shadow">
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
                      className={`relative h-16 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-md ${
                        index === currentImageIndex
                          ? 'ring-2 ring-blue-500 shadow-lg scale-105 shadow-blue-500/30'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-white/10 hover:bg-white/5 transition-all duration-300"></div>
                    </button>
                  ))}
                </div>

                {/* Gallery Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-3 border border-blue-100/50">
                    <div className="text-2xl font-bold text-red-600">6+</div>
                    <div className="text-gray-600 text-sm">Kegiatan</div>
                  </div>
                  <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-3 border border-blue-100/50">
                    <div className="text-2xl font-bold text-red-600">50+</div>
                    <div className="text-gray-600 text-sm">anggota</div>
                  </div>
                  <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-3 border border-blue-100/50">
                    <div className="text-2xl font-bold text-red-600">4</div>
                    <div className="text-gray-600 text-sm">Divisi</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements Around Gallery */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-300/30 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-400/25 rounded-full blur-2xl animate-ping"></div>
            </div>

          </div>
        </main>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-60px); }
          100% { transform: translateY(0px); }
        }
        .animate-text {
          animation: gradientShift 6s ease infinite;
          background-size: 200% 200%;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;