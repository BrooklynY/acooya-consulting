import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Search,
  Star,
  Users,
  Bot,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Calendar,
  ChevronDown,
  Briefcase
} from 'lucide-react';
import { humanConsultants, aiAgents } from '../data/mockData';

const MarketplacePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'human' | 'ai'>('human');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);

  // Set initial tab based on URL search parameter
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam === 'ai') {
      setActiveTab('ai');
    }
  }, [searchParams]);

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
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center ${
                  activeTab === 'human'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Human Consultants
                <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                  activeTab === 'human' ? 'bg-white/20' : 'bg-gray-200'
                }`}>{humanConsultants.length}</span>
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center ${
                  activeTab === 'ai'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bot className="w-4 h-4 mr-2" />
                AI Agents
                <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                  activeTab === 'ai' ? 'bg-white/20' : 'bg-gray-200'
                }`}>{aiAgents.length}</span>
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
                  className="w-full sm:w-80 pl-10 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div className="relative">
                <select
                  value={selectedExpertise || ''}
                  onChange={(e) => setSelectedExpertise(e.target.value || null)}
                  className="w-full sm:w-48 px-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
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
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {activeTab === 'human' ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredHumans.map((consultant) => (
                <div key={consultant.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    {consultant.id === 'h0' ? (
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <Briefcase className="w-10 h-10 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{consultant.name}</h3>
                          <p className="text-gray-600">{consultant.title}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          consultant.availability === 'Available Now'
                            ? 'bg-green-100 text-green-700'
                            : consultant.availability === 'Joining Soon'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-amber-100 text-amber-700'
                        }`}>
                          {consultant.availability}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-500">{consultant.experience} experience</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{consultant.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {consultant.expertise.map((exp, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg">{exp}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500">Rate</p>
                      <p className="font-bold text-lg">Rate on Enquiry</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <Calendar className="w-4 h-4" />
                      </button>
                      {consultant.id === 'h0' ? (
                        <Link to="/engagements" state={{ consultant: consultant.id }} className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                          Engage
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      ) : (
                        <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-colors flex items-center">
                          Join Waitlist
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Pricing Info Banner */}
              <div className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Agent Pricing & Subscriptions</h3>
                    <p className="text-gray-600 text-sm">
                      AI agents are available through our subscription plans. Once launched, agent usage will be included in your subscription tier based on engagement volume and complexity. Contact us for custom enterprise pricing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {aiAgents.map((agent) => (
                  <div key={agent.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all hover:shadow-lg relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center opacity-60">
                        <Bot className="w-10 h-10 text-white" />
                      </div>
                      <div className="flex-1">
                        <div>
                          <h3 className="text-xl font-semibold">{agent.name}</h3>
                          <p className="text-gray-600">{agent.category}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-sm text-gray-500">Launching Soon</span>
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

                    <div className="flex items-start justify-between pt-4 border-t border-gray-100 gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Credit cost per task</p>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">Micro tasks — 0.5 credits</p>
                          <p className="text-sm text-gray-600">Standard tasks — 1 credit</p>
                          <p className="text-sm text-gray-600">Deep tasks — 3 credits</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Included in subscription plans. Pay-as-you-go from $0.22/credit.</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                          <Bot className="w-4 h-4" />
                        </button>
                        <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition-colors flex items-center">
                          Join Waitlist
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Human vs. AI: When to Use Each</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Understanding when to leverage human expertise versus AI capabilities helps you maximize engagement value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
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
            <Link to="/engagements" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-lg">
              Create a Hybrid Engagement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;
