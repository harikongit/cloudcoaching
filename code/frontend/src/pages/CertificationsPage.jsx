import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Clock, DollarSign, BookOpen, ExternalLink, Filter, Search, Cloud, Menu, X } from 'lucide-react';

function CertificationsPage() {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch('/data/certifications.json');
        const data = await response.json();
        setCertifications(data);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCertifications();
  }, []);

  const categories = ['All', 'AWS', 'Azure', 'GCP', 'Infrastructure as Code', 'Container Orchestration', 'Containerization'];
  const difficulties = ['All', 'Associate', 'Professional', 'Expert'];

  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || cert.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || cert.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Associate': return 'bg-green-100 text-green-800';
      case 'Professional': return 'bg-blue-100 text-blue-800';
      case 'Expert': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AWS': return 'bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/20';
      case 'Azure': return 'bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/20';
      case 'GCP': return 'bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20';
      default: return 'bg-[#7B42BC]/10 text-[#7B42BC] border-[#7B42BC]/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Navigation */}
      <nav className="bg-[#1E3A8A] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center">
                <Cloud className="text-white" size={18} />
              </div>
              <span className="font-bold text-lg">CloudCoaching</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="hover:text-[#10B981] transition-colors">Home</Link>
              <Link to="/roadmaps" className="hover:text-[#10B981] transition-colors">Roadmaps</Link>
              <Link to="/tools" className="hover:text-[#10B981] transition-colors">DevOps Tools</Link>
              <Link to="/certifications" className="text-[#10B981] font-medium">Certifications</Link>
              <Link to="/ai-implementation" className="hover:text-[#10B981] transition-colors">AI Implementation</Link>
              <Link to="/bootcamps" className="hover:text-[#10B981] transition-colors">Bootcamps</Link>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1E3A8A] border-t border-white/10 px-4 py-4 space-y-3">
            <Link to="/" className="block hover:text-[#10B981]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/roadmaps" className="block hover:text-[#10B981]" onClick={() => setMobileMenuOpen(false)}>Roadmaps</Link>
            <Link to="/tools" className="block hover:text-[#10B981]" onClick={() => setMobileMenuOpen(false)}>DevOps Tools</Link>
            <Link to="/certifications" className="block text-[#10B981]" onClick={() => setMobileMenuOpen(false)}>Certifications</Link>
            <Link to="/ai-implementation" className="block hover:text-[#10B981]" onClick={() => setMobileMenuOpen(false)}>AI Implementation</Link>
            <Link to="/bootcamps" className="block hover:text-[#10B981]" onClick={() => setMobileMenuOpen(false)}>Bootcamps</Link>
          </div>
        )}
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#7B42BC] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Award size={40} className="text-[#F59E0B]" />
            <h1 className="text-4xl font-bold">Cloud Certifications</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Validate your cloud and DevOps skills with industry-recognized certifications from AWS, Azure, GCP, and more.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map(cert => (
              <div key={cert.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={cert.mainImage} 
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(cert.difficulty)}`}>
                      {cert.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-2">{cert.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      <span>{cert.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <DollarSign size={16} />
                      <span>{cert.cost}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen size={16} />
                      <span>{cert.provider}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.topics.slice(0, 4).map((topic, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                    {cert.topics.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        +{cert.topics.length - 4} more
                      </span>
                    )}
                  </div>

                  <a 
                    href={cert.resources[0]?.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#1E3A8A] text-white py-3 rounded-lg font-medium hover:bg-[#1e40af] transition-colors"
                  >
                    <ExternalLink size={18} />
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredCertifications.length === 0 && !loading && (
          <div className="text-center py-20">
            <Award size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600">No certifications found</h3>
            <p className="text-gray-400">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificationsPage;
