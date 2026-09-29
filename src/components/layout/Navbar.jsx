import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Navbar = () => {
  const navigations = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Certifications", path: "#certifications" },
    { name: "Contact", path: "#contact" },
  ];
  const [menu, setMenu] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full fixed top-0  px-6 md:px-8 lg:px-12 bg-bg-page/90 backdrop-blur-md  z-50 shadow-desktop-menu"
    >
      <nav className="max-w-7xl  mx-auto  h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={() => setMenu(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-heading font-bold text-accent hover:text-bright-accent transition duration-300"
        >
          JR
        </motion.a>

        {/* desktop menu  */}
        <div className="hidden md:flex items-center gap-8">
          {navigations.map((link) => {
            return (
              <motion.a
                key={link.name}
                href={link.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="text-text-secondary  font-bold hover:text-accent active:text-accent transition duration-300 "
              >
                {link.name}
              </motion.a>
            );
          })}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button  border border-card-border transition duration-500 "
          >
            Let's Talk
            <FaArrowRightFromBracket className="group-hover:translate-x-1 transition duration-500" />{" "}
          </motion.a>
        </div>

        {/* mobile menu button  */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenu(!menu)}
          aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menu}
          className="md:hidden flex text-2xl text-accent border border-card-border p-2.5 rounded-full active:text-bright-accent font-bold transition duration-500 "
        >
          {menu ? <RxCross1 /> : <FaBars />}
        </motion.button>
      </nav>

      {/* mobile menu  */}

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -15, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -15, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:hidden absolute left-0 top-full w-full bg-bg-page/98 backdrop-blur-md border-b border-card-border py-4 overflow-hidden shadow-mobile-menu"
          >
            <div className="flex flex-col items-center gap-5">
              {navigations.map((link) => {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setMenu(false)}
                    className="text-text-secondary font-bold active:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setMenu(false)}
                className="group bg-accent flex items-center justify-center gap-2 px-4 py-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button active:text-button-text-secondary active:shadow-button border border-card-border transition duration-500"
              >
                Let's Talk
                <FaArrowRightFromBracket className="group-hover:translate-x-1 transition-transform duration-500" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
