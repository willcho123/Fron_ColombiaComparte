"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Building2,
} from "lucide-react";

const stats = [
  {
    icon: CheckCircle,
    numero: 10,
    label: "años de impacto social y empresarial",
  },
  {
    icon: Users,
    numero: 1200,
    label: "familias transformadas",
  },
  {
    icon: TrendingUp,
    numero: 700,
    label: "emprendimientos creados",
  },
  {
    icon: Building2,
    numero: 40,
    label: "empresas aliadas",
  },
];

const aliados = [
  "brinks",
  "cencosud",
  "championx",
  "grupoExito",
  "gruponutresa",
  "kantaribopemedia",
  "escuasal",
  "HomecenterSodimac",
  "soenergy",
  "jmtracking",
  "olimpIA",
  "sanfer",
  "alpina",
  "amcor",
  "boehringer",
];

/* ─── CONTADOR ─── */
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

/* ─── TARJETA ─── */
function StatCard({ icon: Icon, numero, label }) {
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
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 flex flex-col items-center gap-3 text-white"
    >
      <Icon size={36} strokeWidth={1.5} className="text-white/80" />

      <span className="text-5xl font-black">{count}</span>

      <span className="text-sm text-center text-white/80">
        {label}
      </span>
    </div>
  );
}

/* ─── COMPONENTE ─── */
export default function Impacto() {
  return (
    <section
      id="impacto"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #9b5de5, #790d7f)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-12">
          NUESTRO IMPACTO
        </h2>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <StatCard
              key={s.label}
              icon={s.icon}
              numero={s.numero}
              label={s.label}
            />
          ))}
        </div>

        {/* Empresas */}
        <div className="text-center mb-8">
          <h3 className="text-white font-bold text-xl mb-3">
            Empresas que comparten
          </h3>

          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Las empresas que creen en el bienestar y la productividad con
            propósito hacen parte de esta red. Gracias a ellas, más familias en
            Latinoamérica vuelven a creer, crear y prosperar.
          </p>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden relative">
          <div className="flex gap-6 animate-marquee">
            {[...aliados, ...aliados].map((a, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-20 bg-white rounded-xl flex items-center justify-center p-3 shadow-md"
              >
                <Image
                  src={`/img/${a}.${
                    ["boehringer", "jmtracking", "olimpIA"].includes(a)
                      ? "jpg"
                      : "png"
                  }`}
                  alt={a}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}