import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-900/10 blur-[150px] pointer-events-none skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-red-800/10 blur-[150px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-950/40 border border-red-900/50 mb-6 drop-shadow-md">
            <MessageSquare className="w-5 h-5 text-red-500" />
            <span className="text-white font-medium text-sm tracking-wide">Pusat Bantuan</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Hubungi <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">Kami</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed text-center lg:text-left">
            Punya pertanyaan mengenai program kami, masukan saran, atau ingin peluang berkolaborasi? Jangan ragu untuk segera menghubungi delegasi kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-2">Alamat Sekretariat</h3>
                <p className="text-gray-400 font-light leading-relaxed text-lg">Universitas Multi Data Palembang<br />Jl. Rajawali No.14, Kec. Ilir Timur II<br />Kota Palembang, Sumatera Selatan 30113</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Email</h3>
                <p className="text-gray-400 font-light text-lg">hmif@umdp.ac.id</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Telepon Utama</h3>
                <p className="text-gray-400 font-light text-lg">+62 812-3456-7890 (Humas & Kerjasama)</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-900/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-500 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Instagram</h3>
                <a href="https://instagram.com/hmif.umdp" target="_blank" rel="noreferrer" className="text-gray-400 font-light text-lg hover:text-red-400 transition-colors">@hmif.umdp</a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-zinc-950/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-red-900/30 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-3xl font-bold mb-8 drop-shadow-md">Tinggalkan <span className="text-red-500">Pesan</span></h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 tracking-wide">Nama Lengkap</label>
                  <input type="text" className="w-full bg-black/80 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-light" placeholder="Masukkan nama..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 tracking-wide">Email Publik</label>
                  <input type="email" className="w-full bg-black/80 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-light" placeholder="email@contoh.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 tracking-wide">Subjek Isu</label>
                <input type="text" className="w-full bg-black/80 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all font-light" placeholder="Subjek atau instansi..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 tracking-wide">Pesan Deskriptif</label>
                <textarea rows="5" className="w-full bg-black/80 border border-zinc-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none font-light" placeholder="Tulis rincian pesan kolaborasi atau pertanyaan Anda di sini..."></textarea>
              </div>
              <button type="button" className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] mt-4">
                <span className="text-lg">Kirim Pesan Cepat</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Contact;