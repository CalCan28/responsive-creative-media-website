import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logoImage from 'figma:asset/4bcb2727006a9444c40cc4316354782dc08d22d8.png';

interface NavigationProps {
  isTransparent?: boolean;
}

export function Navigation({ isTransparent = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  const shouldBeTransparent = isTransparent && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldBeTransparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Run Horse Run Logo" 
              className={`h-12 w-auto object-contain transition-all ${
                shouldBeTransparent ? 'brightness-0 invert' : ''
              }`}
            />
            <span
              className={`text-xl font-semibold transition-colors ${
                shouldBeTransparent ? 'text-white' : 'text-[#000000]'
              }`}
            >
              Run Horse Run
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-[#0EA5E9] ${
                  shouldBeTransparent ? 'text-white' : 'text-[#000000]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-[#1E3A8A] hover:bg-[#0EA5E9] text-white transition-colors"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${shouldBeTransparent ? 'text-white' : 'text-[#000000]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#6B7280]/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-[#000000] hover:text-[#0EA5E9] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full bg-[#1E3A8A] hover:bg-[#0EA5E9] text-white"
              asChild
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}