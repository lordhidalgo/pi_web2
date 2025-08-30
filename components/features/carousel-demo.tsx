
import React from "react";
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";

export function CarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-1/2 mx-auto">
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = ({ text, img }: { text: string; img: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {text}
        </span>
      </p>
      <img
        src={img}
        alt="mockup"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556",
    content: (
      <DummyContent
        text="The first rule of Apple club is that you boast about Apple club."
        img="https://assets.aceternity.com/macbook.png"
      />
    ),
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387",
    content: (
      <DummyContent
        text="Boost your productivity with better tools."
        img="https://assets.aceternity.com/iphone.png"
      />
    ),
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333",
    content: (
      <DummyContent
        text="Say hello to Apple Vision Pro."
        img="https://assets.aceternity.com/ipad.png"
      />
    ),
  },
   {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333",
    content: (
      <DummyContent
        text="Say hello to Apple Vision Pro."
        img="https://assets.aceternity.com/ipad.png"
      />
    ),
  },
   {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333",
    content: (
      <DummyContent
        text="Say hello to Apple Vision Pro."
        img="https://assets.aceternity.com/ipad.png"
      />
    ),
  },
   {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333",
    content: (
      <DummyContent
        text="Say hello to Apple Vision Pro."
        img="https://assets.aceternity.com/ipad.png"
      />
    ),
  },
];

