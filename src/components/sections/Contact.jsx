import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import UsePortfolio from "../../hooks/UsePortfolio";
import MessageForm from "../layout/MessageForm";
import { motion } from "framer-motion";
const Contact = () => {
  const { contact } = UsePortfolio();
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-20"
      id="contact"
    >
      <div className="max-w-7xl mx-auto w-full">
        <SectionTitle
          title={"Get In Touch"}
          subtitle={"Let's Work "}
          spantitle={"Together"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <ScrollReveal direction="left">
            <div className="max-w-xl">
              <div className="text-center mt-2 md:text-start  ">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-2xl text-text-main md:text-3xl font-bold text-shadow-glow font-heading"
                >
                  {contact.heading}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="text-text-body mt-2 text-justify md:text-start"
                >
                  {contact.description}
                </motion.p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {contact.contactLinks.map((link, index) => {
                  const Icons = link.icon;
                  return (
                    <ScrollReveal key={link.id} delay={index * 0.1}>
                      <motion.a
                        initial={{
                          opacity: 0,
                          x: -25,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          x: 6,
                          y: -4,
                        }}
                        whileTap={{ scale: 0.98 }}
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        className="group bg-bg-card border border-card-border flex items-center px-3 py-2 gap-3 rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                          transition={{ duration: 0.3 }}
                          className="bg-badge p-3 rounded-full border text-accent border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent  group-hover:border-card-hover transition duration-500"
                        >
                          <Icons className="text-xl" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.15 + index * 0.1,
                          }}
                        >
                          <p className="font-bold">{link.label}</p>
                          <p className="text-accent font-medium">
                            {link.title}
                          </p>
                        </motion.div>
                      </motion.a>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* form  */}

          <MessageForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
