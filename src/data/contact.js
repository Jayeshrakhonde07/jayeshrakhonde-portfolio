import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const contact = {
  heading: "Let's Connect",
  description:
    "Have a project in mind? Whether you have a project idea, collaboration opportunity or simply want to connect, feel free to send me a message",
  contactLinks: [
    {
      id: 1,
      icon: MdOutlineMailOutline,
      label: "Email",
      title: "jayeshrakhonde05@gmail.com",
      href: "mailto:jayeshrakhonde05@gmail.com",
    },
    {
      id: 2,
      icon: FaPhoneAlt,
      label: "Phone",
      title: "+91 7498610902",
      href: "tel:+917498610902",
    },
    {
      id: 3,
      icon: FaLinkedin,
      label: "LinkedIn",
      title: "jayesh-rakhonde-186b18290",
      href: "https://www.linkedin.com/in/jayesh-rakhonde-186b18290/",
    },
    {
      id: 4,
      icon: FaGithub,
      label: "GitHub",
      title: "Jayeshrakhonde07",
      href: "https://github.com/Jayeshrakhonde07",
    },
  ],
};

export default contact; 