import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  Printer,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  User,
  BookOpen,
  Lightbulb,
  FileText
} from 'lucide-react';
import { insightsArticles } from '../data/mockData';

const InsightDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [readingProgress, setReadingProgress] = useState(0);

  const article = insightsArticles.find(a => a.id === id);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h2>
          <Link to="/resources" className="btn btn-primary">
            Return to Resources
          </Link>
        </div>
      </div>
    );
  }

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const shareArticle = async () => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12">
            <button
              onClick={() => navigate('/resources')}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Resources
            </button>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <FileText className="w-4 h-4" />
                {article.category}
              </span>
              <span className="text-white/70 flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="text-white/70 flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Author Card */}
              <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-200">
                <div className="flex items-center gap-4">
                  <img
                    src={article.content.authorImage}
                    alt={article.content.author}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-50"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{article.content.author}</p>
                    <p className="text-sm text-gray-500">{article.content.authorTitle}</p>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  Introduction
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {article.content.introduction}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-4">
                {article.content.sections.map((section, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                      onClick={() => toggleSection(section.title)}
                      className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 text-left">{section.title}</h3>
                      </div>
                      {expandedSections[section.title] ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    {expandedSections[section.title] && (
                      <div className="px-6 pb-6 pt-0">
                        <div className="pl-14">
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {section.content}
                          </p>
                          {section.subsections && (
                            <div className="mt-6 space-y-4">
                              {section.subsections.map((sub, subIndex) => (
                                <div key={subIndex} className="bg-gray-50 rounded-xl p-5">
                                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-600 text-xs flex items-center justify-center font-medium">
                                      {String.fromCharCode(65 + subIndex)}
                                    </span>
                                    {sub.title}
                                  </h4>
                                  <p className="text-gray-600 text-sm leading-relaxed">
                                    {sub.content}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways */}
              <div className="mt-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6" />
                  Key Takeaways
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {article.content.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Actions Card */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <img
                      src={article.content.authorImage}
                      alt={article.content.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{article.content.author}</p>
                      <p className="text-xs text-gray-500">{article.content.authorTitle}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-colors ${
                        bookmarked
                          ? 'bg-blue-100 text-blue-700 border border-blue-300'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${bookmarked ? 'fill-current' : ''}`} />
                      {bookmarked ? 'Saved' : 'Save Article'}
                    </button>
                    <button
                      onClick={shareArticle}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      Share Article
                    </button>
                    <button
                      onClick={() => window.print()}
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Printer className="w-5 h-5" />
                      Print Article
                    </button>
                  </div>
                </div>

                {/* Related Insights */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Related Insights</h3>
                  <div className="space-y-4">
                    {insightsArticles
                      .filter(a => a.id !== id)
                      .slice(0, 2)
                      .map((related) => (
                        <Link
                          key={related.id}
                          to={`/insight/${related.id}`}
                          className="flex gap-4 group"
                        >
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {related.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {related.readTime}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-2">Stay Informed</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Get weekly insights from our team of consultants and AI experts.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                    />
                    <button className="w-full btn bg-white text-blue-600 hover:bg-gray-100 text-sm py-2">
                      Subscribe Free
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link
              to="/resources"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Resources
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">
                {readingProgress.toFixed(0)}% read
              </span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${readingProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightDetailPage;
