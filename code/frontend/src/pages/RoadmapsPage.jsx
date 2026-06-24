import React from 'react';
import RoadmapViewer from '../components/RoadmapViewer.jsx';
import { Map, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Header from '../components/Header.jsx';

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

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl">CloudCoaching</span>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E3A8A] transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E3A8A] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E3A8A] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1E3A8A] transition-colors">
                <Mail size={20} />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CloudCoaching. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default RoadmapsPage;