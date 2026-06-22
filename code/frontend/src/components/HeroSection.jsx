import React from 'react';
import { Link } from 'react-router-dom';
import { Map, Wrench, ChevronRight, Menu, X, Award, Sparkles, Cloud } from 'lucide-react';

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTk3Nzh8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MHwwfHx8MTc4MjA5MzM5Mnww&ixlib=rb-4.1.0&q=80&w=1920')`
        }}
      />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50">
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
                className="text-white hover:text-[#10B981] transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/roadmaps" 
                className="text-white hover:text-[#10B981] transition-colors font-medium"
              >
                Roadmaps
              </Link>
              <Link 
                to="/tools" 
                className="text-white hover:text-[#10B981] transition-colors font-medium"
              >
                DevOps Tools
              </Link>
              <Link 
                to="/certifications" 
                className="text-white hover:text-[#10B981] transition-colors font-medium"
              >
                Certifications
              </Link>
              <Link 
                to="/ai-implementation" 
                className="text-white hover:text-[#10B981] transition-colors font-medium"
              >
                AI Implementation
              </Link>
              <Link 
                to="/bootcamps" 
                className="text-white hover:text-[#10B981] transition-colors font-medium"
              >
                Bootcamps
              </Link>
              <Link 
                to="/roadmaps" 
                className="bg-[#10B981] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#059669] transition-colors"
              >
                Get Started
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
          <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-[#10B981] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/roadmaps" 
                className="block text-white hover:text-[#10B981] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Roadmaps
              </Link>
              <Link 
                to="/tools" 
                className="block text-white hover:text-[#10B981] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                DevOps Tools
              </Link>
              <Link 
                to="/certifications" 
                className="block text-white hover:text-[#10B981] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Certifications
              </Link>
              <Link 
                to="/ai-implementation" 
                className="block text-white hover:text-[#10B981] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI Implementation
              </Link>
              <Link 
                to="/bootcamps" 
                className="block text-white hover:text-[#10B981] transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Bootcamps
              </Link>
              <Link 
                to="/roadmaps" 
                className="block bg-[#10B981] text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-[#059669] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Cloud size={18} className="text-[#10B981]" />
            <span className="text-white/90 text-sm font-medium">AWS | Azure | GCP | Terraform | Kubernetes</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fadeIn">
            Master DevOps & Cloud Infrastructure
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Your complete learning platform for DevOps tools, cloud certifications, and infrastructure automation. 
            From Terraform to Kubernetes, AWS to Azure - accelerate your cloud career with structured roadmaps and AI-powered learning.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/roadmaps"
              className="flex items-center gap-2 bg-[#1E3A8A] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1e40af] transition-all transform hover:scale-105 shadow-lg"
            >
              <Map size={20} />
              Explore Roadmaps
              <ChevronRight size={20} />
            </Link>
            <Link 
              to="/certifications"
              className="flex items-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg"
            >
              <Award size={20} />
              View Certifications
            </Link>
            <Link 
              to="/ai-implementation"
              className="flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <Sparkles size={20} />
              AI-Powered Learning
            </Link>
          </div>

          {/* Cloud Provider Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-[#FF9900] font-bold">AWS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-[#0078D4] font-bold">Azure</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-[#4285F4] font-bold">GCP</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-[#7B42BC] font-bold">Terraform</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-[#326CE5] font-bold">Kubernetes</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-4 gap-6 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">6+</div>
              <div className="text-white/70 text-sm">Cloud Roadmaps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
              <div className="text-white/70 text-sm">DevOps Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">8+</div>
              <div className="text-white/70 text-sm">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">5+</div>
              <div className="text-white/70 text-sm">Bootcamps</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
