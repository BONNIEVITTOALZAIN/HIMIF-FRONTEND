import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useAuth } from "../../components/context/authContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { user } = useAuth();
  const adminRoles = ["admin", "pengurus", "bendahara"];
  const isAdmin = adminRoles.includes(user?.role);

  const navigation = [
    { name: "Beranda", to: "/" },
    {
      name: "Tentang",
      dropdown: [
        { name: "Sejarah HIMIF", to: "/tentang/sejarah" },
        { name: "Visi & Misi", to: "/tentang/visi-misi" },
        { name: "Struktur Organisasi", to: "/tentang/struktur" },
      ],
    },
    {
      name: "Program",
      dropdown: [
        { name: "Program Kerja", to: "/program/kerja" },
        { name: "Kegiatan Rutin", to: "/program/rutin" },
        { name: "Workshop", to: "/program/workshop" },
        { name: "Seminar", to: "/program/seminar" },
      ],
    },
    { name: "Anggota", to: "/anggota" },
    { name: "Berita", to: "/berita" },
    { name: "Kontak", to: "/kontak" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
    {!isAdmin && (
    <nav className="bg-white shadow-sm sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo HIMIF" className="h-12" />
          </div>

         
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center gap-1 text-gray-600 hover:text-red-700"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition ${openDropdown === index ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openDropdown === index && (
                      <div className="absolute top-full mt-2 w-48 bg-white border rounded shadow">
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.to}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm ${
                                isActive ? "text-red-700 font-semibold" : "text-gray-600"
                              } hover:bg-gray-100`
                            }
                            onClick={() => setOpenDropdown(null)}
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-red-700 font-semibold border-b-2 border-red-700 pb-1"
                        : "text-gray-600 hover:text-red-700"
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
          {navigation.map((item, index) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex justify-between w-full text-gray-600"
                  >
                    {item.name}
                  </button>
                  {openDropdown === index && (
                    <div className="pl-4">
                      {item.dropdown.map((sub) => (
                        <NavLink
                          key={sub.name}
                          to={sub.to}
                          className="block py-1 text-sm text-gray-500"
                          onClick={() => {
                            setIsOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  className="block py-2 text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
    )}
    </>
  );
}
