import SectionTitle from "../common/SectionTitle";
import UsePortfolio from "../../hooks/UsePortfolio";

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
          {skills.map((skill) => {
            return (
              <div key={skill.id}
                className="group relative bg-bg-card border border-card-border min-h-40 px-4 py-5 flex flex-col items-center justify-center text-center rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
              >
                <span className="absolute top-2 right-2 md:top-3 md:right-2 bg-badge text-accent text-[9px] sm:text-[10px] font-medium px-2 py-1 rounded-full border border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent group-hover:border-card-hover transition duration-500">
                  {skill.category}
                </span>

                <div className="w-16 h-16 mt-3">
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 "
                    loading="lazy"
                  />
                </div>

                <h2 className="text-text-main font-medium mt-2">
                  {skill.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
