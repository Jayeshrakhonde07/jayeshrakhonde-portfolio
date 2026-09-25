import PortfolioContext from "../context/PortfolioContext";
import hero from "../data/hero";
import about from "../data/about"
import skills from "../data/skills";
const PortfolioProvider = ({ children }) => {
    
  const portfolioData = {
    hero,
    about,
    skills,
  };

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
