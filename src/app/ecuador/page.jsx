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
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 text-center">
      <span
        className="text-5xl font-black"
        style={{ color: "#FFD100" }}
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
function NavbarEcuador() {
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
        <Link href="/ecuador">
          <Image
            src="/img/Ecuador Comparte.png"
            alt="Ecuador Comparte"
            width={200}
            height={60}
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-700 text-sm font-semibold hover:text-yellow-600 transition-colors"
            >
              {l.label}
            </a>
          ))}

          <Link
            href="/"
            className="text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:brightness-110"
            style={{ backgroundColor: "#003DA5" }}
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
            className="text-blue-800 text-sm font-bold"
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
    titulo: "Ecuador Comparte",
    subtitulo:
      "Impulsamos el progreso humano y productivo en Ecuador, acompañando a personas, familias y empresas a transformar su historia.",
    badge: "🇪🇨 Una red de propósito que crece en Ecuador",
    cta: {
      label: "👉 Quiero emprender",
      href: "#programa",
    },
  },
  {
    titulo: "Bienestar que transforma",
    subtitulo:
      "Acompañamos a organizaciones ecuatorianas a fortalecer cultura, liderazgo y productividad humana.",
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

function HeroEcuador() {
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
            "linear-gradient(165deg, rgba(0,61,165,0.85) 0%, rgba(0,100,180,0.75) 50%, rgba(255,209,0,0.6) 100%)",
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
            className="bg-white font-bold px-8 py-3 rounded-full hover:bg-yellow-50 transition-all duration-200"
            style={{ color: "#003DA5" }}
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

const publicos = [
  {
    icono:
      "https://colombiacomparte.com/wp-content/uploads/2024/07/Icono1.png",
    titulo:
      "Personas y familias en reconstrucción económica",
    texto:
      "Acompañamos a ecuatorianos que enfrentan la pobreza oculta: hogares donde un cambio inesperado desordenó la vida. Les damos herramientas reales para volver a ser productivos.",
  },
  {
    icono:
      "https://colombiacomparte.com/wp-content/uploads/2024/07/Icono2.png",
    titulo: "Emprendedores con visión",
    texto:
      "A través del programa EDIFICA, formamos emprendedores con mentoría, estrategia, finanzas y acompañamiento humano para que construyan negocios sostenibles.",
  },
  {
    icono:
      "https://colombiacomparte.com/wp-content/uploads/2024/07/Icono3.png",
    titulo: "Empresas comprometidas con su gente",
    texto:
      "Apoyamos a organizaciones en Ecuador a fortalecer cultura, bienestar y liderazgo, para construir equipos con mayor compromiso y desempeño.",
  },
];

/* ─── PÁGINA PRINCIPAL ─── */
export default function EcuadorPage() {
  return (
    <main className="font-sans">
      <NavbarEcuador />
      <HeroEcuador />

      {/* ── A QUIÉNES APOYAMOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-4"
            style={{ color: "#003DA5" }}
          >
            A quiénes apoyamos
          </h2>

          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            En <strong>Ecuador Comparte</strong> impulsamos el progreso humano y productivo dentro y fuera de la empresa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* ── MISIÓN ── */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, #003DA5, #0070C0)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Nuestra misión en acción
          </h2>

          <p className="text-white/80 mb-10">
            Tres pilares que sostienen nuestra labor en Ecuador:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                titulo: "Programa EDIFICA",
                desc: "Altos estudios en emprendimiento",
              },
              {
                titulo: "Coaches certificados",
                desc: "Desarrollo integral de la persona",
              },
              {
                titulo: "Apoyo espiritual",
                desc: "Fortaleza interna y propósito",
              },
            ].map((item) => (
              <div
                key={item.titulo}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-2">
                  {item.titulo}
                </h3>

                <p className="text-white/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section
        id="historia"
        className="py-20 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-10"
            style={{ color: "#003DA5" }}
          >
            NUESTRA HISTORIA
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-10 text-gray-700 leading-relaxed space-y-4">
            <p>
              Ecuador Comparte nació del mismo espíritu que transformó Colombia: la convicción de que{" "}
              <strong>
                cuando una persona se levanta, su comunidad avanza
              </strong>
              .
            </p>

            <p>
              Inspirados en la historia de los fundadores de Colombia Comparte —{" "}
              <strong>Carolina Ruiz Herrera</strong> y{" "}
              <strong>Eduardo Del Castillo</strong> — y en la red Latinoamérica Comparte, Ecuador se suma a este movimiento con un propósito claro:
            </p>

            <p>
              Acompañar a ecuatorianos que enfrentan la pobreza oculta — esa que no está en las calles, sino en hogares donde un cambio inesperado desequilibró la vida — a reencontrar su propósito productivo y reconstruir su futuro desde el emprendimiento.
            </p>

            <p
              className="font-semibold pt-2"
              style={{ color: "#003DA5" }}
            >
              Cuando un ecuatoriano comparte, el país entero crece.
            </p>
          </div>
        </div>
      </section>

      {/* ── IMPACTO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-black text-center mb-14"
            style={{ color: "#003DA5" }}
          >
            Nuestro Impacto
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCard
              numero={300}
              label="Personas y familias acompañadas en Ecuador"
            />

            <StatCard
              numero={20}
              label="Empresas comprometidas con su gente"
            />

            <StatCard
              numero={15}
              label="Mentores y voluntarios al servicio del propósito"
            />

            <StatCard
              numero={3}
              label="Años transformando vidas en Ecuador"
            />
          </div>
        </div>
      </section>

      {/* ── BANNER ── */}
      <section
        id="programa"
        className="py-16 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, #003DA5, #FFD100)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
            Únete al movimiento en Ecuador
          </h2>

          <p className="text-white/90 mb-8">
            Sé parte de la red que transforma vidas en Ecuador.
          </p>

          <a
            href="mailto:info@latinoamericacomparte.com"
            className="inline-block bg-white font-bold px-8 py-3 rounded-full hover:bg-yellow-50 transition-all"
            style={{ color: "#003DA5" }}
          >
            Contáctanos
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        id="contacto"
        className="bg-gray-900 text-white py-12"
      >
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/img/Ecuador Comparte.png"
              alt="Ecuador Comparte"
              width={220}
              height={80}
              className="h-16 object-contain mb-4"
            />

            <p className="text-gray-400 text-sm">
              Cuando Ecuador comparte, Latinoamérica avanza.
            </p>
          </div>

          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{ color: "#FFD100" }}
            >
              Explora
            </h3>

            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#historia"
                  className="hover:text-white transition-colors"
                >
                  Quiénes somos
                </a>
              </li>

              <li>
                <a
                  href="#programa"
                  className="hover:text-white transition-colors"
                >
                  Únete
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{ color: "#FFD100" }}
            >
              Red Latinoamérica
            </h3>

            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  ← Latinoamérica Comparte
                </Link>
              </li>

              <li>
                <Link
                  href="/colombia"
                  className="hover:text-white transition-colors"
                >
                  Colombia Comparte
                </Link>
              </li>

              <li>
                <Link
                  href="/chile"
                  className="hover:text-white transition-colors"
                >
                  Chile Comparte
                </Link>
              </li>

              <li>
                <Link
                  href="/argentina"
                  className="hover:text-white transition-colors"
                >
                  Argentina Comparte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ecuador Comparte · Red Latinoamérica Comparte. Todos los derechos reservados.
        </div>
      </footer>

      {/* <ChatWidget /> */}
    </main>
  );
}