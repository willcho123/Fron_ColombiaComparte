"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";

const paises = [
  { id: 1, nombre: "Colombia" },
  { id: 2, nombre: "Ecuador" },
  { id: 3, nombre: "Chile" },
  { id: 4, nombre: "Argentina" },
];

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [form, setForm] = useState({
    username: "",
    password: "",
    pais_id: "",
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
      const response = await api.post("/auth/login", form);

      login(response.data.token, response.data.user);

      router.push("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message || "Error al iniciar sesión"
        );
      } else {
        alert("Error inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          CMS Multipaís
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Inicia sesión para continuar
        </p>

        {/* PAÍS */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">País</label>
          <select
            name="pais_id"
            value={form.pais_id}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
            required
          >
            <option value="">Seleccione un país</option>
            {paises.map((pais) => (
              <option key={pais.id} value={pais.id}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* USUARIO */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Usuario</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Ingrese su usuario"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-2">
          <label className="block mb-2 font-medium">Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Ingrese su contraseña"
            className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
            required
          />
        </div>

        {/* RECUPERAR */}
        <div className="text-right mb-6">
          <Link
            href="/forgot-password"
            className="text-sm text-[#790d7f] hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* BOTÓN LOGIN */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-lg transition"
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        {/* ACCIONES */}
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/register"
            className="w-full border border-slate-900 text-slate-900 p-3 rounded-lg text-center hover:bg-slate-100 transition"
          >
            Regístrate
          </Link>

          <Link
            href="/"
            className="w-full text-center text-gray-500 hover:text-slate-900 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </form>
    </div>
  );
}