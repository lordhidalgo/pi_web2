"use client";

import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { supabase } from "../../supabase/client";

type Product = {
  id: string;
  name: string;
  price: number;
  image_url?: string;
  features?: string[]; // Etiquetas como "Disponible", "Agotado"
};

export default function GamingCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const filters = [
    "Todos",
    "Acción",
    "Aventura",
    "RPG",
    "Estrategia",
    "Simulación",
    "Deportes",
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      // ✅ Obtener productos con su feature
      const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select("id, name, price, feature");

      if (productsError) {
        console.error("Error al cargar productos:", productsError);
        return;
      }

      // ✅ Obtener imágenes
      const { data: imagesData, error: imagesError } = await supabase
        .from("product_images")
        .select("product_id, image_url");

      if (imagesError) {
        console.error("Error al cargar imágenes:", imagesError);
        return;
      }

      // ✅ Combinar productos con imágenes y features
      const combined = (productsData || []).map((p) => {
        const img = imagesData?.find((i) => i.product_id === p.id);

        return {
          ...p,
          image_url: img?.image_url || null,
          features: p.feature ? [p.feature] : [], // lo convertimos en array
        };
      });

      setProducts(combined);
    };

    fetchProducts();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-gradient-to-b from-[#1e003e] to-[#3b007a] text-white px-6 py-10 rounded-3xl shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-600 via-purple-700 to-pink-600 animate-pulse shadow-[0_0_15px_#ff00ff] rounded-t-3xl" />

      {/* 🔍 Buscador + Filtros */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 flex-wrap mt-2 pt-4">
        <div className="relative w-full md:w-72 flex-shrink-0">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#2a0057] text-sm rounded-xl py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide justify-start md:justify-center w-full md:w-auto pb-2">
          {filters.map((f, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-800 to-pink-700 
                         hover:from-pink-600 hover:to-purple-600 text-white font-medium 
                         shadow-md hover:shadow-pink-500/40 transition-all whitespace-nowrap"
            >
              {f}
            </motion.button>
          ))}
        </div>
      </div>

      {/* 🎮 Carrusel de productos */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-8">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="min-w-[320px] sm:min-w-[400px] md:min-w-[440px] rounded-2xl shadow-lg overflow-hidden 
                         border border-[#5e00a6] hover:shadow-pink-600/30 relative group"
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-all duration-300"
                style={{
                  backgroundImage: p.image_url
                    ? `url(${p.image_url})`
                    : "linear-gradient(135deg, #3b007a, #1e003e)",
                }}
              ></div>

              {/* 🏷️ Etiqueta dinámica ("Disponible", "Agotado", etc.) */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                {(p.features || []).map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-700 to-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Contenido */}
              <div className="relative z-10 flex flex-col justify-end items-center p-8 bg-black/40 backdrop-blur-sm h-full rounded-2xl">
                <h3 className="text-xl font-bold text-center drop-shadow-md mb-2">
                  {p.name}
                </h3>
                <p className="text-lg font-semibold text-pink-400 mb-4">
                  ${p.price.toFixed(2)}
                </p>

                <div className="flex gap-4">
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white font-medium shadow-md hover:shadow-pink-500/40 transition-all">
                    Visualizar
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-800 to-pink-700 hover:from-purple-700 hover:to-pink-600 text-white font-medium shadow-md hover:shadow-pink-500/40 transition-all">
                    Añadir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
