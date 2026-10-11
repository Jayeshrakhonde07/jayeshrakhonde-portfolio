import UsePortfolio from "../../../hooks/UsePortfolio";
import ScrollReveal from "../../common/ScrollReveal";
import { m } from "framer-motion";
const ContactLinks = () => {
  const { contact } = UsePortfolio();
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* contact links  */}
      {contact.contactLinks.map((link, index) => {
        const Icons = link.icon;
        return (
          <ScrollReveal key={link.id} delay={index * 0.1}>
            <m.a
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
              whileTap={{ scale: 0.98 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-bg-card border border-card-border flex items-center px-3 py-2 gap-3 rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:border-card-hover active:shadow-card active:-translate-y-1  transition duration-500"
            >
              {/* contact icons  */}
              <m.div
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
                className="bg-badge p-3 rounded-full border text-accent border-card-border group-hover:bg-badge-hover group-hover:text-bright-accent   group-hover:border-card-hover group-active:bg-badge-hover group-active:text-bright-accent  group-active::border-card-hover transition duration-500"
              >
                <Icons className="text-xl" aria-hidden="true" />
              </m.div>

              {/* contact informations  */}
              <m.div
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
                <p className="font-bold text-text-main">{link.label}</p>
                <p className="text-accent font-medium group-hover:text-bright-accent">{link.title}</p>
              </m.div>
            </m.a>
          </ScrollReveal>
        );
      })}
    </div>
  );
};

export default ContactLinks;
