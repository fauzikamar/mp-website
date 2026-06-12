import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'INDUSTRIES', href: '/industries' },
    { label: 'CERTIFICATIONS', href: '/certifications' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          {/* Fallback mark (shown only if image fails to load) */}
          {logoFailed && (
            <div className="h-12 w-12 flex items-center justify-center bg-[#dc2626] text-white font-extrabold">
              MP
            </div>
          )}

          {/* Main logo image */}
          {!logoFailed && (
            <img
              src="https://lh3.googleusercontent.com/d/1ie23Ph5TqBDD6665cQBT31fBw6ZfFApQ
"
              alt="Magnitude Power Logo"
              className="h-12 w-auto"
              onError={() => setLogoFailed(true)}
            />
          )}

          {/* Text label */}
          <span className="text-[#1a1a1a] inline sm:hidden">MAGNITUDE POWER</span>
          <span className="text-[#1a1a1a] hidden sm:inline">MAGNITUDE POWER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#dc2626] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-semibold text-slate-700 hover:text-[#dc2626] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
