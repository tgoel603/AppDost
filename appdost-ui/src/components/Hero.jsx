import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 

      className="pt-16 pb-20 bg-linear-to-r from-rose-600 to-red-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-500 hover:bg-amber-600 transition duration-150 transform hover:scale-105"
          >
          
            <span className="text-4xl mb-2" role="img" aria-label="Rocket">🚀</span>
            <span className="text-lg font-semibold uppercase tracking-widest text-white">
Complete IT Solution Provider Since 2025</span>
        </div>
     
        
        {/* Main Heading (Exact Text Requested) */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Transform Your Ideas Into <br className="hidden sm:inline" /> Digital Reality
        </h1>
        
        {/* Subtitle/Description */}
        <p className="mt-4 max-w-2xl mx-auto text-xl text-red-100">
          Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#services"
            // BOLD & ENERGETIC COLOR CHANGE 2: Primary Button BG (Amber)
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-500 hover:bg-amber-600 transition duration-150 transform hover:scale-105"
          >
            Explore Our Services →
          </a>
          <a
            href="#contact"
            // BOLD & ENERGETIC COLOR CHANGE 3: Secondary Button Hover
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-red-700 transition duration-150 transform hover:scale-105"
          >
            Get Free Consultation
          </a>
        </div>
        
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBox value="+10" label="Web Projects" />
          <StatBox value="4+" label="Mobile Apps" />
          <StatBox value="100%" label="Client Satisfaction" />
          <StatBox value="24/7" label="Support" />
        </div>
      </div>
    </section>
  );
};
const StatBox = ({ value, label }) => (
    <div className="flex justify-center">
       
        <div 
            className="p-5 w-full max-w-xs bg-white/10 rounded-xl 
                       hover:bg-white/30 transition duration-300 transform hover:scale-105"
        >
            <div className="text-center">
                <p className="text-4xl font-bold text-white mb-1">{value}</p>
                <p className="text-sm font-medium text-amber-50 uppercase mt-1">{label}</p>
            </div>
        </div>
    </div>
);

export default Hero;