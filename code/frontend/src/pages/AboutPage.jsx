import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { Target, Users, Award, Lightbulb, ArrowRight, Cloud, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to making DevOps education accessible and practical for professionals at every level.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where learners can connect, share, and grow together.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering high-quality, industry-relevant content that prepares you for real-world challenges.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving our platform with cutting-edge tools and AI-powered learning experiences.'
    }
  ];

  const stats = [
    { value: '50+', label: 'DevOps Tools' },
    { value: '6', label: 'Learning Roadmaps' },
    { value: '10+', label: 'Certifications' },
    { value: '5', label: 'Bootcamp Programs' }
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#1E3A8A] to-[#1E3A8A]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About CloudCoaching
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empowering DevOps professionals with the knowledge, tools, and certifications 
            needed to excel in cloud-native environments.
          </p>
        </div>
      </section>

      {/* Meet the Creator Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-12">
            Meet the Creator
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src="/attachments/attachment_1782272606_95b6e400.png" 
                    alt="Hari K"
                    className="w-32 h-32 rounded-full object-cover border-4 border-cyan-100"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    HK
                  </div>
                </div>
              </div>
              
              {/* Profile Info */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#111827] mb-1">Hari K</h3>
                <p className="text-cyan-600 font-medium mb-4">
                  Cloud Architect & Cloud Platform Engineer
                </p>
                <p className="text-[#6B7280] mb-6 leading-relaxed">
                  Technology enthusiast passionate about simplifying complex cloud concepts and helping teams adopt modern infrastructure practices. With years of experience in cloud architecture and DevOps, I created CloudCoaching to make cloud learning accessible to everyone.
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Cloud size={16} className="text-cyan-500" />
                    <span>Cloud Expert</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Target size={16} className="text-orange-500" />
                    <span>Platform Engineering Advocate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Lightbulb size={16} className="text-green-500" />
                    <span>Knowledge Sharer</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://www.linkedin.com/in/harikrishna-nhk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                  >
                    <Twitter size={16} />
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Your Cloud Career CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Launch Your Cloud Career with Confidence
          </h2>
          <p className="text-white/90 mb-4 text-lg">
            Discover the tools powering modern infrastructure, learn practical DevOps workflows, and follow a guided path from cloud fundamentals to production-ready architecture.
          </p>
          <p className="text-white/70 mb-8 text-sm max-w-2xl mx-auto">
            Curated learning paths, vendor-neutral tool comparisons, and expert-driven cloud roadmaps for AWS, Azure, GCP, Kubernetes, Terraform and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/roadmaps"
              className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Roadmap
            </Link>
            <Link 
              to="/tools"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Compare Cloud Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#111827] mb-6">Our Story</h2>
              <p className="text-[#6B7280] mb-4">
                CloudCoaching was founded with a simple mission: to bridge the gap between 
                traditional IT education and the rapidly evolving world of DevOps and cloud computing.
              </p>
              <p className="text-[#6B7280] mb-4">
                We recognized that professionals needed more than just theoretical knowledge—they 
                needed practical, hands-on experience with the tools and technologies that power 
                modern infrastructure.
              </p>
              <p className="text-[#6B7280]">
                Today, we offer comprehensive learning paths, interactive roadmaps, and AI-powered 
                assistance to help you navigate your DevOps journey with confidence.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-center w-20 h-20 bg-[#10B981]/10 rounded-2xl mb-6 mx-auto">
                <Cloud className="text-[#10B981]" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-[#111827] text-center mb-4">
                Your DevOps Partner
              </h3>
              <p className="text-[#6B7280] text-center">
                From beginners to seasoned professionals, we provide the resources and guidance 
                you need to succeed in the cloud-native ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#10B981] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#111827] text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-[#1E3A8A]" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-[#111827] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#6B7280] text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#111827] mb-6">
              Get in Touch
            </h2>
            <p className="text-[#6B7280] mb-8">
              Have questions or want to learn more about our programs? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-[#6B7280]">
                <Mail size={20} className="text-[#1E3A8A]" />
                <span>hello@cloudcoaching.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B7280]">
                <MapPin size={20} className="text-[#1E3A8A]" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
