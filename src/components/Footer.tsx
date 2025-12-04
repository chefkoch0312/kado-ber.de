import { useState } from "react";

const Footer: React.FC = () => {
  const [isImprintVisible, setIsImprintVisible] = useState(false);

  const toggleImprint = () => {
    setIsImprintVisible(!isImprintVisible);
  };

  return (
    <footer className="border-t border-slate-800 py-8 px-4 text-center text-sm text-white">
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Kai Dombrowski – Entwickelt mit
        Leidenschaft in Berlin.
      </p>
      <button
        onClick={toggleImprint}
        className="bg-transparent border-none text-white hover:text-slate-300 transition-colors text-xs mb-4"
      >
        Impressum
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isImprintVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-xs text-white leading-relaxed max-w-md mx-auto pt-4">
          Kai Dombrowski · Triftstr. 3 · 13585 Berlin ·
          <br />
          Telefon: +49 176 60873086 · E-Mail: impressum@kado-ber.de
          <br />
          Diese Seite ist ein privates, nicht-kommerzielles Angebot gemäß § 5
          TMG.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
