import React, { useState } from 'react';
import {
  FileText,
  Download,
  Clock,
  Users,
  Bot,
  ChevronRight,
  Search,
  Bell,
  Settings,
  Calendar,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  BarChart3,
  Shield,
  Lock,
  Eye,
  RefreshCw
} from 'lucide-react';
import { mockEngagements } from '../data/mockData';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'engagements' | 'documents' | 'transcripts'>('overview');
  const [selectedEngagement, setSelectedEngagement] = useState<string | null>(null);

  const activeEngagements = mockEngagements.filter(e => e.status === 'active');
  const completedEngagements = mockEngagements.filter(e => e.status === 'completed');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Client Dashboard</h1>
              <p className="text-gray-600">Welcome back, welcome back to Acme Corporation</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop" alt="User" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium text-sm">John Anderson</p>
                  <p className="text-xs text-gray-500">Enterprise Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-1">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'engagements', label: 'Engagements', icon: FileText },
                { id: 'documents', label: 'Documents', icon: Download },
                { id: 'transcripts', label: 'Transcripts', icon: MessageSquare },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
              <Shield className="w-8 h-8 mb-3" />
              <h3 className="font-semibold mb-1">Secure Workspace</h3>
              <p className="text-sm text-blue-100">All your data is encrypted and protected</p>
              <div className="flex items-center gap-2 mt-3 text-xs">
                <Lock className="w-3 h-3" />
                SOC 2 Type II Certified
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fade-in">
                {/* Stats */}
                <div className="grid grid-cols-4 gap-6">
                  {[
                    { label: 'Active Engagements', value: activeEngagements.length, icon: FileText, color: 'blue' },
                    { label: 'Completed', value: completedEngagements.length, icon: CheckCircle, color: 'green' },
                    { label: 'Documents', value: 24, icon: Download, color: 'purple' },
                    { label: 'Hours Saved', value: '320h', icon: Clock, color: 'orange' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 flex items-center justify-center mb-4`}>
                        <stat.icon className={`w-5 h-5 text-${stat.color}-600`} />
                      </div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Active Engagements */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Active Engagements</h2>
                    <button className="text-blue-600 text-sm hover:underline">View All</button>
                  </div>

                  <div className="space-y-4">
                    {activeEngagements.map((engagement) => (
                      <div
                        key={engagement.id}
                        className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer"
                        onClick={() => setSelectedEngagement(engagement.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold">{engagement.title}</h3>
                            <p className="text-sm text-gray-500">{engagement.client}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`badge ${
                              engagement.type === 'hybrid' ? 'badge-green' :
                              engagement.type === 'human' ? 'badge-blue' : 'badge-pink'
                            }`}>
                              {engagement.type === 'hybrid' && <><Users className="w-3 h-3 mr-1" /><Bot className="w-3 h-3 mr-1" /></>}
                              {engagement.type === 'human' && <Users className="w-3 h-3 mr-1" />}
                              {engagement.type === 'ai' && <Bot className="w-3 h-3 mr-1" />}
                              {engagement.type}
                            </span>
                            <span className="badge badge-green">Active</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-gray-500">Progress</span>
                            <span className="font-medium">{engagement.progress}%</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              style={{ width: `${engagement.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {engagement.startDate}
                            </span>
                            <span className="flex items-center gap-1">
                              <FileText className="w-4 h-4" />
                              {engagement.documents.length} docs
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    {activeEngagements[0]?.recentActivity.map((activity, index) => (
                      <div key={index} className={`flex items-start gap-4 p-4 ${index > 0 ? 'border-t border-gray-100' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.user.includes('AI') ? 'bg-purple-100' : 'bg-blue-100'
                        }`}>
                          {activity.user.includes('AI') ? (
                            <Bot className="w-4 h-4 text-purple-600" />
                          ) : (
                            <Users className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.action}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.user} • {activity.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'engagements' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">All Engagements</h2>
                  <button className="btn btn-primary">New Engagement</button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Engagement</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Type</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Progress</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Value</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mockEngagements.map((engagement) => (
                        <tr key={engagement.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div>
                              <p className="font-medium">{engagement.title}</p>
                              <p className="text-sm text-gray-500">{engagement.client}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`badge ${
                              engagement.type === 'hybrid' ? 'badge-green' :
                              engagement.type === 'human' ? 'badge-blue' : 'badge-pink'
                            }`}>
                              {engagement.type}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{ width: `${engagement.progress}%` }}
                                />
                              </div>
                              <span className="text-sm">{engagement.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-medium">{engagement.value}</td>
                          <td className="px-6 py-4">
                            <span className={`badge ${
                              engagement.status === 'active' ? 'badge-green' : 'badge-blue'
                            }`}>
                              {engagement.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-blue-600 hover:text-blue-800">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Documents</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="input pl-10 w-64"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Document</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Engagement</th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {mockEngagements.flatMap(e => e.documents).map((doc, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <FileText className="w-5 h-5 text-blue-600" />
                              </div>
                              <span className="font-medium">{doc.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{mockEngagements[0].title}</td>
                          <td className="px-6 py-4 text-gray-500">{doc.date}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'transcripts' && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Engagement Transcripts</h2>
                  <p className="text-sm text-gray-500">AI-generated summaries of all engagements</p>
                </div>

                <div className="space-y-4">
                  {mockEngagements.map((engagement) => (
                    <div key={engagement.id} className="bg-white rounded-xl border border-gray-200 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold">{engagement.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">{engagement.client}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="badge badge-blue">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            Summary Generated
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">1</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Intake Phase</p>
                            <p className="text-sm text-gray-600">
                              Initial client brief received. Key objectives defined: operating model transformation and efficiency optimization.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">2</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Analysis Phase</p>
                            <p className="text-sm text-gray-600">
                              AI agents completed process mining across 15 departments. Current state assessment revealed 23% efficiency gap.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">3</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">Design Phase</p>
                            <p className="text-sm text-gray-600">
                              Target operating model designed. Three strategic options developed with AI-powered scenario analysis.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-500">
                          Last updated: {engagement.recentActivity[0]?.date}
                        </p>
                        <button className="btn btn-ghost text-sm">
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Regenerate Summary
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* Engagement Detail Sidebar */}
          {selectedEngagement && (
            <aside className="w-96 flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-semibold">Engagement Details</h3>
                  <button
                    onClick={() => setSelectedEngagement(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>

                {mockEngagements.find(e => e.id === selectedEngagement) && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">{mockEngagements.find(e => e.id === selectedEngagement)?.title}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Client</span>
                          <span>{mockEngagements.find(e => e.id === selectedEngagement)?.client}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Value</span>
                          <span className="font-medium">{mockEngagements.find(e => e.id === selectedEngagement)?.value}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Duration</span>
                          <span>{mockEngagements.find(e => e.id === selectedEngagement)?.startDate} - {mockEngagements.find(e => e.id === selectedEngagement)?.endDate}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Team</h4>
                      <div className="space-y-2">
                        {(mockEngagements.find(e => e.id === selectedEngagement)?.consultants || []).map((consultant, i) => (
                          <div key={i} className="flex items-center gap-2">
                            {consultant.includes('AI') ? (
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-purple-600" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="w-4 h-4 text-blue-600" />
                              </div>
                            )}
                            <span className="text-sm">{consultant}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Recent Activity</h4>
                      <div className="space-y-3">
                        {mockEngagements.find(e => e.id === selectedEngagement)?.recentActivity.slice(0, 3).map((activity, i) => (
                          <div key={i} className="text-sm">
                            <p className="text-gray-700">{activity.action}</p>
                            <p className="text-gray-500 text-xs mt-1">{activity.user} • {activity.date}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button className="btn btn-primary w-full">Open Workspace</button>
                    </div>
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
