import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Ready to Start Your Project?</h2>
          <p className="mt-4 text-xl text-gray-300">
            Get a free consultation and let's transform your ideas into reality.
          </p>
        </div>

        {/* Simple Contact Form */}
        <form className="mt-8 space-y-6">
          {/* ... (Input fields remain the same) */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Project Details</label>
            <textarea
              id="message"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-700 rounded-md shadow-sm bg-gray-800 text-white focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            // CLASS CHANGE: bg-indigo-600 hover:bg-indigo-700 -> bg-amber-500 hover:bg-amber-600
            // CLASS CHANGE: focus:ring-indigo-500 -> focus:ring-amber-500
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-150"
          >
            Submit Request
          </button>
        </form>

        <div className="mt-10 text-center text-gray-400">
          <p>Or email us directly: 
            {/* CLASS CHANGE: text-indigo-400 -> text-amber-400 */}
            <a href="mailto:hr@appdost.in" className="text-amber-400 hover:text-amber-300">hr@appdost.in</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
