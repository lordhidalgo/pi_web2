"use client";
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  // Motion values para seguir el cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }

  // Gradiente dinámico para el texto
  const gradient = useMotionTemplate`
    radial-gradient(circle at ${mouseX}px ${mouseY}px,
      #ffe082, #b08a0f 70%, #9c7905 120%)
  `;

  return (
    <div
      className="shadow-input mx-auto mt-8 w-full max-w-md rounded-[32px] 
  bg-gradient-to-br from-[#fffbe6] to-[#ffe082] 
  shadow-lg shadow-gray-400/30 p-6 md:p-10"
      onMouseMove={handleMouseMove}
    >
      {/* Texto con gradiente dinámico */}
      <motion.h2
        style={{
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="relative text-xl font-bold cursor-pointer drop-shadow-[0_0_8px_rgba(156,121,5,0.6)]"
      >
        Bienvenido a ARTTHEA
      </motion.h2>

      <motion.p
        style={{
          backgroundImage: gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="mt-2 max-w-sm text-sm cursor-pointer drop-shadow-[0_0_4px_rgba(156,121,5,0.3)]"
      >
        Crea tu cuenta para empezar a explorar el arte de una manera única.
      </motion.p>

      {/* Formulario */}
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-[#9c7905]">
              Nombre
            </Label>
            <Input id="firstname" placeholder="Tomas" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-[#9c7905]">
              Apellido
            </Label>
            <Input id="lastname" placeholder="Rodriguez" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-[#9c7905]">
            Correo
          </Label>
          <Input id="email" placeholder="example@artthea.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-[#9c7905]">
            Contraseña
          </Label>
          <Input
            id="password"
            placeholder="crea una contraseña"
            type="password"
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmpassword" className="text-[#9c7905]">
            Confirmar contraseña
          </Label>
          <Input
            id="confirmpassword"
            placeholder="confirma tu contraseña"
            type="password"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-12 w-full rounded-2xl 
          bg-gradient-to-r from-[#d8c40c] to-[#b08a0f] 
          font-semibold text-white shadow-md transition-all duration-300 
          hover:brightness-110 hover:shadow-lg hover:scale-[1.02] mb-3"
          type="submit"
        >
          Registrarse &rarr;
          <BottomGradient />
        </button>

        <div className="my-3 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d8c40c] to-transparent dark:via-[#9c7905]" />

        <div className="flex flex-col space-y-0">
          <button
            className="group/btn relative flex h-12 w-full items-center justify-center space-x-3 
            rounded-2xl border border-[#d8c40c] bg-white 
            font-medium text-[#9c7905] shadow-sm 
            transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:bg-[#fff8e1]
            dark:bg-zinc-900 dark:text-[#ffe082] dark:border-[#9c7905] dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGoogle className="h-5 w-5 text-[#9c7905] dark:text-[#ffe082]" />
            <span className="text-sm font-semibold">Ingresar con Google</span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#d8c40c] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#9c7905] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
