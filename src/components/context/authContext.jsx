import { createContext, useContext, useState } from "react";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const navigate = useNavigate();

  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );

  const login = async (email, password) => {
    const res = await AuthService.login({ email, password });
    const data = res.data;

    if (data.user?.status === "nonaktif") {
      throw new Error("Akun Anda telah dinonaktifkan");
    }

    // simpan ke localStorage
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.user.role);

    // simpan ke state
    setUser(data.user);
    setToken(data.token);

    return data;
  };

  /**
   * LOGOUT
   */
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    setUser(null);
    setToken(null);

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
