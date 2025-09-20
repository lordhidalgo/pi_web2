"use client";

import {Carousel} from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
  {
    title: "god of war",
    button: "Explore Component",
    src: "/images/godofwar.webp",
    description: "Una vista mística de montañas cubiertas de niebla.",
  },
  {
    title: "super mario",
    button: "Explore Component",
    src: "/images/SuperMariGalary.jpeg",
    description: "La ciudad iluminada en un sueño urbano vibrante.",
  },
  {
    title: "rainbow 6",
    button: "Explore Component",
    src: "/images/98.webp",
    description: "Luces de neón que iluminan la noche.",
  },
  {
    title: "Cyberpunk",
    button: "Explore Component",
    src: "/images/Cyberpunk_2077.jpg",
    description: "El silencio y misterio del desierto.",
  },
  {
    title: "war thunder",
    button: "Explore Component",
    src: "/images/war thunder.jpg",
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
