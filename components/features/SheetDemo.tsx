"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "../../components/ui/sheet"
import { FaShoppingCart } from "react-icons/fa"

type Product = {
  id: number
  name: string
  price: number
  qty: number
}

export function CartSheet() {
  // Estado del carrito
  const [cart, setCart] = useState<Product[]>([
    { id: 1, name: "Camiseta React", price: 20, qty: 1 },
    { id: 2, name: "Gorra JS", price: 15, qty: 2 },
  ])

  // Calcular total
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  // Funciones para manipular carrito
  const increaseQty = (id: number) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ))
  }

  const decreaseQty = (id: number) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ))
  }

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <Sheet>
      {/* Botón que abre el carrito */}
      <SheetTrigger asChild>
        <button className="relative">
          {/* Icono del carrito */}
          <FaShoppingCart className="text-white text-2xl" />

          {/* Contador en círculo rojo */}
          {cart.length > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full"
            >
              {cart.length}
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

        {/* Lista de productos */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Tu carrito está vacío 🛍️
            </p>
          ) : (
            cart.map(item => (
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

        {/* Footer con acciones */}
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
  )
}
