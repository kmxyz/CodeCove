import React from "react";
import {
  socialLinks,
  quickLinks,
  serviceLinks,
  contactInfo,
  companyInfo,
} from "../utils/footer-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">{companyInfo.name}</h3>
            <p className="mb-4 text-slate-300">{companyInfo.description}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.ariaLabel}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 ">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 ">
              {serviceLinks.map((service) => (
                <li key={service.id} className="text-slate-300 ">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <div key={contact.id} className="flex items-center gap-2">
                  <contact.icon className="text-slate-300" size={20} />
                  <span className="text-slate-300">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-700 text-center text-slate-400">
          <p>
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
