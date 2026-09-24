import PortfolioContext from "../context/PortfolioContext";
import hero from "../data/hero";
const PortfolioProvider = ({ children }) => {
    
  const portfolioData = {
    hero,
  };

  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
