import SectionTitle from "../../common/SectionTitle";
import CertificateCard from "../Certifications/CertificateCard";

const Certifications = () => {
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

        {/* certificate card component  */}
        <CertificateCard />
      </div>
    </section>
  );
};

export default Certifications;
