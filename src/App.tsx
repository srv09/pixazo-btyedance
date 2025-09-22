import React, { useState, useEffect } from 'react';
import { Calendar, Users, ArrowRight, Play, Image, Video, Edit, ChevronRight, Clock, Star, Zap, LogIn, Search, Sparkles } from 'lucide-react';
import { FilloutStandardEmbed } from '@fillout/react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Calculate time until September 24, 2025
  useEffect(() => {
    const targetDate = new Date('2025-09-30T00:00:00Z').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Pixazo x Bytedance Campaign - Early Access Registration');
      const body = encodeURIComponent(`
New Early Access Registration:

Name: ${formData.name}
Email: ${formData.email}
Registration Date: ${new Date().toLocaleString()}

Campaign: FREE Unlimited Image & Video Creations for 7 Days
      `);
      
      const mailtoLink = `mailto:sourav@appypiellp.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      alert('Thank you for registering! Team will get back to you');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your registration. Please try again.');
    }
  };

  const models = [
    {
      name: 'SeeDream v4',
      type: 'Text → Image',
      description: 'Turn words into visuals',
      icon: <Image className="w-8 h-8" />,
      image: '/assets/bytedance-seedream-v4-text-to-image.png'
    },
    {
      name: 'SeeDream v4 Edit',
      type: 'Image → Image', 
      description: 'Transform visuals instantly',
      icon: <Edit className="w-8 h-8" />,
      image: '/assets/bytedance-seedream-v4-edit.png'
    },
    {
      name: 'SeeDance v1 Pro',
      type: 'Text → Video',
      description: 'Bring imagination to motion',
      icon: <Video className="w-8 h-8" />,
      image: '/assets/bytedance-seedance-v1-pro-text-to-video.png'
    },
    {
      name: 'SeeDance v1 Lite',
      type: 'Image → Video',
      description: 'Bring your stills to life',
      icon: <Play className="w-8 h-8" />,
      image: '/assets/bytedance-seedance-v1-lite-image-to-video.png'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section with Hero Image */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Header Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/assets/80015.jpg" 
          alt="Header Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
  
  {/* Navigation Bar */}
  <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center">
          <img src='/assets/logo.png' alt="Pixazo Logo" />
        </div>
        <span className="text-lg sm:text-xl font-bold">Pixazo</span>
      </div>
      <div className="flex items-center space-x-2 bg-orange-500 px-3 sm:px-4 py-2 rounded-md text-white">
        <Calendar className="w-4 h-4" />
        <span className="text-xs sm:text-sm font-medium">Sept 24–30, 2025</span>
      </div>
    </div>
  </nav>

  {/* Hero Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 lg:pt-40">
  <div className="inline-flex items-center justify-center flex-wrap space-x-1 sm:space-x-2 bg-orange-500 
                px-2 sm:px-4 py-1.5 sm:py-2 rounded-full mb-6 sm:mb-8 max-w-[90%] mx-auto">
    <Star className="w-3 sm:w-4 h-3 sm:h-4" />
    <span className="text-xs sm:text-sm font-medium text-center leading-tight">
      Limited Time Offer
    </span>
  </div>

    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
      <span className="text-white">FREE Unlimited</span>
      <br />
      <span className="text-orange-500">Image & Video</span>
      <br />
      <span className="text-white">Creations</span>
    </h1>

    <p className="text-lg sm:text-2xl text-gray-300 mb-6 sm:mb-8 font-light">
      7 Days — Powered by Bytedance Models
    </p>

    <p className="text-base sm:text-lg text-gray-400 mb-10 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto">
      Be among the first 1000 users to unlock unlimited creativity with Pixazo.
    </p>

    {/* Countdown Timer */}
    <div className="grid grid-cols-2 sm:flex sm:justify-center gap-4 sm:gap-6 mb-10 sm:mb-12">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div 
          key={unit} 
          className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-4 sm:p-6 min-w-[100px] sm:min-w-[120px] text-center"
        >
          <div className="text-2xl sm:text-4xl font-bold text-orange-500">{value}</div>
          <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">{unit}</div>
        </div>
      ))}
    </div>

    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-10">
      <a 
        href='#fillout' 
        className="bg-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center space-x-2 group"
      >
        <span>Get Early Access</span>
        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
      </a>
      <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
        <Users className="w-4 sm:w-5 h-4 sm:h-5" />
        <span>847 users already registered</span>
      </div>
    </div>
  </div>
    </section>

      {/* Steps Section - Ahrefs Style Vertical Layout */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-400">Start creating in just 3 simple steps</p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start space-x-8 group">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <LogIn className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-4 text-white">Log in at pixazo.ai</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Access your Pixazo account or create one in seconds. Our streamlined onboarding process gets you started immediately.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-8 group">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-4 text-white">Select "FREE" Category</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Navigate to Models section and find the FREE category. All Bytedance models will be available at no cost during the campaign.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-8 group">
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-4 text-white">Start Creating</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Choose any Bytedance model and unleash your creativity. No credits deducted, no limits, just pure creative freedom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form - Ahrefs Style */}
      <section className="py-24 bg-black" id='fillout'>
        <div className='w-full h-full m-auto flex justify-center items-center'>
          <div
          style={{
            width: 700,
            height: 500,
          }}
        >
          <FilloutStandardEmbed filloutId="gNrps6Z3Rhus"  />
    </div>
        </div>
        {/* <div style={{width:'100%',height:'500px'}} data-fillout-id="gNrps6Z3Rhus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div> */}
        {/* <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-12 border border-gray-800">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4">Register Now for Early Access</h2>
              <p className="text-lg text-gray-400">Get e<div style="width:100%;height:500px;" data-fillout-id="gNrps6Z3Rhus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div><script src="https://server.fillout.com/embed/v1/"></script>xtra days + bonus free credits</p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  className="w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-opacity-20 transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Secure My Spot</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div> */}
      </section>

      {/* Models Showcase - Ahrefs Grid Style */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Bytedance's Famous Models</h2>
            <p className="text-xl text-gray-400">Unleash your creativity with industry-leading AI models</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-orange-500">
                      {model.icon}
                    </div>
                    <span className="text-orange-500 text-sm font-medium">{model.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{model.name}</h3>
                  <p className="text-gray-400">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with Footer Image */}
      <section className="relative py-32 overflow-hidden">
        {/* Footer Background Image */}
        <div className="absolute inset-0">
          <img 
            src="assets/82377.jpg" 
            alt="Footer Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full mb-8">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Campaign live from 24–30 Sept 2025. Don't miss it!</span>
          </div>

          <h2 className="text-6xl font-bold mb-8">
            <span className="text-orange-500">Unlimited Creativity</span>
            <br />
            <span className="text-white">Starts Now</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already transforming their ideas into stunning visuals and videos.
          </p>

          <a href='https://playground.pixazo.ai/' target='_blank' className="w-100 bg-orange-500 text-white px-12 py-5 rounded-lg text-xl font-semibold hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center space-x-3 mx-auto group">
            <Zap className="w-6 h-6" />
            <span>Start Creating Free</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;