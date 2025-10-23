"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "../../components/ui/sheet";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../components/features/CartContext"; // ⬅️ Importa el contexto

export function CartSheet() {
  const { cart, total, increaseQty, decreaseQty, removeItem, clearCart } =
    useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative">
          <FaShoppingCart className="text-white text-2xl" />
         {cart.length > 0 && (
  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-bold min-w-[16px] h-4 flex items-center justify-center rounded-full px-[3px]">
    {cart.reduce((total, item) => total + item.qty, 0)}
  </span>
)}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Tu Carrito</SheetTitle>
          <SheetDescription>
            Revisa tus productos antes de pagar.
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Tu carrito está vacío 🛍️
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price} x {item.qty} = ${item.price * item.qty}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </Button>
                  <span>{item.qty}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    🗑
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <SheetFooter className="flex flex-col gap-2">
          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <Button className="w-full" disabled={cart.length === 0}>
            Finalizar compra
          </Button>

          <Button
            variant="destructive"
            className="w-full"
            onClick={clearCart}
            disabled={cart.length === 0}
          >
            Vaciar carrito
          </Button>

          <SheetClose asChild>
            <Button variant="outline" className="w-full">
              Seguir comprando
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
