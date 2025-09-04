"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../../components/ui/resizable-navbar";
import { useState } from "react";
import { IconSearch, IconUser, IconX } from "@tabler/icons-react";
import Link from "next/link";

// Definir el tipo de cada imagen con título y descripción
type Image = {
  id: number;
  src: string;
  alt: string;
  userPhoto?: string;
  title: string;
  description: string;
};

export function NavbarDemo() {
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link
            href="/"
            className="flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
          >
            <img
              src="/images/img/logo-artthea.png"
              alt="Logo ARTTHÉA"
              className="h-10 w-auto"
            />
          </Link>

          <div className="ml-auto flex items-center gap-3">
            {showSearch ? (
              <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  autoFocus
                  className="w-80 rounded-full border border-zinc-300 bg-white/70 pl-10 pr-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-white"
                  onBlur={() => setShowSearch(false)}
                />
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
              >
                <IconSearch className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </button>
            )}

            <NavbarButton href="#login">Login</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="flex items-center justify-center cursor-pointer">
              <img
                src="/images/img/logo-artthea.png"
                alt="Logo ARTTHÉA"
                className="h-10 w-auto"
              />
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 py-2 px-4 block hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md"
              >
                {item.name}
              </a>
            ))}

            <div className="relative mt-4 max-w-xs mx-auto w-full">
              <IconSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full rounded-full border border-zinc-300 bg-white/70 pl-10 pr-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-white"
              />
            </div>

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Register
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  const images: Image[] = [
    {
      id: 1,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 1",
      userPhoto: "/images/img/pinturaPasto.png",
      title: "Paisaje verde",
      description: "Una hermosa pintura de un paisaje con pasto y flores."
    },
    {
      id: 2,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 2",
      title: "Hojas secas",
      description: "Imagen de hojas secas cayendo en otoño."
    },
    {
      id: 3,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 3",
      userPhoto: "/images/img/pinturaPasto.png",
      title: "Pasto fresco",
      description: "Pasto fresco en un campo iluminado por el sol."
    },
    {
      id: 4,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 4",
      title: "Flores silvestres",
      description: "Conjunto de flores silvestres en primavera."
    },
      {
      id: 5,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 4",
      title: "Flores silvestres",
      description: "Conjunto de flores silvestres en primavera."
    },
    
      {
      id: 6,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 4",
      title: "Flores silvestres",
      description: "Conjunto de flores silvestres en primavera."
    },
    
      {
      id: 7,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 4",
      title: "Flores silvestres",
      description: "Conjunto de flores silvestres en primavera."
    },
      {
      id: 8,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 4",
      title: "Flores silvestres",
      description: "Conjunto de flores silvestres en primavera."
    },
      {
      id: 9,
      src: "/images/img/hojas-sin-fondo.png",
      alt: "Imagen 4",
      title: "Flores silvestres",
      description: "Conjunto de flores silvestres en primavera."
    },
    
    
  ];

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className="container mx-auto p-8 pt-24 min-h-screen">
      <div
        className="grid gap-4 h-full"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridAutoRows: "1fr",
        }}
      >
        {images.map((image) => (
          <div
            key={image.id}
            className="relative w-full overflow-hidden rounded-lg shadow-md flex h-full cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute left-2 top-2 z-10 rounded-full bg-white/80 p-2 shadow-md dark:bg-neutral-800/80">
              {image.userPhoto ? (
                <img
                  src={image.userPhoto}
                  alt="Foto de usuario"
                  className="h-5 w-5 rounded-full object-cover"
                />
              ) : (
                <IconUser className="h-5 w-5 text-gray-700 dark:text-gray-200" />
              )}
            </div>

            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal único que muestra info de la imagen seleccionada */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative bg-white dark:bg-neutral-900 rounded-lg shadow-lg max-w-lg w-full p-6">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <IconX className="h-6 w-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{selectedImage.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {selectedImage.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
