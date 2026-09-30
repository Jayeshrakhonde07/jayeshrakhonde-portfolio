import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import UsePortfolio from "../../hooks/UsePortfolio";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { motion } from "framer-motion";
const Certifications = () => {
  const { certifications } = UsePortfolio();
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-20"
      id="certifications"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* section title component  */}
        <SectionTitle
          title={"Certifications"}
          subtitle={"My Learning "}
          spantitle={"Journey"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/*certificates cards*/}
          {certifications.map((certificate, index) => {
            return (
              <ScrollReveal key={certificate.id} delay={(index % 3) * 0.12}>
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="bg-bg-card border border-card-border overflow-hidden rounded-xl hover:border-card-hover hover:shadow-card hover:-translate-y-2 transition duration-500"
                >
                  {/*certificates image*/}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                    }}
                    className="w-full h-52 md:h-56 overflow-hidden rounded-t-xl "
                  >
                    <motion.img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="w-full object-contain "
                    />
                  </motion.div>

                  {/*certificates information*/}
                  <div className="p-4 md:p-6 flex flex-col">
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      className="text-text-main text-lg md:text-xl font-semibold"
                    >
                      {certificate.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3,
                      }}
                      className="text-accent mt-1 font-bold text-[18px]"
                    >
                      {certificate.issuer}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.4,
                      }}
                      className="mt-2 text-text-main font-semibold"
                    >
                      <span className="text-accent">Issued: </span>
                      {certificate.date}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                      }}
                      className="text-text-body mt-2"
                    >
                      {certificate.description}
                    </motion.p>

                    {/*view button*/}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                      }}
                      className="mt-3"
                    >
                      <motion.a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:shadow-button hover:text-text-main transition duration-500"
                      >
                        View Certificate{" "}
                        <FaArrowRightToBracket className="group-hover:translate-x-1 transition duration-500" />
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

export default Certifications;
