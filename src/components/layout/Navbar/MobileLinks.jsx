import { m } from "framer-motion";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const MobileLinks = ({
  menu,
  setMenu,
  navigations,
  activeSection,
  handleNavClick,
  navLinkClass,
}) => {
  if (!menu) return null;

  return (
    <m.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="md:hidden absolute left-0 top-full w-full bg-bg-page/98 backdrop-blur-md border-b border-card-border py-4 overflow-hidden shadow-mobile-menu"
    >
      <div className="flex flex-col items-center gap-4">
        {navigations.map((link, index) => (
          <m.a
            key={link.name}
            href={link.path}
            onClick={() => handleNavClick(link.path)}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.06,
              duration: 0.3,
              ease: "easeOut",
            }}
            aria-current={
              activeSection === link.path.substring(1) ? "location" : undefined
            }
            className={navLinkClass(link.path)}
          >
            {link.name}
          </m.a>
        ))}

        <m.a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: navigations.length * 0.06,
            duration: 0.35,
          }}
          whileHover={{ scale: 1.05, y: -2 }}
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
  );
};

export default MobileLinks;
