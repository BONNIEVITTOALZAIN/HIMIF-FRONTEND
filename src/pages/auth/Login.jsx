import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, CheckCircle, XCircle, AlertCircle, ArrowRight, Loader2 } from "lucide-react";
import { useAuth } from "../../components/context/authContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const { login } = useAuth();
  const navigate = useNavigate();

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 4000);
  };

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    let isValid = true;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Format email tidak valid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password tidak boleh kosong";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password minimal 6 karakter";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await login(email, password);
      showAlert("success", "Login berhasil! Mengalihkan...");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      console.log("Login error:", error);

      const errorMessage = error.response?.data?.message || error.message || "";
      const isActive = error.response?.data?.is_active;

      if (isActive === false || isActive === 0 || errorMessage.toLowerCase().includes("nonaktif")) {
        showAlert("warning", "Akun Anda telah dinonaktifkan. Silakan hubungi administrator.");
      } else if (
        errorMessage.toLowerCase().includes("email") ||
        errorMessage.toLowerCase().includes("password") ||
        errorMessage.toLowerCase().includes("salah") ||
        error.response?.status === 401
      ) {
        showAlert("error", "Email atau password yang Anda masukkan salah!");
      } else {
        showAlert("error", errorMessage || "Terjadi kesalahan pada server. Silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Ornaments */}
      <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-[15%] right-[15%] w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[10%] left-[30%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="p-8 sm:p-10">
            {/* Header section */}
            <div className="text-center mb-8">
              <div className="inline-block p-3 rounded-2xl bg-blue-50/50 mb-4 ring-1 ring-blue-100/50 shadow-sm">
                <img
                  src={logo}
                  alt="Logo HMIF"
                  className="w-16 h-16 object-contain transform transition-transform hover:scale-110 duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Selamat Datang
              </h3>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                Sistem Informasi HIMIF
              </p>
            </div>

            {/* Alert */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${alert.show ? 'max-h-24 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
              <div
                className={`p-4 rounded-2xl flex items-center gap-3 border ${
                  alert.type === "success"
                    ? "bg-emerald-50/80 border-emerald-200 text-emerald-800"
                    : alert.type === "warning"
                    ? "bg-amber-50/80 border-amber-200 text-amber-800"
                    : "bg-rose-50/80 border-rose-200 text-rose-800"
                }`}
              >
                {alert.type === "success" ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : alert.type === "warning" ? (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium leading-tight">
                  {alert.message}
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-blue-600">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600 text-slate-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Masukkan Email Anda"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`w-full pl-11 pr-4 py-3.5 bg-white/50 border rounded-2xl text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none
                      ${errors.email 
                        ? "border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10" 
                        : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300 hover:bg-white"
                      }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-xs text-rose-500 flex items-center gap-1.5 font-medium">
                    <XCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-slate-700 mb-2 transition-colors group-focus-within:text-blue-600">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-blue-600 text-slate-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password Anda"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: "" });
                    }}
                    className={`w-full pl-11 pr-12 py-3.5 bg-white/50 border rounded-2xl text-slate-800 placeholder-slate-400 transition-all duration-200 outline-none
                      ${errors.password 
                        ? "border-rose-300 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10" 
                        : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300 hover:bg-white"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-xs text-rose-500 flex items-center gap-1.5 font-medium">
                    <XCircle className="w-3.5 h-3.5" />
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 bg-slate-900 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group relative overflow-hidden z-10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk ke Sistem</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Himpunan Mahasiswa Informatika
          </p>
          <p className="text-xs mt-1.5 opacity-80">
            Sistem Manajemen Organisasi
          </p>
        </div>
      </div>

      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
}
