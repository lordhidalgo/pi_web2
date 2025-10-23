"use client";
import React, { useEffect, useState } from "react";

type Recompensa = {
  titulo: string;
  descripcion: string;
};

type Evento = {
  titulo: string;
  fecha: string;
  descripcion: string;
};

export default function RecompensaPage() {
  const [recompensas, setRecompensas] = useState<Recompensa[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    setRecompensas([
      {
        titulo: "10% Descuento en tu Primera Compra",
        descripcion: "Regístrate y obtén un 10% de descuento en tu primera compra.",
      },
      {
        titulo: "Programa de Puntos de Fidelidad",
        descripcion: "Acumula puntos con cada compra y canjéalos por recompensas.",
      },
      {
        titulo: "Ofertas Especiales Semanales",
        descripcion: "Aprovecha descuentos y promociones especiales cada semana.",
      },
    ]);

    setEventos([
      {
        titulo: "🎃 Torneo de Héroes Nocturnos",
        fecha: "31 de Octubre - 21:00 hrs",
        descripcion:
          "Enfréntate en un épico torneo PvP temático de Halloween. Gana puntos extra y desbloquea skins exclusivas neón.",
      },
      {
        titulo: "👻 Cacería de Calabazas Digitales",
        fecha: "Del 28 al 31 de Octubre",
        descripcion:
          "Explora la tienda, encuentra las calabazas ocultas y gana recompensas sorpresa con cada hallazgo.",
      },
      {
        titulo: "🕹️ Noche del Miedo Retro",
        fecha: "30 de Octubre - 19:00 hrs",
        descripcion:
          "Compite en juegos clásicos de terror y gana puntos de fidelidad dobles por tu participación.",
      },
    ]);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0a0b1a] via-[#0f1020] to-[#1a1c2c] text-pink-200 p-8">
      {/* === EFECTOS DE HALLOWEEN === */}
      {/* Calabazas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-orange-400 text-5xl animate-float opacity-70`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          >
            🎃
          </div>
        ))}
      </div>

      {/* Telarañas */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-60">🕸️</div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-60">🕸️</div>
      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-60 rotate-180">🕸️</div>
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-60 rotate-180">🕸️</div>

      {/* Bruja volando */}
      <div className="absolute top-20 left-[-150px] text-6xl animate-witch pointer-events-none select-none">
        🧙‍♀️
      </div>

      {/* Encabezado principal */}
      <div className="border-b border-pink-500 pb-8 mb-10 text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-pink-400 drop-shadow-[0_0_10px_#ff00ff]">
          🎮 Recompensas y Promociones
        </h1>
        <p className="mt-4 text-pink-200 text-lg max-w-2xl mx-auto">
          Descubre nuestras recompensas exclusivas y promociones semanales.
          ¡Canjea y ahorra en tus juegos favoritos!
        </p>
      </div>

      {/* Sección Recompensas */}
      <div className="bg-[#15172b]/70 border border-pink-500/70 rounded-2xl p-8 shadow-[0_0_25px_#ff00ff40] relative z-10">
        <h2 className="text-3xl font-bold text-center text-pink-400 drop-shadow-[0_0_8px_#ff00ff] mb-8">
          💎 Beneficios Exclusivos
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {recompensas.map((recompensa, idx) => (
            <div
              key={idx}
              className="border border-pink-400/60 rounded-xl bg-[#1a1c2c]/90 p-6 text-pink-200 
                         shadow-[0_0_15px_#ff00ff40] hover:shadow-[0_0_25px_#ff00ff80] 
                         hover:border-pink-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-pink-300 drop-shadow-[0_0_6px_#ff55ff] mb-3">
                {recompensa.titulo}
              </h3>
              <p className="text-pink-100">{recompensa.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Separador visual */}
      <div className="my-16 flex items-center justify-center relative z-10">
        <div className="h-[2px] w-3/4 bg-gradient-to-r from-transparent via-pink-500 to-transparent shadow-[0_0_20px_#ff00ff]" />
      </div>

      {/* Sección Eventos Halloween */}
      <div className="bg-[#15172b]/70 border border-purple-500/70 rounded-2xl p-8 shadow-[0_0_25px_#a200ff40] relative z-10">
        <h2 className="text-3xl font-extrabold text-center text-purple-400 drop-shadow-[0_0_8px_#a200ff]">
          👾 Eventos Gaming de Halloween 🎃
        </h2>
        <p className="mt-4 text-center text-pink-200 text-lg max-w-3xl mx-auto">
          Este Halloween, participa en nuestros eventos especiales y gana puntos,
          skins exclusivas y recompensas épicas. ¡Demuestra quién manda en la arena digital!
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {eventos.map((evento, idx) => (
            <div
              key={idx}
              className="border border-purple-400/60 rounded-xl bg-[#1a1c2c]/90 p-6 text-pink-200 
                         shadow-[0_0_15px_#a200ff50] hover:shadow-[0_0_25px_#a200ff90] 
                         hover:border-purple-300 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-purple-300 drop-shadow-[0_0_6px_#a55cff] mb-2">
                {evento.titulo}
              </h3>
              <p className="text-sm text-pink-200 italic mb-3">{evento.fecha}</p>
              <p className="text-pink-100">{evento.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
