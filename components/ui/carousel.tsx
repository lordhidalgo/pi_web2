"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideData {
  title: string;
  button: string;
  src: string;
  description?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  onVisualize: (slide: SlideData) => void;
}

const Slide = ({ slide, index, current, handleSlideClick, onVisualize }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => frameRef.current && cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-between relative text-center text-white transition-all duration-300 ease-in-out w-[50vmin] h-[65vmin] mx-[0.3vmin] z-10 p-4"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* Imagen */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-md overflow-hidden">
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-600"
            style={{ opacity: current === index ? 1 : 0.5 }}
            alt={title}
            src={src}
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>

        {/* Título */}
        <article
          className={`relative mt-6 transition-opacity duration-1000 ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold drop-shadow-lg">
            {title}
          </h2>
        </article>

        {/* Botones grandes estilo consola */}
        {current === index && (
          <div className="relative flex gap-6 justify-center w-full mt-auto mb-4">
            <button className="px-8 py-4 bg-green-500 text-white text-lg font-bold rounded-2xl shadow-[0_6px_0_#166534] active:translate-y-1 active:shadow-[0_2px_0_#166534] transition">
              Añadir
            </button>
            <button
              onClick={() => onVisualize(slide)}
              className="px-8 py-4 bg-blue-500 text-white text-lg font-bold rounded-2xl shadow-[0_6px_0_#1e3a8a] active:translate-y-1 active:shadow-[0_2px_0_#1e3a8a] transition"
            >
              Visualizar
            </button>
          </div>
        )}
      </li>
    </div>
  );
};

// Modal
const Modal = ({ slide, onClose }: { slide: SlideData | null; onClose: () => void }) => {
  if (!slide) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-6 w-[30%] max-w- relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl font-bold"
        >
          ✕
        </button>
        <img src={slide.src} alt={slide.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
        <p>{slide.description || "Sin descripción disponible."}</p>
      </div>
    </div>
  );
};

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 rounded-full hover:-translate-y-0.5 transition ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(Math.floor(slides.length / 2));
  const [modalSlide, setModalSlide] = useState<SlideData | null>(null);

  const handlePreviousClick = () =>
    setCurrent((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));

  const handleNextClick = () =>
    setCurrent((prev) => (prev + 1 === slides.length ? 0 : prev + 1));

  const handleSlideClick = (index: number) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div className="relative w-[70vmin] h-[75vmin] mx-auto -mt-23" aria-labelledby={`carousel-${id}`}>
      <ul
        className="absolute flex transition-transform duration-1000 ease-in-out"
        
        style={{ transform: `translateX(-${current * (50 + 1)}vmin)` }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
            onVisualize={(s) => setModalSlide(s)}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(80%+1rem)]">
        <CarouselControl type="previous" title="Anterior" handleClick={handlePreviousClick} />
        <CarouselControl type="next" title="Siguiente" handleClick={handleNextClick} />
      </div>

      {/* Modal */}
      {modalSlide && <Modal slide={modalSlide} onClose={() => setModalSlide(null)} />}
    </div>
  );
}
