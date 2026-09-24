import { useContext } from "react";
import PortfolioContext from "../context/PortfolioContext";
const UsePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used inside PortfolioProvider");
  }

  return context;
};

export default UsePortfolio;
