import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass rounded-lg overflow-hidden group flex flex-col">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-neon-cyan mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="bg-gray-700/50 text-neon-pink text-xs font-semibold px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-neon-cyan font-semibold inline-flex items-center group-hover:underline">
          View Project <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </div>
  );
}