export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Información */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{ color: "#790d7f" }}
            >
              Colombia Comparte
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Cuando un país comparte, Latinoamérica avanza.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{ color: "#790d7f" }}
            >
              Enlaces rápidos
            </h3>

            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#quienes"
                  className="hover:text-white transition-colors"
                >
                  Quiénes Somos
                </a>
              </li>

              <li>
                <a
                  href="#impacto"
                  className="hover:text-white transition-colors"
                >
                  Nuestro Impacto
                </a>
              </li>

              <li>
                <a
                  href="#noticias"
                  className="hover:text-white transition-colors"
                >
                  Noticias
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Países */}
          <div>
            <h3
              className="font-bold text-lg mb-4"
              style={{ color: "#790d7f" }}
            >
              Países
            </h3>

            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li>Colombia</li>
              <li>Ecuador</li>
              <li>Chile</li>
              <li>Argentina</li>
              <li>Perú</li>
            </ul>
          </div>
        </div>

        {/* Footer inferior */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Colombia Comparte. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}