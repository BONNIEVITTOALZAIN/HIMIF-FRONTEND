import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-red-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              HIMIF
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Himpunan Mahasiswa Informatika merupakan organisasi mahasiswa
              yang berperan dalam pengembangan akademik, keilmuan, dan
              soft skill mahasiswa Informatika.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Menu
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Beranda", to: "/" },
                { name: "Tentang Kami", to: "/tentang/sejarah" },
                { name: "Program Kerja", to: "/program/kerja" },
                { name: "Berita", to: "/berita" },
                { name: "Kontak", to: "/kontak" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className="hover:text-red-500 transition-colors"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-1" />
                <span>
                  Fakultas Ilmu Komputer, Lantai 3
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-500" />
                <span>hmif@university.ac.id</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Media Sosial
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Ikuti kegiatan dan informasi terbaru kami
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Himpunan Mahasiswa Informatika
          </p>
        </div>

      </div>
    </footer>
  );
}
