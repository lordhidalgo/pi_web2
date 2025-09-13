"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function AboutPage() {
  // 🎨 Gradiente interactivo con el mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  const dynamicBackground = useMotionTemplate`
    radial-gradient(
      circle at ${mouseX}px ${mouseY}px,
      rgba(255, 233, 133, 0.9),
      rgba(180, 140, 0, 0.85)
    )
  `;

  return (
    <div className="p-8 max-w-[1000px] mx-auto font-sans">
      {/* Sección con imagen de fondo y texto encima */}
      <section
        className="text-center py-20 px-4 rounded-lg mb-12 flex flex-col items-center justify-center min-h-[270px] relative"
        style={{
          backgroundImage: "url('/images/img/cubismo.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-white max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
          <p className="text-lg">
            En <span className="font-bold text-yellow-400">ARTTHÉA</span> nos apasiona el arte y la
            tecnología. Nuestra misión es conectar artistas con el público a través de experiencias
            visuales únicas y accesibles.
          </p>
        </div>
      </section>

      {/* 🟡 Contenedor interactivo para Historia y Equipo */}
      <motion.div
        onMouseMove={handleMouseMove}
        style={{ backgroundImage: dynamicBackground }}
        className="flex flex-col gap-8 p-8 rounded-[32px] shadow-lg shadow-gray-400/30 text-black"
      >
        {/* Historia */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Nuestra Historia</h2>
          <p className="leading-relaxed">
            ARTTHÉA nació como un proyecto que combina creatividad y tecnología para ofrecer una
            plataforma donde los artistas puedan mostrar sus obras, recibir retroalimentación y
            encontrar nuevas oportunidades.
          </p>
        </div>

        {/* Equipo */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Nuestro Equipo</h2>
          <p className="leading-relaxed">
            Somos un grupo multidisciplinario apasionado por el arte, el diseño y la tecnología.
            Creemos que la colaboración y la innovación son la clave para construir el futuro.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
