import React, { useState } from "react";
// import React from "react";
import {
  Github,
  Youtube,
  Code,
  Gamepad2,
  ChevronDown,
  ExternalLink,
  Mail,
  Phone,
  Brain,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface NavigationProps {
  onSectionClick: (sectionId: string) => void;
}

interface CookieBannerProps {
  isVisible: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  isVisible,
  onAccept,
  onDecline,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800/95 backdrop-blur-sm border-t border-purple-500/20 p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-300">
          Um dir ein optimales Erlebnis zu bieten, verwenden wir Cookies. Durch
          die Nutzung stimmst du dem zu.
        </p>
        <div className="flex gap-2">
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-sm font-medium transition-colors"
          >
            Akzeptieren
          </button>
          <button
            onClick={onDecline}
            className="px-4 py-2 border border-slate-600 hover:border-slate-500 rounded-lg text-sm font-medium transition-colors"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

const Navigation: React.FC<NavigationProps> = ({ onSectionClick }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Über mich" },
    { id: "projects", label: "Projekte" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-purple-500/20 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kai Dombrowski
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className="hover:text-purple-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-3 text-purple-400">
      {project.title}
    </h3>
    <p className="text-slate-300 mb-4 text-sm leading-relaxed">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      <a
        href={project.github}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      {project.demo && project.demo !== "#" && (
        <a
          href={project.demo}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-pink-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      )}
    </div>
  </div>
);

const KadoPortfolio: React.FC = () => {
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true);
  // const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // setActiveSection(sectionId);
    }
  };

  const handleCookieAccept = (): void => {
    setShowCookieBanner(false);
  };

  const handleCookieDecline = (): void => {
    setShowCookieBanner(false);
  };

  const projects: Project[] = [
    {
      title: "kado-ber.de",
      description: "Relaunch meiner persönlichen Website mit React.",
      tech: ["React", "TailwindCSS", "TypeScript"],
      github: "https://github.com/chefkoch0312/kado-ber.de",
      demo: "https://kado-ber.de",
    },
    {
      title: "gallery.kado-ber.de",
      description:
        "Wo Algorithmen träumen lernen – meine digitale Visitenkarte.",
      tech: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "Python",
        "Stable Diffusion",
      ],
      github: "https://github.com/chefkoch0312/gallery.kado-ber.de",
      demo: "http://gallery.kado-ber.de",
    },
    {
      title: "kundari",
      description: "Leichtgewichtiges CRM für klassische Webspace-Umgebungen.",
      tech: ["React", "Bootstrap", "PHP"],
      github: "https://github.com/chefkoch0312/kundari",
      demo: "#",
    },
    {
      title: "kundari_api",
      description: "PHP-Backend für das Kundari-Frontend.",
      tech: ["PHP", "MySQL", "REST API"],
      github: "https://github.com/chefkoch0312/kundari_api",
      demo: "#",
    },
    {
      title: "cgol",
      description: "Conway's Game of Life – als visuelle Spielerei umgesetzt.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/chefkoch0312/cgol",
      demo: "#",
    },
    {
      title: "weather_dashboard",
      description:
        "Drei technologische Ansätze für ein gemeinsames Ziel: ein Wetter-Dashboard.",
      tech: ["Python", "JavaScript", "React"],
      github: "https://github.com/chefkoch0312/weather_dashboard",
      demo: "#",
    },
    {
      title: "codekeeper",
      description:
        "Ein Python-basiertes Entwicklungs-, Sicherungs- und Deployment Tool zum Verwalten von Projekt-Workflows zwischen Entwicklungs-, Sicherungs- und Laufzeitumgebungen.",
      tech: ["Python", "Tkinter", "SQLite"],
      github: "https://github.com/chefkoch0312/codekeeper",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <CookieBanner
        isVisible={showCookieBanner}
        onAccept={handleCookieAccept}
        onDecline={handleCookieDecline}
      />
      <Navigation onSectionClick={scrollToSection} />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Digitale Klarheit mit Substanz.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-4">
            Full Stack Entwicklung & KI-Beratung mit Fokus auf Funktion,
            Struktur und Wirkung.
          </p>
          <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ich entwickle Weblösungen, Datenstrukturen und maschinelles Lernen
            mit Blick für das Wesentliche – modular, verständlich und
            langfristig tragfähig.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-16">
            <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-purple-500/20">
              <Code className="w-5 h-5 text-purple-400" />
              <span>Web-Entwicklung</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-blue-500/20">
              <Brain className="w-5 h-5 text-blue-400" />
              <span>Machine Learning</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-pink-500/20">
              <Gamepad2 className="w-5 h-5 text-pink-400" />
              <span>
                Game Dev{" "}
                <span className="text-xs text-slate-400 ml-1">(privat)</span>
              </span>
            </div>
          </div>
          {/* <div className="animate-bounce mt-4">
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
          </div> */}
          <div className="animate-scroll-glow mt-4">
            <ChevronDown className="w-8 h-8 text-purple-400 mx-auto drop-shadow-lg" />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Über mich
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Alles begann mit Neugier – und einem alten Rechner, der zu langsam
              war, um einfach nur genutzt zu werden. Ich wollte verstehen,
              gestalten, steuern. Heute ist aus dieser Neugier ein Weg geworden,
              der mich durch viele Sprachen, Systeme und Projekte geführt hat.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              Ich bin kein Fan von Buzzwords – aber ich glaube an Klarheit,
              sauberen Code und das Zusammenspiel von Logik und Intuition. Ob
              Webanwendung, Schnittstelle oder Idee auf dem Papier: Ich denke
              sie so, wie ich sie selbst nutzen würde.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Mein Stil? Pragmatismus mit Haltung. Und manchmal auch eine stille
              Eleganz, die man nicht sieht – aber spürt.
            </p>
          </div>
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-xl font-semibold mb-4 text-purple-400">
              Tech Stack & Kenntnisse
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-300">
              <div>
                <span className="font-semibold text-white">Sprachen:</span>
                <br />
                JavaScript, TypeScript, PHP, Python, C++, C#, Lua, SQL
              </div>
              <div>
                <span className="font-semibold text-white">Frameworks:</span>
                <br />
                React, Bootstrap, TailwindCSS, Node.js, Flask
              </div>
              <div>
                <span className="font-semibold text-white">Datenbanken:</span>
                <br />
                MySQL, PostgreSQL, SQLite
              </div>
              <div>
                <span className="font-semibold text-white">Tools & IDEs:</span>
                <br />
                VSCode, Git, XAMPP, NetBeans, Eclipse
              </div>
              <div>
                <span className="font-semibold text-white">
                  Betriebssysteme:
                </span>
                <br />
                Windows, Debian Linux, FreeBSD
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Meine Projekte
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">
              Weitere Informationen und Projekte findest du auf meinem
              GitHub-Profil
            </p>
            <a
              href="https://github.com/chefkoch0312"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              GitHub besuchen
            </a>
          </div>
        </div>
      </section>

      {/* Neue Galerie-Sektion */}
      <section id="gallery" className="py-20 px-4 bg-slate-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Wo Algorithmen träumen lernen
          </h2>
          <p className="text-base md:text-lg text-slate-300 mb-8">
            Eine kuratierte Galerie KI-generierter Bilder – erschaffen mit{" "}
            <strong>Stable Diffusion XL</strong>.<br />
            Technisch präzise, ästhetisch feinfühlig. Jedes Bild ein stiller
            Dialog zwischen Idee und Algorithmus.
          </p>
          <div className="mb-8">
            <img
              src="/assets/gallery-preview.jpg"
              alt="Vorschau Galerie"
              className="w-full rounded-2xl shadow-lg border border-slate-800"
            />
          </div>
          <a
            href="http://gallery.kado-ber.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition"
          >
            Galerie ansehen
          </a>
        </div>
      </section>

      {/* Bücher & Zertifikate */}
      <section id="inspiration" className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Inspiration & Entwicklung
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Was mich geprägt hat – fachlich wie menschlich:
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Buch-Empfehlungen
              </h3>
              <ul className="text-left text-slate-300 space-y-3 list-disc list-inside">
                <li>
                  <strong>Clean Code</strong> – Robert C. Martin
                </li>
                <li>
                  <strong>Machine Learning kompakt</strong> – Andriy Burkov
                </li>
                <li>
                  <strong>Der tägliche Stoiker</strong> – Ryan Holiday
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Zertifikate (Auswahl)
              </h3>
              <ul className="text-left text-slate-300 space-y-3 list-disc list-inside">
                <li>React & TypeScript – alfatraining</li>
                <li>JavaScript & Webentwicklung – alfatraining</li>
                <li>PHP & Datenbanken – alfatraining</li>
                <li>Machine Learning & Python – alfatraining</li>
              </ul>
              <p className="text-sm text-slate-400 mt-4">
                Eine vollständige Übersicht meiner Zertifikate steht hier als
                <a
                  href="/assets/Kai_Dombrowski_Zertifikate.pdf"
                  className="text-purple-400 hover:underline ml-1"
                  download
                >
                  PDF-Download
                </a>{" "}
                zur Verfügung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Lass uns in Kontakt bleiben
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Du hast Fragen, Feedback oder ein Projekt im Kopf? Ich freue mich
            über deine Nachricht. Du erreichst mich ganz unkompliziert über
            folgende Kanäle:
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:kai.dombrowski@web.de"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-slate-600 hover:border-purple-500"
            >
              <Mail className="w-5 h-5 text-purple-400" />
              <span>E-Mail schreiben</span>
            </a>
            <a
              href="tel:+4917660873086"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-slate-600 hover:border-green-500"
            >
              <Phone className="w-5 h-5 text-green-400" />
              <span>Anrufen</span>
            </a>
            <a
              href="https://github.com/chefkoch0312"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg transition-colors border border-slate-600 hover:border-purple-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 text-purple-400" />
              <span>GitHub Profil</span>
            </a>
            <a
              href="https://www.youtube.com/@chefkoch0312"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800/50 rounded-lg border border-slate-600 opacity-50 cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              <Youtube className="w-5 h-5 text-red-400" />
              <span>YouTube abonnieren (bald)</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 px-4 text-center text-sm text-slate-500">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Kai Dombrowski – Alle Rechte
          vorbehalten.
        </p>
        <div className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
          <strong>Impressum:</strong> Kai Dombrowski · Triftstr. 3 · 13585
          Berlin ·
          <br className="sm:hidden" />
          Telefon: +49 176 60873086 · E-Mail: impressum@kado-ber.de
          <br />
          Diese Seite ist ein privates, nicht-kommerzielles Angebot gemäß § 5
          TMG.
        </div>
      </footer>
    </div>
  );
};

export default KadoPortfolio;
