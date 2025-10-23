import React from "react";

const Footer = () => (
  <footer className="bg-black p-6 sm:p-8  text-base text-white border-t border-[#00ffff30]">
    <div className="flex flex-wrap justify-between items-start gap-8">
      <div>
        <strong className="text-xl bg-gradient-to-r from-[#00ffff] to-[#7dffb2] bg-clip-text text-transparent drop-shadow-[0_0_5px_#00ffff]">
          Game Connect
        </strong>
        <div className="text-sm sm:text-base text-[#7dffb2] mt-1">Una comunidad global de Gamers</div>
      </div>
      <nav className="flex flex-wrap gap-4 sm:gap-6 items-center">
        <a href="#" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#00ffff]">
          Escríbenos
        </a>
        <a href="#" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#00ffff]">
          Normas de la Comunidad
        </a>
        <a href="#" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#00ffff]">
          Términos de Servicio
        </a>
        <a href="#" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#00ffff]">
          Política de Privacidad
        </a>
        <a href="#" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#00ffff]">
          Política de Devolución
        </a>
      </nav>
      <div className="flex gap-4 items-center mt-2 sm:mt-0">
        <a href="#" aria-label="Facebook" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#7dffb2]">
          Facebook
        </a>
        <a href="#" aria-label="Instagram" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#7dffb2]">
          Instagram
        </a>
        <a href="#" aria-label="Twitter" className="text-white no-underline text-sm sm:text-base transition-colors duration-200 hover:text-[#7dffb2]">
          Twitter
        </a>
      </div>
    </div>
    <div className="flex justify-between items-center mt-6 text-sm border-t border-[#00ffff30] pt-4">
      <span className="text-[#7dffb2]">© 2025 Game Connect - Todos los derechos reservados.</span>
    </div>
  </footer>
);

export default Footer;