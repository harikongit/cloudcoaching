import React from 'react';
import RoadmapViewer from '../components/RoadmapViewer.jsx';
import { Map, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Header from '../components/Header.jsx';

function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />

      {/* Page Header */}
      <section className="bg-[#1E3A8A] py-16 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Map className="text-white" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Learning Roadmaps</h1>
          </div>
          <p className="text-white/80 text-lg max-w-2xl">
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