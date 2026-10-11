import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { m } from "framer-motion";
import UsePortfolio from "../../../hooks/UsePortfolio";
const HeroButtons = () => {
  const { hero } = UsePortfolio();
  return (
    <m.div className="flex flex-col lg:flex-row justify-center md:justify-start gap-4 mt-6">
      <m.a
        href="#projects"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group bg-accent px-5 py-2.5 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold  hover:shadow-button hover:text-text-main active:shadow-button active:text-text-main transition duration-500 "
      >
        View Projects
        <FaArrowRight className="group-hover:translate-x-1 group-active:translate-x-2 transition duration-500" />{" "}
      </m.a>
      <m.a
        href={hero.personal.resume}
        download="Jayesh_Rakhonde_Resume.pdf"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group bg-bg-secondary px-5 py-2.5 flex items-center justify-center gap-2 font-medium text-accent border border-card-border rounded-md hover:bg-accent hover:text-button-text-secondary hover:shadow-button active:bg-accent active:text-button-text-secondary active:shadow-button transition duration-500"
      >
        Download Resume
        <FiDownload className="group-hover:translate-y-1 transition duration-500" />
      </m.a>
    </m.div>
  );
};

export default HeroButtons;
