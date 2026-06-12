import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_ITEMS } from '../data/content';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-navy/5 bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_ITEMS.slice(0, -1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(e, item.href)}
                className="text-sm text-navy/70 transition-colors duration-200 hover:text-teal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#boka"
            onClick={(e) => handleNav(e, '#boka')}
            className="btn-primary hidden md:inline-flex"
          >
            Boka lektion
          </a>

          <button
            className="rounded-full p-2 transition-colors hover:bg-navy/5 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meny"
          >
            {menuOpen ? (
              <X className="h-5 w-5 text-navy" />
            ) : (
              <Menu className="h-5 w-5 text-navy" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 border-t border-navy/5 bg-cream py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(e, item.href)}
              className="border-b border-navy/5 px-1 py-3 text-sm text-navy/80 transition-colors last:border-0 hover:text-teal"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#boka"
            onClick={(e) => handleNav(e, '#boka')}
            className="btn-primary mt-3 w-full"
          >
            Boka lektion
          </a>
        </nav>
      </div>
    </header>
  );
}