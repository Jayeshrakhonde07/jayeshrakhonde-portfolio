import { useState, useEffect } from "react";
import { m } from "framer-motion";
import DesktopLinks from "../Navbar/DesktopLinks";
import MobileLinks from "../Navbar/MobileLinks";
import NavbarButtons from "../Navbar/NavbarButtons";

const navigations = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Certifications", path: "#certifications" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Close mobile menu on desktop
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

  // Update active navigation while scrolling
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

  // Smooth navigation
  const handleNavClick = (path) => {
    setMenu(false);

    const section = document.querySelector(path);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (window.location.hash !== path) {
      window.history.replaceState(null, "", path);
    }
  };

  // Navigation link styles
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

  // Apply and save theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
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
      className="w-full fixed top-0 px-6 md:px-8 lg:px-12 bg-bg-page/95 backdrop-blur-md z-50 shadow-desktop-menu"
    >
      <nav className="max-w-7xl mx-auto h-16 min-w-0 flex justify-between items-center">
        {/* Logo */}
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
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl font-heading font-bold text-accent hover:text-bright-accent transition duration-300"
          >
            JR
          </m.a>
        </div>

        {/* Desktop navigation */}
        <DesktopLinks
          navigations={navigations}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          navLinkClass={navLinkClass}
        />

        {/* Theme and menu buttons */}
        <NavbarButtons
          theme={theme}
          toggleTheme={toggleTheme}
          menu={menu}
          setMenu={setMenu}
          handleNavClick={handleNavClick}
        />
      </nav>

      {/* Mobile navigation */}
      <div id="mobile-navigation">
        <MobileLinks
          menu={menu}
          navigations={navigations}
          activeSection={activeSection}
          handleNavClick={handleNavClick}
          navLinkClass={navLinkClass}
        />
      </div>
    </m.header>
  );
};

export default Navbar;
