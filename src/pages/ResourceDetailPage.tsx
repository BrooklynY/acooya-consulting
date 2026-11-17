import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INTAKE_URL } from '../lib/intake';
import { useBackTo } from '../components/scroll-history';
import {
  ArrowLeft,
  ArrowRight,
  Printer,
  Share2,
  Bookmark,
  CheckCircle,
  FileText,
  BarChart3,
  Layers,
  BookOpen,
  Wrench,
  ChevronDown,
  ChevronUp,
  Target,
  X
} from 'lucide-react';
import { knowledgeBase } from '../data/mockData';
import ContentFigure from '../components/ContentFigure';
import { toast } from 'sonner';

// Generate a consistent ID for localStorage
const getStorageKey = (id: string, key: string) => `acooya_resource_${id}_${key}`;

const ResourceDetailPage: React.FC = () => {
  const { id } = useParams();
  const backTo = useBackTo();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'methodology' | 'outcomes'>('overview');
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const resource = knowledgeBase.find(r => r.id === id);

  // Load state from localStorage on mount
  useEffect(() => {
    if (id && resource) {
      const storedBookmarked = localStorage.getItem(getStorageKey(id, 'bookmarked'));
      setBookmarked(storedBookmarked === 'true');
    }
  }, [id, resource]);

  if (!resource) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h2>
          <Link to="/knowledge" className="btn btn-primary">
            Back to Knowledge Base
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title) ? prev.filter(s => s !== title) : [...prev, title]
    );
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Assessment Tools':
        return <BarChart3 className="w-6 h-6" />;
      case 'Templates':
        return <Layers className="w-6 h-6" />;
      case 'Methodology':
        return <BookOpen className="w-6 h-6" />;
      case 'Toolkits':
        return <Wrench className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Assessment Tools':
        return 'from-[#1A1A1B] to-[#1A1A1B]';
      case 'Templates':
        return 'from-[#1A1A1B] to-[#1A1A1B]';
      case 'Methodology':
        return 'from-[#1A1A1B] to-[#1A1A1B]';
      case 'Toolkits':
        return 'from-[#1A1A1B] to-[#1A1A1B]';
      default:
        return 'from-[#1A1A1B] to-[#1A1A1B]';
    }
  };

  const handleBookmark = () => {
    const newBookmarked = !bookmarked;
    setBookmarked(newBookmarked);
    localStorage.setItem(getStorageKey(id!, 'bookmarked'), newBookmarked.toString());
    toast.success(newBookmarked ? 'Added to your bookmarks!' : 'Removed from bookmarks');
  };

  const handleShare = async () => {
    const shareData = {
      title: resource.title,
      text: resource.description,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        toast.success('Shared successfully!');
      } catch {
        // User cancelled or error
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    }
  };

  const handlePrint = () => {
    setShowPrintPreview(true);
    setTimeout(() => {
      window.print();
      setShowPrintPreview(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print Preview Modal */}
      {showPrintPreview && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="font-bold text-gray-900">Print Preview</h3>
              <button
                onClick={() => setShowPrintPreview(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-8 print-content">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{resource.title}</h1>
              <p className="text-sm text-gray-500 mb-6">{resource.description}</p>
              <div className="prose prose-sm max-w-none">
                <p>{resource.content.overview}</p>
                <h3 className="text-lg font-semibold mt-4">Key Sections</h3>
                <ul>
                  {resource.content.sections.map((section, index) => (
                    <li key={index}><strong>{section.title}</strong>: {section.description}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold mt-4">Methodology</h3>
                <p>{resource.content.methodology}</p>
              </div>
              <div className="mt-8 pt-4 border-t text-sm text-gray-500">
                <p>Printed from acooyaconsulting.com</p>
                <p>Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={() => {
                  window.print();
                  setShowPrintPreview(false);
                }}
                className="btn btn-primary"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-[#1A1A1B] text-white px-6 py-3 rounded-lg z-50 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Link copied to clipboard!
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-wash text-[#1A1A1B] py-16">
        <div className="container-custom">
          <Link to="/knowledge" onClick={(e) => backTo('/knowledge', ['/resources'], e)} className="flex w-fit items-center gap-2 text-[#1F6FA8] hover:text-[#0F4C75] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Knowledge Base
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-[#E3F0FA] text-[#0F4C75]`}>
                {getCategoryIcon(resource.category)}
                {resource.category}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-4">{resource.title}</h1>
            <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C] mb-6">{resource.description}</p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
                <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === 'overview'
                        ? 'text-[#1F6FA8] border-b-2 border-[#1A1A1B] bg-[#F4F7FB]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('methodology')}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === 'methodology'
                        ? 'text-[#1F6FA8] border-b-2 border-[#1A1A1B] bg-[#F4F7FB]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Methodology
                  </button>
                  <button
                    onClick={() => setActiveTab('outcomes')}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                      activeTab === 'outcomes'
                        ? 'text-[#1F6FA8] border-b-2 border-[#1A1A1B] bg-[#F4F7FB]'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    Outcomes
                  </button>
                </div>

                <div className="p-4 md:p-8">
                  {activeTab === 'overview' && (
                    <div className="prose prose-blue max-w-none">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Overview</h2>
                      <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                        {resource.content.overview}
                      </p>

                      <div className="bg-[#F4F7FB] rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <Target className="w-5 h-5 md:w-6 md:h-6 text-[#1F6FA8]" />
                          <h3 className="text-base md:text-lg font-semibold text-gray-900">Key Sections</h3>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                          This resource has {resource.content.sections.length} sections:
                        </p>
                        <ul className="mt-4 space-y-2">
                          {resource.content.sections.map((section, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#1F6FA8] mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm md:text-base">
                                <strong>{section.title}</strong>: {section.description}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3 md:space-y-4">
                        {resource.content.sections.map((section, index) => (
                          <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <button
                              onClick={() => toggleSection(section.title)}
                              className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center gap-2 md:gap-3">
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(resource.category)} flex items-center justify-center text-white text-sm md:text-base font-bold`}>
                                  {index + 1}
                                </div>
                                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{section.title}</h3>
                              </div>
                              {expandedSections.includes(section.title) ? (
                                <ChevronUp className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                              )}
                            </button>

                            {expandedSections.includes(section.title) && (
                              <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-[#E4E4E4]">
                                <p className="text-gray-600 mb-3 md:mb-4 pt-3 md:pt-4 text-sm md:text-base">{section.description}</p>
                                <ContentFigure id={section.figure} />
                                <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                                  {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-start gap-2 text-sm">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#3498DB] mt-2 flex-shrink-0" />
                                      <span className="text-gray-700">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'methodology' && (
                    <div className="prose prose-blue max-w-none">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Methodology</h2>
                      <div className="bg-white rounded-xl p-4 md:p-6 mb-6 md:mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-[#1F6FA8]" />
                          <h3 className="text-base md:text-lg font-semibold text-gray-900">How It Is Used</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{resource.content.methodology}</p>
                      </div>

                                            <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-1">Related service</p>
                        <p className="text-gray-600 text-sm md:text-base mb-3">This resource is used in the {resource.relatedService.label}. Ask us about it, or request the resource and use it yourself.</p>
                        <Link to={resource.relatedService.href} className="inline-flex items-center gap-2 text-[#1F6FA8] font-medium hover:underline">{resource.relatedService.label}<ArrowRight className="w-4 h-4" /></Link>
                      </div>
                    </div>
                  )}

                  {activeTab === 'outcomes' && (
                    <div className="prose prose-blue max-w-none">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">What's Inside</h2>
                      <div className="grid gap-3 md:gap-4">
                        {resource.content.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white border border-gray-200 rounded-xl">
                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(resource.category)} flex items-center justify-center text-white font-bold flex-shrink-0 text-sm md:text-base`}>
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 text-sm md:text-base">{outcome}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Related Resources */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Related Resources</h3>
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  {knowledgeBase
                    .filter(r => r.id !== resource.id && r.category === resource.category)
                    .slice(0, 4)
                    .map(r => (
                      <Link
                        key={r.id}
                        to={`/resource/${r.id}`}
                        className="flex items-start gap-3 md:gap-4 p-3 md:p-4 border border-gray-200 rounded-xl hover:border-[#BDBDBD] hover:bg-[#F4F7FB] transition-colors group"
                      >
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${getCategoryColor(r.category)} flex items-center justify-center text-white flex-shrink-0`}>
                          {getCategoryIcon(r.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 group-hover:text-[#0F4C75] transition-colors truncate text-sm md:text-base">
                            {r.title}
                          </h4>
                          <p className="text-xs md:text-sm text-gray-500 mt-1">
                            {r.category}
                          </p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Action Buttons */}
              <div className="bg-white rounded-2xl border border-gray-200 p-4 md:p-6 sticky top-20 md:top-24">
                <h3 className="font-bold text-gray-900 mb-4">Get This Resource</h3>
                <div className="space-y-3">
                  <Link to={'/get-started?interest=' + encodeURIComponent('Resource request — ' + resource.title)} className="btn btn-primary w-full flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4" />
                    Request This Resource
                  </Link>
                  <button
                    onClick={handlePrint}
                    className="btn btn-secondary w-full flex items-center justify-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    Print Preview
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E4E4E4] space-y-2">
                  <button
                    onClick={handleBookmark}
                    className={`flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg transition-colors ${
                      bookmarked
                        ? 'bg-[#E3F0FA] text-[#1F6FA8] border border-[#BDBDBD]'
                        : 'text-gray-600 hover:bg-gray-100 border border-transparent'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                    {bookmarked ? 'Bookmarked' : 'Add to Bookmarks'}
                  </button>
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 w-full justify-center px-4 py-2.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-transparent"
                  >
                    <Share2 className="w-4 h-4" />
                    Share Resource
                  </button>
                </div>

                {/* CTA */}
                <div className="mt-6 p-4 bg-[#F4F7FB] rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Want help applying it?</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    A free 30-minute Discovery Call maps your problem to the right engagement.
                  </p>
                  <Link to={'/get-started?interest=' + encodeURIComponent('Discovery Call — ' + resource.title)} className="btn btn-primary w-full text-sm">
                    Book a free Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="band-wash text-[#1A1A1B] py-12 md:py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to apply this to your organisation?</h2>
          <p className="font-serif4 text-lg md:text-[21px] leading-[1.45] text-[#3A3A3C] mb-6 md:mb-8 max-w-2xl mx-auto">
            Send a short brief and a senior consultant will reply by email.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a href={INTAKE_URL} className="btn btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Start a Brief
            </a>
            <Link to="/marketplace" className="btn btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Print Styles */}
      <style>{`
        @media print {
          .print-content {
            font-size: 12pt;
            line-height: 1.4;
          }
          .print-content h1 {
            font-size: 18pt;
            margin-bottom: 8pt;
          }
          .print-content h3 {
            font-size: 14pt;
            margin-top: 12pt;
          }
          .print-content p {
            margin-bottom: 8pt;
          }
        }
      `}</style>
    </div>
  );
};

export default ResourceDetailPage;
