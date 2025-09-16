"use client";

import {Carousel} from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "/images/SuperMariGalary.jpeg",
    description: "Una vista mística de montañas cubiertas de niebla.",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "/images/urban.jpg",
    description: "La ciudad iluminada en un sueño urbano vibrante.",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "/images/neon.jpg",
    description: "Luces de neón que iluminan la noche.",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/desert.jpg",
    description: "El silencio y misterio del desierto.",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/desert.jpg",
    description: "El silencio y misterio del desierto.",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/desert.jpg",
    description: "El silencio y misterio del desierto.",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "/images/desert.jpg",
    description: "El silencio y misterio del desierto.",
  },
];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
