import Link from "next/link";
import Image from "next/image";

const paises = [
  {
    src: "/img/colombia-comparte.png",
    alt: "Colombia Comparte",
    href: "/colombia",
  },
  {
    src: "/img/Ecuador Comparte.png",
    alt: "Ecuador Comparte",
    href: "/ecuador",
  },
  {
    src: "/img/logo.png",
    alt: "Latinoamérica Comparte",
    href: "/",
    grande: true,
  },
  {
    src: "/img/Chile Comparte.png",
    alt: "Chile Comparte",
    href: "/chile",
  },
  {
    src: "/img/Argentina Comparte.png",
    alt: "Argentina Comparte",
    href: "/argentina",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/Colaboradores.jpg')",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, rgba(0,195,255,0.7) 0%, rgba(102,126,234,0.75) 15%, rgba(155,93,229,0.8) 35%, rgba(233,69,96,0.75) 60%, rgba(255,107,107,0.7) 80%, rgba(249,168,38,0.65) 100%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">
          UN PROPÓSITO QUE NACIÓ DE COLOMBIA
        </h1>

        <h2 className="text-lg md:text-xl text-white font-semibold mb-10 tracking-widest">
          HOY INSPIRA A TODA LATINOAMÉRICA
        </h2>

        {/* Logos países */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {paises.map((pais) => (
            <Link
              key={pais.alt}
              href={pais.href}
              className={`bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
                pais.grande ? "w-36 h-36" : "w-28 h-28"
              }`}
            >
              <Image
                src={pais.src}
                alt={pais.alt}
                width={pais.grande ? 110 : 90}
                height={pais.grande ? 110 : 90}
                className="object-contain p-2"
                priority
              />
            </Link>
          ))}
        </div>

        <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
          Una red que une personas, empresas y comunidades, para construir una
          región más humana, productiva y consciente.
        </p>

        <Link
          href="#quienes"
          className="inline-block bg-white text-purple-900 font-bold px-8 py-3 rounded-full hover:bg-purple-100 transition-all duration-200"
        >
          Conoce más
        </Link>
      </div>
    </section>
  );
}