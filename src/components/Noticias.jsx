"use client";

import { useState } from "react";
import Image from "next/image";

/* ─── DATA ─── */
const noticias = [
  {
    id: 1,
    categoria: "INSPIRACIÓN",
    titulo: "Historias que inspiran",
    resumen:
      "Casos de éxito y emprendedores que transforman sus comunidades.",
    imagen: "/img/noticia1.jpeg",
    contenido: {
      intro:
        "En Latinoamérica Comparte, cada historia es una prueba de que la transformación personal conduce a la transformación empresarial. Nuestros programas han impactado a más de 1,200 familias en toda la región.",
      secciones: [
        {
          titulo: "Emprendedores que transforman",
          texto:
            "Conoce las historias de personas que, después de enfrentar pérdidas significativas, encontraron en nuestros programas el apoyo necesario para reconstruir sus vidas y emprendimientos.",
        },
        {
          titulo: "Impacto real en comunidades",
          texto:
            "Nuestros emprendedores no solo reconstruyen sus propias vidas, sino que también generan empleo y desarrollo en sus comunidades.",
        },
      ],
    },
  },
  {
    id: 2,
    categoria: "CORPORATIVO",
    titulo: "Noticias corporativas",
    resumen: "Nuevas alianzas y expansión regional.",
    imagen: "/img/noticia2.jpg",
    contenido: {
      intro:
        "Latinoamérica Comparte continúa expandiendo su red de impacto a través de nuevas alianzas estratégicas con empresas líderes en la región.",
      secciones: [
        {
          titulo: "Nuevas alianzas estratégicas",
          texto:
            "Este año hemos sumado a nuestra red más de 15 empresas comprometidas con el bienestar de sus colaboradores.",
        },
        {
          titulo: "Expansión regional",
          texto:
            "Después del éxito en Colombia, Ecuador, Chile y Argentina, estamos evaluando expandir nuestras operaciones a Perú y México en el próximo año.",
        },
      ],
    },
  },
  {
    id: 3,
    categoria: "EVENTOS",
    titulo: "Eventos y conferencias",
    resumen:
      "Red que Transforma y Top Speakers en la región.",
    imagen: "/img/noticia3.jpeg",
    contenido: {
      intro:
        "Nuestros eventos Red que Transforma se han convertido en espacios de inspiración, aprendizaje y conexión para líderes empresariales de toda Latinoamérica.",
      secciones: [
        {
          titulo: "Red que Transforma 2025",
          texto:
            "Nuestro evento insignia reunirá en cada país a más de 500 líderes empresariales para compartir experiencias, estrategias y casos de éxito.",
        },
        {
          titulo: "Top Speakers internacionales",
          texto:
            "Contamos con la participación de reconocidos conferencistas y líderes de pensamiento de toda la región.",
        },
      ],
    },
  },
];

/* ─── COMPONENT ─── */
export default function Noticias() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-4"
          style={{ color: "#790d7f" }}
        >
          NOTICIAS
        </h2>

        <p className="text-gray-500 text-center mb-12">
          Mantente al día con nuestras últimas novedades y casos de éxito
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticias.map((n) => (
            <div
              key={n.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-52">
                <Image
                  src={n.imagen}
                  alt={n.titulo}
                  fill
                  className="object-cover"
                />

                <span
                  className="absolute bottom-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: "#790d7f" }}
                >
                  {n.categoria}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-gray-900 text-lg">
                  {n.titulo}
                </h3>

                <p className="text-gray-500 text-sm flex-1">
                  {n.resumen}
                </p>

                <button
                  type="button"
                  onClick={() => setSelected(n)}
                  className="flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
                  style={{ color: "#790d7f" }}
                >
                  Leer más →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative">
            {/* Cerrar */}
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Imagen */}
            <div className="relative h-48 rounded-xl overflow-hidden mb-6">
              <Image
                src={selected.imagen}
                alt={selected.titulo}
                fill
                className="object-cover"
              />
            </div>

            {/* Título */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selected.titulo}
            </h2>

            {/* Intro */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {selected.contenido.intro}
            </p>

            {/* Secciones */}
            {selected.contenido.secciones.map((s) => (
              <div key={s.titulo} className="mb-4">
                <h3
                  className="font-bold text-lg mb-2 border-l-4 pl-3"
                  style={{
                    color: "#790d7f",
                    borderColor: "#790d7f",
                  }}
                >
                  {s.titulo}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}