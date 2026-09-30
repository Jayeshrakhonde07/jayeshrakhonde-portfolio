import { LazyMotion, domAnimation, m } from "framer-motion";
const Loader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed inset-0 z-9999 flex items-center justify-center bg-bg-page">
        <div className="flex flex-col items-center text-center px-6">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-bold text-accent mb-3"
          >
            Jayesh Rakhonde
          </m.h1>

          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl sm:text-2xl font-semibold text-text-main mb-8"
          >
            Welcome to My Portfolio
          </m.p>

          <div className="w-52 h-1 bg-bg-secondary rounded-full overflow-hidden">
            <m.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-full w-full bg-accent animate-loading"
            />
          </div>
        </div>
      </div>
    </LazyMotion>
  );
};

export default Loader;
