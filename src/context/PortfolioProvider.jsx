import PortfolioContext from "../context/PortfolioContext";
import hero from "../data/hero";
import about from "../data/about"
import skills from "../data/skills";
import projects from "../data/projects";
import certifications from "../data/certifications";
const PortfolioProvider = ({ children }) => {
    
  const portfolioData = {
    hero,
    about,
    skills,
    projects,
    certifications
  };

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
