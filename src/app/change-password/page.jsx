"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import api from "@/services/api";

export default function ChangePasswordPage() {

  const router = useRouter();

  const [form, setForm] = useState({
    password_actual: "",
    nueva_password: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

  }, [router]);

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

      const response = await api.put(
        "/auth/change-password",
        form
      );

      alert(response.data.message);

      setForm({
        password_actual: "",
        nueva_password: "",
      });

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Error al cambiar contraseña"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

        <div className="flex items-center justify-between mb-6">

          <Link
            href="/"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            ← Volver al inicio
          </Link>

          <Link
            href="/perfil"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Mi perfil
          </Link>

        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Cambiar contraseña
        </h1>

        <p className="text-gray-500 mb-8">
          Actualiza tu contraseña de acceso
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Contraseña actual
            </label>

            <input
              type="password"
              name="password_actual"
              value={form.password_actual}
              onChange={handleChange}
              placeholder="Ingrese su contraseña actual"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-slate-900"
              required
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Nueva contraseña
            </label>

            <input
              type="password"
              name="nueva_password"
              value={form.nueva_password}
              onChange={handleChange}
              placeholder="Ingrese la nueva contraseña"
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
              : "Actualizar contraseña"}
          </button>

        </form>

      </div>

    </main>
  );
}