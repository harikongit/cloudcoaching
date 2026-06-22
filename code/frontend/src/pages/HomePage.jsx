import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import RoadmapViewer from '../components/RoadmapViewer.jsx';
import ToolLibrary from '../components/ToolLibrary.jsx';
import FeedbackForm from '../components/FeedbackForm.jsx';
import { Map, Wrench, MessageSquare, ArrowRight, Github, Twitter, Linkedin, Mail, Award, Sparkles, GraduationCap, Cloud } from 'lucide-react';

function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Why Choose CloudCoaching?</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto text-lg">
              Your complete platform for mastering DevOps, cloud infrastructure, and earning industry certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-2xl bg-[#F3F4F6] card-hover lg:col-span-2">
              <div className="w-14 h-14 bg-[#1E3A8A] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Map className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Cloud Roadmaps</h3>
              <p className="text-[#6B7280] text-sm">
                Structured learning paths for AWS, Azure, GCP, and multi-cloud environments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-2xl bg-[#F3F4F6] card-hover lg:col-span-2">
              <div className="w-14 h-14 bg-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">DevOps Tools</h3>
              <p className="text-[#6B7280] text-sm">
                Terraform, Kubernetes, Docker, Ansible, Jenkins, and more with detailed guides.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-2xl bg-[#F3F4F6] card-hover lg:col-span-2">
              <div className="w-14 h-14 bg-[#F59E0B] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Certifications</h3>
              <p className="text-[#6B7280] text-sm">
                Prepare for AWS, Azure, GCP, Terraform, and Kubernetes certifications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center p-6 rounded-2xl bg-[#F3F4F6] card-hover lg:col-span-2">
              <div className="w-14 h-14 bg-[#7B42BC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">AI Implementation</h3>
              <p className="text-[#6B7280] text-sm">
                Leverage AI to generate infrastructure code and accelerate your learning.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="text-center p-6 rounded-2xl bg-[#F3F4F6] card-hover lg:col-span-2">
              <div className="w-14 h-14 bg-[#326CE5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Bootcamps</h3>
              <p className="text-[#6B7280] text-sm">
                Intensive training programs with hands-on labs and expert instructors.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="text-center p-6 rounded-2xl bg-[#F3F4F6] card-hover lg:col-span-2">
              <div className="w-14 h-14 bg-[#FF9900] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Community</h3>
              <p className="text-[#6B7280] text-sm">
                Connect with fellow DevOps engineers and share knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-[#7B42BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Master All Major Cloud Platforms</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive coverage of the top cloud providers with dedicated roadmaps and certifications.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/roadmaps" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-[#FF9900] text-3xl font-bold mb-2">AWS</div>
              <p className="text-white/80 text-sm">Amazon Web Services</p>
            </Link>
            <Link to="/roadmaps" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-[#0078D4] text-3xl font-bold mb-2">Azure</div>
              <p className="text-white/80 text-sm">Microsoft Azure</p>
            </Link>
            <Link to="/roadmaps" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-[#4285F4] text-3xl font-bold mb-2">GCP</div>
              <p className="text-white/80 text-sm">Google Cloud Platform</p>
            </Link>
            <Link to="/tools" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all">
              <div className="text-[#7B42BC] text-3xl font-bold mb-2">Terraform</div>
              <p className="text-white/80 text-sm">Multi-Cloud IaC</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Preview Section */}
      <RoadmapViewer />

      {/* Tools Preview Section */}
      <ToolLibrary />

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your DevOps Career?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of cloud engineers who are mastering DevOps with CloudCoaching. 
            Start with our roadmaps, earn certifications, and leverage AI to learn faster.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/roadmaps"
              className="flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Explore Roadmaps
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/certifications"
              className="flex items-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#059669] transition-all transform hover:scale-105"
            >
              <Award size={20} />
              View Certifications
            </Link>
            <Link 
              to="/ai-implementation"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              <Sparkles size={20} />
              Try AI Learning
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackForm />

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#10B981] rounded-lg flex items-center justify-center">
                  <Cloud className="text-white" size={24} />
                </div>
                <span className="font-bold text-xl">CloudCoaching</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Your complete platform for mastering DevOps, cloud infrastructure, and earning industry certifications.
              </p>
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
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/roadmaps" className="text-gray-400 hover:text-white transition-colors">Roadmaps</Link></li>
                <li><Link to="/tools" className="text-gray-400 hover:text-white transition-colors">DevOps Tools</Link></li>
                <li><Link to="/bootcamps" className="text-gray-400 hover:text-white transition-colors">Bootcamps</Link></li>
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              <ul className="space-y-2">
                <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors">AWS Certifications</Link></li>
                <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors">Azure Certifications</Link></li>
                <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors">GCP Certifications</Link></li>
                <li><Link to="/certifications" className="text-gray-400 hover:text-white transition-colors">Terraform & K8s</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/ai-implementation" className="text-gray-400 hover:text-white transition-colors">AI Implementation</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} CloudCoaching. All rights reserved. | Empowering DevOps Engineers Worldwide</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
