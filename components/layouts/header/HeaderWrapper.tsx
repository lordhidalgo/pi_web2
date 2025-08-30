"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const hideHeaderRoutes = ["/galeria"];

  if (hideHeaderRoutes.includes(pathname)) {
    return null; // 👈 No muestra nada en estas rutas
  }

  return <Header />;
}