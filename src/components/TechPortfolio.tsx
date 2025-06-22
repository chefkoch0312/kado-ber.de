// Datei: components/TechPortfolio.tsx
import React from "react";

const TechPortfolio = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 space-y-8">
      <h1 className="text-3xl font-bold">🧠 Tech Stack – Überblick</h1>
      <ul className="space-y-1">
        <li>
          <strong>Sprachen:</strong> JavaScript, PHP, Python, Java, C++
        </li>
        <li>
          <strong>Frameworks/Bibliotheken:</strong> React, Bootstrap,
          TailwindCSS, Express, jQuery
        </li>
        <li>
          <strong>Datenbanken:</strong> MySQL, SQLite, PostgreSQL
        </li>
        <li>
          <strong>Tools:</strong> Git, VSCode, XAMPP, NetBeans, tmux, Neovim
        </li>
        <li>
          <strong>Betriebssysteme:</strong> Windows, Debian, FreeBSD
        </li>
        <li>
          <strong>Cloud & Web:</strong> REST-APIs, Hosting, WebApps
        </li>
        <li>
          <strong>Weitere Erfahrung:</strong> OpenSim, Game Modding,
          Automatisierungsskripte
        </li>
      </ul>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mt-6">
          🧩 Kompetenzbereiche
        </h2>

        <div className="grid sm:grid-cols-2 gap-6 mt-4">
          <div>
            <h3 className="text-xl font-bold">🖥️ Frontend</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>React – aktuell in Projekten, fundierte Praxis</li>
              <li>TailwindCSS – modernes Layouting, im Einsatz</li>
              <li>
                HTML / CSS / JavaScript – tiefes Verständnis, zertifiziert
              </li>
              <li>jQuery – legacy-kompatibel</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">🧑‍💻 Backend & Datenbanken</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>PHP / MySQL – zertifiziert, reale Webprojekte</li>
              <li>Node.js (Express) – in Kursprojekten eingesetzt</li>
              <li>Python (Flask, Datenverarbeitung)</li>
              <li>SQLite / PostgreSQL – einsatzbereit</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">⚙️ Systeme & Werkzeuge</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>VSCode, Neovim + tmux – produktiv im Einsatz</li>
              <li>Git & GitHub – mit Forks, Branches, PRs</li>
              <li>XAMPP / lokale Server – stabil in Langzeiteinsatz</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">🛡️ Betriebssysteme & Server</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Debian/Linux, FreeBSD – Shell-basiertes Admin-Wissen</li>
              <li>Windows (3.1 bis 11) – tiefe Kenntnisse</li>
              <li>MS Server / Netware – historisch</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">🎮 Spezialprojekte</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Game Modding – Avorion, Shiritori</li>
              <li>OpenSim Server – JSON-RPC-Analyse</li>
              <li>Reverse Engineering – SoftICE, OllyDbg, GDB</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b pb-1 mt-6">
          📜 Zertifizierungen (Auswahl)
        </h2>
        <ul className="list-disc ml-6 space-y-1 mt-2">
          <li>React (alfatraining, 2024) – Note: sehr gut</li>
          <li>JavaScript Developer (alfatraining, 2024) – Note: sehr gut</li>
          <li>
            Python & Machine Learning (alfatraining, 2020) – Note: sehr gut
          </li>
          <li>PHP & MySQL (alfatraining, 2022) – Note: sehr gut</li>
        </ul>
        <p className="mt-4 italic text-sm">
          Die vollständige Zertifikatsmappe steht auf Anfrage zur Verfügung.
        </p>
      </section>
    </div>
  );
};

export default TechPortfolio;
