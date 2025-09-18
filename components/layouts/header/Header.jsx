"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaShoppingCart,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaApple,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function NavButton({ onClick, href, children }) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="px-3 py-2 text-sm font-semibold hover:text-red-600 transition flex items-center h-10"
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      href={href}
      className="px-3 py-2 text-sm font-semibold hover:text-red-600 transition flex items-center h-10"
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
      <span className="cursor-pointer px-3 py-2 text-sm font-semibold hover:text-red-600 transition h-10 flex items-center">
        {title}
      </span>
      <div
        className={`absolute top-full left-0 mt-2 bg-red-800 rounded-md shadow-lg z-50 w-44 transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-white hover:bg-white hover:text-black transition"
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
      className="text-white hover:text-red-600 transition text-2xl flex items-center"
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
        {/* Botón cerrar */}
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

export default function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // estado menú hamburguesa

  return (
    <>
      <header className="bg-black text-white flex items-center h-20 px-4 font-sans relative shadow-md z-50">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center ml-2 hover:scale-105 transition-transform"
        >
          <img
            src="/images/img/logo-artthea.png"
            width={60}
            height={60}
            alt="Logo de la marca"
          />
        </Link>

        {/* Navegación principal - solo en pantallas grandes */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-2">
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

        {/* Botones de usuario - solo escritorio */}
        <div className="hidden md:flex items-center space-x-3 ml-6">
          <NavButton onClick={() => setLoginOpen(true)}>INICIAR SESIÓN</NavButton>
          <NavButton onClick={() => setRegisterOpen(true)}>REGISTRAR</NavButton>
        </div>

        {/* Carrito */}
        <div className="ml-6 hidden md:block">
          <CartButton href="/carrito" />
        </div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden ml-auto text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-start px-6 py-4 space-y-3">
          <NavButton href="/">INICIO</NavButton>
          <NavButton onClick={() => setAboutOpen(true)}>SOBRE NOSOTROS</NavButton>
          <NavButton href="/noticias">NOTICIAS</NavButton>
          <NavButton href="/empleado">COMO EMPLEADO</NavButton>
          <NavButton href="/admin">COMO ADMINISTRADOR</NavButton>
          <Link href="/catalogo"><NavButton href="/catalogo">CATÁLOGO</NavButton></Link>
          <NavButton href="/promociones">PROMOCIONES</NavButton>
          <NavButton href="/soporte">SOPORTE</NavButton>
          <hr className="border-gray-700 w-full" />
          <NavButton onClick={() => setLoginOpen(true)}>INICIAR SESIÓN</NavButton>
          <NavButton onClick={() => setRegisterOpen(true)}>REGISTRAR</NavButton>
          <CartButton href="/carrito" />
        </div>
      )}

      {/* ----- Modales ----- */}

      {/* Modal Iniciar Sesión */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)} size="w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Iniciar Sesión</h2>
        <form className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
            Entrar
          </button>
        </form>
      </Modal>

      {/* Modal Registrar */}
      <Modal open={registerOpen} onClose={() => setRegisterOpen(false)} size="w-96">
        <h2 className="text-xl font-semibold mb-4 text-center">Crear Cuenta</h2>
        <form className="flex flex-col space-y-3">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button className="bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
            Registrar
          </button>
        </form>

        {/* Opciones de registro rápido */}
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

      {/* Modal Sobre Nosotros */}
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
