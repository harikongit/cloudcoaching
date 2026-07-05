import React, { useState } from 'react';
import { useAppContext } from '../App.jsx';
import { ChevronRight, ChevronDown, Clock, BookOpen, ExternalLink, AlertCircle, Map, CheckCircle } from 'lucide-react';

function RoadmapViewer() {
  const { roadmaps, loading } = useAppContext();
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);
  const [expandedSteps, setExpandedSteps] = useState({});
  const [error, setError] = useState(null);

  // Auto-select AWS DevOps Engineer Path on initial load
  React.useEffect(() => {
    if (roadmaps.length > 0 && !selectedRoadmap) {
      const awsRoadmap = roadmaps.find(r => r.id === '1');
      if (awsRoadmap) {
        setSelectedRoadmap(awsRoadmap);
      }
    }
  }, [roadmaps]);

  const handleSelectRoadmap = (roadmap) => {
    try {
      setSelectedRoadmap(roadmap);
      setExpandedSteps({});
      setError(null);
    } catch (err) {
      setError('Unable to load roadmap');
    }
  };

  const toggleStep = (stepId) => {
    setExpandedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-[#1E3A8A] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">Interactive Roadmaps</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Explore our curated learning paths with interactive 2D and 3D animations. 
            Visualize your journey from beginner to expert.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 max-w-2xl mx-auto">
            <AlertCircle className="text-red-500" size={24} />
            <span className="text-red-700 font-medium">{error}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Roadmap List */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-[#111827] mb-4 flex items-center gap-2">
              <Map size={20} className="text-[#1E3A8A]" />
              Available Roadmaps
            </h3>
            <div className="space-y-3">
              {roadmaps.map((roadmap) => (
                <button
                  key={roadmap.id}
                  onClick={() => handleSelectRoadmap(roadmap)}
                  className={`w-full text-left p-4 rounded-xl transition-all card-hover ${
                    selectedRoadmap?.id === roadmap.id
                      ? 'bg-[#1E3A8A] text-white shadow-lg'
                      : 'bg-[#F3F4F6] hover:bg-gray-200 text-[#111827]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <img 
                      src={roadmap.mainImage} 
                      alt={roadmap.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{roadmap.name}</h4>
                      <div className={`flex items-center gap-2 text-sm mt-1 ${
                        selectedRoadmap?.id === roadmap.id ? 'text-white/80' : 'text-[#6B7280]'
                      }`}>
                        <Clock size={14} />
                        <span>{roadmap.duration}</span>
                      </div>
                    </div>
                    <ChevronRight size={20} className={`flex-shrink-0 transition-transform ${
                      selectedRoadmap?.id === roadmap.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Roadmap Details */}
          <div className="lg:col-span-2">
            {selectedRoadmap ? (
              <div className="bg-[#F3F4F6] rounded-2xl p-6 animate-fadeIn">
                <div className="flex items-start gap-4 mb-6">
                  <img 
                    src={selectedRoadmap.mainImage} 
                    alt={selectedRoadmap.name}
                    className="w-20 h-20 rounded-xl object-cover shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-[#111827]">{selectedRoadmap.name}</h3>
                    <p className="text-[#6B7280] mt-1">{selectedRoadmap.description}</p>
                    <div className="flex items-center gap-4 mt-3 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-sm bg-[#1E3A8A]/10 text-[#1E3A8A] px-3 py-1 rounded-full">
                        <Clock size={14} />
                        {selectedRoadmap.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full">
                        <BookOpen size={14} />
                        {selectedRoadmap.difficulty}
                      </span>
                      {selectedRoadmap.documentationUrl && (
                        <a
                          href={selectedRoadmap.documentationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-full hover:bg-[#F59E0B]/20 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Official Docs
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Steps Timeline */}
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#1E3A8A]/20" />
                  
                  <div className="space-y-4">
                    {selectedRoadmap.steps.map((step, index) => (
                      <div key={step.id} className="relative pl-14 animate-slideIn" style={{ animationDelay: `${index * 0.1}s` }}>
                        {/* Step Number Circle */}
                        <div className="absolute left-3 w-6 h-6 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                          {index + 1}
                        </div>

                        <div 
                          className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md"
                          onClick={() => toggleStep(step.id)}
                        >
                          <div className="p-4 flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-[#111827]">{step.title}</h4>
                              <span className="text-sm text-[#6B7280] flex items-center gap-1 mt-1">
                                <Clock size={12} />
                                {step.duration}
                              </span>
                            </div>
                            <ChevronDown 
                              size={20} 
                              className={`text-[#6B7280] transition-transform ${
                                expandedSteps[step.id] ? 'rotate-180' : ''
                              }`}
                            />
                          </div>

                          {/* Expanded Content */}
                          {expandedSteps[step.id] && (
                            <div className="px-4 pb-4 border-t border-gray-100 pt-4 animate-fadeIn">
                              <p className="text-[#6B7280] mb-4">{step.description}</p>
                              
                              <div>
                                <h5 className="text-sm font-semibold text-[#111827] mb-2 flex items-center gap-2">
                                  <BookOpen size={14} />
                                  Resources
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                  {step.resources.map((resource, idx) => (
                                    <span 
                                      key={idx}
                                      className="inline-flex items-center gap-1 text-sm bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-full hover:bg-[#F59E0B]/20 transition-colors cursor-pointer"
                                    >
                                      <ExternalLink size={12} />
                                      {resource}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Completion Badge */}
                  <div className="relative pl-14 mt-4">
                    <div className="absolute left-3 w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <div className="bg-[#10B981]/10 rounded-xl p-4">
                      <p className="text-[#10B981] font-semibold">Complete the roadmap and earn your certificate!</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#F3F4F6] rounded-2xl p-12 text-center">
                <Map size={64} className="mx-auto text-[#6B7280] mb-4" />
                <h3 className="text-xl font-semibold text-[#111827] mb-2">Select a Roadmap</h3>
                <p className="text-[#6B7280]">
                  Choose a roadmap from the list to view its detailed learning path and resources.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadmapViewer;