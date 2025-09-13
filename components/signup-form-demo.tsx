"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { IconBrandGoogle } from "@tabler/icons-react";

export default function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-[#9c7905] dark:text-[#d8c40c]">
        Bienvenido a ARTTHEA
      </h2>
      <p className="mt-2 max-w-sm text-sm text-[#866b1a] dark:text-[#ffe082]">
        Crea tu cuenta para empezar a explorar el arte de una manera única.
      </p>

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
          <Input id="password" placeholder="crea una contraseña" type="password" />
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
          className="group/btn relative block h-10 w-full rounded-2xl bg-[#d8c40c] font-semibold text-white shadow transition-colors duration-300 hover:bg-[#9c7905] mb-3"
          type="submit"
        >
          Registrarse &rarr;
          <BottomGradient />
        </button>

        {/* Separador más pequeño */}
        <div className="my-2 h-[1px] w-full bg-gradient-to-r from-transparent via-[#d8c40c] to-transparent dark:via-[#9c7905]" />

        <div className="flex flex-col space-y-0">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-2xl bg-[#f7e9a0] px-4 font-medium text-[#9c7905] dark:bg-zinc-900 dark:text-[#ffe082] dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-[#9c7905] dark:text-[#ffe082]" />
            <span className="text-sm text-[#9c7905] dark:text-[#ffe082]">
              Ingresar con Google
            </span>
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
