import { useState } from "react";
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
  
    <>
      <header className="w-full fixed top-0  px-6 md:px-8 lg:px-12 bg-bg-page/90 backdrop-blur-md  z-50 shadow-desktop-menu">
        <nav className="max-w-7xl  mx-auto  h-16 flex items-center justify-between">
          <a
            href="#home"
            className="text-3xl font-heading font-bold text-accent hover:text-bright-accent transition duration-300"
          >
            JR
          </a>

          {/* desktop menu  */}
          <div className="hidden md:flex items-center gap-8">
            {navigations.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-text-secondary  font-bold hover:text-accent active:text-accent transition duration-300 "
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="contact"
              className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button  border border-card-border transition duration-500 "
            >
              Let's Talk{" "}
              <FaArrowRightFromBracket className="group-hover:translate-x-1 transition duration-500" />{" "}
            </a>
          </div>

          {/* mobile menu button  */}
          <button
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menu}
            className="md:hidden flex text-2xl text-accent active:text-bright-accent font-bold transition duration-500"
          >
            {menu ? <RxCross1 /> : <FaBars />}
          </button>
        </nav>

        {/* mobile menu  */}

        <div
          className={`md:hidden absolute left-0 top-full w-full bg-bg-page/95 backdrop-blur-md border-b border-card-border py-4 overflow-hidden transition-all duration-500 ease-in-out shadow-mobile-menu ${
            menu
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-3"
          }`}
        >
          <div className="flex flex-col items-center gap-5">
            {navigations.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenu(false)}
                  className="text-text-secondary font-bold  active:text-accent transition-colors duration-300"
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="contact"
              onClick={() => setMenu(false)}
              className="group bg-accent flex items-center justify-center gap-2 px-4 py-2  rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button  active:text-button-text-secondary active:shadow-button border border-card-border transition duration-500 "
            >
              Let's Talk
              <FaArrowRightFromBracket className="group-hover:translate-x-1 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
