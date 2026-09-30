import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, spantitle }) => {
  return (
    <motion.div
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
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-main text-shadow-glow">
        {title}
      </h1>
      <p className="text-xl md:text-2xl font-title font-bold mt-2">
        {subtitle} <span className="text-accent">{spantitle}</span>
      </p>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "5rem", opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="w-20 h-1 bg-accent mx-auto mt-4"
      ></motion.div>
    </motion.div>
  );
};

export default SectionTitle;
