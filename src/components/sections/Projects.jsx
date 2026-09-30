import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import UsePortfolio from "../../hooks/UsePortfolio";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
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
          {projects.map((project, index) => {
            return (
              // project card
              <ScrollReveal key={project.id} delay={(index % 3) * 0.12}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="h-full overflow-hidden flex flex-col bg-bg-card border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-2 transition duration-500"
                >
                  <motion.div
                    className="w-full overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="object-cover rounded-t-md  transition-transform duration-500 hover:scale-105"
                    />
                  </motion.div>

                  {/* project information  */}
                  <div className="border-b border-card-border px-4 py-2">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-text-main text-xl md:text-2xl font-bold  mb-2"
                    >
                      {project.title}
                    </motion.h2>

                    {/* project description  */}
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-sm md:text-[15px] leading-relaxed italic mb-2 text-text-body"
                    >
                      {project.description}
                    </motion.p>
                    {/* project features  */}
                    <motion.ul
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="list-disc pl-3 md:pl-4 space-y-1 marker:text-accent"
                    >
                      {project.features.map((feature, featureIndex) => {
                        return (
                          <motion.li
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.35 + featureIndex * 0.08,
                            }}
                            key={feature}
                            className="text-[14px] md:text-[16px]"
                          >
                            {feature}
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>

                  <div className="flex flex-col gap-3 px-4 py-3">
                    {/* project technology  */}
                    <motion.div
                      className="flex flex-wrap gap-2 "
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {project.technologies.map((tech, techIndex) => {
                        return (
                          <motion.span
                            key={tech}
                            className="text-xs bg-badge px-2 py-1 text-accent border border-card-border rounded-md font-semibold hover:bg-badge-hover hover:text-bright-accent hover:border-bright-accent transition duration-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.45 + techIndex * 0.06,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        );
                      })}
                    </motion.div>

                    {/* project buttons  */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="flex items-center justify-center gap-4 mt-1"
                    >
                      {/* live demo  */}
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-1 items-center justify-center gap-3 bg-accent px-4 py-2 rounded-md text-button-text-primary font-bold hover:text-button-text-secondary hover:shadow-button transition duration-500"
                      >
                        Live Demo{" "}
                        <FaArrowUpRightFromSquare className="text-sm" />
                      </motion.a>

                      {/* github repo  */}
                      <motion.a
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                        }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="text-2xl border border-card-border p-3 rounded-full hover:text-accent  hover:border-card-hover transition duration-500"
                      >
                        <FaGithub />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
