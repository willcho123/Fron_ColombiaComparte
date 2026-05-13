import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Impacto from "@/components/Impacto";
import Equipo from "@/components/Equipo";
import Noticias from "@/components/Noticias";
import ComoApoyar from "@/components/ComoApoyar";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
// import ChatWidget from "@/components/ChatWidget";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <Impacto />
      <Equipo />
      <Noticias />
      <ComoApoyar />
      <Contacto />
      <Footer />
      {/* <ChatWidget /> */}
    </main>
  );
}