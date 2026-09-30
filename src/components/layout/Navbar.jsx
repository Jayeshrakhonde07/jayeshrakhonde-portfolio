import { useState } from "react";
import { m } from "framer-motion";
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
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full fixed top-0 px-6 md:px-8 lg:px-12 bg-bg-page/90 backdrop-blur-md  z-50 shadow-desktop-menu"
    >
      {/* navbar  */}
      <nav className="max-w-7xl  mx-auto  h-16   min-w-0  flex items-center justify-between">
        {/* JR Logo  */}
        <m.a
          href="#home"
          onClick={() => setMenu(false)}
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.08,
            rotate: -2,
          }}
          whileTap={{ scale: 0.95 }}
          className="text-3xl font-heading font-bold text-accent hover:text-bright-accent transition duration-300"
        >
          JR
        </m.a>

        {/* desktop menu links  */}
        <div className="hidden md:flex items-center gap-8">
          {navigations.map((link, index) => {
            return (
              <m.a
                key={link.name}
                href={link.path}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -2,
                  scale: 1.05,
                }}
                className="relative text-text-secondary font-bold hover:text-accent active:text-accent transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:scale-x-0 after:bg-accent after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link.name}
              </m.a>
            );
          })}

          {/* let's talk button  */}
          <m.a
            href="#contact"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.97 }}
            className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button  border border-card-border transition duration-500 "
          >
            Let's Talk
            <FaArrowRightFromBracket className="group-hover:translate-x-1 transition duration-500" />{" "}
          </m.a>
        </div>

        {/* mobile menu button  */}
        <m.button
          type="button"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9, rotate: 5 }}
          onClick={() => setMenu(!menu)}
          aria-controls="mobile-navigation"
          aria-expanded={menu}
          className="md:hidden flex text-2xl text-accent border border-card-border p-2.5 rounded-full active:text-bright-accent font-bold transition duration-500 "
        >
          <m.span
            key={menu ? "close" : "open"}
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {menu ? <RxCross1 /> : <FaBars />}
          </m.span>
        </m.button>
      </nav>

      {/* mobile menu links  */}

      {menu && (
        <m.div
          layout
          initial={false}
          animate={{
            opacity: menu ? 1 : 0,
            y: menu ? 0 : -10,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="md:hidden absolute left-0 top-full w-full bg-bg-page/98 backdrop-blur-md border-b border-card-border py-4 overflow-hidden shadow-mobile-menu"
          style={{ pointerEvents: menu ? "auto" : "none" }}
        >
          <div className="flex flex-col items-center gap-5">
            {navigations.map((link, index) => {
              return (
                <m.a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenu(false)}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 5,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="relative text-text-secondary font-bold active:text-accent transition-colors duration-300 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:scale-x-0 after:bg-accent after:origin-center after:transition-transform after:duration-300 active:after:scale-x-100"
                >
                  {link.name}
                </m.a>
              );
            })}

            {/* mobile talk button  */}
            <m.a
              href="#contact"
              onClick={() => setMenu(false)}
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.9,
              }}
              transition={{
                delay: navigations.length * 0.06,
                duration: 0.35,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="group bg-accent flex items-center justify-center gap-2 px-4 py-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button active:text-button-text-secondary active:shadow-button border border-card-border transition duration-500"
            >
              Let's Talk
              <m.span whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
                <FaArrowRightFromBracket />
              </m.span>
            </m.a>
          </div>
        </m.div>
      )}
    </m.header>
  );
};

export default Navbar;
