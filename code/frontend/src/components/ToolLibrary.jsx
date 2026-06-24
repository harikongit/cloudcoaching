import React, { useState, useMemo } from 'react';
import { useAppContext } from '../App.jsx';
import { Search, Filter, Bookmark, BookmarkCheck, Star, X, Share2, ExternalLink, AlertCircle } from 'lucide-react';

function ToolLibrary() {
  const { tools, loading, bookmarkedTools, toggleBookmark } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('All');
  const [selectedTool, setSelectedTool] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);
  const [bookmarkToast, setBookmarkToast] = useState(null);

  // Extract unique categories and skill levels
  const categories = useMemo(() => {
    const cats = new Set();
    tools.forEach(tool => tool.categories.forEach(cat => cats.add(cat)));
    return ['All', ...Array.from(cats)];
  }, [tools]);

  const skillLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter tools based on search and filters
  const filteredTools = useMemo(() => {
    let result = tools;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter(tool => tool.categories.includes(selectedCategory));
    }

    if (selectedSkillLevel !== 'All') {
      result = result.filter(tool => tool.skillLevel === selectedSkillLevel);
    }

    setShowNoResults(result.length === 0 && (searchQuery.trim() || selectedCategory !== 'All' || selectedSkillLevel !== 'All'));
    return result;
  }, [tools, searchQuery, selectedCategory, selectedSkillLevel]);

  const handleBookmark = (toolId, toolName) => {
    toggleBookmark(toolId);
    const isBookmarked = bookmarkedTools.includes(toolId);
    setBookmarkToast({
      message: isBookmarked ? `Removed "${toolName}" from bookmarks` : `Tool "${toolName}" bookmarked`,
      type: isBookmarked ? 'remove' : 'add'
    });
    setTimeout(() => setBookmarkToast(null), 3000);
  };

  const handleShare = (tool) => {
    if (navigator.share) {
      navigator.share({
        title: tool.name,
        text: tool.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setBookmarkToast({ message: 'Link copied to clipboard!', type: 'add' });
      setTimeout(() => setBookmarkToast(null), 3000);
    }
  };

  if (loading) {
    return (
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="w-12 h-12 border-4 border-[#1E3A8A] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111827] mb-4">Tool Library</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Access our comprehensive library of tools categorized by subject and skill level. 
            Find the perfect resources to enhance your learning journey.
          </p>
        </div>

        {/* Toast Notification */}
        {bookmarkToast && (
          <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 animate-slideIn ${
            bookmarkToast.type === 'add' ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
          }`}>
            {bookmarkToast.type === 'add' ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
            <span>{bookmarkToast.message}</span>
          </div>
        )}

        {/* Search and Filters */}
        <div className="silver-card rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search tools by name, description, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] appearance-none bg-white cursor-pointer min-w-[160px]"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Skill Level Filter */}
            <div className="relative">
              <select
                value={selectedSkillLevel}
                onChange={(e) => setSelectedSkillLevel(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 focus:border-[#1E3A8A] appearance-none bg-white cursor-pointer min-w-[160px]"
              >
                {skillLevels.map(level => (
                  <option key={level} value={level}>{level === 'All' ? 'All Levels' : level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory !== 'All' || selectedSkillLevel !== 'All' || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
              <span className="text-sm text-[#6B7280]">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 text-sm bg-[#1E3A8A]/10 text-[#1E3A8A] px-3 py-1 rounded-full">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:text-[#1E3A8A]/70">
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1 text-sm bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} className="hover:text-[#10B981]/70">
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedSkillLevel !== 'All' && (
                <span className="inline-flex items-center gap-1 text-sm bg-[#F59E0B]/10 text-[#F59E0B] px-3 py-1 rounded-full">
                  {selectedSkillLevel}
                  <button onClick={() => setSelectedSkillLevel('All')} className="hover:text-[#F59E0B]/70">
                    <X size={14} />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* No Results Message */}
        {showNoResults && (
          <div className="text-center py-12">
            <AlertCircle size={48} className="mx-auto text-[#6B7280] mb-4" />
            <h3 className="text-xl font-semibold text-[#111827] mb-2">No tools found</h3>
            <p className="text-[#6B7280]">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <div 
              key={tool.id}
              className="silver-card rounded-2xl overflow-hidden animate-fadeIn cursor-pointer min-h-[380px] flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedTool(tool)}
            >
              <div className="relative flex-shrink-0">
                <img 
                  src={tool.mainImage} 
                  alt={tool.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookmark(tool.id, tool.name);
                  }}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                    bookmarkedTools.includes(tool.id)
                      ? 'bg-[#F59E0B] text-white'
                      : 'bg-white/90 text-gray-600 hover:bg-white'
                  }`}
                >
                  {bookmarkedTools.includes(tool.id) ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                </button>
                <span className={`absolute bottom-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${
                  tool.skillLevel === 'Beginner' ? 'bg-green-500 text-white' :
                  tool.skillLevel === 'Intermediate' ? 'bg-yellow-500 text-white' :
                  'bg-red-500 text-white'
                }`}>
                  {tool.skillLevel}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#111827] mb-2">{tool.name}</h3>
                <p className="text-[#6B7280] text-sm mb-4 line-clamp-2 flex-grow">{tool.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1">
                    <Star className="text-[#F59E0B] fill-[#F59E0B]" size={16} />
                    <span className="font-semibold text-[#111827]">{tool.rating}</span>
                    <span className="text-[#6B7280] text-sm">({tool.reviews})</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tool.categories.slice(0, 2).map(cat => (
                      <span key={cat} className="text-xs bg-[#1E3A8A]/10 text-[#1E3A8A] px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tool Details Modal */}
        {selectedTool && (
          <div 
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTool(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedTool.mainImage} 
                  alt={selectedTool.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedTool(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#111827]">{selectedTool.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <Star className="text-[#F59E0B] fill-[#F59E0B]" size={18} />
                      <span className="font-semibold">{selectedTool.rating}</span>
                      <span className="text-[#6B7280]">({selectedTool.reviews} reviews)</span>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold px-4 py-2 rounded-full ${
                    selectedTool.skillLevel === 'Beginner' ? 'bg-green-100 text-green-700' :
                    selectedTool.skillLevel === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {selectedTool.skillLevel}
                  </span>
                </div>

                <p className="text-[#6B7280] mb-6">{selectedTool.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-[#111827] mb-3">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.categories.map(cat => (
                      <span key={cat} className="bg-[#1E3A8A]/10 text-[#1E3A8A] px-4 py-2 rounded-lg">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleBookmark(selectedTool.id, selectedTool.name)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                      bookmarkedTools.includes(selectedTool.id)
                        ? 'bg-[#F59E0B] text-white hover:bg-[#d97706]'
                        : 'bg-[#F3F4F6] text-[#111827] hover:bg-gray-200'
                    }`}
                  >
                    {bookmarkedTools.includes(selectedTool.id) ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                    {bookmarkedTools.includes(selectedTool.id) ? 'Bookmarked' : 'Bookmark'}
                  </button>
                  <button
                    onClick={() => handleShare(selectedTool)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold bg-[#1E3A8A] text-white hover:bg-[#1e40af] transition-all"
                  >
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ToolLibrary;