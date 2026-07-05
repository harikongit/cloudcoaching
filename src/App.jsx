import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import RoadmapsPage from './pages/RoadmapsPage.jsx';
import ToolsPage from './pages/ToolsPage.jsx';
import CertificationsPage from './pages/CertificationsPage.jsx';
import AIImplementationPage from './pages/AIImplementationPage.jsx';
import BootcampsPage from './pages/BootcampsPage.jsx';

// Create context for global state
export const AppContext = createContext();

// Custom hook to use app context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

function App() {
  const [bookmarkedTools, setBookmarkedTools] = useState([]);
  const [userFeedback, setUserFeedback] = useState([]);
  const [tools, setTools] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedTools');
    if (savedBookmarks) {
      setBookmarkedTools(JSON.parse(savedBookmarks));
    }

    const savedFeedback = localStorage.getItem('userFeedback');
    if (savedFeedback) {
      setUserFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  // Save bookmarks to localStorage when changed
  useEffect(() => {
    localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarkedTools));
  }, [bookmarkedTools]);

  // Save feedback to localStorage when changed
  useEffect(() => {
    localStorage.setItem('userFeedback', JSON.stringify(userFeedback));
  }, [userFeedback]);

  // Fetch all data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [toolsRes, roadmapsRes, certificationsRes, bootcampsRes] = await Promise.all([
          fetch('/data/tools.json'),
          fetch('/data/roadmaps.json'),
          fetch('/data/certifications.json'),
          fetch('/data/bootcamps.json')
        ]);
        
        const toolsData = await toolsRes.json();
        const roadmapsData = await roadmapsRes.json();
        const certificationsData = await certificationsRes.json();
        const bootcampsData = await bootcampsRes.json();
        
        setTools(toolsData);
        setRoadmaps(roadmapsData);
        setCertifications(certificationsData);
        setBootcamps(bootcampsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Toggle bookmark function
  const toggleBookmark = (toolId) => {
    setBookmarkedTools(prev => {
      if (prev.includes(toolId)) {
        return prev.filter(id => id !== toolId);
      }
      return [...prev, toolId];
    });
  };

  // Add feedback function
  const addFeedback = (feedback) => {
    setUserFeedback(prev => [...prev, { ...feedback, id: Date.now(), timestamp: new Date().toISOString() }]);
  };

  const contextValue = {
    bookmarkedTools,
    toggleBookmark,
    userFeedback,
    addFeedback,
    tools,
    roadmaps,
    certifications,
    bootcamps,
    loading
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-[#F3F4F6]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roadmaps" element={<RoadmapsPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/ai-implementation" element={<AIImplementationPage />} />
          <Route path="/bootcamps" element={<BootcampsPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
