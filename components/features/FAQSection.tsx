"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Cómo puedo registrarme?",
    answer: "Puedes registrarte haciendo clic en el botón de 'Registro' y completando el formulario con tus datos.",
  },
  {
    question: "¿Cuáles son los métodos de pago?",
    answer: "Aceptamos tarjetas de crédito, débito y pagos a través de PayPal.",
  },
  {
    question: "¿Puedo devolver un producto?",
    answer: "Sí, tienes hasta 30 días para solicitar la devolución desde la fecha de compra.",
  },
  {
    question: "¿Hay descuentos para miembros?",
    answer: "Sí, nuestros miembros registrados obtienen promociones exclusivas y acumulación de puntos.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center max-w-7xl mx-auto p-6 gap-6">
      {/* Imagen */}
      <div className="md:w-1/2 w-full">
        <img
          src="/images/gaming-5120169_1280.jpg"
          alt="FAQ Illustration"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* FAQ */}
      <div className="md:w-1/2 w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 transition-all duration-300"
          >
            <button
              className="w-full text-left flex justify-between items-center text-lg font-medium text-black hover:text-orange-500 transition-colors duration-300"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
