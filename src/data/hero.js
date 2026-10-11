import myResume from "../assets/documents/resume/Jayesh_Rakhonde_Resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const hero = {
  personal: {
    name: "Jayesh Rakhonde",
    resume: myResume,
  },

  socialLinks: [
    {
      icon: FaGithub,
      href: "https://github.com/Jayeshrakhonde07",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/jayesh-rakhonde-186b18290/",
      label: "LinkedIn",
    },
    {
      icon: TfiEmail,
      href: "mailto:jayeshrakhonde05@gmail.com",
      label: "Email",
    },
  ],
};

export default hero;
