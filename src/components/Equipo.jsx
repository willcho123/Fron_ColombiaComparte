import Image from "next/image";

const equipo = [
  {
    nombre: "Carolina Ruiz",
    cargo: "Cofundadora y CEO para Latinoamérica Comparte",
    foto: "/img/carolina.jpg",
  },
  {
    nombre: "Marcela Moreno",
    cargo:
      "Directora de Relacionamiento para Colombia y Latinoamérica",
    foto: "/img/marcela.jpeg",
  },
  {
    nombre: "Eduardo Del Castillo",
    cargo:
      "Cofundador y Vicepresidente Comercial para Latinoamérica Comparte",
    foto: "/img/eduardo.jpeg",
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-black text-center mb-12"
          style={{ color: "#790d7f" }}
        >
          EQUIPO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipo.map((persona) => (
            <div
              key={persona.nombre}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-64">
                <Image
                  src={persona.foto}
                  alt={persona.nombre}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              <div className="p-6 text-center flex flex-col gap-2">
                <h3 className="font-bold text-gray-900 text-lg">
                  {persona.nombre}
                </h3>

                <p className="text-gray-500 text-sm">
                  {persona.cargo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}