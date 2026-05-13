"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    pais: "",
    correo: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/solicitudes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: `${form.nombre} ${form.apellido}`,
            correo: form.correo,
            telefono: form.telefono,
            mensaje: form.mensaje,
            finalidad: form.pais,
            pais_id: 1,
          }),
        }
      );

      const data = await res.json();

      if (data.ok) {
        setEnviado(true);

        setForm({
          nombre: "",
          apellido: "",
          telefono: "",
          pais: "",
          correo: "",
          mensaje: "",
        });
      }
    } catch (err) {
      console.error("Error al enviar formulario:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-4"
          style={{ color: "#790d7f" }}
        >
          CONTACTANOS
        </h2>

        <p className="text-gray-500 text-center mb-12">
          Pronto uno de nuestros gerentes regionales se pondra en contacto
          contigo
        </p>

        {enviado ? (
          <div className="bg-purple-100 text-purple-800 font-bold text-center p-6 rounded-2xl">
            Mensaje enviado correctamente. Gracias!
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Nombre *
                  </label>

                  <input
                    type="text"
                    placeholder="Tu nombre"
                    required
                    value={form.nombre}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        nombre: e.target.value,
                      })
                    }
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Apellido
                  </label>

                  <input
                    type="text"
                    placeholder="Tu apellido"
                    value={form.apellido}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        apellido: e.target.value,
                      })
                    }
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Telefono
                  </label>

                  <input
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={form.telefono}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        telefono: e.target.value,
                      })
                    }
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Pais
                  </label>

                  <select
                    value={form.pais}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        pais: e.target.value,
                      })
                    }
                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-sm bg-white"
                  >
                    <option value="">Selecciona tu pais</option>
                    <option value="colombia">Colombia</option>
                    <option value="ecuador">Ecuador</option>
                    <option value="chile">Chile</option>
                    <option value="argentina">Argentina</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Correo electronico *
                </label>

                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                  value={form.correo}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      correo: e.target.value,
                    })
                  }
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-sm"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  En que podemos ayudarte? *
                </label>

                <textarea
                  placeholder="Cuentanos como podemos ayudarte..."
                  required
                  rows={4}
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      mensaje: e.target.value,
                    })
                  }
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-400 text-sm resize-none"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 font-bold text-white px-10 py-3 rounded-full transition-all hover:brightness-110 disabled:opacity-50"
                  style={{ backgroundColor: "#790d7f" }}
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}

                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}