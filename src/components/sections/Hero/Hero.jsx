import { useEffect, useState } from "react";
import { m } from "framer-motion";
import UsePortfolio from "../../../hooks/UsePortfolio";
import HeroButtons from "./HeroButtons";
import HeroSocialLinks from "./HeroSocialLinks";
import SkillsMarquee from "../../UI/SkillsMarquee";
import HeroModel from "../../UI/HeroModel";

const Hero = () => {
  const { hero } = UsePortfolio();

  // role changing animation
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // handle role changing
  useEffect(() => {
    const roles = ["Frontend Developer", "Java Developer"];
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText.length === 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-25 lg:py-45"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left content  */}
          <m.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center md:text-left"
          >
            {/* personal information  */}
            <m.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-text-muted"
            >
              Hello, I am
            </m.p>
            <m.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-text-main text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-2 text-shadow-glow"
            >
              {hero.personal.name}
            </m.h1>
            <m.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-live="polite"
              className="text-accent text-2xl md:text-3xl lg:text-4xl font-medium my-3"
            >
              {displayText}{" "}
              <span className="animate-pulse" aria-hidden="true">
                |
              </span>
            </m.h2>
            <m.p
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-text-body max-w-xl leading-relaxed text-center md:text-left"
            >
              IT student focused on building modern, responsive web
              applications. I enjoy creating clean user interfaces, solving
              development problems, and improving my skills by working on
              real-world projects.
            </m.p>

            {/* hero buttons component  */}

            <HeroButtons />

            {/* social links component  */}
            <HeroSocialLinks />

            {/* skills scrolling animation  */}
            <SkillsMarquee />
          </m.div>

          {/* coding 3d model component  */}
          <HeroModel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
