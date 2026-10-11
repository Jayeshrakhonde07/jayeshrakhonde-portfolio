import { useEffect, useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import Loader from "./components/UI/Loader";
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Projects from "./components/sections/Projects/Projects";
import Certifications from "./components/sections/Certifications/Certifications";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import PageBackground from "./components/UI/PageBackground";
const App = () => {
  // handle loading animation
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>
          <PageBackground />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </LazyMotion>
      </MotionConfig>
    </>
  );
};

export default App;
