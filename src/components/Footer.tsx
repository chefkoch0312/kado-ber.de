import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-slate-800 py-8 px-4 text-center text-sm text-white"
    >
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Kai Dombrowski – Entwickelt mit
        Leidenschaft in Berlin.
      </p>
      <a
        href="/imprint.html"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-transparent border-none text-white hover:text-slate-300 transition-colors text-xs mb-4 inline-block"
      >
        Impressum
      </a>
    </footer>
  );
};

export default Footer;
