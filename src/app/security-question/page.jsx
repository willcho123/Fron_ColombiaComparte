"use client";

import { useState } from "react";

import api from "@/services/api";

const preguntasSeguridad = [
  "¿Cuál es tu ciudad favorita?",
  "¿Cuál es el nombre de tu primera mascota?",
  "¿Cuál es tu comida favorita?",
  "¿Cuál fue tu primera escuela?",
  "¿Cuál es el segundo apellido de tu madre?",
];

export default function SecurityQuestionPage() {

  const [form, setForm] = useState({
    pregunta_seguridad: "",
    respuesta_seguridad: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.patch(
        "/auth/security-question",
        form
      );

      alert(response.data.message);

      setForm({
        pregunta_seguridad: "",
        respuesta_seguridad: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Error al actualizar la pregunta de seguridad"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Pregunta de seguridad
        </h1>

        <p className="text-gray-500 mb-8">
          Configura tu pregunta y respuesta de recuperación
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* PREGUNTA */}
          <div>

            <label className="block mb-2 font-medium">
              Pregunta de seguridad
            </label>

            <select
              name="pregunta_seguridad"
              value={form.pregunta_seguridad}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
              required
            >

              <option value="">
                Seleccione una pregunta
              </option>

              {preguntasSeguridad.map((pregunta) => (

                <option
                  key={pregunta}
                  value={pregunta}
                >
                  {pregunta}
                </option>

              ))}

            </select>

          </div>

          {/* RESPUESTA */}
          <div>

            <label className="block mb-2 font-medium">
              Respuesta de seguridad
            </label>

            <input
              type="text"
              name="respuesta_seguridad"
              value={form.respuesta_seguridad}
              onChange={handleChange}
              placeholder="Ingrese la respuesta"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-lg transition"
          >
            {loading
              ? "Actualizando..."
              : "Actualizar pregunta"}
          </button>

        </form>

      </div>

    </main>
  );
}