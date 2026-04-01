import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy dark:bg-black text-white py-12 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-mono font-bold text-cyan bg-cyan/10 px-2 py-1 rounded border border-cyan/30">&lt;M/&gt;</span>
              <h3 className="text-white text-2xl">Mastewal</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Product Designer & Developer creating beautiful, functional digital experiences.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <Code2 size={12} className="text-cyan" />
              <span>Designed in Figma. Built in React.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-200 dark:text-gray-400 hover:text-cyan transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-200 dark:text-gray-400 hover:text-cyan transition-colors">
                About
              </Link>
              <Link to="/work" className="text-gray-200 dark:text-gray-400 hover:text-cyan transition-colors">
                Work
              </Link>
              <Link to="/contact" className="text-gray-200 dark:text-gray-400 hover:text-cyan transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="mailto:mastewal@example.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mastewal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/mastewal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-cyan transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>&copy; {currentYear} Mastewal. All rights reserved.</p>
          <p className="text-xs font-mono text-gray-600">v1.0.0</p>
        </div>
      </div>
    </footer>
  );
}