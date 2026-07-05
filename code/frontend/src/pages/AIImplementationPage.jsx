import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Bot, Target, Code, MessageSquare, Lightbulb, ArrowRight, CheckCircle, Play } from 'lucide-react';
import Header from '../components/Header.jsx';

function AIImplementationPage() {
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const aiFeatures = [
    {
      icon: <Bot size={32} />,
      title: 'AI-Powered Learning Paths',
      description: 'Get personalized roadmap recommendations based on your current skills, goals, and available time.',
      color: 'bg-blue-500'
    },
    {
      icon: <Code size={32} />,
      title: 'Code Generation',
      description: 'Generate Terraform modules, Kubernetes manifests, CI/CD pipelines, and more with AI assistance.',
      color: 'bg-purple-500'
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Interactive Q&A',
      description: 'Ask questions about DevOps concepts, troubleshoot issues, and get instant explanations.',
      color: 'bg-green-500'
    },
    {
      icon: <Target size={32} />,
      title: 'Skill Gap Analysis',
      description: 'AI analyzes your profile and identifies areas for improvement with targeted recommendations.',
      color: 'bg-orange-500'
    }
  ];

  const useCases = [
    {
      title: 'Generate Terraform Configuration',
      prompt: 'Create a Terraform module for deploying a highly available web application on AWS with ALB, Auto Scaling, and RDS.',
      category: 'Infrastructure as Code'
    },
    {
      title: 'Kubernetes Deployment',
      prompt: 'Generate a Kubernetes deployment manifest for a microservices application with horizontal pod autoscaling and ingress.',
      category: 'Container Orchestration'
    },
    {
      title: 'CI/CD Pipeline',
      prompt: 'Create a GitHub Actions workflow for a Node.js application with testing, building, and deploying to AWS ECS.',
      category: 'CI/CD'
    },
    {
      title: 'Azure ARM Template',
      prompt: 'Generate an ARM template for deploying an Azure Function App with Application Insights and Key Vault integration.',
      category: 'Azure'
    },
    {
      title: 'GCP Cloud Build',
      prompt: 'Create a Cloud Build configuration for building and deploying a containerized application to GKE.',
      category: 'GCP'
    },
    {
      title: 'Ansible Playbook',
      prompt: 'Generate an Ansible playbook for configuring a LAMP stack on Ubuntu servers with security hardening.',
      category: 'Configuration Management'
    }
  ];

  const handleGenerateExample = (useCase) => {
    setAiPrompt(useCase.prompt);
    setIsGenerating(true);
    
    // Simulate AI response
    setTimeout(() => {
      setAiResponse(`# AI-Generated ${useCase.title}

Based on your request, here's a comprehensive solution:

## Overview
This configuration follows DevOps best practices and includes:
- High availability setup
- Security best practices
- Monitoring and logging
- Auto-scaling capabilities

## Implementation Steps
1. Review the generated code below
2. Customize variables for your environment
3. Test in a development environment
4. Deploy to production with proper CI/CD

## Generated Code
\`\`\`hcl
# Example ${useCase.category} configuration
# This is a demonstration of AI-generated infrastructure code

resource "example_resource" "main" {
  name        = "ai-generated-resource"
  environment = var.environment
  
  # Best practices applied automatically
  tags = {
    ManagedBy   = "Terraform"
    Environment = var.environment
    Project     = var.project_name
  }
}
\`\`\`

## Next Steps
- Review the CloudCoaching roadmap for ${useCase.category}
- Complete related certifications
- Practice with hands-on labs

Would you like me to explain any part of this configuration in detail?`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />

      {/* Hero Section - Silver Disco */}
      <div className="silver-disco-bg text-white pt-28 pb-16 min-h-[280px] flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles size={28} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold silver-text">AI-Powered DevOps Learning</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Leverage artificial intelligence to accelerate your DevOps journey. Generate infrastructure code, 
            get personalized learning paths, and receive instant answers to your cloud questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <CheckCircle size={18} className="text-[#10B981]" />
              <span>Personalized Roadmaps</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <CheckCircle size={18} className="text-[#10B981]" />
              <span>Code Generation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
              <CheckCircle size={18} className="text-[#10B981]" />
              <span>Interactive Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center">AI-Powered Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiFeatures.map((feature, idx) => (
            <div key={idx} className="silver-card rounded-xl p-6 min-h-[220px] flex flex-col">
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#111827] mb-4 text-center">Try AI Code Generation</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Select a use case below to see how AI can help you generate DevOps configurations and infrastructure code.
          </p>

          {/* Use Cases */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {useCases.map((useCase, idx) => (
              <button
                key={idx}
                onClick={() => handleGenerateExample(useCase)}
                className="text-left p-4 border-2 border-gray-200 rounded-xl hover:border-[#7B42BC] hover:bg-[#7B42BC]/5 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#7B42BC] bg-[#7B42BC]/10 px-2 py-1 rounded">
                    {useCase.category}
                  </span>
                  <Play size={16} className="text-gray-400 group-hover:text-[#7B42BC]" />
                </div>
                <h4 className="font-semibold text-[#111827] mb-1">{useCase.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-2">{useCase.prompt}</p>
              </button>
            ))}
          </div>

          {/* AI Response Area */}
          {(aiPrompt || isGenerating) && (
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Your Prompt:</label>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-800">{aiPrompt}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block flex items-center gap-2">
                  <Sparkles size={16} className="text-[#7B42BC]" />
                  AI Response:
                </label>
                <div className="bg-[#1E3A8A] text-white p-6 rounded-lg font-mono text-sm overflow-auto max-h-96">
                  {isGenerating ? (
                    <div className="flex items-center gap-3">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Generating response...</span>
                    </div>
                  ) : (
                    <pre className="whitespace-pre-wrap">{aiResponse}</pre>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-[#111827] mb-8 text-center">How AI Enhances Your Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#1E3A8A] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Choose Your Path</h3>
            <p className="text-gray-600">
              Select a cloud provider or DevOps tool you want to learn. AI analyzes your goals and creates a personalized roadmap.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Learn with AI Assistance</h3>
            <p className="text-gray-600">
              Get instant code generation, explanations, and answers to your questions as you progress through the roadmap.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#7B42BC] rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Practice & Certify</h3>
            <p className="text-gray-600">
              Apply your knowledge with AI-generated practice scenarios and prepare for certifications with targeted guidance.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#7B42BC] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Lightbulb size={48} className="text-[#F59E0B] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Accelerate Your DevOps Journey?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Start with our AI-powered roadmaps and get personalized guidance every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/roadmaps"
              className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Roadmaps
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/certifications"
              className="inline-flex items-center gap-2 bg-[#10B981] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#059669] transition-colors"
            >
              View Certifications
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AIImplementationPage;
