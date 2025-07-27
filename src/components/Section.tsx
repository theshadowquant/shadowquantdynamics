import { useRef, ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function Section({ children, id, className }: SectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn('min-h-screen w-full flex flex-col justify-center py-20 px-4 md:px-8',
        'fade-in-section',
        { 'is-visible': isVisible },
        className
      )}
    >
      <div className="max-w-5xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}