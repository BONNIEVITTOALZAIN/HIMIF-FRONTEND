import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/Aboutme";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Layout from "./pages/layout/Layout";
import Login from "./pages/auth/Login";
import { AuthProvider } from "./components/context/authContext";
import Forbidden from "./pages/forbidden/Forbidden";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AnggotaView from "./pages/admin/dashboard/anggota/AnggotaView";
import ProgramKerjaView from "./pages/admin/dashboard/programKerja/ProgramKerjaView";
import KegiatanView from "./pages/admin/dashboard/kegiatan/KegiatanView";
import KasView from "./pages/admin/dashboard/kas/KasView";
import BeritaView from "./pages/admin/dashboard/berita/BeritaView";


export default function App() {
  return (
    
    <BrowserRouter>
      <AuthProvider>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/forbidden" element={<Forbidden />} />

        {/* Layout utama */}
        <Route element={
            <Layout />
        }>
          {/* Public routes tapi */}
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Program" element={<Program />} />
          <Route path="/News" element={<News />} />
          <Route path="/Contact" element={<Contact />} />
          {/* Admin routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute allowedRoles={["admin", "pengurus", "bendahara", "anggota"]}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/anggota" element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AnggotaView />
            </ProtectedRoute>
          } />
          <Route path="/admin/program-kerja" element={
            <ProtectedRoute allowedRoles={["admin", "pengurus"]}>
              <ProgramKerjaView />
            </ProtectedRoute>
          } />
          <Route path="/admin/kegiatan" element={
            <ProtectedRoute allowedRoles={["admin", "pengurus"]}>
              <KegiatanView />
            </ProtectedRoute>
          } />
          <Route path="/admin/kas" element={
            <ProtectedRoute allowedRoles={["admin", "bendahara", "anggota"]}>
              <KasView />
            </ProtectedRoute>
          } />
          <Route path="/admin/berita" element={
            <ProtectedRoute allowedRoles={["admin", "pengurus"]}>
              <BeritaView />
            </ProtectedRoute>
          } />

        </Route>

      </Routes>
      </AuthProvider>
    </BrowserRouter>
   
  );
}
