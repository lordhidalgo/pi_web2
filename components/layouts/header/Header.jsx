"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  FaShoppingCart,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaApple,
} from "react-icons/fa";

function NavButton({ onClick, href, children }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="text-white text-xl relative py-1 transition-colors duration-300 overflow-hidden 
                   after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 
                   after:bg-[#33cfff] after:transition-transform after:duration-300 after:ease-in-out 
                   hover:text-[#33cfff] hover:after:translate-x-full"
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      href={href}
      className="text-white text-xl relative py-1 transition-colors duration-300 overflow-hidden 
                 after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 
                 after:bg-[#33cfff] after:transition-transform after:duration-300 after:ease-in-out 
                 hover:text-[#33cfff] hover:after:translate-x-full"
    >
      {children}
    </Link>
  );
}

// Dropdown reutilizable
function DropdownMenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-pointer text-white text-xl relative py-1 transition-colors duration-300 overflow-hidden 
                       after:content-[''] after:absolute after:bottom-0 after:left-[-100%] after:w-full after:h-0.5 
                       after:bg-[#33cfff] after:transition-transform after:duration-300 after:ease-in-out 
                       hover:text-[#33cfff] hover:after:translate-x-full h-10 flex items-center">
        {title}
      </span>
      <div
        className={`absolute top-full left-0 mt-2 bg-black border border-gray-700 rounded-md shadow-lg z-50 w-52 transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-white hover:text-[#33cfff] transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Icono de carrito
function CartButton({ href }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-[#33cfff] transition text-2xl flex items-center"
    >
      <FaShoppingCart />
    </Link>
  );
}

// Modal genérico
function Modal({ open, onClose, children, size = "w-96" }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl p-6 relative animate-scale-in ${size} max-h-[80vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}

// Componente para título con efecto reactivo al mouse
function GradientTitle({ children }) {
  const titleRef = useRef(null);

  function handleMouseMove(e) {
    const rect = titleRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6; // movimiento ligero
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    titleRef.current.style.transform = `translate(${x}px, ${y}px)`;
  }

  function resetPosition() {
    titleRef.current.style.transform = `translate(0px, 0px)`;
  }

  return (
    <h2
      ref={titleRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
      className="text-2xl font-bold mb-4 text-center 
                 bg-gradient-to-r from-[#009dff] to-[#7dffb2] bg-clip-text text-transparent 
                 transition-transform duration-150"
    >
      {children}
    </h2>
  );
}

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center p-4 sm:p-2 bg-black border-b border-b-gray-800 z-50 shadow-md font-sans relative text-white">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
        >
          <img src="/images/logo-2078018_1280.png" alt="Logo de la marca" className="h-10 w-auto" />
        </Link>

        {/* Navegación */}
        <nav className="nav md:flex md:items-center md:gap-10 hidden flex-1 justify-center">
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

        {/* Botones de usuario */}
        <div className="hidden md:flex items-center gap-3 ml-6">
          <button
            onClick={() => setRegisterOpen(true)}
            className="text-white px-4 py-2 font-semibold text-lg transition-colors duration-300 hover:text-[#33cfff] cursor-pointer"
          >
            Registrarse
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="h-12 px-6 rounded-2xl 
                       bg-gradient-to-r from-[#009dff] to-[#7dffb2] 
                       font-semibold text-white shadow-sm 
                       transition-all duration-300 
                       hover:brightness-105 hover:scale-[1.01]"
          >
            Iniciar sesión
          </button>
        </div>

        {/* Carrito */}
        <div className="ml-6 hidden md:block">
          <CartButton href="/carrito" />
        </div>

        {/* Botón hamburguesa */}
        <div
          className="md:hidden flex flex-col cursor-pointer gap-1.5 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-1 bg-white rounded-sm"></div>
          <div className="w-6 h-1 bg-white rounded-sm"></div>
          <div className="w-6 h-1 bg-white rounded-sm"></div>
        </div>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-black border border-gray-700 rounded-lg shadow-lg p-4 flex flex-col gap-4 w-56 z-50 text-white">
          <NavButton href="/">INICIO</NavButton>
          <NavButton onClick={() => setAboutOpen(true)}>SOBRE NOSOTROS</NavButton>
          <NavButton href="/noticias">NOTICIAS</NavButton>
          <NavButton href="/empleado">COMO EMPLEADO</NavButton>
          <NavButton href="/admin">COMO ADMINISTRADOR</NavButton>
          <NavButton href="/catalogo">CATÁLOGO</NavButton>
          <NavButton href="/promociones">PROMOCIONES</NavButton>
          <NavButton href="/soporte">SOPORTE</NavButton>
          <hr className="border-gray-700 w-full" />
          <button
            onClick={() => setRegisterOpen(true)}
            className="text-left text-white text-lg hover:text-[#33cfff]"
          >
            Registrarse
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="text-left text-white text-lg hover:text-[#33cfff]"
          >
            Iniciar sesión
          </button>
          <CartButton href="/carrito" />
        </div>
      )}

      {/* ----- Modales ----- */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} size="w-96">
        <GradientTitle>Iniciar Sesión</GradientTitle>
        <form className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 px-3 py-2 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#009dff] 
                       placeholder:text-gray-400 transition"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-300 px-3 py-2 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#7dffb2] 
                       placeholder:text-gray-400 transition"
          />
          <button
            className="bg-gradient-to-r from-[#009dff] to-[#7dffb2] 
                       text-white py-2 rounded-md shadow-sm 
                       hover:brightness-105 transition"
          >
            Entrar
          </button>
        </form>
      </Modal>

      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)} size="w-96">
        <GradientTitle>Crear Cuenta</GradientTitle>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border border-gray-300 px-3 py-2 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#009dff] 
                       placeholder:text-gray-400 transition"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 px-3 py-2 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#009dff] 
                       placeholder:text-gray-400 transition"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border border-gray-300 px-3 py-2 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#7dffb2] 
                       placeholder:text-gray-400 transition"
          />
          <button
            className="bg-gradient-to-r from-[#009dff] to-[#7dffb2] 
                       text-white py-2 rounded-md shadow-sm 
                       hover:brightness-105 transition"
          >
            Registrar
          </button>
        </form>

        <div className="mt-4">
          <p className="text-center text-gray-500 mb-2">O regístrate con</p>
          <div className="flex justify-center space-x-4 text-2xl">
            <FaGoogle className="text-red-600 cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="text-blue-600 cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="text-sky-500 cursor-pointer hover:scale-110 transition" />
            <FaApple className="text-black cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </Modal>

      <Modal open={aboutOpen} onClose={() => setAboutOpen(false)} size="w-[600px]">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-600">
          Sobre Nosotros - Game Conec 🎮
        </h2>
        <div className="space-y-3 text-gray-700 leading-relaxed">
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
        <div className="mt-4 flex justify-center">
          <img
            src="/images/img/game-store.jpg"
            alt="Nuestra tienda"
            className="rounded-lg shadow-md w-full max-h-60 object-cover"
          />
        </div>
        <p className="mt-3 text-center italic text-gray-600">
          "Conectamos jugadores, creamos historias."
        </p>
      </Modal>
    </>
  );
}