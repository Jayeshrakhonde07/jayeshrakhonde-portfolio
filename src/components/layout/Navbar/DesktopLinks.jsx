import { m } from "framer-motion";

const DesktopLinks = ({
  navigations,
  activeSection,
  handleNavClick,
  navLinkClass,
}) => {
  return (
    // desktop links
    <div className="hidden md:flex justify-center items-center gap-8">
      {navigations.map((link, index) => (
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
            activeSection === link.path.substring(1) ? "location" : undefined
          }
          className={navLinkClass(link.path)}
        >
          {link.name}
        </m.a>
      ))}
    </div>
  );
};

export default DesktopLinks;
