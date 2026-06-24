import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // On home page: transparent when at top, solid when scrolled
  // On other pages: always solid background
  const headerBg = isHomePage
    ? scrolled
      ? 'bg-[#1E3A8A]/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'bg-[#1E3A8A] shadow-lg';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center">
              <Cloud className="text-white" size={24} />
            </div>
            <span className="text-white font-bold text-xl">CloudCoaching</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`transition-colors font-medium ${
                isActive('/') 
                  ? 'text-[#10B981]' 
                  : 'text-white hover:text-[#10B981]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/roadmaps" 
              className={`transition-colors font-medium ${
                isActive('/roadmaps') 
                  ? 'text-[#10B981]' 
                  : 'text-white hover:text-[#10B981]'
              }`}
            >
              Roadmaps
            </Link>
            <Link 
              to="/tools" 
              className={`transition-colors font-medium ${
                isActive('/tools') 
                  ? 'text-[#10B981]' 
                  : 'text-white hover:text-[#10B981]'
              }`}
            >
              DevOps Tools
            </Link>
            <Link 
              to="/certifications" 
              className={`transition-colors font-medium ${
                isActive('/certifications') 
                  ? 'text-[#10B981]' 
                  : 'text-white hover:text-[#10B981]'
              }`}
            >
              Certifications
            </Link>
            <Link 
              to="/ai-implementation" 
              className={`transition-colors font-medium ${
                isActive('/ai-implementation') 
                  ? 'text-[#10B981]' 
                  : 'text-white hover:text-[#10B981]'
              }`}
            >
              AI Implementation
            </Link>
            <Link 
              to="/bootcamps" 
              className={`transition-colors font-medium ${
                isActive('/bootcamps') 
                  ? 'text-[#10B981]' 
                  : 'text-white hover:text-[#10B981]'
              }`}
            >
              Bootcamps
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E3A8A]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className={`block transition-colors font-medium ${
                isActive('/') ? 'text-[#10B981]' : 'text-white hover:text-[#10B981]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/roadmaps" 
              className={`block transition-colors font-medium ${
                isActive('/roadmaps') ? 'text-[#10B981]' : 'text-white hover:text-[#10B981]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmaps
            </Link>
            <Link 
              to="/tools" 
              className={`block transition-colors font-medium ${
                isActive('/tools') ? 'text-[#10B981]' : 'text-white hover:text-[#10B981]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              DevOps Tools
            </Link>
            <Link 
              to="/certifications" 
              className={`block transition-colors font-medium ${
                isActive('/certifications') ? 'text-[#10B981]' : 'text-white hover:text-[#10B981]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Certifications
            </Link>
            <Link 
              to="/ai-implementation" 
              className={`block transition-colors font-medium ${
                isActive('/ai-implementation') ? 'text-[#10B981]' : 'text-white hover:text-[#10B981]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Implementation
            </Link>
            <Link 
              to="/bootcamps" 
              className={`block transition-colors font-medium ${
                isActive('/bootcamps') ? 'text-[#10B981]' : 'text-white hover:text-[#10B981]'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Bootcamps
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
