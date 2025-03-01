import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

// Social Media Links
export const socialLinks = [
  { id: 1, icon: FaTwitter, url: "https://twitter.com", ariaLabel: "Twitter" },
  {
    id: 2,
    icon: FaFacebook,
    url: "https://facebook.com",
    ariaLabel: "Facebook",
  },
  {
    id: 3,
    icon: FaInstagram,
    url: "https://instagram.com",
    ariaLabel: "Instagram",
  },
];

// Quick Links Navigation
export const quickLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Services", url: "/services" },
  { id: 3, name: "Portfolio", url: "/portfolio" },
  { id: 4, name: "About Us", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
];

// Services Links
export const serviceLinks = [
  { id: 1, name: "Web Development", url: "/services/web-development" },
  { id: 2, name: "Mobile Apps", url: "/services/mobile-apps" },
  { id: 3, name: "UI/UX Design", url: "/services/ui-ux-design" },
  { id: 4, name: "E-Commerce Solutions", url: "/services/ecommerce" },
  { id: 5, name: "IT Consulting", url: "/services/consulting" },
];

// Contact Information
export const contactInfo = [
  {
    id: 1,
    icon: MdEmail,
    text: "markapple666@gmail.com",
    type: "email",
  },
];

// Company Information
export const companyInfo = {
  name: "WebApp Developers",
  description:
    "We create stunning web and mobile applications tailored to your business needs.",
};
