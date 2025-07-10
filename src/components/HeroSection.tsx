import { Code, Brain, Gamepad2, ChevronDown } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
          Digitale Lösungen mit Klarheit und Substanz.
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-4">
          Full Stack Entwicklung & KI-Beratung – funktional, strukturiert und
          nachhaltig wirksam.
        </p>
        <p className="text-base text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ich entwickle Weblösungen, Datenstrukturen und maschinelles Lernen mit
          Blick für das Wesentliche: modular, verständlich und langfristig
          tragfähig. Technologie, die funktioniert, ohne kompliziert zu sein.
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-purple-500/20">
            <Code className="w-5 h-5 text-purple-400" />
            <span>Web-Entwicklung</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-blue-500/20">
            <Brain className="w-5 h-5 text-blue-400" />
            <span>Machine Learning</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-pink-500/20">
            <Gamepad2 className="w-5 h-5 text-pink-400" />
            <span>
              Game Dev{" "}
              <span className="text-xs text-slate-400 ml-1">(privat)</span>
            </span>
          </div>
        </div>
        <div className="animate-scroll-glow mt-4">
          <ChevronDown className="w-8 h-8 text-purple-400 mx-auto drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
