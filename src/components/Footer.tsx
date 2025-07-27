import { personalData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="py-6 text-center text-gray-500 text-sm">
      <p>&copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.</p>
    </footer>
  );
}