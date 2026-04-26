import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Star,
  Users,
  Bot,
  ArrowRight,
  Clock,
  CheckCircle,
  MessageSquare,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { humanConsultants, aiAgents } from '../data/mockData';

const FindConsultantsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'human' | 'ai'>('human');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);

  const allExpertise = [...new Set(humanConsultants.flatMap(c => c.expertise))];

  const filteredHumans = humanConsultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultant.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesExpertise = !selectedExpertise || consultant.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Talent Network</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Find Your Perfect Consulting Partner
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose from world-class human consultants, powerful AI agents, or combine both for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs & Filters */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('human')}
                className={`tab ${activeTab === 'human' ? 'tab-active' : 'tab-inactive'}`}
              >
                <Users className="w-4 h-4 mr-2" />
                Human Consultants
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded text-xs">{humanConsultants.length}</span>
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`tab ${activeTab === 'ai' ? 'tab-active' : 'tab-inactive'}`}
              >
                <Bot className="w-4 h-4 mr-2" />
                AI Agents
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded text-xs">{aiAgents.length}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input pl-10 w-full sm:w-80"
                />
              </div>

              <div className="relative">
                <select
                  value={selectedExpertise || ''}
                  onChange={(e) => setSelectedExpertise(e.target.value || null)}
                  className="input pr-10 appearance-none cursor-pointer"
                >
                  <option value="">All Expertise</option>
                  {allExpertise.map((exp) => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultants Grid */}
      <section className="py-12">
        <div className="container-custom">
          {activeTab === 'human' ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredHumans.map((consultant) => (
                <div key={consultant.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{consultant.name}</h3>
                          <p className="text-gray-600">{consultant.title}</p>
                        </div>
                        <span className={`badge ${consultant.availability === 'Available Now' ? 'badge-green' : 'badge-orange'}`}>
                          {consultant.availability}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{consultant.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">{consultant.experience}</span>
                        <span className="text-sm text-gray-500">{consultant.projects} projects</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{consultant.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {consultant.expertise.map((exp, i) => (
                      <span key={i} className="badge badge-blue">{exp}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Hourly Rate</p>
                      <p className="font-bold text-lg">${consultant.hourlyRate}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn btn-ghost border border-gray-200">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="btn btn-ghost border border-gray-200">
                        <Calendar className="w-4 h-4" />
                      </button>
                      <Link to="/engagements" state={{ consultant: consultant.id }} className="btn btn-primary">
                        Engage
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {aiAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{agent.name}</h3>
                          <p className="text-gray-600">{agent.category}</p>
                        </div>
                        <span className="badge badge-blue">24/7 Active</span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="font-semibold">{agent.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500">{agent.usageCount.toLocaleString()} sessions</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{agent.description}</p>

                  <h4 className="text-sm font-semibold mb-2">Capabilities</h4>
                  <div className="space-y-2 mb-4">
                    {agent.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Per Session</p>
                      <p className="font-bold text-lg">${agent.pricePerSession}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn btn-ghost border border-gray-200">
                        <Bot className="w-4 h-4" />
                      </button>
                      <Link to="/engagements" state={{ agent: agent.id }} className="btn btn-primary bg-purple-600 hover:bg-purple-700">
                        Deploy Agent
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredHumans.length === 0 && activeTab === 'human' && (
            <div className="text-center py-16">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600">No consultants found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Human vs. AI: When to Use Each</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Understanding when to leverage human expertise versus AI capabilities helps you maximize engagement value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Human Consultants Excel At</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Strategic thinking and creative problem-solving',
                  'Stakeholder relationship building and management',
                  'Complex negotiations and conflict resolution',
                  'Cultural sensitivity and context understanding',
                  'Executive presentation and storytelling',
                  'Judgment calls requiring deep domain experience'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">AI Agents Excel At</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Processing large volumes of data rapidly',
                  'Pattern recognition across millions of data points',
                  'Automated report generation and synthesis',
                  '24/7 availability and instant response times',
                  'Consistent execution of standardized processes',
                  'Real-time monitoring and anomaly detection'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/engagements" className="btn btn-primary text-lg px-8 py-4">
              Create a Hybrid Engagement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindConsultantsPage;
