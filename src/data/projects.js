import spotifyimg from "../assets/images/projects/Spotify-Clone.png";
import portfolioimg from "../assets/images/projects/Portfolio.png";
const projects = [
  {
    id: 1,
    image: portfolioimg,
    title: "Personal Portfolio",
    description:
      "Dark-themed portfolio with 3D visuals, smooth animations, and responsive design.",
    features: [
      "Interactive 3D model with immersive visuals",
      "Animated hero section with typing effect and smooth transitions",
      "Resume download, social links, and EmailJS contact form",
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    liveDemo: "https://jayeshrakhonde.vercel.app/",
    github: "https://github.com/Jayeshrakhonde07/jayeshrakhonde-portfolio.git",
  },
  {
    id: 2,
    image: spotifyimg,
    title: "Mini Spotify",
    description:
      "A lightweight Spotify-inspired music player with a responsive interface.",
    features: [
      "Clean and user-friendly music player UI",
      "Play and pause audio tracks",
      "Responsive design for all screen sizes",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://spotify-clone-puce-six.vercel.app/",
    github: "https://github.com/Jayeshrakhonde07/Spotify-Clone.git",
  },
];

export default projects;
