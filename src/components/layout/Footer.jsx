import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-bg-secondary px-6 md:px-8 lg:px-10 py-6 border-t border-card-border">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-center"
      >
        <h2 className="text-xs sm:text-base font-bold text-text-main">
          © 2026 Jayesh Rakhonde.{" "}
          <span className="text-accent">All rights reserved.</span>
        </h2>
      </motion.div>
    </footer>
  );
};

export default Footer;
