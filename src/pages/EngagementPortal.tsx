import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Bot,
  Sparkles,
  CheckCircle,
  Upload,
  Calendar,
  DollarSign,
  Shield,
  Lock,
  FileText,
  MessageSquare,
  Send,
  ChevronRight,
  Clock
} from 'lucide-react';
import { humanConsultants, aiAgents, consultingServices, hybridSolutions } from '../data/mockData';

const EngagementPortal: React.FC = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [engagementType, setEngagementType] = useState<'human' | 'ai' | 'hybrid' | null>(null);
  const [selectedService, setSelectedService] = useState('');
  const [selectedConsultants, setSelectedConsultants] = useState<string[]>([]);
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [projectBrief, setProjectBrief] = useState('');

  const steps = [
    { num: 1, title: 'Engagement Type' },
    { num: 2, title: 'Select Service' },
    { num: 3, title: 'Choose Partners' },
    { num: 4, title: 'Project Brief' },
    { num: 5, title: 'Review & Submit' },
  ];

  const handleSubmit = () => {
    alert('Engagement request submitted! Our team will contact you within 24 hours.');
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section id="overview" className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Engagement Portal</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Start Your Engagement
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Configure your ideal consulting engagement by choosing the right mix of human expertise and AI capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={step.num}>
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    currentStep > step.num
                      ? 'bg-green-500 text-white'
                      : currentStep === step.num
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                  }`}>
                    {currentStep > step.num ? <CheckCircle className="w-5 h-5" /> : step.num}
                  </div>
                  <span className={`ml-3 text-sm font-medium hidden sm:block ${
                    currentStep >= step.num ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-4 rounded ${
                    currentStep > step.num ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Engagement Type */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">Choose Your Engagement Type</h2>
                <p className="text-gray-600 mb-8">Select how you'd like to work with Acooya</p>

                <div className="grid md:grid-cols-3 gap-6">
                  <button
                    onClick={() => { setEngagementType('human'); setCurrentStep(2); }}
                    className={`p-8 rounded-2xl border-2 text-left transition-all ${
                      engagementType === 'human'
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                      <Users className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Human Consultant</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Work directly with expert consultants for personalized strategic guidance
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Personalized attention
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Executive advisory
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Industry expertise
                      </li>
                    </ul>
                  </button>

                  <button
                    onClick={() => { setEngagementType('ai'); setCurrentStep(2); }}
                    className={`p-8 rounded-2xl border-2 text-left transition-all ${
                      engagementType === 'ai'
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                      <Bot className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Agent</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Leverage purpose-built AI agents for rapid analysis and execution
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        24/7 availability
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Fast turnaround
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Cost-effective
                      </li>
                    </ul>
                  </button>

                  <button
                    onClick={() => { setEngagementType('hybrid'); setCurrentStep(2); }}
                    className={`p-8 rounded-2xl border-2 text-left transition-all ${
                      engagementType === 'hybrid'
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center mb-4">
                      <Sparkles className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Hybrid (Best Value)</h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Combine human expertise with AI capabilities for maximum impact
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        40% faster delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Deeper insights
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Best ROI
                      </li>
                    </ul>
                    <span className="inline-block mt-4 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Service */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">Select Your Service Area</h2>
                <p className="text-gray-600 mb-8">Choose the primary service you need help with</p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {consultingServices.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`p-6 rounded-xl border-2 text-left transition-all ${
                        selectedService === service.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{service.shortDescription}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{service.priceRange}</span>
                        <span className="text-gray-500">{service.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {engagementType === 'hybrid' && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold mb-4">Recommended Hybrid Solutions</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {hybridSolutions.map((solution) => (
                        <button
                          key={solution.id}
                          onClick={() => setSelectedService(solution.id)}
                          className={`p-4 rounded-lg border text-left ${
                            selectedService === solution.id
                              ? 'border-green-500 bg-white'
                              : 'border-gray-200 bg-white'
                          }`}
                        >
                          <h4 className="font-medium text-sm mb-1">{solution.title}</h4>
                          <p className="text-xs text-gray-500">{solution.price}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button onClick={() => setCurrentStep(1)} className="btn btn-secondary">
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!selectedService}
                    className="btn btn-primary"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Choose Partners */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">Choose Your Partners</h2>
                <p className="text-gray-600 mb-8">
                  {engagementType === 'human' && 'Select the consultants you\'d like to work with'}
                  {engagementType === 'ai' && 'Select the AI agents you\'d like to deploy'}
                  {engagementType === 'hybrid' && 'Select consultants and AI agents for your engagement'}
                </p>

                {(engagementType === 'human' || engagementType === 'hybrid') && (
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      Human Consultants
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {humanConsultants.map((consultant) => (
                        <button
                          key={consultant.id}
                          onClick={() => {
                            setSelectedConsultants(prev =>
                              prev.includes(consultant.id)
                                ? prev.filter(id => id !== consultant.id)
                                : [...prev, consultant.id]
                            );
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            selectedConsultants.includes(consultant.id)
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <img src={consultant.image} alt={consultant.name} className="w-12 h-12 rounded-lg object-cover" />
                            <div className="flex-1">
                              <h4 className="font-medium">{consultant.name}</h4>
                              <p className="text-sm text-gray-500">{consultant.title}</p>
                            </div>
                            {selectedConsultants.includes(consultant.id) && (
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {(engagementType === 'ai' || engagementType === 'hybrid') && (
                  <div className="mb-8">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Bot className="w-5 h-5 text-purple-600" />
                      AI Agents
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {aiAgents.map((agent) => (
                        <button
                          key={agent.id}
                          onClick={() => {
                            setSelectedAgents(prev =>
                              prev.includes(agent.id)
                                ? prev.filter(id => id !== agent.id)
                                : [...prev, agent.id]
                            );
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            selectedAgents.includes(agent.id)
                              ? 'border-purple-500 bg-purple-50'
                              : 'border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                              <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{agent.name}</h4>
                              <p className="text-sm text-gray-500">{agent.category}</p>
                            </div>
                            {selectedAgents.includes(agent.id) && (
                              <CheckCircle className="w-5 h-5 text-purple-500" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button onClick={() => setCurrentStep(2)} className="btn btn-secondary">
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    disabled={
                      (engagementType === 'human' && selectedConsultants.length === 0) ||
                      (engagementType === 'ai' && selectedAgents.length === 0) ||
                      (engagementType === 'hybrid' && selectedConsultants.length === 0 && selectedAgents.length === 0)
                    }
                    className="btn btn-primary"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Project Brief */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">Describe Your Project</h2>
                <p className="text-gray-600 mb-8">Provide context about your project and goals</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Brief
                    </label>
                    <textarea
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Describe your project goals, challenges, timeline, and any specific requirements..."
                      rows={8}
                      className="input resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Documents (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 mb-1">Drag and drop files here or click to browse</p>
                      <p className="text-sm text-gray-500">PDF, DOCX, PPTX up to 50MB</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Start Date
                      </label>
                      <input type="date" className="input" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select className="input">
                        <option>Select budget range</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000 - $100,000</option>
                        <option>$100,000 - $250,000</option>
                        <option>$250,000+</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={() => setCurrentStep(3)} className="btn btn-secondary">
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(5)}
                    disabled={!projectBrief.trim()}
                    className="btn btn-primary"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-2">Review Your Engagement</h2>
                <p className="text-gray-600 mb-8">Confirm your engagement details before submitting</p>

                <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                  <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                    <div>
                      <h3 className="font-semibold mb-1">Engagement Type</h3>
                      <p className="text-gray-600 capitalize">{engagementType} Engagement</p>
                    </div>
                    <button onClick={() => setCurrentStep(1)} className="text-blue-600 text-sm hover:underline">
                      Edit
                    </button>
                  </div>

                  <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                    <div>
                      <h3 className="font-semibold mb-1">Service Area</h3>
                      <p className="text-gray-600">
                        {consultingServices.find(s => s.id === selectedService)?.title || 'Custom Solution'}
                      </p>
                    </div>
                    <button onClick={() => setCurrentStep(2)} className="text-blue-600 text-sm hover:underline">
                      Edit
                    </button>
                  </div>

                  {(selectedConsultants.length > 0 || selectedAgents.length > 0) && (
                    <div className="flex items-start justify-between pb-6 border-b border-gray-200">
                      <div>
                        <h3 className="font-semibold mb-1">Selected Partners</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedConsultants.map(id => {
                            const c = humanConsultants.find(h => h.id === id);
                            return c ? (
                              <span key={id} className="badge badge-blue">{c.name}</span>
                            ) : null;
                          })}
                          {selectedAgents.map(id => {
                            const a = aiAgents.find(ag => ag.id === id);
                            return a ? (
                              <span key={id} className="badge badge-purple">{a.name}</span>
                            ) : null;
                          })}
                        </div>
                      </div>
                      <button onClick={() => setCurrentStep(3)} className="text-blue-600 text-sm hover:underline">
                        Edit
                      </button>
                    </div>
                  )}

                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">Project Brief</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{projectBrief}</p>
                    </div>
                    <button onClick={() => setCurrentStep(4)} className="text-blue-600 text-sm hover:underline">
                      Edit
                    </button>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800">Secure Engagement</h4>
                      <p className="text-sm text-green-700">
                        All engagement data is encrypted end-to-end. You'll receive a secure workspace for collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button onClick={() => setCurrentStep(4)} className="btn btn-secondary">
                    Back
                  </button>
                  <button onClick={handleSubmit} className="btn btn-primary text-lg px-8 py-4">
                    Submit Engagement Request
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-center mb-8">What Happens After You Submit?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Clock, title: 'Within 24 Hours', desc: 'Our team reviews your request' },
                { icon: MessageSquare, title: 'Discovery Call', desc: '30-minute consultation scheduled' },
                { icon: FileText, title: 'Proposal', desc: 'Detailed engagement plan delivered' },
                { icon: Sparkles, title: 'Kickoff', desc: 'Engagement begins' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EngagementPortal;
