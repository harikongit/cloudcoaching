import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import { Target, Users, Award, Lightbulb, ArrowRight, Cloud, Mail, MapPin } from 'lucide-react';

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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#10B981] to-[#10B981]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your DevOps Journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our roadmaps, tools, and certifications to accelerate your career in cloud computing.
          </p>
          <Link 
            to="/roadmaps"
            className="inline-flex items-center gap-2 bg-white text-[#10B981] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Roadmaps
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} CloudCoaching. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
