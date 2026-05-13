"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import api from "@/services/api";

const paises = [
  { id: 1, nombre: "Colombia" },
  { id: 2, nombre: "Ecuador" },
  { id: 3, nombre: "Chile" },
  { id: 4, nombre: "Argentina" },
];

const preguntasSeguridad = [
  "¿Cuál es tu ciudad favorita?",
  "¿Cuál fue tu primera mascota?",
  "¿Cuál es el nombre de tu mejor amigo de infancia?",
  "¿Cuál es tu comida favorita?",
];

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  nombre: "",
  apellido: "",
  username: "",
  pais_id: "",
  pregunta_seguridad: "",
  respuesta_seguridad: "",
  email: "",
  password: "",
});

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

      await api.post(
        "/auth/register",
        form
      );

      alert("Usuario registrado correctamente");

      router.push("/login");

    } catch (error) {

      if (axios.isAxiosError(error)) {

        alert(
          error.response?.data?.message ||
          "Error al registrarse"
        );

      } else {

        alert("Error inesperado");
      }

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        

        {/* VOLVER */}
        <div className="mb-6">

          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-[#790d7f] transition"
          >
            ← Volver al inicio
          </Link>

        </div>

        <h1
          className="text-3xl font-black text-center mb-2"
          style={{ color: "#790d7f" }}
        >
          Crear cuenta
        </h1>

        <p className="text-gray-500 text-center mb-8 text-sm">
          Únete a Latinoamérica Comparte
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
            required
          />

          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={form.apellido}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
            required
          />

          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={form.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
            required
          />

          {/* PAÍS */}
          <select
            name="pais_id"
            value={form.pais_id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
            required
          >
            <option value="">
              Seleccione un país
            </option>

            {paises.map((pais) => (
              <option
                key={pais.id}
                value={pais.id}
              >
                {pais.nombre}
              </option>
            ))}
          </select>

          {/* PREGUNTA DE SEGURIDAD */}
<select
  name="pregunta_seguridad"
  value={form.pregunta_seguridad}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
  required
>
  <option value="">
    Seleccione una pregunta de seguridad
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

{/* RESPUESTA */}
<input
  type="text"
  name="respuesta_seguridad"
  placeholder="Respuesta de seguridad"
  value={form.respuesta_seguridad}
  onChange={handleChange}
  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
  required
/>

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-purple-700"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-bold transition-all hover:brightness-110"
            style={{ backgroundColor: "#790d7f" }}
          >
            {loading
              ? "Registrando..."
              : "Registrarme"}
          </button>

          {/* LOGIN */}
          <Link
            href="/login"
            className="text-center text-sm text-[#790d7f] hover:underline"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </Link>

        </form>

      </div>

    </main>
  );
}