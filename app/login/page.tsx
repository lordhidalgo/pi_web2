"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function LoginPage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const textGradient = useMotionTemplate`
    radial-gradient(
      circle at ${mouseX}px ${mouseY}px,
      #d8c40c,
      #9c7905
    )
  `;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f8f1ec]">
      <div
        onMouseMove={handleMouseMove}
        className="mx-auto mt-12 w-full max-w-md rounded-[32px] bg-gradient-to-br from-[#fff9d6] to-[#ffe082] p-8 shadow-lg shadow-gray-400/30"
      >
        {/* 🎨 Título con gradiente funcional */}
        <motion.h1
          className="text-2xl font-bold text-center mb-2 bg-clip-text text-transparent cursor-default"
          style={{ backgroundImage: textGradient }}
        >
          Iniciar sesión
        </motion.h1>

        {/* 🎨 Subtítulo con el mismo gradiente */}
        <motion.p
          className="text-center text-sm mb-6 bg-clip-text text-transparent"
          style={{ backgroundImage: textGradient }}
        >
          Bienvenido de nuevo a ARTTHEA
        </motion.p>

        <form className="flex flex-col gap-4">
          <Input type="email" placeholder="Correo electrónico" required />
          <Input type="password" placeholder="Contraseña" required />

          <button
            type="submit"
            className="group relative block h-12 w-full rounded-2xl bg-gradient-to-r from-[#d8c40c] to-[#9c7905] font-semibold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
          >
            Ingresar
          </button>
        </form>
      </div>
    </main>
  );
}
