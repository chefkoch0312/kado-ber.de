const InspirationSection: React.FC = () => (
  <section id="inspiration" className="py-20 px-4 bg-slate-900/40">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Inspiration & Entwicklung
      </h2>
      {/* <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
        Was mich fachlich und menschlich geprägt hat:
      </p> */}

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Buch-Empfehlungen
          </h3>
          <ul className="text-left text-slate-300 space-y-3 list-disc list-inside">
            <li>
              <strong>Clean Code – Robert C. Martin</strong>
              <br />
              <span className="text-sm text-slate-400">
                Die Bibel für verständlichen, wartbaren Code
              </span>
            </li>
            <li>
              <strong>Machine Learning kompakt – Andriy Burkov</strong>
              <br />
              <span className="text-sm text-slate-400">
                Komplexe Konzepte verständlich erklärt
              </span>
            </li>
            <li>
              <strong>Der tägliche Stoiker – Ryan Holiday</strong>
              <br />
              <span className="text-sm text-slate-400">
                Gelassenheit und Klarheit im digitalen Zeitalter
              </span>
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
            Eine vollständige Übersicht meiner Zertifikate steht hier als{" "}
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
);

export default InspirationSection;
