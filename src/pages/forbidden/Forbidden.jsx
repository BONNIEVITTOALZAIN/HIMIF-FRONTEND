import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Forbidden() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 max-w-md text-center">
        <div className="flex justify-center mb-5">
          <Lock size={60} className="text-red-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">403 Forbidden</h1>
        <p className="text-gray-600 mb-6">
          Kamu tidak memiliki izin untuk mengakses halaman ini.
        </p>

        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Kembali
        </button>
      </div>
    </div>
  );
}
