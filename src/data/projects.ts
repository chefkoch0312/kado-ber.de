interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    title: "kado-ber.de",
    description: "Relaunch meiner persönlichen Website mit React.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com/chefkoch0312/kado-ber.de",
    demo: "https://kado-ber.de",
  },
  {
    title: "gallery.kado-ber.de",
    description: "Wo Algorithmen träumen lernen – meine digitale Visitenkarte.",
    tech: ["React", "TailwindCSS", "TypeScript", "Python", "Stable Diffusion"],
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
    title: "Clipboard-Tracker",
    description:
      "Ein lokal funktionierender Zwischenablage-Tracker im Browser mit Historie, Zeitstempeln, Export/Import und Dark Mode (ganz ohne Backend)",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chefkoch0312/clipboard-tracker",
    demo: "/clipboard_tracker/index.html",
  },
  {
    title: "readme-generator",
    description:
      "Ein einfaches Tool zum Erstellen von README-Dateien für GitHub-Projekte.",
    tech: ["Python", "PyQt"],
    github: "https://github.com/chefkoch0312/readme_generator",
    demo: "#",
  },
  {
    title: "cgol",
    description: "Conway's Game of Life – als visuelle Spielerei umgesetzt.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chefkoch0312/cgol",
    demo: "/cgol/index.html",
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
  {
    title: "pomodoro-timer",
    description:
      "Ein minimalistischer Pomodoro-Timer, erstellt mit Standard-HTML, CSS und JavaScript – ohne Frameworks und ohne Abhängigkeiten.",
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/chefkoch0312/pomodoro-timer",
    demo: "/pomodoro/index.html",
  },
];
