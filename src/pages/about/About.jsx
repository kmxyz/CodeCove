import {
  companyInfo,
  workApproach,
  coreValues,
  expertise,
} from "../../utils/aboutData";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#00AD7C] to-[#009369] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About {companyInfo.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{companyInfo.mission}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 basis-full md:basis-[calc(50%-1rem)]">
                <h3 className="text-xl font-semibold mb-2">Founded</h3>
                <p>{companyInfo.founded}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 basis-full md:basis-[calc(50%-1rem)]">
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p>{companyInfo.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00AD7C]">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="bg-white p-8 rounded-xl shadow-md transition-transform hover:scale-105 border border-gray-100"
              >
                <div className="bg-[#E9F9FB] rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto text-[#00AD7C]">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Approach Section */}
      <section className="py-16 bg-[#E9F9FB]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00AD7C]">
              Our Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workApproach.map((step) => (
                <div
                  key={step.id}
                  className="bg-white rounded-xl p-8 shadow-md transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-[#00AD7C] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      {step.id}
                    </div>
                    <div className="text-[#00AD7C] mb-4">
                      <step.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#00AD7C]">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {expertise.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#00AD7C]"
                >
                  <div className="text-[#00AD7C] mb-4">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#009369] to-[#00AD7C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8">
              Let's turn your ideas into reality with our expert team.
            </p>
            <Link to="/contact">
              <button className="bg-white text-[#00AD7C] hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-bold text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
