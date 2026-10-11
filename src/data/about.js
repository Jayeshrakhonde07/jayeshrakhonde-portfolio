import {
  FaUser,
  FaGraduationCap,
  FaLocationDot,
  FaCode,
} from "react-icons/fa6";
import { FaLaptopCode, FaCertificate, FaTools } from "react-icons/fa";
import profileImg from "../assets/images/profile/Profile.png";
const about = {
  profile: profileImg,

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
    { icon: FaLaptopCode, number: "9+", feature: "Technologies" },
    { icon: FaTools, number: "3+", feature: "Projects" },
    { icon: FaCertificate, number: "7+", feature: "Certifications" },
  ],
};

export default about;
