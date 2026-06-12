import logoUrl from '../assets/langflologo.png';

interface LogoProps {
  className?: string;
  // 'light' = logo shown on a dark background (invert to white)
  // 'dark'  = logo shown on a light background (original dark ink)
  tone?: 'dark' | 'light';
}

export default function Logo({ className = '', tone = 'dark' }: LogoProps) {
  return (
    <a href="#hem" className={`group inline-flex items-center ${className}`}>
      <img
        src={logoUrl}
        alt="Langflo"
        className={`h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-75 md:h-10 ${
          tone === 'light' ? '[filter:brightness(0)_invert(1)]' : ''
        }`}
      />
    </a>
  );
}