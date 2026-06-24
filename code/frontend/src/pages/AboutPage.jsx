import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Share2, Sparkles, RefreshCw, Globe, Mail, Send } from 'lucide-react';

function AboutPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const values = [
    {
      icon: Share2,
      title: 'Knowledge Sharing',
      description: 'We believe in open-source model of sharing knowledge freely to accelerate learning in the community.',
      color: 'text-blue-500'
    },
    {
      icon: Sparkles,
      title: 'Clarity & Simplicity',
      description: 'Complex tools deserve clear explanations. We break down DevOps concepts into digestible pieces.',
      color: 'text-purple-500'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Updates',
      description: 'Cloud tools evolve rapidly. We keep our content current with quarterly roadmap updates.',
      color: 'text-cyan-500'
    },
    {
      icon: Globe,
      title: 'Vendor Neutrality',
      description: 'We provide unbiased information about all major cloud providers and open-source tools.',
      color: 'text-pink-500'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage
    const feedback = JSON.parse(localStorage.getItem('userFeedback') || '[]');
    feedback.push({
      email,
      message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('userFeedback', JSON.stringify(feedback));
    setSubmitted(true);
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      
      {/* Page Header */}
      <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#111827] mb-2">
            About CloudCoaching
          </h1>
          <p className="text-[#6B7280]">
            Learn about the mission, vision, and story behind CloudCoaching.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#111827] mb-4">Our Mission</h2>
            <p className="text-[#374151] mb-4">
              CloudCoaching is dedicated to democratizing cloud and DevOps knowledge by providing clear, comprehensive, and up-to-date information about cloud tools and practices across Azure, AWS, and GCP.
            </p>
            <p className="text-[#6B7280] text-sm">
              We believe that understanding the DevOps landscape shouldn't require endless research across multiple sources. Our mission is to curate, organize, and present cloud tools and their roadmaps in a way that's accessible to everyone—from beginners to experienced practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#111827] mb-4">Our Vision</h2>
            <p className="text-[#6B7280]">
              We envision a world where cloud professionals can quickly navigate the complex DevOps ecosystem, make informed tool decisions, and stay ahead of platform roadmaps. CloudCoaching aims to be the go-to resource for anyone seeking to understand, learn, and master modern cloud infrastructure and DevOps practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`mt-1 ${value.color}`}>
                    <value.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827] mb-1">{value.title}</h3>
                    <p className="text-[#6B7280] text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#111827] mb-4">The Story</h2>
            <p className="text-[#6B7280] mb-4">
              CloudCoaching was born from the observation that cloud professionals often spend hours researching tools, comparing offerings, and tracking roadmaps across multiple vendors' websites and GitHub repositories.
            </p>
            <p className="text-[#6B7280] mb-4">
              In 2026, we decided to create a centralized platform to solve this problem. We aggregated information about 30+ core DevOps and cloud tools, their features, providers' roadmaps, and learning paths—all in one place.
            </p>
            <p className="text-[#6B7280]">
              Today, CloudCoaching serves as a bridge between cloud learners and practitioners, helping them navigate the vast ecosystem of modern cloud tools and DevOps practices.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-4 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Get Involved</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold text-[#111827] mb-2">Contact Us</h3>
              <p className="text-[#6B7280] text-sm mb-6">
                Have questions, suggestions, or want to contribute? We'd love to hear from you!
              </p>
            </div>

            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-1">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-y"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#1E3A8A]/90 transition-colors text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
