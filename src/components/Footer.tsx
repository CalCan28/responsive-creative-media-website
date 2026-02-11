import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Run Horse Run</h3>
            <p className="text-[#6B7280] mb-4">
              Creative media production company specializing in video, film, and digital experiences.
            </p>
            <p className="text-[#6B7280]">Your Vision, Our Motion</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:calvin@run-horse-run.com"
                className="flex items-center text-[#6B7280] hover:text-[#0EA5E9] transition-colors"
              >
                <Mail size={18} className="mr-2" />
                calvin@run-horse-run.com
              </a>
              <p className="text-[#6B7280]">run-horse-run.com</p>
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#6B7280]/20 text-center text-[#6B7280]">
          <p>&copy; 2026 Run Horse Run. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}