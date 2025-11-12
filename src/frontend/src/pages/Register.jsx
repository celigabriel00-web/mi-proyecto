import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserPlus, FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos registrados:", form);
    // Aquí iría la lógica de registro con backend o API
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-teal-400 to-green-400 text-white font-poppins">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-lg w-full max-w-md text-center">
        {/* Icono principal */}
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-4 rounded-full">
            <FaUserPlus className="text-3xl text-yellow-300" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">🎉 Crear Cuenta</h2>
        <p className="text-gray-200 text-sm mb-8">
          Completa el formulario para registrarte
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          {/* Nombre */}
          <div>
            <label className="block mb-1 font-semibold text-sm">
              👤 Nombre Completo
            </label>
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <FaUser className="text-yellow-300 mr-2" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Juan Pérez"
                required
                className="w-full bg-transparent focus:outline-none py-2 text-white placeholder-gray-300"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold text-sm">
              📧 Correo Electrónico
            </label>
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <FaEnvelope className="text-yellow-300 mr-2" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="w-full bg-transparent focus:outline-none py-2 text-white placeholder-gray-300"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div>
            <label className="block mb-1 font-semibold text-sm">
              🔒 Contraseña
            </label>
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <FaLock className="text-yellow-300 mr-2" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
                className="w-full bg-transparent focus:outline-none py-2 text-white placeholder-gray-300"
              />
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <label className="block mb-1 font-semibold text-sm">
              ✅ Confirmar Contraseña
            </label>
            <div className="flex items-center bg-white/20 rounded-lg px-3">
              <FaCheck className="text-yellow-300 mr-2" />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repite tu contraseña"
                required
                className="w-full bg-transparent focus:outline-none py-2 text-white placeholder-gray-300"
              />
            </div>
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:scale-105 transition-transform py-2 rounded-full font-semibold shadow-lg"
          >
            🎊 Registrarse
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-200">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-yellow-300 font-semibold hover:underline"
          >
            🚀 Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
