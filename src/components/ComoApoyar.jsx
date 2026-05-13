"use client";

import { Users, Heart, CreditCard } from "lucide-react";

export default function ComoApoyar() {
  return (
    <section
      id="apoyar"
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #9b5de5, #790d7f, #4a90d9)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
          COMO APOYAR
        </h2>

        <p className="text-white/80 text-center mb-12">
          Súmate a una red que transforma desde el propósito
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ─── EMPRESAS ─── */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-lg">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#f3e8ff" }}
            >
              <Users size={28} style={{ color: "#790d7f" }} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Empresas Aliadas
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Vincula tu compañía a nuestros programas e impulsa el bienestar
                de tus colaboradores.
              </p>
            </div>

            <a
              href="#contacto"
              className="w-full text-center font-bold text-white py-3 rounded-xl transition-all hover:brightness-110"
              style={{ backgroundColor: "#790d7f" }}
            >
              Más información
            </a>
          </div>

          {/* ─── DONACIONES ─── */}
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 relative shadow-lg">
            <span
              className="absolute top-4 right-4 text-xs font-bold text-white px-3 py-1 rounded-full"
              style={{ backgroundColor: "#790d7f" }}
            >
              APOYA HOY
            </span>

            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "#f3e8ff" }}
            >
              <Heart size={28} style={{ color: "#790d7f" }} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Donaciones Individuales
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                Tu aporte ayuda a más personas a recuperar su productividad y
                esperanza.
              </p>
            </div>

            <div className="border border-gray-100 rounded-xl overflow-hidden text-sm">
              {[
                {
                  label: "Banco",
                  value: "Bancolombia",
                  highlight: false,
                },
                {
                  label: "Tipo",
                  value: "Cuenta de ahorros",
                  highlight: false,
                },
                {
                  label: "Número",
                  value: "084-000103-67",
                  highlight: true,
                },
                {
                  label: "A nombre de",
                  value: "Fundación Colombia Comparte",
                  highlight: false,
                },
                {
                  label: "NIT",
                  value: "901.213.196-8",
                  highlight: false,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between px-4 py-3 border-b border-gray-100 last:border-0 gap-4"
                >
                  <span className="text-gray-400">{row.label}</span>

                  <span
                    className={`font-semibold text-right ${
                      row.highlight
                        ? "text-purple-700"
                        : "text-gray-800"
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl border-2 border-purple-200 text-purple-700 hover:bg-purple-50 transition-all">
              <CreditCard size={18} />
              Donar con tarjeta
            </button>

            <p className="text-center text-xs text-gray-400 italic">
              También aceptamos tarjetas de crédito y débito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}