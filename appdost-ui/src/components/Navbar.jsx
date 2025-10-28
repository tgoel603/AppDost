import React from 'react';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];
  // Assuming you save the logo image as 'logo.png' in your 'public' folder or similar accessible location

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height for logo */}
          
        
         <div className="shrink-0 flex items-center h-full py-2">
   
    <img 
      className="h-10 w-auto mr-3" 
      src="/logo.PNG" 
      alt="AppDost Logo"
    />

    <div className="flex flex-col text-left">
       
        <span 
            className="text-2xl font-black uppercase tracking-wider 
                       text-red-700 hover:text-red-800 transition duration-300" 
            style={{ 
               
                textShadow: '2px 2px 5px rgba(255, 165, 0, 0.4)' 
            }}
        >
            AppDost
        </span>
        <span 
            className="text-sm font-medium uppercase tracking-widest mt-0.5 
                       text-amber-500" 
        >
            - Complete IT Solution
        </span>
    </div>
</div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  // Hover color changed to reflect the Red/Amber theme
                  className="text-gray-600 hover:bg-red-50 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          {/* Get Free Consultation Button (Desktop) */}
          <a
            href="#contact"
            // BOLD & ENERGETIC COLOR CHANGE: Button uses Amber
            className="hidden md:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-lg text-white bg-amber-500 hover:bg-amber-600 transition duration-150"
          >
            Get Free Consultation
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;