import htmlImage from "../assets/images/certifications/HTML Certificate.png";
import cssImage from "../assets/images/certifications/CSS Certificate.png";
import javascriptImage from "../assets/images/certifications/Javascript Certificate.png";
import reactImage from "../assets/images/certifications/React Certificate.png";
import reactHackerRankImage from "../assets/images/certifications/React-Hackerrank.png";
import gitImage from "../assets/images/certifications/Git Certificate.png";
import githubImage from "../assets/images/certifications/Github Certificate.png";

import htmlCertificate from "../assets/documents/certificates/HTML Certificate.pdf";
import cssCertificate from "../assets/documents/certificates/CSS Certificate.pdf";
import javascriptCertificate from "../assets/documents/certificates/Javascript Certificate.pdf";
import reactCertificate from "../assets/documents/certificates/React and Redux Certificate.pdf";
import reactHackerCertificate from "../assets/documents/certificates/React-Hackerank Certificate.pdf";
import gitCertitifcate from "../assets/documents/certificates/Git Certificate Prepinsta.pdf";
import githubCertificate from "../assets/documents/certificates/Github Certificate Prepinsta.pdf";

const certifications = [
  {
    id: 1,
    title: "Complete HTML Certitifcate",
    issuer: "KnowledgeGate",
    date: "January 2026",
    description:
      "Completed Complete HTML certification covering HTML fundamentals, semantic structure, elements, links, images, and forms.",
    image: htmlImage,
    credentialUrl: htmlCertificate,
  },
  {
    id: 2,
    title: "Complete CSS Certitifcate",
    issuer: "KnowledgeGate",
    date: "January 2026",
    description:
      "Completed Complete CSS certification covering the fundamentals of CSS and modern web styling.",
    image: cssImage,
    credentialUrl: cssCertificate,
  },
  {
    id: 3,
    title: "Complete JavaScript Certitifcate",
    issuer: "KnowledgeGate",
    date: "April 2026",
    description:
      "Completed Complete JavaScript certification covering JavaScript fundamentals, programming concepts, and interactive web development.",
    image: javascriptImage,
    credentialUrl: javascriptCertificate,
  },

  {
    id: 4,
    title: "React and Redux Certitifcate",
    issuer: "KnowledgeGate",
    date: "September 2026",
    description:
      "Completed React and Redux certification covering React fundamentals, components, hooks, state management, Redux, and Redux Toolkit.",
    image: reactImage,
    credentialUrl: reactCertificate,
  },

  {
    id: 5,
    title: "React (Basic) Certitifcate",
    issuer: "HackerRank",
    date: "September 2026",
    description:
      "Completed HackerRank React certification demonstrating knowledge of React fundamentals, components, props, state, hooks, and modern React development.",
    image: reactHackerRankImage,
    credentialUrl: reactHackerCertificate,
  },

  {
    id: 6,
    title: "Git Certitifcate",
    issuer: "PrepInsta",
    date: "April 2026",
    description:
      "Completed Git certification covering version control, repositories, commits, branching, and essential Git workflows.",
    image: gitImage,
    credentialUrl: gitCertitifcate,
  },
  {
    id: 7,
    title: "GitHub Certitifcate",
    issuer: "PrepInsta",
    date: "April 2026",
    description:
      "Completed GitHub certification covering repositories, collaboration, version control, and GitHub workflows.",
    image: githubImage,
    credentialUrl: githubCertificate,
  },
];

export default certifications;
