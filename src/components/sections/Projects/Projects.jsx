import SectionTitle from "../../common/SectionTitle";
import ProjectCard from "../Projects/ProjectCard";

const Projects = () => {
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

        {/* project card component  */}
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
