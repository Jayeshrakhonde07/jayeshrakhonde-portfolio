import spotifyimg from "../assets/images/projects/Spotify-Clone.png";
import portflioimg from '../assets/images/projects/Portfolio.png'
const projects = [
  {
    id: 1,
    image: spotifyimg,
    title: "Mini Spotify",
    description:
      "Spotify-inspired music player with responsive UI .",
    features: [
      "Spotify-inspired music player interface",
      "Play and pause audio tracks",
      "Responsive design for different screen sizes",
    ],
    technologies: ["HTML", "CSS", "Javascript"],
    liveDemo: "https://spotify-clone-puce-six.vercel.app/",
    github: "https://github.com/Jayeshrakhonde07/Spotify-Clone.git",
  },
  {
    id:2,
    image:portflioimg,
     title: "Personal Portfolio",
    description:
      "Modern dark-themed portfolio website showcasing my skills, projects, and certifications.",
    features: [
   "Animated hero with typing effect",
  "Resume download and social links",
  "Fully responsive multi-section layout",
   
    ],
    technologies: ["React", "Tailwind CSS", "Javascript","Email.js"],
    liveDemo: "",
    github: "https://github.com/Jayeshrakhonde07/jayeshrakhonde-portfolio.git",
  }
  


  
];

export default projects;
