"use client";
import React, { useEffect, useState } from "react";

type Recompensa = {
  titulo: string;
  descripcion: string;
};

export default function RecompensaPage() {
  const [recompensas, setRecompensas] = useState<Recompensa[]>([]);

  useEffect(() => {
    // Datos simulados
    const datos: Recompensa[] = [
      {
        titulo: "10% Descuento en tu Primera Compra",
        descripcion:
          "Regístrate y obtén un 10% de descuento en tu primera compra.",
      },
      {
        titulo: "Programa de Puntos de Fidelidad",
        descripcion:
          "Acumula puntos con cada compra y canjéalos por recompensas.",
      },
      {
        titulo: "Ofertas Especiales Semanales",
        descripcion:
          "Aprovecha descuentos y promociones especiales cada semana.",
      },
    ];
    setRecompensas(datos);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a0b1a] via-[#0f1020] to-[#1a1c2c] text-pink-200 p-8">
      {/* Título */}
      <h1 className="text-4xl font-extrabold text-center text-pink-400 drop-shadow-[0_0_8px_#ff00ff]">
        🎮 Recompensas y Promociones
      </h1>
      <p className="mt-4 text-center text-pink-200 text-lg max-w-2xl mx-auto">
        Descubre nuestras recompensas exclusivas y promociones semanales.
        ¡Canjea y ahorra en tus juegos favoritos!
      </p>

      {/* Tarjetas */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {recompensas.map((recompensa, idx) => (
          <div
            key={idx}
            className="border border-pink-500 rounded-xl bg-[#15172b]/80 p-6 text-pink-200 
                       shadow-[0_0_15px_#ff00ff50] hover:shadow-[0_0_25px_#ff00ff80] 
                       hover:border-pink-400 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-pink-300 drop-shadow-[0_0_6px_#ff55ff]">
              {recompensa.titulo}
            </h2>
            <p className="mt-2 text-pink-100">{recompensa.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
