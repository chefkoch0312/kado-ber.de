import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-black py-8 px-4 text-center text-sm text-white border-t border-gray-700"
    >
      <p className="mb-2">
        &copy; {new Date().getFullYear()} Kai Dombrowski
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
