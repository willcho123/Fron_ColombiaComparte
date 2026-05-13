"use client";

import { useState } from "react";
import Image from "next/image";

const paises = [
  {
    id: "latam",
    src: "/img/logo.png",
    alt: "Latinoamérica Comparte",
    grande: true,
    color: "#790d7f",
    titulo: "Latinoamérica Comparte",
    bandera: "🌎",
    descripcion: [
      "En Latinoamérica Comparte creemos que transformar personas es transformar empresas.",
      "Nacimos de una historia real de pérdida, fe y propósito.",
      "Lo que comenzó en Colombia como un movimiento para ayudar a familias a reconstruir su productividad, hoy se ha convertido en una red continental que promueve el bienestar, la cultura organizacional y el emprendimiento con propósito.",
      "En cada país acompañamos a personas, familias y empresas a reencontrar su propósito productivo y a construir un futuro sostenible. Porque cuando un país comparte, Latinoamérica avanza.",
    ],
    stats: [
      { numero: "4", label: "Países" },
      { numero: "10+", label: "Años de experiencia" },
      { numero: "1500+", label: "Vidas transformadas" },
      { numero: "100+", label: "Empresas aliadas" },
    ],
    href: null,
  },
  {
    id: "colombia",
    src: "/img/colombia-comparte.png",
    alt: "Colombia Comparte",
    color: "#790d7f",
    bandera: "🇨🇴",
    titulo: "Colombia Comparte",
    descripcion: [
      "Colombia Comparte nació de una historia real de pérdida, fe y reconstrucción.",
      "Sus cofundadores, Carolina Ruiz Herrera y Eduardo Del Castillo, vivieron en carne propia lo que significa perderlo todo y aún así levantarse.",
      "Durante 10 años, Colombia Comparte ha acompañado a miles de personas a reencontrar su propósito productivo y a reconstruir su vida desde el emprendimiento.",
      "Hoy somos una organización social autosostenible que impulsa emprendimiento con propósito, bienestar empresarial, cultura organizacional, liderazgo humano y productividad sostenible.",
    ],
    stats: [
      { numero: "1200", label: "Personas y familias" },
      { numero: "70", label: "Empresas aliadas" },
      { numero: "65", label: "Mentores y voluntarios" },
      { numero: "10", label: "Años transformando vidas" },
    ],
    href: "/colombia",
  },
  {
    id: "ecuador",
    src: "/img/Ecuador Comparte.png",
    alt: "Ecuador Comparte",
    color: "#003DA5",
    bandera: "🇪🇨",
    titulo: "Ecuador Comparte",
    descripcion: [
      "Ecuador Comparte nació del mismo espíritu que transformó Colombia: la convicción de que cuando una persona se levanta, su comunidad avanza.",
      "Inspirados en la red Latinoamérica Comparte, Ecuador se suma a este movimiento con un propósito claro: acompañar a quienes enfrentan la pobreza oculta a reencontrar su propósito productivo.",
      "Acompañamos a ecuatorianos en su reconstrucción económica, a emprendedores con visión y a empresas comprometidas con su gente.",
      "Cuando un ecuatoriano comparte, el país entero crece.",
    ],
    stats: [
      { numero: "300", label: "Personas y familias" },
      { numero: "20", label: "Empresas aliadas" },
      { numero: "15", label: "Mentores y voluntarios" },
      { numero: "3", label: "Años en Ecuador" },
    ],
    href: "/ecuador",
  },
  {
    id: "chile",
    src: "/img/Chile Comparte.png",
    alt: "Chile Comparte",
    color: "#D52B1E",
    bandera: "🇨🇱",
    titulo: "Chile Comparte",
    descripcion: [
      "Chile Comparte nació del mismo espíritu que transformó Colombia: la convicción de que cuando una persona se levanta, su comunidad avanza.",
      "Inspirados en la red Latinoamérica Comparte, Chile se suma a este movimiento para acompañar a chilenos que enfrentan la pobreza oculta a reencontrar su propósito productivo.",
      "Trabajamos con personas y familias en reconstrucción, emprendedores con visión y organizaciones comprometidas con el bienestar de su gente.",
      "Cuando un chileno comparte, el país entero crece.",
    ],
    stats: [
      { numero: "250", label: "Personas y familias" },
      { numero: "18", label: "Empresas aliadas" },
      { numero: "12", label: "Mentores y voluntarios" },
      { numero: "2", label: "Años en Chile" },
    ],
    href: "/chile",
  },
  {
    id: "argentina",
    src: "/img/Argentina Comparte.png",
    alt: "Argentina Comparte",
    color: "#4a90d9",
    bandera: "🇦🇷",
    titulo: "Argentina Comparte",
    descripcion: [
      "Argentina Comparte nació del mismo espíritu que transformó Colombia: la convicción de que cuando una persona se levanta, su comunidad avanza.",
      "Inspirados en la red Latinoamérica Comparte, Argentina se suma a este movimiento para acompañar a argentinos que enfrentan la pobreza oculta a reencontrar su propósito productivo.",
      "Acompañamos a personas y familias en reconstrucción, emprendedores con visión y empresas comprometidas con su gente en toda Argentina.",
      "Cuando un argentino comparte, el país entero crece.",
    ],
    stats: [
      { numero: "280", label: "Personas y familias" },
      { numero: "22", label: "Empresas aliadas" },
      { numero: "14", label: "Mentores y voluntarios" },
      { numero: "2", label: "Años en Argentina" },
    ],
    href: "/argentina",
  },
];

export default function QuienesSomos() {
  const [seleccionado, setSeleccionado] = useState(paises[0]);

  return (
    <section id="quienes" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-14"
          style={{ color: "#790d7f" }}
        >
          QUIÉNES SOMOS
        </h2>

        {/* PANEL */}
        <div
          className="rounded-3xl p-8 md:p-10 mb-10 shadow-sm border transition-all duration-500"
          style={{
            borderColor: `${seleccionado.color}33`,
            background: `${seleccionado.color}08`,
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* LOGO */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shrink-0 shadow-md bg-white"
              style={{ border: `3px solid ${seleccionado.color}` }}
            >
              <Image
                src={seleccionado.src}
                alt={seleccionado.alt}
                width={70}
                height={70}
                className="object-contain p-1"
              />
            </div>

            {/* CONTENIDO */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">
                  {seleccionado.bandera}
                </span>

                <h3
                  className="text-2xl font-black"
                  style={{ color: seleccionado.color }}
                >
                  {seleccionado.titulo}
                </h3>
              </div>

              <div className="space-y-3">
                {seleccionado.descripcion.map((texto, index) => (
                  <p
                    key={index}
                    className="text-gray-700 leading-relaxed text-sm md:text-base"
                  >
                    {texto}
                  </p>
                ))}
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {seleccionado.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl font-black"
                      style={{ color: seleccionado.color }}
                    >
                      {stat.numero}
                    </div>

                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTÓN */}
              {seleccionado.href && (
                <div className="mt-8">
                  <a
                    href={seleccionado.href}
                    className="inline-block text-white text-sm font-bold px-6 py-3 rounded-full transition-all hover:brightness-110 shadow"
                    style={{ backgroundColor: seleccionado.color }}
                  >
                    Conoce {seleccionado.titulo} →
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SELECTOR */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {paises.map((pais) => {
            const activo = seleccionado.id === pais.id;

            return (
              <button
                key={pais.id}
                onClick={() => setSeleccionado(pais)}
                className={`
                  rounded-full flex items-center justify-center
                  transition-all duration-300 cursor-pointer
                  bg-white shadow
                  ${
                    pais.grande
                      ? "w-28 h-28"
                      : "w-20 h-20"
                  }
                  ${
                    activo
                      ? "scale-110 shadow-xl"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }
                `}
                style={{
                  border: activo
                    ? `3px solid ${pais.color}`
                    : "3px solid transparent",
                  outline: activo
                    ? `2px solid ${pais.color}33`
                    : "none",
                  outlineOffset: "2px",
                }}
                title={pais.alt}
              >
                <Image
                  src={pais.src}
                  alt={pais.alt}
                  width={pais.grande ? 90 : 65}
                  height={pais.grande ? 90 : 65}
                  className="object-contain p-2"
                />
              </button>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-xs mt-4">
          Selecciona un país para conocer más
        </p>
      </div>
    </section>
  );
}