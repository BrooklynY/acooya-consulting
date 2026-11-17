import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { INTAKE_URL } from '../lib/intake';
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
  Briefcase,
  Linkedin
} from 'lucide-react';
import { aiAgents } from '../data/mockData';
import { useConsultants } from '../hooks/use-consultants';

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

  // Live consultants from the platform, prepended ahead of the staged roles.
  // Returns the staged roles alone until the fetch resolves, and on failure —
  // the page is never empty and never blocks. See the hook's docstring.
  const consultants = useConsultants();

  const allExpertise = [...new Set(consultants.flatMap(c => c.expertise))];

  const filteredHumans = consultants.filter(consultant => {
    const matchesSearch = consultant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      consultant.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesExpertise = !selectedExpertise || consultant.expertise.includes(selectedExpertise);
    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-[#F4F7FB] text-[#1A1A1B] py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[#1F6FA8] font-semibold text-sm uppercase tracking-wider">Talent Network</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Find Your Perfect Consulting Partner
            </h1>
            <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C] mb-8">
              Choose senior human consultants, purpose-built AI agents, or both together, with a person approving every AI output.
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
                    ? 'bg-[#1A1A1B] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Human Consultants
                <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
                  activeTab === 'human' ? 'bg-white/20' : 'bg-gray-200'
                }`}>{consultants.length}</span>
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-5 py-2.5 rounded-lg font-medium transition-colors flex items-center ${
                  activeTab === 'ai'
                    ? 'bg-[#1A1A1B] text-white'
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
                  className="w-full sm:w-80 pl-10 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#3498DB] focus:bg-white transition-all"
                />
              </div>

              <div className="relative">
                <select
                  value={selectedExpertise || ''}
                  onChange={(e) => setSelectedExpertise(e.target.value || null)}
                  className="w-full sm:w-48 px-4 py-2.5 bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-[#3498DB] appearance-none cursor-pointer"
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
                <div key={consultant.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#BDBDBD] transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    {consultant.isLive && consultant.image ? (
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-xl bg-[#1A1A1B] flex items-center justify-center">
                        <Briefcase className="w-10 h-10 text-white" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            {consultant.profileUrl ? (<h3 className="text-xl font-semibold"><a href={consultant.profileUrl} className="hover:text-[#0F4C75] transition-colors">{consultant.name}</a></h3>) : (<h3 className="text-xl font-semibold">{consultant.name}</h3>)}
                            {consultant.linkedinUrl && (
                              <a href={consultant.linkedinUrl} target="_blank" rel="noopener noreferrer" title={`${consultant.name} on LinkedIn`} aria-label={`${consultant.name} on LinkedIn`} className="text-gray-400 hover:text-[#0F4C75] transition-colors">
                                <Linkedin className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          <p className="text-gray-600">{consultant.title}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          consultant.availability === 'Available Now'
                            ? 'bg-[#E3F0FA] text-[#0F4C75]'
                            : consultant.availability === 'Joining Soon'
                              ? 'bg-[#EDEDED] text-[#3A3A3C]'
                              : 'bg-amber-100 text-amber-700'
                        }`}>
                          {consultant.availability}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-500">{consultant.experience}</span>
                        {consultant.profileUrl && (<a href={consultant.profileUrl} className="text-sm font-medium text-[#1F6FA8] hover:text-[#0F4C75] transition-colors">View profile →</a>)}
                      </div>
                    </div>
                  </div>

                  {consultant.sectors.length > 0 && (
                    <p className="text-gray-500 text-sm mb-4">{consultant.sectors.join(' · ')}</p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {consultant.expertise.map((exp, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F4F7FB] text-[#3A3A3C] text-xs font-medium rounded-lg">{exp}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E4E4E4]">
                    <div>
                      <p className="text-sm text-gray-500">Rate</p>
                      <p className="font-bold text-lg">Rate on Enquiry</p>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/get-started?interest=${encodeURIComponent(`Question — ${consultant.name}`)}`} title="Send a question — we'll reply by email" aria-label={`Send a question about ${consultant.name}`} className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                      </Link>
                      <Link to={`/get-started?interest=${encodeURIComponent(`Discovery call — ${consultant.name}`)}`} title="Request a discovery call" aria-label={`Request a discovery call about ${consultant.name}`} className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                        <Calendar className="w-4 h-4" />
                      </Link>
                      {consultant.isLive ? (
                        <Link to={`/get-started?interest=${encodeURIComponent(consultant.name)}`} className="px-5 py-2.5 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full whitespace-nowrap hover:bg-black transition-colors flex items-center">
                          Engage
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      ) : (
                        <Link to={`/get-started?interest=${encodeURIComponent(`Waitlist — ${consultant.title}`)}`} className="px-5 py-2.5 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full whitespace-nowrap hover:opacity-90 transition-colors flex items-center">
                          Join Waitlist
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Pricing Info Banner */}
              <div className="mb-8 bg-[#EDEDED] rounded-2xl p-6 border border-[#E4E4E4]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EDEDED] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-[#1F6FA8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">AI Agent Pricing</h3>
                    <p className="text-gray-600 text-sm">
                      Using our AI agents yourself comes with a subscription (Growth, Professional or Enterprise, from A$49 a month), and each plan includes a monthly credit allowance. On a consulting engagement the agents work through your consultant and are included in the engagement fee, so no plan is needed.{' '}
                      <Link to="/pricing" className="font-semibold text-[#3A3A3C] hover:text-[#0F4C75] whitespace-nowrap">Compare plans</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {aiAgents.map((agent) => (
                  <div
                    key={agent.id}
                    className={`bg-white rounded-2xl p-6 border transition-all relative ${agent.availability === 'Available' ? '' : 'border-gray-200 hover:border-[#BDBDBD]'}`}
                    style={agent.availability === 'Available' ? { borderColor: '#E91E63' } : undefined}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-20 h-20 rounded-xl flex items-center justify-center${agent.availability === 'Available' ? '' : ' bg-[#1A1A1B] opacity-60'}`}
                        style={agent.availability === 'Available' ? { backgroundColor: '#E91E63' } : undefined}
                      >
                        {agent.name.startsWith('Aria') && agent.availability === 'Available' ? (
                          <img src="/aria-mark.svg" alt="" className="w-12 h-12" />
                        ) : (
                          <Bot className="w-10 h-10 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div>
                          <h3 className="text-xl font-semibold">{agent.name}</h3>
                          <p className="text-gray-600">{agent.category}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-2">
                          {agent.availability === 'Available' ? (
                            <span className="text-sm font-semibold" style={{ color: '#E91E63' }}>Available now</span>
                          ) : (
                            <span className="text-sm text-gray-500">Launching Soon</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{agent.description}</p>

                    <h4 className="text-sm font-semibold mb-2">Capabilities</h4>
                    <div className="space-y-2 mb-4">
                      {agent.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#1F6FA8] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-start justify-between pt-4 border-t border-[#E4E4E4] gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Credit cost per task</p>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-600">Micro tasks — 0.5 credits</p>
                          <p className="text-sm text-gray-600">Standard tasks — 1 credit</p>
                          <p className="text-sm text-gray-600">Deep tasks — 3 credits</p>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">Included in subscription plans. Overage A$0.55 per credit on every plan.</p>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/get-started?interest=${encodeURIComponent(`Question — ${agent.name}`)}`} title="Ask about this agent — we'll reply by email" aria-label={`Ask a question about ${agent.name}`} className="p-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
                          <Bot className="w-4 h-4" />
                        </Link>
                        {agent.availability === 'Available' ? (
                          <Link to={`/get-started?interest=${encodeURIComponent(agent.name)}`} className="px-5 py-2.5 text-white text-sm font-semibold rounded-full whitespace-nowrap hover:opacity-90 transition-colors flex items-center" style={{ backgroundColor: '#E91E63' }}>
                            Get started
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        ) : (
                          <Link to={`/get-started?interest=${encodeURIComponent(`Waitlist — ${agent.name}`)}`} className="px-5 py-2.5 bg-[#1A1A1B] text-white text-sm font-semibold rounded-full whitespace-nowrap hover:opacity-90 transition-colors flex items-center">
                            Join Waitlist
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        )}
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
                <div className="w-12 h-12 rounded-xl bg-[#E3F0FA] flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#1F6FA8]" />
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
                    <CheckCircle className="w-5 h-5 text-[#1F6FA8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#EDEDED] flex items-center justify-center">
                  <Bot className="w-6 h-6 text-[#1F6FA8]" />
                </div>
                <h3 className="text-xl font-semibold">AI Agents Excel At</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Reading and cross-referencing many documents quickly',
                  'Drafting structured reports for a person to review',
                  'Available whenever you need them — most tasks complete in minutes',
                  'Consistent execution of standardized processes',
                  'Consistent, repeatable analysis across every engagement'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1F6FA8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href={INTAKE_URL} className="inline-flex items-center px-8 py-4 bg-[#1A1A1B] text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-lg">
              Start a Brief
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;