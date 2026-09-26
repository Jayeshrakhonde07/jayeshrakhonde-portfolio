import SectionTitle from "../common/SectionTitle";
import UsePortfolio from "../../hooks/UsePortfolio";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  const { projects } = UsePortfolio();

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-20"
      id="projects"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* section title component  */}
        <SectionTitle
          title={"Featured Projects"}
          subtitle={"A collection of"}
          spantitle={" my work"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {projects.map((project) => {
            return (
              // project card
              <div
                key={project.id}
                className="h-full overflow-hidden flex flex-col bg-bg-card border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-2 transition duration-500"
              >
                <div className="w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="object-cover rounded-t-md  transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* project information  */}
                <div className="border-b border-card-border px-4 py-2">
                  <h2 className="text-text-main text-xl md:text-2xl font-bold  mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-[15px] leading-relaxed italic mb-2 text-text-body">
                    {project.description}
                  </p>
                  <ul className="list-disc pl-3 md:pl-4 space-y-1 marker:text-accent">
                    {project.features.map((feature) => {
                      return (
                        <li
                          key={feature}
                          className="text-[14px] md:text-[16px]"
                        >
                          {feature}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 px-4 py-3">
                  {/* project technology  */}
                  <div className="flex flex-wrap gap-2 ">
                    {project.technologies.map((tech) => {
                      return (
                        <span
                          key={tech}
                          className="text-xs bg-badge px-2 py-1 text-accent border border-card-border rounded-md font-semibold hover:bg-badge-hover hover:text-bright-accent hover:border-bright-accent transition duration-500"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* project buttons  */}
                  <div className="flex items-center justify-center gap-4 mt-1">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-1 items-center justify-center gap-3 bg-accent px-4 py-2 rounded-md text-button-text-primary font-semibold hover:text-button-text-secondary hover:shadow-button transition duration-500"
                    >
                      Live Demo <FaArrowUpRightFromSquare className="text-sm" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="text-2xl border border-card-border p-3 rounded-full hover:text-accent hover:shadow-button transition duration-500"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
