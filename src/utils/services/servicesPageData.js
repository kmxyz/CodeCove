import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaServer,
  FaDatabase,
  FaUserFriends,
  FaPaintBrush,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
  SiKotlin,
  SiSwift,
} from "react-icons/si";

export const servicesData = {
  webDevelopment: {
    title: "Web Development",
    subtitle: "Creating powerful web experiences that convert",
    description:
      "We build modern, responsive, and high-performance websites that help your business stand out. Our web development solutions are tailored to your specific needs and designed for optimal user experience.",
    icon: FaCode,
    capabilities: [
      {
        title: "Frontend Development",
        description: "Pixel-perfect UIs built with modern frameworks",
        icon: FaPaintBrush,
      },
      {
        title: "Backend Systems",
        description: "Scalable server-side solutions with robust APIs",
        icon: FaServer,
      },
      {
        title: "Database Design",
        description: "Optimized data structures for efficient operations",
        icon: FaDatabase,
      },
      {
        title: "User Experience",
        description: "Intuitive interfaces focused on conversion and retention",
        icon: FaUserFriends,
      },
    ],
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Vue.js", icon: SiVuedotjs },
    ],
    processes: [
      "Requirements Gathering",
      "UI/UX Design",
      "Frontend & Backend Development",
      "Testing & QA",
      "Deployment & Maintenance",
    ],
  },
  appDevelopment: {
    title: "App Development",
    subtitle: "Mobile solutions for your business growth",
    description:
      "We develop native and cross-platform mobile applications that provide seamless experiences across all devices. Our app development process ensures your product is built with scalability and performance in mind.",
    icon: FaMobileAlt,
    capabilities: [
      {
        title: "Native Apps",
        description: "High-performance applications for iOS and Android",
        icon: FaCogs,
      },
      {
        title: "Cross-Platform",
        description: "Efficient solutions that work on multiple platforms",
        icon: FaCode,
      },
      {
        title: "API Integration",
        description: "Seamless connection with existing systems",
        icon: FaServer,
      },
      {
        title: "User-Centered Design",
        description: "Intuitive interfaces that users love",
        icon: FaUserFriends,
      },
    ],
    technologies: [
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Swift", icon: SiSwift },
      { name: "Kotlin", icon: SiKotlin },
    ],
    processes: [
      "Market Research",
      "Prototyping",
      "Development & Integration",
      "Testing Across Devices",
      "App Store Submission & Maintenance",
    ],
  },
};
