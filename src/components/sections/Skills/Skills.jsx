import SectionTitle from "../../common/SectionTitle";
import UsePortfolio from "../../../hooks/UsePortfolio";
import { m } from "framer-motion";
import { useState } from "react";
import SkillCard from "../Skills/SkillCard";
const Skills = () => {
  const { skills } = UsePortfolio();
  const mySkills = skills?.myskills ?? [];
  const categoryIcons = skills?.categoryIcons ?? {};

  // handle skill filter
  const categories = [...new Set(mySkills.map((skill) => skill.category))];

  const [activeCategory, setActiveCategory] = useState("Frontend");

  const currentCategory = categories.includes(activeCategory)
    ? activeCategory
    : categories.includes("Frontend")
      ? "Frontend"
      : (categories[0] ?? "");

  const filteredSkills = mySkills.filter(
    (skill) => skill.category === currentCategory,
  );
  return (
    <section
      className="min-h-screen flex items-center px-6 md:px-8 lg:px-10 py-20"
      id="skills"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title={"Technical Skills"}
          subtitle={"Technologies I "}
          spantitle={"work with"}
        />

        {/* category filter button*/}
        <div className="mb-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map((category) => {
            const CategoryIcon = categoryIcons[category];
            const isActive = currentCategory === category;
            return (
              <m.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                aria-pressed={isActive}
                className={`group flex items-center justify-center gap-2 rounded-lg border px-5 py-2.5 text-sm font-medium sm:px-6 sm:py-3 sm:text-base transition-all duration-500
                ${
                  isActive
                    ? "bg-accent text-button-text-secondary border-accent shadow-button"
                    : "bg-bg-secondary text-accent border-card-border  hover:text-button-text-secondary hover:border-accent hover:shadow-button"
                }
              `}
              >
                {CategoryIcon && (
                  <CategoryIcon
                    className={`h-4 w-4 shrink-0 sm:h-5 sm:w-5 transition group-hover:-translate-y-1 duration-500
                      ${
                        isActive
                          ? "text-button-text-secondary"
                          : "text-accent group-hover:text-button-text-secondary"
                      }
                  `}
                  />
                )}
                <span
                  className={`
                    transition-colors duration-500
                    ${
                      isActive
                        ? "text-button-text-secondary"
                        : "text-accent group-hover:text-button-text-secondary"
                    }
                  `}
                >
                  {category}
                </span>
              </m.button>
            );
          })}
        </div>

        {/* skill card component  */}
        <SkillCard
          filteredSkills={filteredSkills}
          currentCategory={currentCategory}
        />
      </div>
    </section>
  );
};

export default Skills;
