import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  return (
    <Section id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neon-pink">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}