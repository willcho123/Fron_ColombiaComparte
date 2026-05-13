"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── CHAT WIDGET ─── */
// Si aún no existe, puedes comentar esta línea temporalmente
// import ChatWidget from "@/components/ChatWidget";

/* ─── CONTADOR ANIMADO ─── */
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

  const count = useCountUp(
    numero,
    1500,
    active
  );

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      {
        threshold: 0.5,
      }
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
        style={{ color: "#D52B1E" }}
      >
        {count}
      </span>

      <span className="text-gray-600 text-sm max-w-[160px]">
        {label}
      </span>
    </div>
  );
}

/* ─── NAVBAR ─── */

function NavbarChile() {

  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Inicio",
      href: "#inicio",
    },
    {
      label: "Sobre nosotros",
      href: "#historia",
    },
    {
      label: "Programa Edifica",
      href: "#programa",
    },
    {
      label: "Noticias",
      href: "#noticias",
    },
    {
      label: "Contacto",
      href: "#contacto",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-white">

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        <Link href="/chile">

          <Image
            src="/img/Chile Comparte.png"
            alt="Chile Comparte"
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
              className="text-gray-700 text-sm font-semibold hover:text-red-700 transition-colors"
            >
              {l.label}
            </a>
          ))}

          <Link
            href="/"
            className="text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:brightness-110"
            style={{
              backgroundColor: "#D52B1E",
            }}
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
            className="text-red-700 text-sm font-bold"
          >
            ← Volver al inicio
          </Link>

        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */

const slides = [
  {
    titulo: "Chile Comparte",
    subtitulo:
      "Impulsamos el progreso humano y productivo en Chile, acompañando a personas, familias y empresas a transformar su historia.",
    badge:
      "🇨🇱 Una red de propósito que crece en Chile",
    cta: {
      label: "👉 Quiero emprender",
      href: "#programa",
    },
  },
  {
    titulo: "Bienestar que transforma",
    subtitulo:
      "Acompañamos a organizaciones chilenas a fortalecer cultura, liderazgo y productividad humana.",
    badge: "",
    cta: {
      label: "👉 Más información",
      href: "#historia",
    },
  },
  {
    titulo: "De la crisis al propósito",
    subtitulo:
      "Ayudamos a personas que enfrentan la pobreza oculta a reconstruir su vida desde el emprendimiento.",
    badge: "",
    cta: {
      label: "Conócenos",
      href: "#historia",
    },
  },
];

function HeroChile() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const t = setInterval(() => {

      setCurrent((c) =>
        (c + 1) % slides.length
      );

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
            "linear-gradient(165deg, rgba(213,43,30,0.85) 0%, rgba(160,30,20,0.75) 50%, rgba(255,255,255,0.3) 100%)",
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
            className="bg-white font-bold px-8 py-3 rounded-full hover:bg-red-50 transition-all duration-200"
            style={{
              color: "#D52B1E",
            }}
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

/* ─── DATA ─── */

const publicos = [
  {
    icono:
      "https://colombiacomparte.com/wp-content/uploads/2024/07/Icono1.png",
    titulo:
      "Personas y familias en reconstrucción económica",
    texto:
      "Acompañamos a chilenos que enfrentan la pobreza oculta.",
  },
  {
    icono:
      "https://colombiacomparte.com/wp-content/uploads/2024/07/Icono2.png",
    titulo:
      "Emprendedores con visión",
    texto:
      "Formamos emprendedores con mentoría y acompañamiento humano.",
  },
  {
    icono:
      "https://colombiacomparte.com/wp-content/uploads/2024/07/Icono3.png",
    titulo:
      "Empresas comprometidas con su gente",
    texto:
      "Apoyamos organizaciones en Chile a fortalecer cultura y liderazgo.",
  },
];

/* ─── PAGE ─── */

export default function ChilePage() {

  return (
    <main className="font-sans">

      <NavbarChile />

      <HeroChile />

      {/* ── APOYAMOS ── */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{
              color: "#D52B1E",
            }}
          >
            A quiénes apoyamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

            {publicos.map((p) => (

              <div
                key={p.titulo}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
              >

                <Image
                  src={p.icono}
                  alt={p.titulo}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />

                <h3 className="text-lg font-bold text-gray-900">
                  {p.titulo}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.texto}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ── IMPACTO ── */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2
            className="text-4xl md:text-5xl font-black text-center mb-14"
            style={{
              color: "#D52B1E",
            }}
          >
            Nuestro Impacto
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

            <StatCard
              numero={250}
              label="Personas y familias acompañadas en Chile"
            />

            <StatCard
              numero={18}
              label="Empresas comprometidas con su gente"
            />

            <StatCard
              numero={12}
              label="Mentores y voluntarios"
            />

            <StatCard
              numero={2}
              label="Años transformando vidas"
            />

          </div>

        </div>

      </section>

      {/* ── FOOTER ── */}

      <footer
        id="contacto"
        className="bg-gray-900 text-white py-12"
      >

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Chile Comparte
          </p>

        </div>

      </footer>

      {/* <ChatWidget /> */}

    </main>
  );
}