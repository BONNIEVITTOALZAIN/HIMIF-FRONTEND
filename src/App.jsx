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
            <ProtectedRoute allowedRoles={["admin", "pengurus", "bendahara"]}>
            <Dashboard />
            </ProtectedRoute>
            } />


        </Route>

      </Routes>
      </AuthProvider>
    </BrowserRouter>
   
  );
}
