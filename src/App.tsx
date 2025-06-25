import React, { useState } from 'react';
import { 
  Bell, 
  Download, 
  Volume2, 
  Settings, 
  CheckCircle, 
  Star,
  Chrome,
  Github,
  ArrowRight,
  Play,
  Zap,
  Shield,
  Users,
  MessageSquare,
  Palette,
  Headphones,
  Mail,
  FileText,
  Bug,
  HelpCircle,
  ExternalLink,
  Send,
  Book,
  Slack,
  Twitter
} from 'lucide-react';
import { downloadAIDingExtension } from './utils/downloadExtension';

function App() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart AI Detection",
      description: "Automatically detects when AI responses complete across all major platforms",
      details: "Uses advanced MutationObserver patterns to monitor DOM changes and accurately identify completion states."
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Customizable Sounds",
      description: "Choose from 3 built-in sounds or upload your own custom notification",
      details: "Supports MP3 and WAV formats up to 1MB. Perfect for personalizing your AI workflow."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Volume Control",
      description: "Adjustable notification volume with easy-to-use slider",
      details: "Fine-tune your notification volume from 0-100% to match your environment."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "No data collection, all settings stored locally on your device",
      details: "Your privacy is paramount. We don't collect, store, or transmit any personal data."
    }
  ];

  const platforms = [
    { name: "ChatGPT", color: "bg-green-500", logo: "🤖" },
    { name: "Gemini", color: "bg-blue-500", logo: "✨" },
    { name: "Claude", color: "bg-orange-500", logo: "🧠" },
    { name: "DALL-E", color: "bg-purple-500", logo: "🎨" },
    { name: "GitHub Copilot", color: "bg-gray-800", logo: "👨‍💻" },
    { name: "Midjourney", color: "bg-pink-500", logo: "🖼️" },
    { name: "Loveable", color: "bg-red-500", logo: "❤️" },
    { name: "Bolt.new", color: "bg-yellow-500", logo: "⚡" }
  ];

  const supportOptions = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      action: "View Docs",
      color: "from-blue-600 to-blue-700",
      onClick: () => window.open('https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension/blob/main/README.md', '_blank')
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Report Bug",
      description: "Found an issue? Let us know",
      action: "aiding.team@gmail.com",
      color: "from-red-600 to-red-700",
      onClick: () => window.open('mailto:aiding.team@gmail.com?subject=AI-Ding Bug Report', '_blank')
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Community",
      description: "Join our Discord community",
      action: "Join Discord",
      color: "from-purple-600 to-purple-700",
      onClick: () => window.open('https://discord.gg/c6FHz6uw', '_blank')
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Get personalized help from our team",
      action: "aiding.team@gmail.com",
      color: "from-green-600 to-green-700",
      isEmail: true,
      onClick: () => window.open('mailto:aiding.team@gmail.com?subject=AI-Ding Support Request', '_blank')
    }
  ];

  const faqItems = [
    {
      question: "Why am I not hearing notifications?",
      answer: "Check that notifications are enabled in the extension popup, your system volume is up, and Chrome isn't muted. Also ensure you're on a supported AI platform."
    },
    {
      question: "Which AI platforms are supported?",
      answer: "We support ChatGPT, Google Gemini, Claude, DALL-E, GitHub Copilot, Midjourney, Loveable, and Bolt.new. More platforms are added regularly."
    },
    {
      question: "How do I upload a custom sound?",
      answer: "Click the extension icon, select 'Custom Sound' from the dropdown, then click 'Choose File' to upload an MP3 or WAV file (max 1MB)."
    },
    {
      question: "Is my data being collected?",
      answer: "No. AI Ding doesn't collect or transmit any personal data. All settings are stored locally on your device for complete privacy."
    },
    {
      question: "The extension stopped working after a browser update",
      answer: "Try refreshing the AI platform page, or disable and re-enable the extension in Chrome's extension settings."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UX Designer",
      content: "Finally! No more constantly checking if ChatGPT finished. This saves me so much time during research sessions.",
      avatar: "👩‍💼"
    },
    {
      name: "Mike Rodriguez",
      role: "Software Developer",
      content: "The GitHub Copilot integration is perfect. I can multitask while waiting for suggestions without missing anything.",
      avatar: "👨‍💻"
    },
    {
      name: "Alex Park",
      role: "Content Creator",
      content: "Love the custom sound feature! I uploaded my favorite notification and now AI work feels more personal.",
      avatar: "✍️"
    }
  ];

  const handleDownload = async () => {
    try {
      await downloadAIDingExtension();
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const handleEmailClick = () => {
    window.open('mailto:aiding.team@gmail.com?subject=AI Ding Support Request', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI-Ding
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#install" className="text-gray-700 hover:text-indigo-600 transition-colors">Install Instructions</a>
              <a href="#support" className="text-gray-700 hover:text-indigo-600 transition-colors">Support</a>
              <button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Install Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              <span>AI-Ding now supports 8 major AI platforms</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Never Miss an
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent block">
                AI Response
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Get instant audio notifications when ChatGPT, Gemini, Claude, Bolt.new, and other AI systems 
              complete their responses. Stay productive while AI-Ding works for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold"
              >
                <Chrome className="w-6 h-6" />
                <span>Add to Chrome</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors">
                <Play className="w-6 h-6" />
                <span className="text-lg">Watch Demo</span>
              </button>
            </div>

            {/* Platform Logos */}
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 group">
                  <div className={`w-14 h-14 ${platform.color} rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    {platform.logo}
                  </div>
                  <span className="text-xs font-medium text-gray-600 text-center leading-tight">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI-Ding Features for AI Power Users
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with productivity in mind, AI-Ding provides intelligent notifications 
              that adapt to your workflow across all major AI platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      activeFeature === index ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'bg-white text-indigo-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-2">{feature.description}</p>
                      {activeFeature === index && (
                        <p className="text-sm text-indigo-600 animate-fadeIn">{feature.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Bell className="w-5 h-5" />
                      </div>
                      <span className="font-semibold">AI Ding Settings</span>
                      <span className="font-semibold">AI-Ding Settings</span>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Enable Notifications</span>
                      <div className="w-12 h-6 bg-green-400 rounded-full relative">
                        <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Sound</span>
                      <span className="text-indigo-200">Soft Ding</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Volume</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-white/20 rounded-full">
                          <div className="w-14 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm">70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-indigo-200">AI Platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-indigo-200">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-indigo-200">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-indigo-200">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Ding: Loved by AI Enthusiasts
            </h2>
            <p className="text-xl text-gray-600">
              See what our community says about AI-Ding
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="install" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600">
              Install AI-Ding in under a minute
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download Extension</h3>
              <p className="text-gray-600 mb-6">
                Click the "Add to Chrome" button to download the extension package
              </p>
              <button 
                onClick={handleDownload}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <Download className="w-5 h-5" />
                <span>Download ZIP</span>
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Install Extension</h3>
              <p className="text-gray-600 mb-6">
                Extract the ZIP file to a folder. Open Chrome and go to <code className="bg-gray-100 px-2 py-1 rounded text-sm">chrome://extensions/</code>. 
                Toggle "Developer mode" ON in the top-right corner, then click "Load unpacked" and select the extracted folder.
              </p>
              <div className="flex items-center justify-center space-x-2 text-indigo-600">
                <Chrome className="w-5 h-5" />
                <span>Load Unpacked</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Using AI</h3>
              <p className="text-gray-600 mb-6">
                Visit any supported AI platform and get notified when responses complete
              </p>
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span>You're all set!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Need Help? We're Here for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers, report issues, or reach out to our community. 
              Our comprehensive support ensures you get the most out of AI-Ding.
            </p>
          </div>

          {/* Quick Support Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={option.onClick}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-700">
                  <span className={option.isEmail ? "text-sm" : ""}>{option.action}</span>
                  {!option.isEmail && <ExternalLink className="w-4 h-4 ml-2" />}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
              </div>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-3 text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                      {item.question}
                      <ChevronDownIcon className="w-5 h-5 transform group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pt-2 pb-4 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-8 p-4 bg-indigo-50 rounded-xl">
                <p className="text-indigo-700 text-sm">
                  <strong>Still need help?</strong> Email us at aiding.team@gmail.com for personalized AI-Ding support.
                </p>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-6">
                  <Mail className="w-10 h-10" />
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h4>
                <p className="text-gray-600 mb-6">
                  Have a question, bug report, or feature request? We'd love to hear from you!
                </p>
                
                <button
                  onClick={handleEmailClick}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-3 text-lg font-semibold mb-6"
                >
                  <Mail className="w-5 h-5" />
                  <span>aiding.team@gmail.com</span>
                </button>

                <div className="bg-gray-50 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-2">What to include in your email:</h5>
                  <ul className="text-sm text-gray-600 text-left space-y-1">
                    <li>• Chrome version and operating system</li>
                    <li>• Which AI platform you're using</li>
                    <li>• Detailed description of the issue</li>
                    <li>• Screenshots if applicable</li>
                  </ul>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  We typically respond within 24-48 hours
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Additional Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension/blob/main/INSTALL.md" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white">
                  <Book className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Installation Guide</h4>
                  <p className="text-sm text-gray-600">Complete setup guides and installation docs</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
              </a>

              <a href="https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">GitHub Repository</h4>
                  <p className="text-sm text-gray-600">Source code, issues, and contributions</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
              </a>

              <a 
                href="https://discord.gg/c6FHz6uw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Discord Community</h4>
                  <p className="text-sm text-gray-600">Join the discussion and get help</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Supercharge Your AI Workflow?
          </h2>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Join thousands of users who never miss an AI response. Install AI-Ding today and 
            transform how you work with artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={handleDownload}
              className="bg-white text-indigo-600 px-8 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-3 text-lg font-semibold"
            >
              <Chrome className="w-6 h-6" />
              <span>Install Free Extension</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="flex items-center space-x-3 text-white hover:text-indigo-200 transition-colors">
              <Github className="w-6 h-6" />
              <span className="text-lg" onClick={() => window.open('https://github.com/YOUR_USERNAME/AI-Ding-Chrome-Extension', '_blank')}>View on GitHub</span>
            </button>
          </div>

          <div className="mt-12 text-indigo-200 text-sm">
            Free forever • No data collection • 30-second install
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AI-Ding</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Smart notifications for AI completions across all major platforms.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-gray-400">
                <div>Features</div>
                <div>Installation</div>
                <div>Supported Platforms</div>
                <div>Privacy Policy</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>Documentation</div>
                <div>FAQ</div>
                <div>Contact Us</div>
                <div>Bug Reports</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="space-y-2 text-gray-400">
                <div>GitHub</div>
                <div>Twitter</div>
                <a 
                  href="https://discord.gg/c6FHz6uw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors"
                >
                  Discord
                </a>
                <div>Newsletter</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 AI-Ding. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <MessageSquare 
                className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" 
                onClick={() => window.open('https://discord.gg/c6FHz6uw', '_blank')}
              />
              <Users className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      {/* Powered by Bolt Badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <img 
          src="/black_circle_360x360.png" 
          alt="Powered by Bolt.new" 
          className="w-20 h-20 hover:scale-110 transition-transform duration-200 cursor-pointer opacity-90 hover:opacity-100"
        />
      </div>
    </div>
  );
}

// ChevronDown component for FAQ
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default App;