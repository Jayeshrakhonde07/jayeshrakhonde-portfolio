import SectionTitle from "../common/SectionTitle";
import ScrollReveal from "../common/ScrollReveal";
import UsePortfolio from "../../hooks/UsePortfolio";
import { FaArrowRightToBracket } from "react-icons/fa6";
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
                <div
                  key={certificate.id}
                  className="bg-bg-card border border-card-border overflow-hidden rounded-xl hover:border-card-hover hover:shadow-card hover:-translate-y-2 transition duration-500"
                >
                  {/*certificates image*/}
                  <div className="w-full h-52 md:h-56 overflow-hidden rounded-t-xl ">
                    <img
                      src={certificate.image}
                      alt={`${certificate.title} certificate`}
                      className="w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/*certificates information*/}
                  <div className="p-4 md:p-6 flex flex-col">
                    <h2 className="text-text-main text-lg md:text-xl font-semibold">
                      {certificate.title}
                    </h2>
                    <p className="text-accent mt-1 font-bold text-[18px]">
                      {certificate.issuer}
                    </p>
                    <p className="mt-2 text-text-main font-semibold">
                      <span className="text-accent">Issued: </span>
                      {certificate.date}
                    </p>
                    <p className="text-text-body mt-2">
                      {certificate.description}
                    </p>

                    {/*view button*/}
                    <div className="mt-3">
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-accent px-4 py-2 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold hover:shadow-button hover:text-text-main transition duration-500"
                      >
                        View Certificate{" "}
                        <FaArrowRightToBracket className="group-hover:translate-x-1 transition duration-500" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
