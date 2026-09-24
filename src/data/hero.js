import myResume from "../assets/documents/resume/Jayesh_Rakhonde_Resume.pdf";
import profileImg from "../assets/images/profile/Profile.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
const hero = {
  personal: {
    name: "Jayesh Rakhonde",
    resume: myResume,
    profile: profileImg,
  },

 roles : [
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "UI/UX Designer",
    "Java Developer",
  ],

  socialLinks: [
    {
      icon: FaGithub ,
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

    particles :[
    ["5%", "-8%", "0s", "w-2 h-2", "bg-[#00d4ff]"],
    ["15%", "105%", "0.8s", "w-1.5 h-1.5", "bg-white"],
    ["40%", "-15%", "1.4s", "w-1.5 h-1.5", "bg-[#00d4ff]"],
    ["70%", "108%", "0.4s", "w-2 h-2", "bg-white"],
    ["88%", "5%", "1.8s", "w-1.5 h-1.5", "bg-[#00d4ff]"],
    ["78%", "100%", "2.2s", "w-1 h-1", "bg-[#00d4ff]"],
    ["28%", "95%", "1.1s", "w-1 h-1", "bg-white"],
    ["55%", "-5%", "2.5s", "w-1 h-1", "bg-white"],
  ]
};

export default hero;
