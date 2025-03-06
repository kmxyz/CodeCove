import React from "react";
import statsData from "../../../utils/main/statsData";
import techStackData from "../../../utils/main/techStackData";

const Stats = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-5xl font-bold text-[var(--primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Our Tech Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver high-quality web
              and mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStackData.map((tech) => (
              <div
                key={tech.id}
                className="bg-white p-8 rounded-lg shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-5xl text-[var(--primary)] mr-4">
                    <tech.icon />
                  </div>
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
