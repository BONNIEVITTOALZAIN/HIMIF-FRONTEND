import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuth } from "../../components/context/authContext";

export default function Layout() {
  const { user } = useAuth();
  const location = useLocation();
  const [isSidebarMini, setIsSidebarMini] = useState(false);

  const isAdminArea = location.pathname.includes('/admin') || location.pathname.includes('/dashboard');

  return (
    <div className="min-h-screen">
      {!isAdminArea && <Navbar />}

      <div className="flex">
        {isAdminArea && <Sidebar isMini={isSidebarMini} toggleMini={() => setIsSidebarMini(!isSidebarMini)} active={location.pathname} />}

        <main
          className={`flex-1 bg-zinc-950 text-white min-h-screen transition-all duration-300 ${
            isAdminArea ? `pt-16 ${isSidebarMini ? "lg:ml-20" : "lg:ml-64"}` : ""
          }`}
        >
          <Outlet />
        </main>
      </div>

      {!isAdminArea && <Footer />}
    </div>
  );
}
