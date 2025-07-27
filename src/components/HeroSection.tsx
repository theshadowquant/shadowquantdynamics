import { useState, useEffect } from 'react';
import { personalData } from '@/lib/data';
import ParticleBackground from './ParticleBackground';

export function HeroSection() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentRole = personalData.roles[roleIndex];
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const pauseDuration = 2000;

    const handleTyping = () => {
      if (isErasing) {
        if (text.length > 0) {
          setText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setIsErasing(false);
          setRoleIndex((prev) => (prev + 1) % personalData.roles.length);
        }
      } else {
        if (text.length < currentRole.length) {
          setText((prev) => currentRole.substring(0, prev.length + 1));
        } else {
          setTimeout(() => setIsErasing(true), pauseDuration);
        }
      }
    };

    const timer = setTimeout(handleTyping, isErasing ? eraseSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [text, isErasing, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
      <ParticleBackground />
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="text-white">{personalData.name}</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold text-neon-cyan">
        <span className="text-glow">{text}</span>
        <span className="inline-block w-1 h-8 md:h-10 ml-1 bg-neon-cyan animate-blink align-bottom"></span>
      </h2>
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
        Based in {personalData.location}. {personalData.bio}.
      </p>
    </section>
  );
}