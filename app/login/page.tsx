import React from "react";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fdf7f5]">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-[#9c7905] text-center">Iniciar sesión</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <button
            type="submit"
            className="bg-[#d8c40c] text-white px-4 py-2 rounded-2xl font-semibold text-lg transition-colors duration-300 hover:bg-[#9c7905]"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}