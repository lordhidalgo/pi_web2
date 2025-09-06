import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: <span className="text-black">SEMANAL</span>,
      content: (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Div Izquierdo (Membresía) */}
          <div className="p-4 border border-gray-300 rounded-lg shadow-sm flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Starter</h4>
            <img
              src="\images\img\userimgph.png" // Reemplaza con una imagen de arte
              alt="Membresía Semanal"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              $15.000 
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Adquerir
            </button>
          </div>

          {/* Div Derecho (Beneficios) */}
          <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Beneficios Incluidos:</h4>
            
            {/* Cuadro Llamativo de Imágenes */}
            <div className="bg-gray-200 dark:bg-gray-700 border-l-4 border-blue-500 p-4 rounded-lg mb-4 text-center">
              <span className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">5</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">obras de arte al mes</p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Acceso a colecciones semanales de arte</li>
              <li>Soporte básico por correo electrónico</li>
              <li>Participación en sorteos semanales</li>
              <li>Notificaciones de nuevos lanzamientos</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-green-600">MENSUAL</span>,
      content: (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Div Izquierdo (Membresía) */}
          <div className="p-4 border border-green-600 rounded-lg shadow-sm flex flex-col items-center text-center bg-green-50 dark:bg-green-900 dark:border-green-800 w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Membresía Mensual</h4>
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png" // Reemplaza con una imagen de arte
              alt="Membresía Mensual"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              $25.000 
            </p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Adquerir
            </button>
          </div>

          {/* Div Derecho (Beneficios) */}
          <div className="p-4 border border-green-600 rounded-lg shadow-sm bg-green-50 dark:bg-green-900 dark:border-green-800 w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Beneficios Incluidos:</h4>

            {/* Cuadro Llamativo de Imágenes */}
            <div className="bg-green-100 dark:bg-green-800 border-l-4 border-green-500 p-4 rounded-lg mb-4 text-center">
              <span className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">50 Obras</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">descargas de obras de arte</p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Todos los beneficios del plan semanal</li>
              <li>Acceso a colecciones premium</li>
              <li>Acceso a tutoriales y talleres</li>
              <li>Descuentos en impresiones de arte</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: <span className="text-yellow-500">ANUAL</span>,
      content: (
        <div className="flex flex-col md:flex-row gap-4">
          {/* Div Izquierdo (Membresía) */}
          <div className="p-4 border border-yellow-500 rounded-lg shadow-sm flex flex-col items-center text-center bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-800 w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Membresía Anual</h4>
            <img
              src="https://assets.aceternity.com/features-section.png" // Reemplaza con una imagen de arte
              alt="Membresía Anual"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <p className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
              $50.000 
            </p>
            <button className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
              Adqueir
            </button>
          </div>

          {/* Div Derecho (Beneficios) */}
          <div className="p-4 border border-yellow-500 rounded-lg shadow-sm bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-800 w-full md:w-1/2">
            <h4 className="text-lg font-bold mb-2">Beneficios Incluidos:</h4>
            
            {/* Cuadro Llamativo de Imágenes */}
            <div className="bg-yellow-100 dark:bg-yellow-800 border-l-4 border-yellow-500 p-4 rounded-lg mb-4 text-center">
              <span className="text-4xl font-bold text-neutral-800 dark:text-neutral-200">Ilimitadas</span>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">descargas de obras de arte</p>
            </div>

            <ul className="list-disc list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Todos los beneficios de los planes anteriores</li>
              <li>Sesiones exclusivas con artistas</li>
              <li>Acceso anticipado a nuevas colecciones</li>
              <li>Soporte prioritario 24/7</li>
              <li>Un NFT de edición limitada cada año</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}