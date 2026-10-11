import { m } from "framer-motion";
import UsePortfolio from "../../../hooks/UsePortfolio";
const HeroSocialLinks = () => {
  const { hero } = UsePortfolio();
  return (
    <div className="flex justify-center mt-4 md:justify-start gap-4 ">
      {hero.socialLinks.map((link) => {
        const Icons = link.icon;
        return (
          <m.a
            key={link.label}
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={link.label}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -4, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-bg-secondary p-2 text-2xl text-accent border border-card-border rounded-full hover:text-text-main hover:bg-accent hover:border-card-hover hover:shadow-button  active:text-text-main active:bg-accent active:border-card-hover active:shadow-button transition duration-500"
          >
            <Icons />
          </m.a>
        );
      })}
    </div>
  );
};

export default HeroSocialLinks;
