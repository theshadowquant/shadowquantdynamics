import { Section } from './Section';
import { personalData } from '@/lib/data';

export function AboutSection() {
  return (
    <Section id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neon-pink">About Me</h2>
      <div className="glass p-8 rounded-lg max-w-3xl mx-auto text-center md:text-left">
        <p className="text-lg leading-relaxed">
          Hello! I'm {personalData.name}, a passionate and detail-oriented data professional from {personalData.location}. My journey into the world of data began with a fascination for uncovering patterns and stories hidden within complex datasets.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          I specialize in building end-to-end machine learning pipelines, from data ingestion and preprocessing to model deployment and monitoring. My goal is to leverage AI to solve real-world problems and drive business value through data-driven decisions.
        </p>
      </div>
    </Section>
  );
}