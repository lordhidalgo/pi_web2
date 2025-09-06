import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
        title: (
    <span className="text-neutral-500 font-bold">
      Membresía Semanal
    </span>
  ),
      content: (
        <div className="flex flex-col md:flex-row items-center gap-10 ">
          {/* Tarjeta de membresía */}
          <div className="border rounded-2xl p-8 shadow-md bg-white dark:bg-neutral-900 max-w-sm min-h-[420px] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-center">
              Membresía Semanal
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <li>Acceso ilimitado durante 7 días</li>
              <li>Beneficios exclusivos para miembros</li>
              <li>Soporte prioritario</li>
              <li>Experiencias personalizadas</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Suscribirme
            </button>
          </div>

          {/* Imagen al lado */}
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-100 w-100 md:h-44 lg:h-60 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
      title: (
    <span className="text-yellow-500 font-bold">
      Membresía Mensual
    </span>
  ),
      content: (
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Tarjeta de membresía */}
          <div className="border rounded-2xl p-8 shadow-md bg-white dark:bg-neutral-900 max-w-sm min-h-[420px] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-center">
              Membresía Mensual
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <li>Acceso ilimitado durante 30 días</li>
              <li>Eventos exclusivos para miembros</li>
              <li>Soporte premium</li>
              <li>Descuentos especiales</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Suscribirme
            </button>
          </div>

          {/* Imagen al lado */}
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-100 w-100 md:h-44 lg:h-60 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      ),
    },
    {
        title: (
    <span className="text-blue-600 font-bold">
      Membresía Anual
    </span>
  ),
      content: (
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Tarjeta de membresía */}
          <div className="border rounded-2xl p-8 shadow-md bg-white dark:bg-neutral-900 max-w-sm min-h-[420px] hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-center">
              Membresía Anual
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              <li>Acceso ilimitado durante 365 días</li>
              <li>Eventos VIP exclusivos</li>
              <li>Soporte preferencial</li>
              <li>Grandes descuentos durante el año</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Suscribirme
            </button>
          </div>

          {/* Imagen al lado */}
          <img
            src="https://assets.aceternity.com/templates/startup-4.webp"
            alt="startup template"
            width={500}
            height={500}
            className="h-100 w-100 md:h-44 lg:h-60 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
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
