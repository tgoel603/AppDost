import React from 'react';

const Features = () => {
  const features = [
    { title: "100% Client Satisfaction", desc: "Your success is our priority, guaranteed satisfaction.", icon: "⭐" },
    { title: "Secure & Scalable", desc: "Built with the latest frameworks for robust and future-proof solutions.", icon: "🔒" },
    { title: "Fast Delivery", desc: "Proven methodology to ensure projects are delivered efficiently and on time.", icon: "⚡" },
    { title: "24/7 Support", desc: "Technical support and maintenance to keep your solution running smoothly.", icon: "📞" }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
          Why Choose AppDost?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
