"use client";
import BackgroundVideo from "@/components/features/BackgroundVideo";
import { CarouselDemo } from "@/components/features/CarouselDemo";
import FAQSection from "@/components/features/FAQSection";
import  Hero  from "../components/ui/HeroParallaxDemo";
import React, { useRef } from "react";

export default function Page() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="w-full">
        <BackgroundVideo src="/videos/26619-359604050.mp4" overlay={true}>
          <Hero/>
        </BackgroundVideo>
      </div>
   

      {/* 🔹 Noticias destacadas con carrusel */}
      <div className="w-full max-w-7x3 px-4 py-10 h-[620px]">
        <h2 className="text-left text-black text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest border-b-2 border-gray-700 pb-2 mb-6">
          RECOMENDACIONES PARA TI
        </h2>
        <CarouselDemo />
      </div>

      {/* 🔹 Recompensas y Promociones */}
      <section className="w-full max-w-7x3 px-4 py-10">
        <h2 className=" text-black text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest border-b-2 border-gray-700 pb-2 mb-6">
          RECOMPENSAS Y PROMOCIONES
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Recompensa 1 */}
          <div className="reward-item bg-white border border-gray-300 rounded-md p-4 w-[400px] sm:w-72 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-red-900 font-light mb-2">
              10% Descuento en tu Primera Compra
            </h3>
            <p className="text-black text-sm md:text-base">
              Regístrate y obtén un 10% de descuento en tu primera compra.
            </p>
          </div>

          {/* Recompensa 2 */}
          <div className="reward-item bg-white border border-gray-300 rounded-md p-4 w-[400px] sm:w-72 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-red-900 font-light mb-2">
              Programa de Puntos de Fidelidad
            </h3>
            <p className="text-black text-sm md:text-base">
              Acumula puntos con cada compra y canjéalos por descuentos en
              futuras compras.
            </p>
          </div>

          {/* Recompensa 3 */}
          <div className="reward-item bg-white border border-gray-300 rounded-md p-4 w-[400px] sm:w-72 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-red-900 font-light mb-2">
              Ofertas Especiales Semanales
            </h3>
            <p className="text-black text-sm md:text-base">
              Consulta nuestras ofertas especiales cada semana y ahorra en tus
              juegos favoritos.
            </p>
          </div>

          {/* Recompensa 4 */}
          <div className="reward-item bg-white border border-gray-300 rounded-md p-4 w-[400px] sm:w-72 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-red-900 font-light mb-2">
              Promoción de Recomendación
            </h3>
            <p className="text-black text-sm md:text-base">
              Recomienda a un amigo y recibe un cupón de descuento en tu próxima
              compra.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Preguntas Frecuentes */}
      <section>
        <FAQSection />
      </section>
    </main>
  );
}
