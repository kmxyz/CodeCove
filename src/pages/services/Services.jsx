import React from "react";
import { servicesData } from "../../utils/servicesPageData";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const Services = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // Function to render a service section
  const renderServiceSection = (serviceKey, isEven) => {
    const service = servicesData[serviceKey];
    const IconComponent = service.icon;

    return (
      <section className={`py-20 ${isEven ? "bg-gray-50" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Service description - order changes based on even/odd */}
            <div className={`lg:w-1/2 ${isEven ? "order-2" : "order-1"}`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#E9F9FB] rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {service.title}
                </h2>
              </div>
              <p className="text-xl text-[var(--primary)] font-medium mb-4">
                {service.subtitle}
              </p>
              <p className="text-gray-600 mb-8">{service.description}</p>

              {/* Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {service.capabilities.map((capability, index) => {
                  const CapIcon = capability.icon;
                  return (
                    <div key={index} className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#E9F9FB] rounded-lg flex items-center justify-center">
                        <CapIcon className="w-5 h-5 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {capability.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link to="/contact">
                <button className="inline-flex items-center">
                  Get Started <FaArrowRight className="ml-2" />
                </button>
              </Link>
            </div>

            {/* Technologies and processes - order changes based on even/odd */}
            <div className={`lg:w-1/2 ${isEven ? "order-1" : "order-2"}`}>
              <div className="bg-white rounded-xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {service.technologies.map((tech, index) => {
                    const TechIcon = tech.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#E9F9FB] rounded-lg flex items-center justify-center">
                          <TechIcon className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Our Process
                </h3>
                <div className="space-y-4">
                  {service.processes.map((process, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#E9F9FB] rounded-full flex items-center justify-center">
                        <FaCheck className="w-3 h-3 text-[var(--primary)]" />
                      </div>
                      <span className="text-gray-700">{process}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#f9f9f9] to-[#e9f9fb] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We offer comprehensive web and mobile application development
            services designed to help your business grow in the digital space.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                handleScroll("web-development");
              }}
            >
              Web Development
            </button>
            <button
              onClick={() => {
                handleScroll("app-development");
              }}
            >
              App Development
            </button>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
      <div id="web-development">
        {renderServiceSection("webDevelopment", false)}
      </div>

      {/* App Development Section */}
      <div id="app-development">
        {renderServiceSection("appDevelopment", true)}
      </div>

      {/* CTA Section */}
      <section className="bg-[var(--primary)] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help bring your ideas to life
            with our web and app development expertise.
          </p>
          <Link to="/contact">
            <button className="bg-white text-[var(--primary)] hover:bg-gray-100">
              Contact Us Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
