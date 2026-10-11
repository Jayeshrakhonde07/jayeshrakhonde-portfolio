import ScrollReveal from "../../common/ScrollReveal";
import { m } from "framer-motion";

const SkillCard = ({ filteredSkills, currentCategory }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
      {filteredSkills.map((skill, index) => (
        <ScrollReveal
          key={`${currentCategory}-${skill.id ?? skill.label}`}
          delay={(index % 6) * 0.08}
        >
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: (index % 6) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative bg-bg-card border border-card-border min-h-30 px-4 py-5 flex flex-col items-center justify-center text-center rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:border-card-hover active:shadow-card active:-translate-y-1 transition duration-500"
          >
            {/* skill icon  */}
            <m.div
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
              <m.img
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3 }}
                src={skill.icon}
                alt={skill.label}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </m.div>

            <m.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + (index % 6) * 0.08,
              }}
              className="text-text-main font-medium mt-2"
            >
              {skill.label}
            </m.h2>
          </m.div>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default SkillCard;
