import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import logoHm from "../../assets/logod.png";
import CardNavbar from "./CardNavbar";
import { useAuth } from "../../components/context/authContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { user } = useAuth();
  const adminRoles = ["admin", "pengurus", "bendahara"];
  const isAdmin = adminRoles.includes(user?.role);
  const [current, setCurrent] = useState(0);

  const navigations = [
    { name: "Home", to: "/" },
    {
      name: "About Me",
      to: "/AboutMe"
    },
    {
      name: "Programs",
      dropdown: [
        { name: "Program Kerja", to: "/program/kerja" },
        { name: "Kegiatan Rutin", to: "/program/rutin" },
        { name: "Workshop", to: "/program/workshop" },
        { name: "Seminar", to: "/program/seminar" },
      ],
    },
    { name: "News", to: "/berita" },
    { name: "Contact", to: "/kontak" },
  ];

  const imageLogo = [
    {
      'id': 1,
      'src': logo,
      'hight': 'h-12',
      'title': 'HIMIF UMDP',
      'bg': 'bg-white',


    },
    {
      'id': 2,
      'src': logoHm,
      'hight': 'h-14',
      'title': 'KARSADHANA',
      'bg': 'bg-transparent',
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current + 1) % imageLogo.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])


  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <>
      {!isAdmin && (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out rounded-b-2xl ${isScrolled
          ? "bg-zinc-950/80 backdrop-blur-lg shadow-lg shadow-red-900/10 border-b border-red-900/30 py-1"
          : "bg-transparent py-3"
          }`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="relative w-15 h-15 flex items-center justify-center">
                  <img key={current} src={imageLogo[current].src} alt="Logo HIMIF" className={`${imageLogo[current].hight} ${imageLogo[current].bg} rounded-full animate-blurUp drop-shadow-md`} />
                </div>
                <div className={`h-11 w-0.5 rounded-t-sm rounded-b transition-colors duration-300 ${isScrolled ? "bg-red-500/50" : "bg-white/50"}`} />
                <div className="flex flex-col items-start ">
                  <span className="overflow-hidden">
                    <p key={current} className={`text-2xl font-bold tracking-tight animate-blurUp transition-colors duration-300 ${isScrolled ? "text-white" : "text-white text-shadow-sm"}`}>{imageLogo[current].title}</p>
                  </span>
                  <p className={`text-sm transition-colors duration-300 ${isScrolled ? "text-gray-300" : "text-gray-200"}`}>Mudah - Kreatif - Berwawasan Global</p>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                {navigations.map((navigation, index) => (
                  <div key={navigation.name} className="relative">
                    {navigation.dropdown ? (
                      <>
                        <div
                          onClick={() => toggleDropdown(index)}
                          className={`flex navigations-center gap-1 cursor-pointer transition-colors duration-300 font-medium ${isScrolled ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"}`}
                        >
                          {navigation.name}
                        </div>
                        {openDropdown === index && (
                          <CardNavbar items={navigation.dropdown} loseDropDown={() => setOpenDropdown(null)} />
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={navigation.to}
                        className={({ isActive }) =>
                          isActive
                            ? "text-red-500 font-bold border-b-2 border-red-500 pb-1"
                            : `font-medium transition-colors duration-300 ${isScrolled ? "text-gray-300 hover:text-white" : "text-gray-300 hover:text-white"}`
                        }
                      >
                        {navigation.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-white" : "text-gray-300"}`}
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
              {navigations.map((navigation, index) => (
                <div key={navigation.name}>
                  {navigation.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex justify-between w-full text-gray-600"
                      >
                        {navigation.name}
                      </button>
                      {openDropdown === index && (
                        <div className="pl-4">
                          {navigation.dropdown.map((sub) => (
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
                      to={navigation.to}
                      className="block py-2 text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {navigation.name}
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
