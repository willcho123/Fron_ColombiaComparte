"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import ChatWidget from "@/components/ChatWidget";

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

  const count = useCountUp(numero, 1500, active);

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
        style={{ color: "#790d7f" }}
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
function NavbarColombia() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre nosotros", href: "#historia" },
    {
      label: "Programa Edifica",
      href: "https://colombiacomparte.com/programa-edifica/",
      external: true,
    },
    {
      label: "Top Speakers",
      href: "https://colombiacomparte.com/shows-y-conferencias/",
      external: true,
    },
    { label: "Noticias", href: "#noticias" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/colombia">
          <Image
            src="/img/colombia-comparte.png"
            alt="Colombia Comparte"
            width={180}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.external ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-sm font-semibold hover:text-purple-700 transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-700 text-sm font-semibold hover:text-purple-700 transition-colors"
              >
                {l.label}
              </a>
            )
          )}

          <a
            href="https://checkout.bold.co/payment/LNK_Z48LF520TB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:brightness-110"
            style={{ backgroundColor: "#790d7f" }}
          >
            Donaciones
          </a>
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
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
const slides = [
  {
    titulo: "Creamos oportunidades reales",
    subtitulo:
      "para que personas y familias vuelvan a ser productivas.",
    badge:
      "EDIFICA — El programa de emprendimiento que transforma sueños en negocios sostenibles",
    cta: {
      label: "👉 Quiero emprender",
      href: "https://colombiacomparte.com/programa-edifica/",
    },
  },
  {
    titulo: "Bienestar dentro y fuera de la empresa",
    subtitulo:
      "Acompañamos a las organizaciones fortaleciendo cultura, liderazgo y productividad humana.",
    badge: "",
    cta: {
      label: "👉 Quiero más información",
      href: "mailto:Eduardodelcastillo@colombiacomparte.com",
    },
  },
  {
    titulo: "Más que ayuda,",
    subtitulo:
      "brindamos esperanza y oportunidades para un mañana más brillante y sostenible.",
    badge: "",
    cta: {
      label: "Conócenos",
      href: "#historia",
    },
  },
];

function HeroColombia() {
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
            "linear-gradient(165deg, rgba(121,13,127,0.82) 0%, rgba(155,93,229,0.75) 50%, rgba(74,144,217,0.7) 100%)",
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
            className="bg-white font-bold px-8 py-3 rounded-full hover:bg-purple-100 transition-all duration-200"
            style={{ color: "#790d7f" }}
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

        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-white scale-125"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ColombiaPage() {
  return (
    <main className="font-sans">
      <NavbarColombia />
      <HeroColombia />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-14"
            style={{ color: "#790d7f" }}
          >
            Nuestro Impacto
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard
              numero={1200}
              label="Personas y familias en su reconstrucción productiva"
            />

            <StatCard
              numero={70}
              label="Empresas comprometidas con su gente"
            />

            <StatCard
              numero={65}
              label="Mentores y voluntarios al servicio del propósito"
            />

            <StatCard
              numero={10}
              label="Años transformando vidas y culturas"
            />
          </div>
        </div>
      </section>

      <footer
        id="contacto"
        className="bg-gray-900 text-white py-12"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Image
            src="/img/colombia-comparte.png"
            alt="Colombia Comparte"
            width={200}
            height={80}
            className="h-16 w-auto object-contain mx-auto mb-4"
          />

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Colombia Comparte.
            Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* <ChatWidget /> */}
    </main>
  );
}