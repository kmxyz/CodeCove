import React from "react";
import serviceCardData from "../../../utils/serviceCardData";
import featuresData from "../../../utils/featuresData";
import { FaCode, FaMobileAlt, FaPalette, FaChevronRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoRefreshOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
  // Function to determine which icon to use based on service title
  const getServiceIcon = (title) => {
    switch (title) {
      case "Web Development":
        return <FaCode className="w-8 h-8 text-[var(--primary)]" />;
      case "App Development":
        return <FaMobileAlt className="w-8 h-8 text-[var(--primary)]" />;
      case "UI/UX Design":
        return <FaPalette className="w-8 h-8 text-[var(--primary)]" />;
      default:
        return <FaCode className="w-8 h-8 text-[var(--primary)]" />;
    }
  };

  // Function to determine which icon to use based on feature title
  const getFeatureIcon = (title) => {
    switch (title) {
      case "Expert Team":
        return <FaCheck className="w-6 h-6 text-[var(--primary)]" />;
      case "Agile Process":
        return <IoRefreshOutline className="w-6 h-6 text-[var(--primary)]" />;
      case "Client-Focused":
        return <FaUsers className="w-6 h-6 text-[var(--primary)]" />;
      default:
        return <FaCheck className="w-6 h-6 text-[var(--primary)]" />;
    }
  };

  return (
    <div id="services" className="bg-white">
      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions for businesses looking to establish
            or enhance their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCardData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#E9F9FB] rounded-lg flex items-center justify-center mb-6">
                {getServiceIcon(service.title)}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-[var(--primary)] font-medium hover:underline inline-flex items-center"
              >
                Learn More
                <FaChevronRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[var(--primary)] opacity-10 rounded-full"></div>
                <img
                  src="./src/assets/features-image.jpg"
                  alt="Team working on web development"
                  className="rounded-4xl shadow-xl relative z-10 w-160"
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/600x400?text=Features+Image")
                  }
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Why Choose Our Web & App Development Services?
              </h2>

              <div className="space-y-6">
                {featuresData.map((feature) => (
                  <div key={feature.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#E9F9FB] rounded-full flex items-center justify-center">
                      {getFeatureIcon(feature.title)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <button className="mt-8">Get Started Today</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
