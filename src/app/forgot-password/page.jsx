"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import api from "@/services/api";

export default function ForgotPasswordPage() {

  const router = useRouter();

  const [identifier, setIdentifier] = useState("");

  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(1);

  const [data, setData] = useState(null);

  const [resetForm, setResetForm] = useState({
    respuesta_seguridad: "",
    nueva_password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await api.post(
        "/auth/forgot-password",
        {
          identifier,
        }
      );

      setData(response.data);

      setStep(2);

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Error al buscar usuario"
      );

    } finally {

      setLoading(false);
    }
  };

  const handleReset = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await api.post(
        "/auth/reset-password",
        {
          username: data.username,
          respuesta_seguridad:
            resetForm.respuesta_seguridad,
          nueva_password:
            resetForm.nueva_password,
        }
      );

      alert(
        "Contraseña actualizada correctamente"
      );

      router.push("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Respuesta incorrecta o error al actualizar contraseña"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-6">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Recuperar contraseña
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Ingresa tu usuario o correo
        </p>

        {/* PASO 1 */}
        {step === 1 && (

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <div>

              <label className="block mb-2 font-medium">
                Usuario o correo
              </label>

              <input
                type="text"
                placeholder="Ingrese su usuario o correo"
                value={identifier}
                onChange={(e) =>
                  setIdentifier(e.target.value)
                }
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
                ? "Buscando..."
                : "Continuar"}
            </button>

          </form>
        )}

        {/* PASO 2 */}
        {step === 2 && data && (

          <form
            onSubmit={handleReset}
            className="space-y-5"
          >

            {/* PREGUNTA */}
            <div>

              <label className="block mb-2 font-medium">
                Pregunta de seguridad
              </label>

              <div className="w-full bg-slate-100 border border-gray-300 p-3 rounded-lg text-[#790d7f] font-semibold">
                {data.pregunta_seguridad}
              </div>

            </div>

            {/* RESPUESTA */}
            <div>

              <label className="block mb-2 font-medium">
                Respuesta
              </label>

              <input
                type="text"
                value={
                  resetForm.respuesta_seguridad
                }
                onChange={(e) =>
                  setResetForm({
                    ...resetForm,
                    respuesta_seguridad:
                      e.target.value,
                  })
                }
                placeholder="Ingrese la respuesta"
                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
                required
              />

            </div>

            {/* NUEVA PASSWORD */}
            <div>

              <label className="block mb-2 font-medium">
                Nueva contraseña
              </label>

              <input
                type="password"
                value={
                  resetForm.nueva_password
                }
                onChange={(e) =>
                  setResetForm({
                    ...resetForm,
                    nueva_password:
                      e.target.value,
                  })
                }
                placeholder="Ingrese la nueva contraseña"
                className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
                required
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#790d7f] hover:brightness-110 text-white p-3 rounded-lg transition"
            >
              {loading
                ? "Actualizando..."
                : "Restablecer contraseña"}
            </button>

          </form>
        )}

      </div>

    </main>
  );
}