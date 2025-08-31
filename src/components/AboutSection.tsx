const AboutSection: React.FC = () => (
  <section id="about" className="py-20 px-4">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Über mich
        </h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Alles begann mit Neugier und einem alten Rechner, der zu langsam war,
          um einfach nur genutzt zu werden. Ich wollte verstehen, gestalten,
          steuern. Heute ist aus dieser Neugier ein Weg geworden, der mich durch
          viele Sprachen, Systeme und Projekte geführt hat.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Über die Jahre habe ich gelernt, dass gute Software mehr ist als
          funktionierender Code. Sie muss auch verstanden, gewartet und
          weiterentwickelt werden können.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed mb-4">
          Ich bin kein Fan von Buzzwords, aber ich glaube an Klarheit, sauberen
          Code und das Zusammenspiel von Logik und Intuition. Ob Webanwendung,
          Schnittstelle oder Idee auf dem Papier: Ich denke sie so, wie ich sie
          selbst nutzen würde.
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          Mein Ansatz? Pragmatismus mit klarer Haltung – und manchmal auch eine
          stille Eleganz, die man nicht sieht, aber spürt.
        </p>
      </div>
      <div className="bg-slate-800/30 p-8 rounded-2xl border border-purple-500/20">
        <h3 className="text-xl font-semibold mb-4 text-purple-400">
          Technologien & Werkzeuge
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
            VSCode, Git, TMUX, XAMPP, Docker, NetBeans, Eclipse, (Neo)Vim, Make/CMake, RegEx, Qt6
          </div>
          <div>
            <span className="font-semibold text-white">Betriebssysteme:</span>
            <br />
            Windows, Debian Linux, FreeBSD
          </div>
          <div>
            <span className="font-semibold text-white">
              Machine Learning & AI:
            </span>
            <br />
            Python (pandas, scikit-learn, NumPy, matplotlib, Jupyter),
            <br />
            ComfyUI, Diffusers, Hugging Face, Prompt Engineering, SDXL
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
