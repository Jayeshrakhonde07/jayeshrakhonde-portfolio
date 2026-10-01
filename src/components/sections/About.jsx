import SectionTitle from "../common/SectionTitle";
import UsePortfolio from "../../hooks/UsePortfolio";
import ScrollReveal from "../common/ScrollReveal";
import { m } from "framer-motion";

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

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 mt-4">
          {/* My introduction card  */}
          <ScrollReveal direction="left">
            {/*information about me */}
            <m.div
              transition={{ duration: 0.4 }}
              className="bg-bg-card/70 border border-card-border p-4 md:p-6 rounded-md backdrop-blur-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:shadow-card  active:-translate-y-1  active:border-card-hover transition duration-500"
            >
              <m.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-bold mb-2 md:text-xl "
              >
                Building ideas into meaningful digital experiences
              </m.h2>

              {/* paragraph no.1  */}
              <m.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-body text-justify [hyphens:auto]  mb-4"
              >
                Hello! I’m{" "}
                <m.span
                  whileHover={{ color: "#67e8f9" }}
                  className="text-text-main font-medium"
                >
                  Jayesh Kishor Rakhonde
                </m.span>
                , an Information Technology student pursuing my{" "}
                <m.span
                  whileHover={{ scale: 1.02 }}
                  className="text-accent font-medium"
                >
                  B.Tech in Information Technology
                </m.span>{" "}
                at{" "}
                <span className="text-text-main font-medium">
                  Prof. Ram Meghe Institute of Technology and Research, Badnera.
                </span>{" "}
                I’m from Nandura, Maharashtra, and I’ve always been curious
                about how websites and applications work. I enjoy learning new
                technologies and turning my ideas into something that people can
                actually use.
              </m.p>
              {/* paragraph no.2  */}
              <m.p
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
              </m.p>
              {/* paragraph no.3 */}
              <m.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-text-body text-justify [hyphens:auto]"
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
              </m.p>
            </m.div>
          </ScrollReveal>

          {/* right content  */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-4">
              {/* card information  */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
                {about.information.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <ScrollReveal key={info.label} delay={index * 0.1}>
                      <m.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        className="group bg-bg-card flex items-center gap-3 px-3 py-2 border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:shadow-card  active:-translate-y-1  active:border-card-hover transition duration-500"
                      >
                        {/* info icon  */}
                        <m.div
                          transition={{ duration: 0.3 }}
                          className="bg-badge p-3 rounded-md border text-accent border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent  group-hover:border-card-hover group-active:bg-badge-hover  group-active:text-bright-accent  group-active:border-card-hover   transition duration-300"
                        >
                          <Icon aria-hidden="true" />
                        </m.div>
                        {/* info data  */}
                        <m.div
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
                        </m.div>
                      </m.div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* services cards  */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                {about.services.map((service, index) => {
                  return (
                    <ScrollReveal key={service.feature} delay={index * 0.1}>
                      <m.div
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
                        className="bg-bg-card border border-card-border rounded-md p-2 text-center hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:-translate-y-1 active:border-card-hover  active:shadow-card  transition duration-500"
                      >
                        {/* card number  */}
                        <m.span
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.2 + index * 0.1,
                            type: "spring",
                            stiffness: 150,
                          }}
                          className="text-3xl font-medium text-accent"
                        >
                          {service.number}
                        </m.span>
                        <m.p
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
                        </m.p>
                      </m.div>
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
