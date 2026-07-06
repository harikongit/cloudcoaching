import React from 'react';
import RoadmapViewer from '../components/RoadmapViewer.jsx';
import { Map } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />

      {/* Page Header - Silver Disco */}
      <section className="silver-disco-bg text-white pt-28 pb-16 min-h-[280px] flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#0f3460] rounded-xl flex items-center justify-center shadow-lg">
              <Map className="text-white" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold silver-text">Learning Roadmaps</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Explore our curated learning paths designed to take you from beginner to expert. 
            Each roadmap includes interactive animations and detailed step-by-step guidance.
          </p>
        </div>
      </section>

      {/* Roadmap Viewer */}
      <RoadmapViewer />

      <Footer />
    </div>
  );
}

export default RoadmapsPage;