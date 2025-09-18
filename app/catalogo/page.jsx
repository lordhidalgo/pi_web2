"use client";
import React, { useState, useEffect } from "react";

export default function CatalogoPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/items");

        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }

        // 👇 validamos si hay contenido
        const text = await response.text();
        if (!text) {
          setItems([]); // si está vacío, dejamos lista vacía
          return;
        }

        const data = JSON.parse(text);
        setItems(data);
      } catch (err) {
        console.error("Error al obtener items:", err);
        setError(err.message);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-[#06141B] text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Items</h1>

      {error && <p className="text-red-400">⚠️ {error}</p>}

      {/* LISTA DE ITEMS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <p className="text-gray-400">No hay items en la base de datos</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="bg-gray-900 p-6 rounded-xl shadow-lg text-center"
            >
              <h2 className="text-xl font-bold">{item.nombre}</h2>
              <p className="text-sky-400">${item.precio}</p>
              <p className="text-gray-400">Stock: {item.stock}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
