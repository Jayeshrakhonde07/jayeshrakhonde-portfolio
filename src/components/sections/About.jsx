import SectionTitle from "../common/SectionTitle";
import UsePortfolio from "../../hooks/UsePortfolio";
import ScrollReveal from "../common/ScrollReveal";
import { motion } from "framer-motion";
const About = () => {
  const { about } = UsePortfolio();

  return (
    <section
      className="min-h-screen flex items-center  px-6 md:px-8 lg:px-10 py-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto w-full ">
        {/* heading component  */}
        <SectionTitle
          title={"About Me"}
          subtitle={"Get To "}
          spantitle={"Know Me"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <ScrollReveal direction="left">
            {/*information about me */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="bg-bg-card/70 border border-card-border p-4 md:p-6 rounded-md backdrop-blur-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
            >
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-bold mb-2 md:text-xl "
              >
                Building ideas into meaningful digital experiences
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-body text-justify [hyphens:auto]  mb-4"
              >
                Hello! I’m{" "}
                <motion.span
                  whileHover={{ color: "#67e8f9" }}
                  className="text-text-main font-medium"
                >
                  Jayesh Kishor Rakhonde
                </motion.span>
                , an Information Technology student pursuing my{" "}
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  className="text-accent font-medium"
                >
                  B.Tech in Information Technology
                </motion.span>{" "}
                at{" "}
                <span className="text-text-main font-medium">
                  Prof. Ram Meghe Institute of Technology and Research, Badnera.
                </span>{" "}
                I’m from Nandura, Maharashtra, and I’ve always been curious
                about how websites and applications work. I enjoy learning new
                technologies and turning my ideas into something that people can
                actually use.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-text-body text-justify [hyphens:auto] mb-4"
              >
                I’m currently focused on Frontend Development and enjoy building
                clean, responsive, and easy-to-use interfaces. I work with{" "}
                <span className="text-text-main font-medium">
                  HTML, CSS, JavaScript, Tailwind CSS, and React
                </span>
                , and I’m also improving my Java and problem-solving skills.
                Alongside frontend development, I’ve started learning{" "}
                <span className="text-accent font-medium">
                  Node.js and backend development
                </span>{" "}
                because I want to understand how a complete web application
                works, not just the part users see.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-text-body text-justify [hyphens:auto] "
              >
                I’ve built projects like a{" "}
                <span className="text-text-main font-medium">
                  Mini Spotify Clone, Calculator, Tic-Tac-Toe, and NexCart
                  E-Commerce
                </span>
                . These projects have helped me improve my coding skills, and
                I’m currently learning backend development with Node.js while
                growing as a{" "}
                <span className="text-accent font-medium">
                  Frontend Developer
                </span>
                .
              </motion.p>
            </motion.div>
          </ScrollReveal>

          {/* right content  */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4">
              {/* card information  */}
              <div className="flex flex-col gap-4">
                {about.information.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <ScrollReveal key={info.label} delay={index * 0.1}>
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        whileHover={{ x: 5, y: -4 }}
                        key={info.label}
                        className="group bg-bg-card flex items-center gap-3 px-3 py-2 border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                          transition={{ duration: 0.3 }}
                          className="bg-badge p-3 rounded-md border text-accent border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent  group-hover:border-card-hover   transition duration-300"
                        >
                          <Icon aria-hidden="true" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.15 + index * 0.1,
                          }}
                        >
                          <h3 className="text-accent font-medium">
                            {info.label}
                          </h3>
                          <p className="text-text-main font-medium">
                            {info.title}
                          </p>
                        </motion.div>
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* services cards  */}
              <div className="grid grid-cols-2 gap-4">
                {about.services.map((service, index) => {
                  return (
                    <ScrollReveal key={service.feature} delay={index * 0.1}>
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 25,
                          scale: 0.95,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.03,
                        }}
                        key={service.feature}
                        className="bg-bg-card border border-card-border rounded-md p-2 text-center hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
                      >
                        <motion.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                            type: "spring",
                            stiffness: 150,
                          }}
                          className="text-3xl font-medium text-accent"
                        >
                          {service.number}
                        </motion.span>
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                          }}
                          className="text-text-body"
                        >
                          {service.feature}
                        </motion.p>
                      </motion.div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
