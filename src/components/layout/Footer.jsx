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
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="text-xs sm:text-base font-bold text-text-main"
        >
          © 2026 Jayesh Rakhonde.{" "}
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            whileHover={{ textShadow: "0 0 12px rgba(34, 211, 238, 0.8)" }}
            className="text-accent"
          >
            All rights reserved.
          </motion.span>
        </motion.h2>
      </motion.div>
    </footer>
  );
};

export default Footer;
