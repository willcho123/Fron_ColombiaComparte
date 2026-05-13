"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────
   CONTADOR ANIMADO
───────────────────────────── */
function useCountUp(target, duration, active) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!active) return;

    let start = 0;

    const step = target / (duration / 16);

    const timer = setInterval(() => {

      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }

    }, 16);

    return () => clearInterval(timer);

  }, [active, target, duration]);

  return count;
}

function StatCard({ numero, label }) {

  const [active, setActive] = useState(false);

  const ref = useRef(null);

  const count = useCountUp(numero, 1500, active);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2 text-center"
    >
      <span
        className="text-5xl font-black"
        style={{ color: "#74ACDF" }}
      >
        {count}
      </span>

      <span className="text-gray-600 text-sm max-w-[160px]">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────
   NAVBAR
───────────────────────────── */
function NavbarArgentina() {

  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre nosotros", href: "#historia" },
    { label: "Programa Edifica", href: "#programa" },
    { label: "Noticias", href: "#noticias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-white">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        <Link href="/argentina">

          <Image
            src="/img/Argentina Comparte.png"
            alt="Argentina Comparte"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
          />

        </Link>

        <div className="hidden md:flex items-center gap-6">

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 text-sm font-semibold hover:text-sky-600 transition-colors"
            >
              {l.label}
            </a>
          ))}

          <Link
            href="/"
            className="text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:brightness-110"
            style={{ backgroundColor: "#74ACDF" }}
          >
            ← Latinoamérica
          </Link>

        </div>

        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {open && (

        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white border-t">

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}

          <Link
            href="/"
            className="text-sky-600 text-sm font-bold"
          >
            ← Volver al inicio
          </Link>

        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────
   HERO
───────────────────────────── */
const slides = [
  {
    titulo: "Argentina Comparte",
    subtitulo:
      "Impulsamos el progreso humano y productivo en Argentina.",
    badge: "🇦🇷 Una red de propósito",
    cta: {
      label: "👉 Quiero emprender",
      href: "#programa",
    },
  },
  {
    titulo: "Bienestar que transforma",
    subtitulo:
      "Fortalecemos liderazgo y productividad humana.",
    badge: "",
    cta: {
      label: "👉 Más información",
      href: "#historia",
    },
  },
];

function HeroArgentina() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);

    return () => clearInterval(t);

  }, []);

  const s = slides[current];

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://colombiacomparte.com/wp-content/uploads/2024/07/banner_Colombiacomparte.png')",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, rgba(116,172,223,0.85) 0%, rgba(80,140,200,0.75) 50%, rgba(255,255,255,0.4) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

        {s.badge && (
          <span className="inline-block mb-4 text-xs font-bold text-white bg-white/20 px-4 py-2 rounded-full">
            {s.badge}
          </span>
        )}

        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          {s.titulo}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          {s.subtitulo}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <a
            href={s.cta.href}
            className="bg-white font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition-all duration-200"
            style={{ color: "#4a90d9" }}
          >
            {s.cta.label}
          </a>

          <Link
            href="/"
            className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            ← Volver al inicio
          </Link>

        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────
   PAGE
───────────────────────────── */
export default function ArgentinaPage() {

  return (
    <main className="font-sans">

      <NavbarArgentina />

      <HeroArgentina />

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2
            className="text-4xl font-black mb-10"
            style={{ color: "#4a90d9" }}
          >
            Nuestro Impacto
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <StatCard
              numero={280}
              label="Personas acompañadas"
            />

            <StatCard
              numero={22}
              label="Empresas aliadas"
            />

            <StatCard
              numero={14}
              label="Mentores activos"
            />

            <StatCard
              numero={2}
              label="Años transformando vidas"
            />

          </div>

        </div>

      </section>

    </main>
  );
}