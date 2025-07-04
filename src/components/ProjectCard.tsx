import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
    <h3 className="text-xl font-semibold mb-3 text-purple-400">
      {project.title}
    </h3>
    <p className="text-slate-300 mb-4 text-sm leading-relaxed">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-slate-700/50 rounded-full text-xs font-medium text-slate-300"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3">
      <a
        href={project.github}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-purple-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-4 h-4" />
        Code
      </a>
      {project.demo && project.demo !== "#" && (
        <a
          href={project.demo}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-pink-400 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
