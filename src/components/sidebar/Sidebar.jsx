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
  X
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const { logout, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};

  const userData = user || storedUser;

  const userName = userData?.nama || userData?.name || "User";
  const role = userData?.role || localStorage.getItem("role");

  const menus = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
    { name: "Anggota", icon: Users, to: "/admin/anggota" },
    { name: "Program Kerja", icon: Calendar, to: "/admin/program-kerja" },
    { name: "Kegiatan", icon: Calendar, to: "/admin/kegiatan" },
    { name: "Kas", icon: Wallet, to: "/admin/kas" },
    { name: "Berita", icon: Newspaper, to: "/admin/berita" },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="px-4 flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
            <img src={logo} alt="Logo HIMIF" className="h-10" />
            <h1 className="text-xl font-semibold text-gray-800">
                Sistem Manajemen HIMIF
            </h1>       
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p
                title={`Selamat Datang, ${userName}!`}
                className="text-sm font-medium text-gray-800 truncate max-w-[180px]"
              >
                Selamat Datang, {userName}!
              </p>
              <p className="text-xs text-gray-500 capitalize">{role}</p>
            </div>

            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-6 h-6 text-red-500" />
            </button>
          </div>

        </div>
      </nav>

      <aside
        className={`w-64 bg-white shadow min-h-screen fixed left-0 top-16 z-40 transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4">
          <h2 className="text-xs font-semibold text-gray-400 uppercase mb-4 px-4">
            Menu Utama
          </h2>

          <div className="space-y-1">
            {menus.map((menu) => {
              const Icon = menu.icon;

              return (
                <NavLink
                  key={menu.name}
                  to={menu.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${
                      isActive
                        ? "bg-red-100 text-red-700 font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={20}
                        className={isActive ? "text-red-600" : "text-gray-400"}
                      />
                      <span>{menu.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
