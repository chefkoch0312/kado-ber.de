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
    description:
      "Kompletter Relaunch meiner persönlichen Website mit React, moderne Architektur trifft auf klares Design.",
    tech: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com/chefkoch0312/kado-ber.de",
    demo: "https://kado-ber.de",
  },
  {
    title: "gallery.kado-ber.de",
    description:
      "Wo Algorithmen träumen lernen. Meine digitale Visitenkarte für KI-generierte Kunst.",
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
      "Ein vollständig lokal funktionierender Zwischenablage-Tracker im Browser, mit Historie, Zeitstempeln und Export/Import-Funktion. Datenschutz durch Design: alles bleibt auf deinem Gerät.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chefkoch0312/clipboard-tracker",
    demo: "/clipboard_tracker/index.html",
  },
  {
    title: "readme-generator",
    description:
      "Effizientes Tool zum Erstellen professioneller README-Dateien für GitHub-Projekte. Weil gute Dokumentation Zeit spart.",
    tech: ["Python", "PyQt"],
    github: "https://github.com/chefkoch0312/readme_generator",
    demo: "#",
  },
  {
    title: "cgol",
    description:
      "Conway's Game of Life, als interaktive visuelle Spielerei umgesetzt. Mathematische Schönheit trifft auf lebendige Animation.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/chefkoch0312/cgol",
    demo: "/cgol/index.html",
  },
  {
    title: "weather_dashboard",
    description:
      "Drei technologische Ansätze für ein gemeinsames Ziel: ein Wetter-Dashboard. Vergleichende Implementierung in Python, JavaScript und React.",
    tech: ["Python", "JavaScript", "React"],
    github: "https://github.com/chefkoch0312/weather_dashboard",
    demo: "#",
  },
  {
    title: "codekeeper",
    description:
      "Python-basiertes Entwicklungs-, Sicherungs- und Deployment-Tool zum strukturierten Verwalten von Projekt-Workflows zwischen verschiedenen Umgebungen.",
    tech: ["Python", "Tkinter", "SQLite"],
    github: "https://github.com/chefkoch0312/codekeeper",
    demo: "#",
  },
  {
    title: "pomodoro-timer",
    description:
      "Ein minimalistischer Pomodoro-Timer mit reinem HTML, CSS und JavaScript. Ohne Frameworks, ohne Abhängigkeiten, ohne Kompromisse.",
    tech: ["HTML", "JavaScript", "CSS"],
    github: "https://github.com/chefkoch0312/pomodoro-timer",
    demo: "/pomodoro/index.html",
  },
];
