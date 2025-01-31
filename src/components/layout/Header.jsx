// Header.jsx
import React from 'react';
import { Menu, X, Code2, Terminal, Github, Linkedin } from 'lucide-react';
import { NavLink } from './NavLink.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-slate-900/80 backdrop-blur-md border-slate-700/30">
      <nav className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo et Nom */}
          <NavLink 
            href="/" 
            className="flex items-center space-x-2 group"
          >
            <Code2 className="w-8 h-8 transition-colors duration-300 text-cyan-400 group-hover:text-cyan-300" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text">
                Saâd Larabi
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <NavLink 
              href="/"
              className="flex items-center space-x-1 font-medium transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              <span>Home</span>
            </NavLink>
            <NavLink 
              href="/about"
              className="flex items-center space-x-1 font-medium transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              <Terminal className="w-4 h-4" />
              <span>About</span>
            </NavLink>
            <NavLink 
              href="/projects"
              className="flex items-center space-x-1 font-medium transition-all duration-300 text-slate-300 hover:text-cyan-400"
            >
              <Code2 className="w-4 h-4" />
              <span>Projects</span>
            </NavLink>
            
            <NavLink 
              href="/contact"
              className="px-4 py-2 transition-all duration-300 border rounded-lg bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-500/50"
            >
              Let's Talk
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 transition-colors duration-300 rounded-lg md:hidden text-slate-300 hover:bg-slate-700/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 border-t md:hidden top-20 bg-slate-900/95 backdrop-blur-lg border-slate-700/30">
            <div className="flex flex-col p-4 space-y-1">
              <NavLink 
                href="/"
                className="flex items-center px-4 py-3 space-x-2 font-medium transition-all duration-300 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Home</span>
              </NavLink>
              <NavLink 
                href="/about"
                className="flex items-center px-4 py-3 space-x-2 font-medium transition-all duration-300 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Terminal className="w-4 h-4" />
                <span>Skills</span>
              </NavLink>
              <NavLink 
                href="/projects"
                className="flex items-center px-4 py-3 space-x-2 font-medium transition-all duration-300 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Code2 className="w-4 h-4" />
                <span>Projects</span>
              </NavLink>
              <div className="h-px my-2 bg-slate-700/50"></div>
              
              <NavLink 
                href="/contact"
                className="flex items-center justify-center px-4 py-3 space-x-2 font-medium transition-all duration-300 border rounded-lg text-cyan-400 bg-cyan-500/20 border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-500/50"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Talk
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;