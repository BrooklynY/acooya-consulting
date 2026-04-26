import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  Download,
  FileText,
  BookOpen,
  Wrench,
  Layers,
  BarChart3,
  Eye,
  Clock,
  TrendingUp,
  Filter,
  ChevronRight,
  Bookmark,
  Share2,
  X,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { knowledgeBase, insightsArticles } from '../data/mockData';

const KnowledgeBasePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState<string[]>([]);
  const [previewResource, setPreviewResource] = useState<typeof knowledgeBase[0] | null>(null);

  const filteredResources = knowledgeBase.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' ||
      resource.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  // Dynamic category counts based on actual data
  const categories = [
    {
      id: 'all',
      label: 'All Resources',
      icon: BookOpen,
      count: knowledgeBase.length
    },
    {
      id: 'assessment',
      label: 'Assessment Tools',
      icon: BarChart3,
      count: knowledgeBase.filter(r => r.category.toLowerCase().includes('assessment')).length
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: Layers,
      count: knowledgeBase.filter(r => r.category.toLowerCase().includes('template')).length
    },
    {
      id: 'methodology',
      label: 'Methodology',
      icon: BookOpen,
      count: knowledgeBase.filter(r => r.category.toLowerCase().includes('methodology')).length
    },
    {
      id: 'toolkits',
      label: 'Toolkits',
      icon: Wrench,
      count: knowledgeBase.filter(r => r.category.toLowerCase().includes('toolkit')).length
    }
  ];

  const toggleBookmark = (id: string) => {
    setBookmarked(prev =>
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section id="overview" className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Free Resources</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Your Strategic Toolkit—Free to Download
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Access battle-tested frameworks, templates, and tools refined through many years of consulting practice. Accelerate your strategic planning with proven resources.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for frameworks, templates, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center gap-8 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
                <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                  activeCategory === category.id
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Resources</h2>
            <p className="text-sm text-gray-400 italic">Building our resource library — new frameworks, templates, and toolkits added regularly.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      resource.category === 'Assessment Tools' ? 'bg-blue-100' :
                      resource.category === 'Templates' ? 'bg-purple-100' :
                      resource.category === 'Methodology' ? 'bg-green-100' :
                      'bg-orange-100'
                    }`}>
                      {resource.category === 'Assessment Tools' && <BarChart3 className="w-6 h-6 text-blue-600" />}
                      {resource.category === 'Templates' && <Layers className="w-6 h-6 text-purple-600" />}
                      {resource.category === 'Methodology' && <BookOpen className="w-6 h-6 text-green-600" />}
                      {resource.category === 'Toolkits' && <Wrench className="w-6 h-6 text-orange-600" />}
                      {resource.category === 'Case Studies' && <FileText className="w-6 h-6 text-pink-600" />}
                    </div>
                    <button
                      onClick={() => toggleBookmark(resource.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        bookmarked.includes(resource.id)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${bookmarked.includes(resource.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  <span className="inline-block text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3">
                    {resource.category}
                  </span>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {resource.downloads > 0 ? `${resource.downloads.toLocaleString()} downloads` : 'Available'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {resource.date}
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setPreviewResource(resource)}
                    className="text-gray-600 hover:text-gray-900 flex items-center gap-1 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <Link
                    to={`/resource/${resource.id}`}
                    className="btn btn-primary text-sm py-2"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600">No resources found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Thought Leadership</span>
            <h2 className="text-3xl font-bold mt-4">Latest Research & Insights</h2>
            <p className="text-gray-600 mt-4">Stay ahead with actionable research from our team of consultants and AI experts</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insightsArticles.map((insight) => (
              <article key={insight.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <img src={insight.image} alt={insight.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {insight.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{insight.date}</span>
                    <Link to={`/insight/${insight.id}`} className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Weekly Insights</span>
            <h2 className="text-3xl font-bold mt-4 mb-4">Get Strategic Insights Delivered Weekly</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our weekly digest for frameworks, case studies, and AI-powered insights — delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn bg-white text-blue-600 hover:bg-gray-100 px-8">
                Subscribe Free
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Weekly insights. No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewResource && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${
                  previewResource.category === 'Assessment Tools' ? 'from-blue-500 to-blue-600 text-white' :
                  previewResource.category === 'Templates' ? 'from-purple-500 to-purple-600 text-white' :
                  previewResource.category === 'Methodology' ? 'from-green-500 to-green-600 text-white' :
                  'from-orange-500 to-orange-600 text-white'
                }`}>
                  {previewResource.category}
                </span>
              </div>
              <button
                onClick={() => setPreviewResource(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{previewResource.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{previewResource.description}</p>

              <div className="prose prose-blue max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-600 mb-6">{previewResource.content.overview}</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Sections</h3>
                <div className="space-y-4 mb-8">
                  {previewResource.content.sections.slice(0, 4).map((section, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">{section.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{section.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {section.items.slice(0, 3).map((item, itemIndex) => (
                          <span key={itemIndex} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {previewResource.content.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <Clock className="w-4 h-4 inline mr-1" />
                Last updated: {previewResource.date}
              </div>
              <Link
                to={`/resource/${previewResource.id}`}
                className="btn btn-primary"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Resource
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBasePage;
