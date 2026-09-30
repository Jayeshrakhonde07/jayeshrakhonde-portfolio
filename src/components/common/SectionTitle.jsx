import { m } from "framer-motion";

const SectionTitle = ({ title, subtitle, spantitle }) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-center mb-4"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-main text-shadow-glow">
        {title}
      </h2>
      <p className="text-xl md:text-2xl font-title font-bold mt-2">
        {subtitle} <span className="text-accent">{spantitle}</span>
      </p>
      <m.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="w-20 h-1 bg-accent mx-auto mt-4"
      ></m.div>
    </m.div>
  );
};

export default SectionTitle;
