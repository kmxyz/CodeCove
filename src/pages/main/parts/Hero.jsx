import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center">
        {/* Image - Shows on top for mobile, left for desktop */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
          <div className="w-full h-full bg-[#E9F9FB] rounded-tl-[80px] overflow-hidden">
            {/* Background decoration - light blue area with rounded corner */}
            <img
              src="./src/assets/hero.jpg"
              alt="Elderly couple in park with bench"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text content - Shows below image for mobile, right for desktop */}
        <div className="w-full lg:w-1/2 px-6 lg:pr-16 mt-10 lg:mt-0 order-2 lg:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#00AD7C] leading-tight">
            Elevate Your Business with Expert Web & App Development
          </h1>
          <p className="text-gray-700 mb-8 max-w-lg">
            Your small business deserves a digital presence that's modern,
            affordable, and built to grow with you. At WebApp, we design
            websites and apps that turn visitors into customers—without the
            complexity or sky-high costs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="">Join Us</button>
            <button className="btn-secondary">Read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
