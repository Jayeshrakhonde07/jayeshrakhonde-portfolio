import { m } from "framer-motion";
import ScrollReveal from "../../common/ScrollReveal";
import UsePortfolio from "../../../hooks/UsePortfolio";
const ServiceCard = () => {
  const { about } = UsePortfolio();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {about.services.map((service, index) => {
        const ServiceIcons = service.icon;
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
              className="bg-bg-card border border-card-border rounded-md p-2 flex flex-col items-center justify-center hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:-translate-y-1 active:border-card-hover  active:shadow-card  transition duration-500 "
            >
              <div className="relative mx-auto mb-2 w-12 h-12 flex items-center justify-center rounded-xl bg-badge border border-card-border text-accent text-xl transition duration-300">
                <ServiceIcons aria-hidden="true" />
              </div>
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
  );
};

export default ServiceCard;
