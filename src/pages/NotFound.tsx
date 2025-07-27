import { Link } from "wouter";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-neon-pink text-glow">404</h1>
      <p className="text-2xl mt-4 mb-8">Page Not Found</p>
      <Link href="/">
        <a className="px-6 py-3 font-bold bg-neon-cyan text-black rounded hover:neon-glow-cyan transition-all">
          Return to Terminal
        </a>
      </Link>
    </div>
  );
}