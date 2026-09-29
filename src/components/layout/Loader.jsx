import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-bg-page">
      <div className="flex flex-col items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-[#00d4ff] mb-3"
        >
          Jayesh Rakhonde
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-white mb-8"
        >
          Welcome to My Portfolio
        </motion.p>

        <div className="w-52 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-[#00d4ff] animate-loading"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
