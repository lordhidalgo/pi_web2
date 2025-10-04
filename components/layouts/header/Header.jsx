"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import {
  FaShoppingCart,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaApple,
} from "react-icons/fa";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { CartSheet } from "../../features/SheetDemo";

// ---- Botón genérico de navegación ----
function NavButton({ onClick, href, children }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="text-white text-sm font-medium relative py-1 transition-colors duration-300 
                   hover:text-[#33cfff] tracking-wide"
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      href={href}
      className="text-white text-sm font-medium relative py-1 transition-colors duration-300 
                 hover:text-[#33cfff] tracking-wide"
    >
      {children}
    </Link>
  );
}

// ---- Dropdown ----
function DropdownMenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer text-white text-sm font-medium py-1 hover:text-[#33cfff] tracking-wide">
        {title}
      </span>
      <div
        className={`absolute top-full left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-50 w-56 transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-white text-sm font-medium hover:text-[#33cfff] transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ---- Carrito ----
function CartButton() {
  return (
    <div>
      <CartSheet />
    </div>
  );
}

// ---- Modal genérico ----
function Modal({ open, onClose, children, size = "w-96" }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-black text-white rounded-lg shadow-xl p-6 relative animate-scale-in ${size} max-h-[80vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

// ---- Título con gradiente ----
function GradientTitle({ children }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef(null);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const textGradient = useMotionTemplate`
    radial-gradient(circle at ${mouseX}px ${mouseY}px, #009dff, #7dffb2)
  `;

  return (
    <motion.h2
      ref={ref}
      onMouseMove={handleMouseMove}
      className="text-2xl font-bold mb-4 text-center bg-clip-text text-transparent cursor-default"
      style={{ backgroundImage: textGradient }}
    >
      {children}
    </motion.h2>
  );
}

// ---- Header ----
export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-10 py-4 bg-black border-b border-gray-800 shadow-md z-50 text-white font-[var(--font-body)]">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer gap-2">
          <img
            src="/images/logo-2078018_1280.png"
            alt="Logo"
            className="h-9 w-auto"
          />
      
        </Link>

        {/* Navegación (solo en pantallas grandes) */}
        <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center text-sm font-medium font-[var(--font-body)]">
          <NavButton href="/">INICIO</NavButton>
          <NavButton onClick={() => setAboutOpen(true)}>SOBRE NOSOTROS</NavButton>
          <NavButton href="/noticias">NOTICIAS</NavButton>
          <DropdownMenu
            title="INGRESAR COMO"
            items={[
              { href: "/empleado", label: "COMO EMPLEADO" },
              { href: "/admin", label: "COMO ADMINISTRADOR" },
            ]}
          />
          <DropdownMenu
            title="SECCIONES"
            items={[
              { href: "/catalogo", label: "Catálogo de Juegos" },
              { href: "/promociones", label: "Recompensas y Promociones" },
            ]}
          />
          <NavButton href="/soporte">SOPORTE</NavButton>
        </nav>

        {/* Botones usuario (desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <button
            onClick={() => setRegisterOpen(true)}
            className="text-white text-sm font-medium hover:text-[#33cfff] transition"
          >
            REGISTRARSE
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="h-10 px-6 rounded-md bg-gradient-to-r from-[#009dff] to-[#7dffb2] font-semibold text-sm shadow hover:brightness-110 transition"
          >
            INICIAR SESSION
          </button>
        </div>

        {/* Carrito (desktop) */}
        <div className="hidden lg:block ml-6">
          <CartButton />
        </div>

        {/* Botón hamburguesa (aparece en md y sm) */}
        <div
          className="lg:hidden flex flex-col gap-1 ml-auto cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-7 h-1 bg-white rounded"></div>
          <div className="w-7 h-1 bg-white rounded"></div>
          <div className="w-7 h-1 bg-white rounded"></div>
        </div>
      </header>

      {/* Menú móvil/tablet */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-black border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col gap-4 w-64 z-50 text-white font-[var(--font-body)]">
          <NavButton href="/">INICIO</NavButton>
          <NavButton onClick={() => setAboutOpen(true)}>SOBRE NOSOTROS</NavButton>
          <NavButton href="/noticias">NOTICIAS</NavButton>
          <NavButton href="/empleado">COMO EMPLEADO</NavButton>
          <NavButton href="/admin">COMO ADMINISTRADOR</NavButton>
          <NavButton href="/catalogo">CATÁLOGO</NavButton>
          <NavButton href="/promociones">PROMOCIONES</NavButton>
          <NavButton href="/soporte">SOPORTE</NavButton>
          <hr className="border-gray-700" />
          <button
            onClick={() => setRegisterOpen(true)}
            className="text-left hover:text-[#33cfff]"
          >
            Registrarse
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="text-left hover:text-[#33cfff]"
          >
            Iniciar sesión
          </button>
          <CartButton />
        </div>
      )}

      {/* Modales */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <GradientTitle>Iniciar Sesión</GradientTitle>
        <form className="flex flex-col space-y-3">
          <Input type="email" placeholder="Correo electrónico" />
          <Input type="password" placeholder="Contraseña" />
          <button className="bg-gradient-to-r from-[#009dff] to-[#7dffb2] text-white py-2 rounded-md shadow-sm hover:brightness-105 transition">
            Entrar
          </button>
        </form>
      </Modal>

      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <GradientTitle>Crear Cuenta</GradientTitle>
        <form className="flex flex-col space-y-3">
          <Input type="text" placeholder="Nombre completo" />
          <Input type="email" placeholder="Correo electrónico" />
          <Input type="password" placeholder="Contraseña" />
          <button className="bg-gradient-to-r from-[#009dff] to-[#7dffb2] text-white py-2 rounded-md shadow-sm hover:brightness-105 transition">
            Registrar
          </button>
        </form>
      </Modal>

      <Modal open={aboutOpen} onClose={() => setAboutOpen(false)} size="w-[600px]">
        <GradientTitle>Sobre Nosotros - Game Conec 🎮</GradientTitle>
        <div className="space-y-3 text-gray-300 leading-relaxed">
          <p>
            Bienvenido a <strong>Game Conec</strong>, tu tienda de videojuegos favorita. 
            Nacimos en <strong>2020</strong> con el sueño de conectar jugadores de todo 
            el mundo con los mejores títulos de cada generación.
          </p>
          <p>
            En nuestra plataforma encontrarás desde clásicos retro hasta las últimas
            novedades de consola y PC. Creemos en la magia de los videojuegos como
            una forma de conectar, divertir y crear recuerdos inolvidables.
          </p>
          <p>
            Nuestra misión es simple: <em>llevar la pasión gamer a todos los rincones</em>.
          </p>
        </div>
      </Modal>
    </>
  );
}
