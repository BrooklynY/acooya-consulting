import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INTAKE_URL } from '../lib/intake';
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
  ChevronDown,
  Briefcase,
  Linkedin
} from 'lucide-react';
import { aiAgents } from '../data/mockData';
import { useConsultants } from '../hooks/use-consultants';

// Card tile colours: the practice-area tints, in rotation.
const TILE_TINTS: [string, string][] = [
  ['#E3F0FA', '#0F4C75'],
  ['#FDF0DC', '#7A4A00'],
  ['#FCE4EC', '#880E4F'],
  ['#EDEDED', '#3A3A3C'],
];

// Each agent's tile carries its own brand colour, quietly.
const agentTint = (name: string): [string, string] =>
  name.startsWith('Atlas') ? ['#E3F0FA', '#0F4C75']
  : name.startsWith('Nova') ? ['#FDF0DC', '#7A4A00']
  : name.startsWith('Aria') ? ['#FCE4EC', '#880E4F']
  : name.startsWith('Zenith') ? ['#E3F6EA', '#1B6B3A']
  : ['#EDEDED', '#3A3A3C'];

const FindConsultantsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'human' | 'ai'>('human');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);

  // Live consultants from the platform, prepended ahead of the staged roles.
  // Same source as MarketplacePage — the two pages must not disagree about
  // who is on the marketplace.
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
      <section className="hero-wash text-[#1A1A1B] py-16">
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
                className={`tab ${activeTab === 'human' ? 'tab-active' : 'tab-inactive'}`}
              >
                <Users className="w-4 h-4 mr-2" />
                Human Consultants
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded text-xs">{consultants.length}</span>
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
                  className="input !pl-10 w-full sm:w-80"
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
              {filteredHumans.map((consultant, i) => (
                <div key={consultant.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#BDBDBD] transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    {consultant.isLive && consultant.image ? (
                      <img
                        src={consultant.image}
                        alt={consultant.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-xl flex items-center justify-center" style={{ backgroundColor: TILE_TINTS[i % TILE_TINTS.length]![0] }}>
                        <Briefcase className="w-10 h-10" style={{ color: TILE_TINTS[i % TILE_TINTS.length]![1] }} />
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
                        <span className={`badge ${consultant.availability === 'Available Now' ? 'badge-green' : 'badge-orange'}`}>
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
                      <span key={i} className="badge badge-blue">{exp}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E4E4E4]">
                    <div>
                      <p className="text-sm text-gray-500">Rate</p>
                      <p className="font-bold text-lg">Rate on Enquiry</p>
                    </div>
                                        <div className="flex gap-2">
                      <Link to={`/get-started?interest=${encodeURIComponent(`Question — ${consultant.name}`)}`} title="Send a question — we'll reply by email" aria-label={`Send a question about ${consultant.name}`} className="btn btn-ghost border border-gray-200">
                        <MessageSquare className="w-4 h-4" />
                      </Link>
                      <Link to={`/get-started?interest=${encodeURIComponent(`Discovery call — ${consultant.name}`)}`} title="Request a discovery call" aria-label={`Request a discovery call about ${consultant.name}`} className="btn btn-ghost border border-gray-200">
                        <Calendar className="w-4 h-4" />
                      </Link>
                      {consultant.isLive ? (
                        <Link to={`/get-started?interest=${encodeURIComponent(consultant.name)}`} className="btn btn-primary">
                          Engage
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      ) : (
                        <Link to={`/get-started?interest=${encodeURIComponent(`Waitlist — ${consultant.title}`)}`} className="btn btn-soft">
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
            <div className="grid md:grid-cols-2 gap-6">
              {aiAgents.map((agent) => (
                <div key={agent.id} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#BDBDBD] transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-20 h-20 rounded-xl flex items-center justify-center" style={{ backgroundColor: agentTint(agent.name)[0] }}>
                      <Bot className="w-10 h-10" style={{ color: agentTint(agent.name)[1] }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{agent.name}</h3>
                          <p className="text-gray-600">{agent.category}</p>
                        </div>
                        {agent.availability === 'Available' ? (
                          <span className="badge badge-green">Available now</span>
                        ) : (
                          <span className="badge badge-purple">Launching Soon</span>
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

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E4E4E4]">
                    <div>
                      <p className="text-sm text-gray-500">Pricing</p>
                      <p className="text-sm font-semibold text-gray-700">Credits, included in plans</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn btn-ghost border border-gray-200">
                        <Bot className="w-4 h-4" />
                      </button>
                      {agent.availability === 'Available' ? (
                        <Link to="/pricing" className="btn btn-primary bg-[#1A1A1B] hover:bg-black">
                          Get started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      ) : (
                        <button className="btn btn-primary bg-[#1A1A1B] hover:bg-black">
                          Join Waitlist
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      )}
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

            <div className="bg-white rounded-2xl p-8 border border-gray-200">
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
            <a href={INTAKE_URL} className="btn btn-primary text-lg px-8 py-4">
              Start a Brief
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindConsultantsPage;