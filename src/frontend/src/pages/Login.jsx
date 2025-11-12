import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaSignInAlt } from "react-icons/fa";

function Login() {
  const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-600 to-orange-400 text-white font-poppins">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg w-full max-w-md text-center">
        {/* Ícono principal */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-4 rounded-full">
            <FaSignInAlt className="text-3xl text-yellow-300" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">✨ Iniciar Sesión</h2>
        <p className="text-gray-200 text-sm mb-8">
          Usa tu cuenta de Google para acceder a tu cuenta
        </p>

        {/* Botón Google */}
        <a
          href={GOOGLE_AUTH_URL}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-transform text-white font-semibold py-3 rounded-full shadow-lg"
        >
          <FaGoogle className="text-xl" /> Iniciar sesión con Google
        </a>

        <div className="my-6 border-t border-white/20"></div>

        {/* Enlace hacia registro */}
        <p className="text-sm text-gray-200">
          ¿No tienes una cuenta?{" "}
          <Link
            to="/register"
            className="text-yellow-300 font-semibold hover:underline"
          >
            ✨ Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
