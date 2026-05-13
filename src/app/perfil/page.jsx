"use client";

import { useAuth } from "@/context/AuthContext";

export default function PerfilPage() {

  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No has iniciado sesión.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 pt-32 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-[#790d7f] mb-8">
          Mi Perfil
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">
              Nombre
            </p>

            <p className="font-semibold text-lg">
              {user.nombre} {user.apellido}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Usuario
            </p>

            <p className="font-semibold text-lg">
              {user.username}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Correo
            </p>

            <p className="font-semibold text-lg">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Rol
            </p>

            <p className="font-semibold text-lg capitalize">
              {user.rol}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              País
            </p>

            <p className="font-semibold text-lg">
              {user.pais?.nombre || "Sin país asignado"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}