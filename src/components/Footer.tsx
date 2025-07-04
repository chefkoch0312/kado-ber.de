const Footer: React.FC = () => (
  <footer className="border-t border-slate-800 py-8 px-4 text-center text-sm text-slate-500">
    <p className="mb-2">
      &copy; {new Date().getFullYear()} Kai Dombrowski – Alle Rechte
      vorbehalten.
    </p>
    <div className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
      <strong>Impressum:</strong> Kai Dombrowski · Triftstr. 3 · 13585 Berlin ·
      <br className="sm:hidden" />
      Telefon: +49 176 60873086 · E-Mail: impressum@kado-ber.de
      <br />
      Diese Seite ist ein privates, nicht-kommerzielles Angebot gemäß § 5 TMG.
    </div>
  </footer>
);

export default Footer;
