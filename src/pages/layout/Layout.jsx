import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useAuth } from "../../components/context/authContext";

export default function Layout() {
  const { user } = useAuth();

  const adminRoles = ["admin", "pengurus", "bendahara"];
  const isAdminArea = adminRoles.includes(user?.role);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex">
        {isAdminArea && <Sidebar />}

        <main
          className={`flex-1 bg-gray-50 min-h-screen ${
            isAdminArea ? "ml-64 p-4" : ""
          }`}
        >
          <Outlet />
        </main>
      </div>

      {!isAdminArea && <Footer />}
    </div>
  );
}
