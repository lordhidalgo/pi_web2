"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { CartSheet } from "../../features/SheetDemo";
import { FaShoppingCart } from "react-icons/fa";

// ---- Botón genérico ----
function NavButton({ onClick, href, children }) {
  const baseClass =
    "text-white text-sm font-medium relative py-1 transition-colors duration-300 tracking-widest group uppercase";
  const underline = (
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#00ffff] transition-all duration-300 group-hover:w-full shadow-[0_0_6px_#00ffff]" />
  );

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClass}>
        <span className="relative inline-block">{children}{underline}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={baseClass}>
      <span className="relative inline-block">{children}{underline}</span>
    </Link>
  );
}

// ---- Dropdown ----
function DropdownMenu({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative flex items-center group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer text-white text-sm font-medium py-1 tracking-wide uppercase relative inline-block">
        {title}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#00ffff] transition-all duration-300 group-hover:w-full shadow-[0_0_6px_#00ffff]" />
      </span>
      <div
        className={`absolute top-full left-0 mt-2 bg-[#0a0a0a]/95 border border-[#00ffff40] rounded-md shadow-lg z-50 w-56 backdrop-blur-md transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-white text-sm font-medium hover:text-[#00ffff] hover:pl-6 transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// ---- Modal genérico ----
function Modal({ open, onClose, children, size = "w-96" }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-[#0a0a0a] text-white rounded-lg shadow-[0_0_15px_#00ffff40] p-6 relative ${size} max-h-[80vh] overflow-y-auto border border-[#00ffff30]`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-[#ff0055] text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

// ---- Título estático con gradiente ----
function GradientTitle({ children }) {
  return (
    <h2
      className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-[#00ffff] to-[#7dffb2] bg-clip-text text-transparent tracking-wide uppercase"
    >
      {children}
    </h2>
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

// ---- Header principal ----
export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const buttonStyle = {
    background:
      "linear-gradient(90deg, #00ffff 0%, #7dffb2 100%)",
    boxShadow: "0 0 10px #00ffff60",
  };

  return (
    <>
      <header className="flex justify-between items-center px-10 py-4 bg-[#050505]/95 border-b border-[#00ffff30] shadow-[0_0_15px_#00ffff20] z-50 text-white font-[var(--font-body)] relative">
        {/* Logo */}
        <Link href="/" className="flex items-center cursor-pointer gap-2">
          <img
            src="/images/logo-2078018_1280.png"
            alt="Logo"
            className="h-9 w-auto drop-shadow-[0_0_10px_#00ffff80]"
          />
          <span className="hidden md:inline text-lg uppercase tracking-widest font-[var(--font-title)] text-[#00ffff] drop-shadow-[0_0_5px_#00ffff]">
            GAME CONNECT
          </span>
        </Link>

        {/* Navegación (desktop) */}
        <nav className="hidden lg:flex items-center gap-10 flex-1 justify-center text-sm font-[var(--font-body)]">
          <NavButton href="/">Inicio</NavButton>
          <NavButton onClick={() => setAboutOpen(true)}>Sobre Nosotros</NavButton>
          <NavButton href="/noticias">Noticias</NavButton>
          <DropdownMenu
            title="Ingresar Como"
            items={[
              { href: "/empleado", label: "Como Empleado" },
              { href: "/admin", label: "Como Administrador" },
            ]}
          />
          <DropdownMenu
            title="Secciones"
            items={[
              { href: "/catalogo", label: "Catálogo de Juegos" },
              { href: "/recompensa", label: "Recompensas y Promociones" },
            ]}
          />
          <NavButton href="/soporte">Soporte</NavButton>
        </nav>

        {/* Botones (desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <motion.button
            onClick={() => setRegisterOpen(true)}
            className="text-black text-sm font-bold px-4 py-2 rounded-md uppercase tracking-wide"
            style={buttonStyle}
            whileHover={{ scale: 1.05 }}
          >
            Registrarse
          </motion.button>

          <motion.button
            onClick={() => setLoginOpen(true)}
            className="text-black text-sm font-bold px-4 py-2 rounded-md uppercase tracking-wide"
            style={buttonStyle}
            whileHover={{ scale: 1.05 }}
          >
            Iniciar Sesión
          </motion.button>
        </div>

        {/* Carrito */}
        <div className="hidden lg:block ml-6">
          <CartButton />
        </div>

        {/* Hamburguesa móvil */}
        <div
          className="lg:hidden flex flex-col gap-1 ml-auto cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-7 h-1 bg-[#00ffff] rounded shadow-[0_0_6px_#00ffff]" />
          <div className="w-7 h-1 bg-[#00ffff] rounded shadow-[0_0_6px_#00ffff]" />
          <div className="w-7 h-1 bg-[#00ffff] rounded shadow-[0_0_6px_#00ffff]" />
        </div>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 right-4 bg-[#0a0a0a]/95 border border-[#00ffff30] rounded-lg shadow-[0_0_15px_#00ffff30] p-4 flex flex-col gap-4 w-64 z-50 text-white font-[var(--font-body)] backdrop-blur-md">
          <NavButton href="/">Inicio</NavButton>
          <NavButton onClick={() => setAboutOpen(true)}>Sobre Nosotros</NavButton>
          <NavButton href="/noticias">Noticias</NavButton>
          <NavButton href="/empleado">Como Empleado</NavButton>
          <NavButton href="/admin">Como Administrador</NavButton>
          <NavButton href="/catalogo">Catálogo</NavButton>
          <NavButton href="/recompesa">Promociones</NavButton>
          <NavButton href="/soporte">Soporte</NavButton>
          <hr className="border-[#00ffff30]" />
          <button
            onClick={() => setRegisterOpen(true)}
            className="text-left hover:text-[#00ffff]"
          >
            Registrarse
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="text-left hover:text-[#00ffff]"
          >
            Iniciar sesión
          </button>
          <CartButton />
        </div>
      )}

      {/* --- Modal Iniciar Sesión --- */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <GradientTitle>Iniciar Sesión</GradientTitle>
        <form className="flex flex-col space-y-3">
          <Input type="email" placeholder="Correo electrónico" />
          <Input type="password" placeholder="Contraseña" />
          <motion.button
            className="text-black py-2 rounded-md font-bold uppercase tracking-wide"
            style={buttonStyle}
            whileHover={{ scale: 1.05 }}
          >
            Entrar
          </motion.button>
          <button className="text-sm text-[#7dffb2] hover:text-[#00ffff]">
            ¿Olvidaste tu contraseña?
          </button>
        </form>
      </Modal>

      {/* --- Modal Registro --- */}
      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)}>
        <GradientTitle>Crear Cuenta</GradientTitle>
        <form className="flex flex-col space-y-3">
          <Input type="text" placeholder="Nombre completo" />
          <Input type="email" placeholder="Correo electrónico" />
          <Input type="password" placeholder="Contraseña" />
          <motion.button
            className="text-black py-2 rounded-md font-bold uppercase tracking-wide"
            style={buttonStyle}
            whileHover={{ scale: 1.05 }}
          >
            Registrar
          </motion.button>
        </form>
      </Modal>

      {/* --- Modal Sobre Nosotros --- */}
      <Modal open={aboutOpen} onClose={() => setAboutOpen(false)} size="w-[600px]">
        <GradientTitle>Sobre Nosotros</GradientTitle>
        <div className="space-y-3 text-gray-300 leading-relaxed">
          <p>
            Bienvenido a <strong className="text-[#00ffff]">Game Connect</strong>, donde los jugadores y los mundos virtuales se encuentran.
          </p>
          <p>
            Fundada en <strong>2020</strong>, nuestra misión es conectar a los gamers con los títulos más épicos, desde los clásicos hasta los lanzamientos más recientes.
          </p>
          <p>
            💥 <em>Explora. Juega. Conecta.</em>  
            Porque el juego no termina nunca.
          </p>
        </div>
      </Modal>
    </>
  );
}
