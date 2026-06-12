import logoUrl from '../assets/langflologo.png';

interface LogoProps {
  className?: string;
  tone?: 'dark' | 'light';
}

/**
 * Langflos ordmärke (symbol + text i samma transparenta PNG).
 * Större storlek än tidigare. Transparent bakgrund → funkar ljus och mörk.
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#hem" className={`group inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Langflo"
        className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-12"
      />
    </a>
  );
}