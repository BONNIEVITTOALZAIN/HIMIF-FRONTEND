import { useState } from "react";
import { Lock, User, Eye, EyeOff, CheckCircle, XCircle, AlertCircle, Code2 } from "lucide-react";
import { useAuth } from "../../components/context/authContext";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Login() {
  const [npm, setNpm] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const [errors, setErrors] = useState({ npm: "", password: "" });

  const { login } = useAuth();
  const navigate = useNavigate();

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => setAlert({ show: false, type: "", message: "" }), 4000);
  };

  const validateForm = () => {
    const newErrors = { npm: "", password: "" };
    let isValid = true;

    // Validasi NPM
    if (!npm.trim()) {
      newErrors.npm = "NPM tidak boleh kosong";
      isValid = false;
    } else if (npm.length < 5) {
      newErrors.npm = "NPM minimal 5 karakter";
      isValid = false;
    }

    // Validasi password
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
    setErrors({ npm: "", password: "" });

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await login(npm, password);
      showAlert("success", "Login berhasil!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      console.log("Login error:", error);

      const errorMessage = error.response?.data?.message || error.message || "";
      const isActive = error.response?.data?.is_active;

      if (isActive === false || isActive === 0) {
        showAlert(
          "warning",
          "Akun Anda telah dinonaktifkan. Silakan hubungi administrator."
        );
      } else if (
        errorMessage.toLowerCase().includes("npm") ||
        errorMessage.toLowerCase().includes("password") ||
        errorMessage.toLowerCase().includes("salah") ||
        error.response?.status === 401
      ) {
        showAlert("error", "NPM atau password salah!");
      } else {
        showAlert("error", errorMessage || "Terjadi kesalahan. Silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
 <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      <div
        className="absolute inset-0 font-mono text-xs text-gray-400 overflow-hidden pointer-events-none"
        style={{ opacity: 1 }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="whitespace-nowrap w-[200vw]" 
          >
            {Array.from({ length: 200 })
              .map(() => (Math.random() > 0.5 ? "1" : "0"))
              .join(" ")}
          </div>
        ))}
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden">
          <div className="p-8 bg-white">
            <div className="text-center mb-6">
              <img
                src={logo}
                alt="Logo HMIF"
                className="w-20 h-20 object-contain mx-auto"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-3">
                Sign In
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                 Silakan masuk untuk melanjutkan ke sistem
              </p>
            </div>

            {alert.show && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start gap-3 border-2 ${
                  alert.type === "success"
                    ? "bg-green-50 border-green-500"
                    : alert.type === "warning"
                    ? "bg-amber-50 border-amber-500"
                    : "bg-red-50 border-red-500"
                }`}
              >
                {alert.type === "success" ? (
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                ) : alert.type === "warning" ? (
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                )}
                <p className={`text-sm font-medium ${
                  alert.type === "success" ? "text-green-800" : 
                  alert.type === "warning" ? "text-amber-800" : "text-red-800"
                }`}>
                  {alert.message}
                </p>
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  NPM
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Masukkan NPM Anda"
                    value={npm}
                    onChange={(e) => {
                      setNpm(e.target.value);
                      if (errors.npm) setErrors({ ...errors, npm: "" });
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
                    className={`w-full pl-12 pr-4 py-3.5 border-2 rounded-xl focus:outline-none transition-all bg-white ${
                      errors.npm 
                        ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100" 
                        : "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100 hover:border-gray-300"
                    }`}
                  />
                </div>
                {errors.npm && (
                  <p className="mt-2 text-xs text-red-600 flex items-center gap-1.5 font-medium">
                    <XCircle className="w-3.5 h-3.5" />
                    {errors.npm}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password Anda"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: "" });
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
                    className={`w-full pl-12 pr-12 py-3.5 border-2 rounded-xl focus:outline-none transition-all bg-white ${
                      errors.password 
                        ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100" 
                        : "border-gray-200 focus:border-black focus:ring-4 focus:ring-gray-100 hover:border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-xs text-red-600 flex items-center gap-1.5 font-medium">
                    <XCircle className="w-3.5 h-3.5" />
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white font-bold py-4 rounded-xl text-sm shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Memproses...
                    </span>
                  ) : (
                    "Masuk ke Dashboard"
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-700 font-medium">
            © 2025 Himpunan Mahasiswa Informatika
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Sistem Manajemen Organisasi
          </p>
        </div>
      </div>
    </div>
  );
}
