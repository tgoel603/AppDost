import React from 'react';

const Services = () => {
  const serviceCategories = [
    // ... (Service data remains the same)
    {
      title: "Web Development",
      description: "Responsive and scalable web applications tailored to your business needs.",
      features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
      iconBg: "bg-green-100 text-green-700"
    },
    // ... other services (update iconBg colors for consistency if you wish)
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive suite of IT solutions to drive your digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {serviceCategories.map((service, index) => (
            <div 
              key={index} 
              // CLASS CHANGE: border-indigo-600 -> border-red-600
              className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-600 hover:shadow-2xl transition duration-300"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${service.iconBg}`}>
                <span className="text-xl">🛠️</span> {/* Placeholder icon */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700">
                    {/* CLASS CHANGE: text-indigo-600 -> text-red-600 */}
                    <span className="text-red-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
