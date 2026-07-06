import React from 'react';
import ToolLibrary from '../components/ToolLibrary.jsx';
import { Wrench } from 'lucide-react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />

      {/* Page Header - Silver Disco */}
      <section className="silver-disco-bg text-white pt-28 pb-16 min-h-[280px] flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg">
              <Wrench className="text-white" size={28} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold silver-text">Tool Library</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Browse our comprehensive collection of learning tools. Filter by category and skill level 
            to find the perfect resources for your learning journey.
          </p>
        </div>
      </section>

      {/* Tool Library */}
      <ToolLibrary />

      <Footer />
    </div>
  );
}

export default ToolsPage;