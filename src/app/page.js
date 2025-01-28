import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white font-sans">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <Image src="/image/logo.svg" alt="logo" width={80} height={80} />
        <nav>
          <ul className="flex gap-8 text-lg">
            <li><a href="#about" className="hover:text-cyan-400 transition">Sobre Nosotros</a></li>
            <li><a href="#events" className="hover:text-cyan-400 transition">Eventos</a></li>
            <li><a href="#members" className="hover:text-cyan-400 transition">Miembros</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-32 px-5">
        <h1 
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          ASOCIACIÓN ESTUDIANTIL DE CIBERSEGURIDAD
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl">
          Un espacio donde los futuros expertos en ciberseguridad se conectan, aprenden y lideran iniciativas para un mundo digital más seguro.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="p-20 bg-gray-900 text-center">
        <h2 className="text-5xl font-bold text-cyan-400">Sobre Nosotros</h2>
        <p className="mt-8 text-gray-300 max-w-4xl mx-auto text-lg">
          Somos una comunidad de estudiantes apasionados por la ciberseguridad en la UTP. Organizamos eventos, talleres y competencias para mejorar nuestras habilidades y compartir conocimientos con otros entusiastas de la seguridad informática.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="p-20 text-center">
        <h2 className="text-5xl font-bold text-cyan-400">Eventos</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500 transition">
            <h3 className="text-2xl font-semibold">Taller de Ethical Hacking</h3>
            <p className="mt-4 text-gray-400">Aprende sobre pruebas de penetración, explotación de vulnerabilidades y defensa cibernética.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500 transition">
            <h3 className="text-2xl font-semibold">Competencia de CTF</h3>
            <p className="mt-4 text-gray-400">Pon a prueba tus habilidades en hacking ético y resolución de retos de ciberseguridad.</p>
          </div>
          <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500 transition">
            <h3 className="text-2xl font-semibold">Charla sobre OSINT</h3>
            <p className="mt-4 text-gray-400">Descubre cómo se recopila información pública para investigaciones de seguridad.</p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="p-20 bg-gray-900 text-center">
        <h2 className="text-5xl font-bold text-cyan-400">Miembros</h2>
        <p className="mt-8 text-gray-300 text-lg">Conoce al equipo de estudiantes que lidera la asociación y trabaja para fomentar la educación en ciberseguridad.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-20 text-center">
        <h2 className="text-5xl font-bold text-cyan-400">Contacto</h2>
        <p className="mt-8 text-gray-300 text-lg">Síguenos en Instagram para mantenerte informado sobre nuestras actividades: <a href="https://www.instagram.com/aecsutp/" className="text-blue-400 hover:text-blue-300 transition font-semibold">@aecsutp</a></p>
      </section>
    </div>
  );
}
