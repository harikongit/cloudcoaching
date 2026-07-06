import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thank you for subscribing!');
      setEmail('');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Cloud className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">CloudCoaching</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your guide to cloud tools, DevOps practices, and infrastructure as code across Azure, AWS, and GCP.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Cloud Comparison
                </Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  DevOps Roadmap
                </Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Tool Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Cloud Providers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Cloud Providers</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Microsoft Azure
                </a>
              </li>
              <li>
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Amazon AWS
                </a>
              </li>
              <li>
                <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Google Cloud Platform
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get notified about tool updates and new roadmaps.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-400 text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Links Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/harikrishna-nhk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                Twitter
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              Last Updated: {currentYear}-04-13
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <p className="text-gray-500 text-sm text-center">
              © {currentYear} CloudCoaching. All rights reserved.
            </p>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <Link to="/about" className="text-gray-500 hover:text-gray-400 transition-colors text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
