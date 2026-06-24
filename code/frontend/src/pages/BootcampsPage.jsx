import React, { useState, useEffect } from 'react';
import { GraduationCap, Clock, Calendar, DollarSign, Users, Award, Search, CheckCircle } from 'lucide-react';
import Header from '../components/Header.jsx';

function BootcampsPage() {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchBootcamps = async () => {
      try {
        const response = await fetch('/data/bootcamps.json');
        const data = await response.json();
        setBootcamps(data);
      } catch (error) {
        console.error('Error fetching bootcamps:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBootcamps();
  }, []);

  const categories = ['All', 'AWS', 'Azure', 'GCP', 'Infrastructure as Code', 'Container Orchestration'];

  const filteredBootcamps = bootcamps.filter(bootcamp => {
    const matchesSearch = bootcamp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bootcamp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || bootcamp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AWS': return 'bg-[#FF9900] text-white';
      case 'Azure': return 'bg-[#0078D4] text-white';
      case 'GCP': return 'bg-[#4285F4] text-white';
      case 'Infrastructure as Code': return 'bg-[#7B42BC] text-white';
      case 'Container Orchestration': return 'bg-[#326CE5] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />

      {/* Header - Silver Disco */}
      <div className="silver-disco-bg text-white pt-28 pb-16 min-h-[280px] flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap size={28} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold silver-text">DevOps Bootcamps</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Intensive, hands-on training programs designed to fast-track your DevOps career. 
            Learn from industry experts and get certified.
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
                placeholder="Search bootcamps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Bootcamps Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E3A8A]"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBootcamps.map(bootcamp => (
              <div key={bootcamp.id} className="silver-card rounded-xl overflow-hidden min-h-[600px] flex flex-col">
                <div className="h-56 overflow-hidden relative flex-shrink-0">
                  <img 
                    src={bootcamp.mainImage} 
                    alt={bootcamp.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 rounded-lg text-sm font-bold ${getCategoryColor(bootcamp.category)}`}>
                      {bootcamp.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">{bootcamp.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{bootcamp.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={18} className="text-[#1E3A8A]" />
                      <span>{bootcamp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={18} className="text-[#1E3A8A]" />
                      <span>{new Date(bootcamp.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign size={18} className="text-[#10B981]" />
                      <span className="font-semibold text-[#10B981]">{bootcamp.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={18} className="text-[#1E3A8A]" />
                      <span>{bootcamp.format}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[#111827] mb-3">What You'll Learn:</h4>
                    <ul className="space-y-2">
                      {bootcamp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 mb-6 p-3 bg-[#F59E0B]/10 rounded-lg">
                    <Award size={20} className="text-[#F59E0B]" />
                    <span className="text-sm font-medium text-[#111827]">{bootcamp.certification}</span>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <button className="flex-1 bg-gradient-to-r from-[#1E3A8A] to-[#0f3460] text-white py-3 rounded-lg font-semibold hover:from-[#1e40af] hover:to-[#1E3A8A] transition-all">
                      Enroll Now
                    </button>
                    <button className="px-6 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] rounded-lg font-semibold hover:bg-[#1E3A8A]/5 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredBootcamps.length === 0 && !loading && (
          <div className="text-center py-20">
            <GraduationCap size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-600">No bootcamps found</h3>
            <p className="text-gray-400">Try adjusting your filters</p>
          </div>
        )}
      </div>

      {/* Why Choose Our Bootcamps */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center">Why Choose Our Bootcamps?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from certified professionals with real-world experience in cloud and DevOps.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Certification Prep</h3>
              <p className="text-gray-600">
                All bootcamps include preparation materials for industry-recognized certifications.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#7B42BC] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-2">Hands-On Labs</h3>
              <p className="text-gray-600">
                Practice with real cloud environments and build production-ready projects.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BootcampsPage;
