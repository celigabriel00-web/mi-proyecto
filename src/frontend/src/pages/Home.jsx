import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaCalendarAlt, FaBell, FaStar, FaBookOpen } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-pink-800 to-fuchsia-600 text-white px-6 font-poppins">
      {/* ICONO Y TÍTULO PRINCIPAL */}
      <header className="text-center mt-10">
        <FaBookOpen className="text-6xl text-pink-300 mx-auto mb-4 drop-shadow-lg" />
        <h1 className="text-5xl font-extrabold mb-2">
          ✨ <span className="text-white">Mis Tareas</span>{" "}
          <span className="text-yellow-300">Educativas</span>
        </h1>
        <p className="text-lg text-gray-200 mt-4">
          🎓 Organiza tu aprendizaje de manera{" "}
          <span className="text-yellow-300 font-semibold">divertida</span> y{" "}
          <span className="text-yellow-300 font-semibold">eficiente</span>
        </p>

        {/* BOTÓN que redirige a LOGIN */}
        <Link
          to="/login"
          className="inline-block mt-8 bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105 transition-transform"
        >
          ¡Comienza Ahora!
        </Link>
      </header>

      {/* SECCIÓN DE TARJETAS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-6xl">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition">
          <FaCheckCircle className="text-yellow-300 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Organiza</h3>
          <p className="text-gray-200">
            Crea y gestiona todas tus tareas en un solo lugar.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition">
          <FaCalendarAlt className="text-yellow-300 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Planifica</h3>
          <p className="text-gray-200">
            Establece fechas límite y nunca olvides una tarea.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition">
          <FaBell className="text-yellow-300 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Recibe alertas</h3>
          <p className="text-gray-200">
            Notificaciones para tareas próximas a vencer.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition">
          <FaStar className="text-yellow-300 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">Alcanza metas</h3>
          <p className="text-gray-200">
            Visualiza tu progreso y celebra tus logros.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 text-center text-sm text-gray-300 mb-10">
        🎯 Una herramienta diseñada para estudiantes que quieren alcanzar el éxito
      </footer>
    </div>
  );
}

export default Home;
