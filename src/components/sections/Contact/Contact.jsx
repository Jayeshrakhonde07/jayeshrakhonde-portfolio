import SectionTitle from "../../common/SectionTitle";
import ScrollReveal from "../../common/ScrollReveal";
import UsePortfolio from "../../../hooks/UsePortfolio";
import MessageForm from "../Contact/MessageForm";
import ContactLinks from "../Contact/ContactLinks";
import { m } from "framer-motion";
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
            <div className="w-full">
              {/* left content  */}
              <div className="text-center md:text-start  ">
                {/* let's connect  */}
                <m.h3
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
                </m.h3>
                <m.p
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
                </m.p>
              </div>
            </div>

            {/* contact links component  */}
            <ContactLinks />
            
          </ScrollReveal>

          {/* message form component  */}
          <MessageForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
