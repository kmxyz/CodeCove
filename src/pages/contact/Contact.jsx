import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import contact from "../../assets/contact.jpg";
const Contact = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Image Side */}
            <div className="relative hidden md:block">
              <img
                src={contact}
                alt="Contact us"
                className="h-full w-full object-cover rounded-tl-none rounded-bl-none rounded-tr-[100px] rounded-br-[100px]"
              />
            </div>

            {/* Contact Form Side */}
            <div className="p-8 md:p-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--primary)] mb-12">
                Contact Us
              </h1>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 border-2 rounded-md border-[var(--primary)]  bg-transparent py-2 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 border-2 rounded-md border-[var(--primary)]  bg-transparent py-2 focus:outline-none"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 border-2 rounded-md border-[var(--primary)]  bg-transparent py-2 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[var(--primary)] text-white py-3 px-8 rounded-full font-medium hover:bg-[var(--secondary)] transition-colors duration-300"
                >
                  Submit
                </button>
              </form>

              <div className="mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#00054B] mb-2">
                      Contact
                    </h3>
                    <p className="text-[#00054B]">markapple666@gmail.com</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#00054B] mb-2">
                      Based in
                    </h3>
                    <p className="text-[#00054B]">NS, Canada</p>
                  </div>
                </div>

                <div className="mt-8 flex space-x-6">
                  <a
                    href="#"
                    className="text-[#00054B] hover:text-[#000a75] text-2xl"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className="text-[#00054B] hover:text-[#000a75] text-2xl"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="text-[#00054B] hover:text-[#000a75] text-2xl"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
