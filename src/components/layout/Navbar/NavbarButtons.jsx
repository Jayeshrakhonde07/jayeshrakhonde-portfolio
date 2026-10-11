import { m } from "framer-motion";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const NavbarButtons = ({
  theme = { theme },
  toggleTheme = { toggleTheme },
  menu = { menu },
  setMenu = { setMenu },
  handleNavClick = { handleNavClick },
}) => {
  return (
    <>
      {/* desktop buttons */}
      <div className="hidden md:flex items-center gap-4">
        <m.button
          type="button"
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.55 }}
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
          className="flex items-center justify-center rounded-full border border-card-border p-2.5 text-xl text-accent transition duration-300 hover:bg-accent/10 cursor-pointer"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </m.button>

        {/* let's talk button  */}
        <m.a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          initial={{ opacity: 0, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button border border-card-border transition duration-500"
        >
          Let's Talk
          <FaArrowRightFromBracket className="group-hover:translate-x-1 transition duration-500" />
        </m.a>
      </div>

      {/* Mobile buttons */}
      <div className="flex items-center gap-4 md:hidden">
        <m.button
          type="button"
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
          className="flex items-center justify-center rounded-full border border-card-border p-2.5 text-xl text-accent transition duration-300 hover:bg-accent/10"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </m.button>

        <m.button
          type="button"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileTap={{ scale: 0.9, rotate: 5 }}
          onClick={() => setMenu((previous) => !previous)}
          aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="mobile-navigation"
          aria-expanded={menu}
          className="flex text-2xl text-accent border border-card-border p-2.5 rounded-full active:text-bright-accent font-bold transition duration-500"
        >
          <m.span
            key={menu ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {menu ? <RxCross1 /> : <FaBars />}
          </m.span>
        </m.button>
      </div>
    </>
  );
};

export default NavbarButtons;
