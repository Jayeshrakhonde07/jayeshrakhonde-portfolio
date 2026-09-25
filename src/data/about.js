import {
  FaUser,
  FaGraduationCap,
  FaLocationDot,
  FaCode,
} from "react-icons/fa6";
const about = {
  information: [
    { icon: FaUser, label: "Name", title: "Jayesh Kishor Rakhonde" },
    {
      icon: FaGraduationCap,
      label: "Education",
      title: "B.Tech in Information Technology",
    },
    { icon: FaLocationDot, label: "Location", title: "Amravati, Maharashtra" },
    { icon: FaCode, label: "Interest", title: "Web & software development" },
  ],

  services: [
    { number: "8+", feature: "Technologies" },
    { number: "6+", feature: "Projects" },
    { number: "8+", feature: "Certifications" },
    { number: "2+", feature: "Experience" },
  ],
};

export default about;
