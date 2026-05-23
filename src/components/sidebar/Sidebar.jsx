import { NavLink } from "react-router-dom";
import { useAuth } from "../context/authContext";
import logo from "../../assets/logo.png";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Wallet, 
  Newspaper,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  Bell
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ active, isMini, toggleMini }) {
  const { logout, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const userData = user || storedUser;
  const userName = userData?.nama || userData?.name || "User";
  const role = userData?.role || localStorage.getItem("role") || "Admin";

  const menus = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
    { name: "Anggota", icon: Users, to: "/admin/anggota" },
    { name: "Program Kerja", icon: Calendar, to: "/admin/program-kerja" },
    { name: "Kegiatan", icon: Calendar, to: "/admin/kegiatan" },
    { name: "Kas", icon: Wallet, to: "/admin/kas" },
    { name: "Berita", icon: Newspaper, to: "/admin/berita" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-zinc-950/90 backdrop-blur-md shadow-lg shadow-red-900/10 border-b border-red-900/30" 
            : "bg-zinc-950 border-b border-white/5"
        }`}
      >
        <div className="px-4 lg:px-6 flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-gray-300 hover:text-white transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Mini Toggle */}
            <button
              className="hidden lg:block text-gray-300 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg"
              onClick={toggleMini}
              title={isMini ? "Perbesar Sidebar" : "Perkecil Sidebar"}
            >
              <Menu size={24} />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <img src={logo} alt="Logo HIMIF" className="h-10 relative z-10" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hidden sm:block">
                HIMIF Admin
              </h1>       
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Notification Bell */}
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors group">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-black animate-pulse"></span>
            </button>

            {/* Profile Section */}
            <div className="flex items-center gap-3 pl-5 border-l border-white/10">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium text-white truncate max-w-[150px]">
                  {userName}
                </p>
                <p className="text-xs text-red-500 capitalize font-medium">{role}</p>
              </div>
              
              <div className="relative group cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-500 to-red-800 p-[2px]">
                  <div className="w-full h-full bg-zinc-950 rounded-[10px] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {userName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={logout}
                className="ml-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Aside */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 1024) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`${isMini ? "w-20" : "w-64"} bg-zinc-950 border-r border-white/5 min-h-screen fixed left-0 top-16 z-40 lg:translate-x-0 transition-all duration-300
              ${!isMobileMenuOpen ? "-translate-x-full" : ""}
            `}
          >
            <div className="flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
              <div className="p-5 flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
                <div className="mb-6">
                  <h2 className={`text-[10px] font-bold text-gray-500 tracking-widest uppercase px-3 whitespace-nowrap transition-all duration-300 ${isMini ? 'w-0 opacity-0 overflow-hidden px-0' : 'w-full opacity-100'}`}>
                    Menu Navigasi
                  </h2>
                </div>

                <div className="space-y-2">
                  {menus.map((menu, index) => {
                    const Icon = menu.icon;

                    return (
                      <motion.div
                        key={menu.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 24 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <NavLink
                          to={menu.to}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={({ isActive }) => {
                            const isCurrentActive = active === menu.name || isActive;
                            return `group relative flex items-center ${isMini ? 'justify-center px-0' : 'gap-3 px-3'} py-3 rounded-xl transition-all duration-300 overflow-hidden ${
                              isCurrentActive
                                ? "text-white bg-red-600/10 border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.05)]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`;
                          }}
                        >
                          {({ isActive }) => {
                            const isCurrentActive = active === menu.name || isActive;
                            return (
                            <>
                              {isCurrentActive && (
                                <motion.div 
                                  layoutId="activeNav"
                                  className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                                />
                              )}
                              <div className={`p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                                isCurrentActive ? "bg-red-500 text-white" : "bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-white/10"
                              }`}>
                                <Icon size={18} strokeWidth={isCurrentActive ? 2.5 : 2} />
                              </div>
                              <div className={`flex items-center flex-1 overflow-hidden transition-all duration-300 ${isMini ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                                <span className={`font-medium text-sm whitespace-nowrap ${isCurrentActive ? "tracking-wide" : ""}`}>
                                  {menu.name}
                                </span>
                                {isCurrentActive && (
                                  <ChevronRight size={16} className="ml-auto text-red-500 flex-shrink-0" />
                                )}
                              </div>
                            </>
                          )}}
                        </NavLink>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              <div className="p-5 border-t border-white/5 bg-zinc-900/30 overflow-hidden">
                <div className={`flex items-center gap-3 px-2 ${isMini ? 'justify-center px-0' : ''}`}>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse flex-shrink-0"></div>
                  <span className={`text-xs text-gray-400 font-medium whitespace-nowrap transition-all duration-300 ${isMini ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>Sistem Online</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
