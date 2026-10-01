import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import UsePortfolio from "../../hooks/UsePortfolio";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { m } from "framer-motion";
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
                <m.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="bg-bg-card border border-card-border overflow-hidden rounded-xl hover:border-card-hover hover:shadow-card hover:-translate-y-2   active:border-card-hover active:shadow-card active:-translate-y-2  transition duration-500"
                >
                  {/*certificates image*/}
                  <m.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1,
                    }}
                    className="w-full md:h-58 overflow-hidden rounded-t-xl"
                  >
                    <m.img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="w-full object-cover rounded-t-2xl"
                      loading="lazy"
                    />
                  </m.div>

                  {/*certificates information*/}
                  <div className="p-4 md:p-6 flex flex-col">
                    {/*title*/}
                    <m.h2
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
                    </m.h2>
                    {/*issuer*/}
                    <m.p
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
                    </m.p>
                    {/*issued date*/}
                    <m.p
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
                    </m.p>
                    {/*description*/}
                    <m.p
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
                    </m.p>

                    {/*view button*/}
                    <m.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6,
                      }}
                      className="mt-3"
                    >
                      <m.a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:shadow-button hover:text-button-text-secondary active:shadow-button active:text-button-text-secondary  transition duration-500"
                      >
                        View Certificate{" "}
                        <FaArrowRightToBracket className="group-hover:translate-x-1 group-active:translate-x-1 transition duration-500" />
                      </m.a>
                    </m.div>
                  </div>
                </m.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
