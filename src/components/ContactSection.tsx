import { Mail, Phone, Github, Youtube } from "lucide-react";

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Lass uns in Kontakt bleiben
      </h2>
      <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
        Du hast Fragen, Feedback oder ein Projekt im Kopf? Ich freue mich über
        deine Nachricht. Du erreichst mich ganz unkompliziert über folgende
        Kanäle:
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
);

export default ContactSection;
