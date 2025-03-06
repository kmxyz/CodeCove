import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import { MdOutlineDesignServices, MdDeveloperMode } from "react-icons/md";
import { IoIosGlobe } from "react-icons/io";
import { BsClipboardData, BsCodeSlash, BsLaptop } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { AiOutlineDeploymentUnit } from "react-icons/ai";

export const companyInfo = {
  name: "WebCraft Studios",
  founded: "2020",
  mission:
    "To create innovative digital solutions that empower businesses to thrive in the digital landscape.",
  vision:
    "To become the leading web and app development company, known for our quality, innovation, and customer-centric approach.",
};

export const workApproach = [
  {
    id: 1,
    title: "Discovery & Planning",
    description:
      "We begin every project with a thorough discovery phase to understand your business goals, target audience, and project requirements.",
    icon: BsClipboardData,
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Our design process focuses on creating intuitive, engaging interfaces that align with your brand identity and user expectations.",
    icon: MdOutlineDesignServices,
  },
  {
    id: 3,
    title: "Development",
    description:
      "Using modern frameworks and best practices, we build scalable, performant applications that meet your specifications.",
    icon: BsCodeSlash,
  },
  {
    id: 4,
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your application works flawlessly across all devices, browsers, and user scenarios.",
    icon: BsLaptop,
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "We handle the technical deployment process, ensuring a smooth transition from development to production.",
    icon: AiOutlineDeploymentUnit,
  },
  {
    id: 6,
    title: "Support & Maintenance",
    description:
      "Our relationship continues after launch with ongoing support, updates, and improvements to your digital product.",
    icon: RiUserSettingsLine,
  },
];

export const coreValues = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We constantly explore new technologies and creative solutions to keep our clients ahead of the curve.",
    icon: FaLightbulb,
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we do, from code to customer service.",
    icon: FaRocket,
  },
  {
    id: 3,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and partner closely with our clients to achieve shared goals.",
    icon: FaUsers,
  },
];

export const expertise = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Creating intuitive, engaging user experiences that delight your customers and achieve your business goals.",
    icon: MdOutlineDesignServices,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Building responsive, fast-loading websites that look great on all devices and rank well in search engines.",
    icon: MdDeveloperMode,
  },
  {
    id: 3,
    title: "App Development",
    description:
      "Developing native and cross-platform mobile applications that provide seamless experiences on all devices.",
    icon: IoIosGlobe,
  },
];
