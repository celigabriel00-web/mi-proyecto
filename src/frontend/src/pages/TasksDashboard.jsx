import React from "react";

function TasksDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 text-white font-poppins">
      {/* HEADER */}
      <header className="flex items-center justify-between p-8 bg-white/10 backdrop-blur-md rounded-b-3xl">
        <div className="text-lg font-semibold">👋 Bienvenido, Juan Pérez</div>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          Cerrar Sesión
        </button>
      </header>

      {/* TAREA ESTADÍSTICAS */}
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-xl">📋 Total de Tareas</h3>
          <p className="text-3xl font-semibold mt-2">0</p>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-xl">⏳ Pendientes</h3>
          <p className="text-3xl font-semibold mt-2">0</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg text-center">
          <h3 className="font-bold text-xl">✅ Completadas</h3>
          <p className="text-3xl font-semibold mt-2">0</p>
        </div>
      </div>

      {/* SECCIÓN DE TAREAS */}
      <div className="p-8 max-w-6xl mx-auto mt-8 bg-white/10 backdrop-blur-md rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Mis Tareas</h3>

        <div className="flex items-center justify-between mb-4">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition">
            + Nueva Tarea
          </button>
        </div>

        <div className="bg-white/10 p-6 rounded-lg text-center">
          <p className="text-gray-200">✨ No hay tareas</p>
          <p className="text-sm text-gray-400">Crea tu primera tarea para comenzar</p>
        </div>
      </div>
    </div>
  );
}

export default TasksDashboard;
