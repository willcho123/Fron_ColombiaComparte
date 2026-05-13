"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { useAuth } from "@/context/AuthContext";

/* ─── LINKS ─── */
const links = [
  { label: "QUIÉNES SOMOS", href: "#quienes" },
  { label: "NUESTRO IMPACTO", href: "#impacto" },
  { label: "EQUIPO", href: "#equipo" },
  { label: "NOTICIAS", href: "#noticias" },
  { label: "CÓMO APOYAR", href: "#apoyar" },
  { label: "CONTÁCTENOS", href: "#contacto" },
];

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-lg"
      style={{ backgroundColor: "#790d7f" }}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Latinoamérica Comparte"
            width={80}
            height={55}
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xs font-semibold tracking-wider hover:text-purple-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* SIN LOGIN */}
          {!user && (
            <>
              <Link
                href="/login"
                className="bg-white text-[#790d7f] px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition"
              >
                Iniciar sesión
              </Link>

              <Link
                href="/register"
                className="border border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#790d7f] transition"
              >
                Registrarse
              </Link>
            </>
          )}

          {/* CON LOGIN */}
          {user && (
            <div className="flex items-center gap-4">

              <span className="text-white text-sm font-semibold">
                Hola, {user.nombre}
              </span>

              <Link
                href="/perfil"
                className="bg-white text-[#790d7f] px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition"
              >
                Mi perfil
              </Link>

              <button
                onClick={logout}
                className="border border-white text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-[#790d7f] transition"
              >
                Cerrar sesión
              </button>

            </div>
          )}

        </div>

        {/* Botón móvil */}
        <button
          type="button"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ backgroundColor: "#790d7f" }}
        >

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-xs font-semibold tracking-wider"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE SIN LOGIN */}
          {!user && (
            <>
              <Link
                href="/login"
                className="bg-white text-[#790d7f] px-4 py-2 rounded-full text-sm font-semibold text-center"
              >
                Iniciar sesión
              </Link>

              <Link
                href="/register"
                className="border border-white text-white px-4 py-2 rounded-full text-sm font-semibold text-center"
              >
                Registrarse
              </Link>
            </>
          )}

          {/* MOBILE CON LOGIN */}
          {user && (
            <>
              <span className="text-white text-sm font-semibold">
                Hola, {user.nombre}
              </span>

              <Link
                href="/perfil"
                className="bg-white text-[#790d7f] px-4 py-2 rounded-full text-sm font-semibold text-center"
              >
                Mi perfil
              </Link>

              <button
                onClick={logout}
                className="border border-white text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Cerrar sesión
              </button>
            </>
          )}

        </div>
      )}

    </nav>
  );
}