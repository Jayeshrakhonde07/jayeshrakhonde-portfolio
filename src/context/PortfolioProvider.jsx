import PortfolioContext from "../context/PortfolioContext";
import hero from "../data/hero";
import about from "../data/about"
const PortfolioProvider = ({ children }) => {
    
  const portfolioData = {
    hero,
    about,
  };

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
