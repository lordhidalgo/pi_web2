import React, { useState, ReactNode } from "react";

interface Message {
  text: ReactNode;
  sender: "user" | "bot";
}

export default function Chatbot() {
  const [open, setOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: (
        <div>
          ¡Hola! Soy tu asistente virtual 😊<br />
          Por favor, selecciona un problema escribiendo su número:
          <ul className="list-decimal ml-5">
            <li>No puedo subir mi obra</li>
            <li>No aparecen mis calificaciones</li>
            <li>No puedo cambiar mi membresía</li>
          </ul>
        </div>
      ),
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState<string>("");

  const problemas: Record<string, string> = {
    "1": "No puedo subir mi obra",
    "2": "No aparecen mis calificaciones",
    "3": "No puedo cambiar mi membresía",
  };

  const respuestas: Record<string, ReactNode> = {
    "No puedo subir mi obra":
      "Asegúrate de que tu imagen cumpla con los formatos permitidos (jpg, png) y que no supere el tamaño máximo.",
    "No aparecen mis calificaciones":
      "Puede ser un retraso en la actualización. Intenta refrescar la página o revisar tus filtros de visualización.",
    "No puedo cambiar mi membresía":
      "Para cambiar tu membresía, ve a tu perfil > Membresía y selecciona el nuevo plan. Recuerda guardar los cambios.",
  };

  const enviarMensaje = () => {
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    const problemaSeleccionado = problemas[input.trim()];
    let respuestaBot: ReactNode;

    if (problemaSeleccionado) {
      respuestaBot = respuestas[problemaSeleccionado];
    } else {
      respuestaBot = "Por favor escribe 1, 2 o 3 para seleccionar un problema.";
    }

    setTimeout(() => {
      const botMessage: Message = { text: respuestaBot, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <div>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-lg hover:bg-blue-700 transition z-[1000]"
      >
        💬
      </button>

      {/* Ventana del chatbot */}
      {open && (
        <div className="fixed bottom-20 right-5 w-[80%] max-w-xs sm:max-w-sm h-[400px] bg-white border rounded-2xl shadow-lg flex flex-col z-[1000]">
          {/* Encabezado */}
          <div className="bg-blue-600 text-white p-3 rounded-t-2xl text-center font-semibold">
            Asistente Virtual
          </div>

          {/* Cuerpo del chat */}
          <div className="flex-1 p-3 overflow-y-auto text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`my-2 p-2 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white ml-auto max-w-[35%]" // burbuja más compacta
                    : "bg-gray-200 text-black mr-auto max-w-[75%]"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input estilo WhatsApp */}
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
              className="flex-1 px-3 py-2 text-sm border-none outline-none rounded-bl-2xl"
              placeholder="Escribe 1, 2 o 3..."
            />
            <button
              onClick={enviarMensaje}
              className="bg-blue-600 text-white px-4 rounded-br-2xl hover:bg-blue-700 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
