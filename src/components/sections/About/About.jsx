import SectionTitle from "../../common/SectionTitle";
import ScrollReveal from "../../common/ScrollReveal";
import UsePortfolio from "../../../hooks/UsePortfolio";
import { m } from "framer-motion";
import IntroCard from "../About/IntroCard";
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
        <div className="grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] lg:grid-cols-[340px_minmax(0,1fr)] gap-4 md:gap-5 lg:gap-6">
          {/* profile card  */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex flex-col items-center justify-center p-4 border border-card-border bg-bg-card rounded-lg"
          >
            {/* profile image */}
            <m.div className="border-4 border-accent rounded-full shadow-card">
              <div className="w-52 h-52 sm:w-56 sm:h-56 overflow-hidden rounded-full">
                <img
                  src={about.profile}
                  alt="Jayesh Rakhonde"
                  loading="lazy"
                  decoding="async"
                  width="224"
                  height="224"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </m.div>
            <div className="w-full h-px bg-card-hover/40 my-4" />

            {/* profile info  */}
            <div className="grid grid-cols-1 gap-4">
              {about.information.map((info, index) => {
                const InfoIcon = info.icon;
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
                      className="group bg-bg-secondary flex items-center gap-3 px-3 py-1.5 border border-card-border rounded-md hover:border-card-hover hover:shadow-card active:shadow-card   active:border-card-hover transition duration-500"
                    >
                      {/* info icon  */}
                      <m.div
                        transition={{ duration: 0.3 }}
                        className="bg-badge p-3 rounded-md border text-accent border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent  group-hover:border-card-hover group-active:bg-badge-hover  group-active:text-bright-accent  group-active:border-card-hover   transition duration-300"
                      >
                        <InfoIcon aria-hidden="true" />
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
          </m.div>

          {/* introduction card  */}
          <IntroCard />
        </div>
      </div>
    </section>
  );
};

export default About;
