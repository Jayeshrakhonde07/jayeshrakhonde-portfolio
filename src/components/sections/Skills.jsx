import SectionTitle from "../common/SectionTitle";
import UsePortfolio from "../../hooks/UsePortfolio";
import ScrollReveal from "../common/ScrollReveal";
import { motion } from "framer-motion";
const Skills = () => {
  const { skills } = UsePortfolio();

  return (
    <section
      className="min-h-screen flex items-center px-6 md:px-8 lg:px-10 py-20"
      id="skills"
    >
      <div className="max-w-7xl mx-auto w-full ">
        <SectionTitle
          title={"Technical Skills"}
          subtitle={"Technologies I "}
          spantitle={"work with"}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
          {/* skills cards  */}
          {skills.map((skill, index) => {
            return (
              <ScrollReveal key={skill.id} delay={(index % 6) * 0.08}>
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 6) * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="group relative bg-bg-card border border-card-border min-h-40 px-4 py-5 flex flex-col items-center justify-center text-center rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + (index % 6) * 0.08,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute top-2 right-2 md:top-3 md:right-2 bg-badge text-accent text-[9px] sm:text-[10px] font-medium px-2 py-1 rounded-full border border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent group-hover:border-card-hover transition duration-500"
                  >
                    {skill.category}
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + (index % 6) * 0.08,
                      ease: "easeOut",
                    }}
                    className="w-16 h-16 mt-3"
                  >
                    <motion.img
                      whileHover={{
                        scale: 1.12,
                        rotate: 3,
                      }}
                      transition={{ duration: 0.3 }}
                      src={skill.icon}
                      alt={skill.label}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 "
                      loading="lazy"
                    />
                  </motion.div>

                  <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + (index % 6) * 0.08,
                    }}
                    className="text-text-main font-medium mt-2"
                  >
                    {skill.label}
                  </motion.h2>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
