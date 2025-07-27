import { Section } from './Section';
import { skills } from '@/lib/data';

export function SkillsSection() {
  return (
    <Section id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neon-pink">Core Competencies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="glass p-4 rounded-lg text-center font-semibold transition-all duration-300 hover:scale-105 hover:neon-glow-cyan">
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}