import logoUrl from '../assets/langflologo.png';

interface LogoProps {
  className?: string;
  /** Behålls för API-kompatibilitet (footern skickar tone="light"), men
   *  loggan är ett färdigt ordmärke så vi visar samma bild i båda fallen. */
  tone?: 'dark' | 'light';
}

/**
 * Langflos ordmärke (symbol + text i samma bild).
 * Bilden ligger i src/assets/langflologo.png och importeras av Vite.
 */
export default function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#hem" className={`group inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Langflo"
        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] md:h-9"
      />
    </a>
  );
}