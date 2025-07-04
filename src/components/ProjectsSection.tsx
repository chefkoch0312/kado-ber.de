import { Github } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-20 px-4 bg-slate-900/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Meine Projekte
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-slate-400 mb-4">
          Weitere Informationen und Projekte findest du auf meinem GitHub-Profil
        </p>
        <a
          href="https://github.com/chefkoch0312"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
          GitHub besuchen
        </a>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
