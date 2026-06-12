import logoUrl from '../assets/langflologo.png';

interface LogoProps {
  className?: string;
  tone?: 'dark' | 'light';
}

/**
 * Langflos ordmärke (transparent PNG).
 * tone="light" lägger en ljus bakgrundsplatta bakom loggan så den syns
 * på mörka sektioner (loggans text är mörk i originalet).
 */
export default function Logo({ className = '', tone = 'dark' }: LogoProps) {
  return (
    <a href="#hem" className={`group inline-flex items-center ${className}`}>
      {tone === 'light' ? (
        <span className="inline-flex items-center bg-paper px-3 py-2">
          <img
            src={logoUrl}
            alt="Langflo"
            className="h-9 w-auto object-contain md:h-10"
          />
        </span>
      ) : (
        <img
          src={logoUrl}
          alt="Langflo"
          className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80 md:h-12"
        />
      )}
    </a>
  );
}