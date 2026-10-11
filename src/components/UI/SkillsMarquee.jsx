import { m } from "framer-motion";
import UsePortfolio from "../../hooks/UsePortfolio";
const SkillsMarquee = () => {
  const { marqueeSkills } = UsePortfolio();
  if (!marqueeSkills?.length) return null;
  return (
    <section className="mb-12 mt-6 w-full max-w-xl">
      <m.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-3 text-lg font-semibold tracking-wide text-text-muted"
      >
        Stack & Skills
      </m.h3>
      <div className="skills-marquee" aria-label="Technologies I work with">
        <div className="skills-track">
          {[0, 1].map((group) => (
            <div key={group} className="skills-group" aria-hidden={group === 1}>
              {marqueeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex min-w-11.5 items-center justify-center"
                  title={skill.name}
                >
                  <img
                    src={skill.logo}
                    alt={group === 0 ? skill.name : ""}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 hover:scale-125 md:h-12 md:w-12"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsMarquee;
