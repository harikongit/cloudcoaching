import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import RoadmapViewer from '../components/RoadmapViewer.jsx';
import ToolLibrary from '../components/ToolLibrary.jsx';
import FeedbackForm from '../components/FeedbackForm.jsx';
import Footer from '../components/Footer.jsx';
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
            <div className="silver-card text-center p-6 rounded-2xl lg:col-span-2 min-h-[200px] flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#0f3460] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Map className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Cloud Roadmaps</h3>
              <p className="text-[#6B7280] text-sm">
                Structured learning paths for AWS, Azure, GCP, and multi-cloud environments.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="silver-card text-center p-6 rounded-2xl lg:col-span-2 min-h-[200px] flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Wrench className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">DevOps Tools</h3>
              <p className="text-[#6B7280] text-sm">
                Terraform, Kubernetes, Docker, Ansible, Jenkins, and more with detailed guides.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="silver-card text-center p-6 rounded-2xl lg:col-span-2 min-h-[200px] flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Certifications</h3>
              <p className="text-[#6B7280] text-sm">
                Prepare for AWS, Azure, GCP, Terraform, and Kubernetes certifications.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="silver-card text-center p-6 rounded-2xl lg:col-span-2 min-h-[200px] flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#7B42BC] to-[#5B21B6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">AI Implementation</h3>
              <p className="text-[#6B7280] text-sm">
                Leverage AI to generate infrastructure code and accelerate your learning.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="silver-card text-center p-6 rounded-2xl lg:col-span-2 min-h-[200px] flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#326CE5] to-[#1D4ED8] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">Bootcamps</h3>
              <p className="text-[#6B7280] text-sm">
                Intensive training programs with hands-on labs and expert instructors.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="silver-card text-center p-6 rounded-2xl lg:col-span-2 min-h-[200px] flex flex-col justify-center">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FF9900] to-[#EA580C] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
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
      <Footer />
    </div>
  );
}

export default HomePage;
