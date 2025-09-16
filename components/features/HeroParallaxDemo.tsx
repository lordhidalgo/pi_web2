"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "/images/free-fire-4k-characters-with-swords-0abntluamh9uhwph.jpg",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "/images/free-fire-4k-characters-with-swords-0abntluamh9uhwph.jpg",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "/images/free-fire-4k-characters-with-swords-0abntluamh9uhwph.jpg",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "/images/free-fire-4k-characters-with-swords-0abntluamh9uhwph.jpg",
  },
];
