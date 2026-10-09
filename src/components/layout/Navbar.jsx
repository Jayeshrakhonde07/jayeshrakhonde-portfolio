import { useState, useEffect } from "react";
import { m } from "framer-motion";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const navigations = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Certifications", path: "#certifications" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  // menu open state
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Close the mobile menu when switching to desktop.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (event) => {
      if (event.matches) {
        setMenu(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  // update active navigation based on the current scroll position.
  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 10;

        if (isAtBottom) {
          setActiveSection("contact");
          ticking = false;
          return;
        }

        let currentSection = "home";
        const activationPoint = 160;

        for (const link of navigations) {
          const section = document.querySelector(link.path);

          if (!section) continue;

          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= activationPoint) {
            currentSection = link.path.slice(1);
          } else {
            break;
          }
        }

        setActiveSection(currentSection);
        ticking = false;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("hashchange", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  // navigate smoothly without immediately changing the active link.
  const handleNavClick = (path) => {
    setMenu(false);
    const section = document.querySelector(path);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    // Keep the URL hash in sync with the selected section.
    if (window.location.hash !== path) {
      window.history.replaceState(null, "", path);
    }
  };

  // shared navigation link styles.
  const navLinkClass = (path) => {
    const isActive = activeSection === path.substring(1);
    return `
      relative cursor-pointer whitespace-nowrap
      py-2 font-medium
      transition-colors duration-300
      after:absolute after:bottom-0 after:left-0
      after:h-[2px] after:w-full
      after:origin-left after:rounded-full
      after:bg-accent
      after:transition-transform after:duration-300
      ${
        isActive
          ? "text-accent after:scale-x-100"
          : "text-text-main after:scale-x-0 hover:text-accent hover:after:scale-x-100"
      }
    `;
  };

  // handle light and dark mode

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) => (previous === "dark" ? "light" : "dark"));
  };

  return (
    <m.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full fixed top-0 px-6 md:px-8 lg:px-12 bg-bg-page/90 backdrop-blur-md z-50 shadow-desktop-menu"
    >
      {/* navbar  */}
      <nav className="max-w-7xl mx-auto  h-16  min-w-0 flex items-center justify-between">
        {/* JR Logo  */}
        <div>
          <m.a
            href="#home"
            aria-label="JR — return to homepage"
            onClick={() => handleNavClick("#home")}
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
            className=" text-3xl font-heading font-bold text-accent hover:text-bright-accent transition duration-300"
          >
            JR
          </m.a>
        </div>

        {/* desktop menu links  */}
        <div className="hidden md:flex  justify-center items-center gap-8">
          {navigations.map((link, index) => {
            return (
              <m.a
                key={link.name}
                href={link.path}
                initial={{ opacity: 0, y: -15 }}
                onClick={() => handleNavClick(link.path)}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.25 + index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -2 }}
                aria-current={
                  activeSection === link.path.substring(1)
                    ? "location"
                    : undefined
                }
                className={navLinkClass(link.path)}
              >
                {link.name}
              </m.a>
            );
          })}
        </div>

        {/* navbar buttons */}

        <div className="flex items-center gap-4">
          {/* Desktop Theme Toggle */}
          <m.button
            type="button"
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.55,
              ease: "easeOut",
            }}
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.08 }}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "dark"}
            className="hidden md:flex items-center justify-center rounded-full border border-card-border p-2.5 text-xl text-accent transition duration-300 hover:bg-accent/10 cursor-pointer"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </m.button>

          {/* desktop let's talk button  */}
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
            className="group bg-accent px-4 py-2 hidden md:flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button  border border-card-border transition duration-500 "
          >
            Let's Talk
            <FaArrowRightFromBracket className="group-hover:translate-x-1 transition duration-500" />{" "}
          </m.a>
        </div>

        {/* mobile menu button  */}

        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Theme Toggle */}
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

          {/* mobile menu button  */}
          <m.button
            type="button"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
            }}
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
        </div>
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
          <div className="flex flex-col items-center gap-4">
            {navigations.map((link, index) => {
              // links
              return (
                <m.a
                  key={link.name}
                  href={link.path}
                  onClick={() => handleNavClick(link.path)}
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
                  aria-current={
                    activeSection === link.path.substring(1)
                      ? "location"
                      : undefined
                  }
                  className={navLinkClass(link.path)}
                >
                  {link.name}
                </m.a>
              );
            })}

            {/* mobile let's talk button  */}
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
