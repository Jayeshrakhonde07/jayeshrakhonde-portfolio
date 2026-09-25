import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import UsePortfolio from "../../hooks/UsePortfolio";

const Hero = () => {
  const { hero } = UsePortfolio();

  const roles = ["Frontend Developer", "Java Developer"];

  // role changing animation
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText.length === 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10 py-25" id="home">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* left content  */}
          <div className=" text-center md:text-left">
            <p className="text-text-muted">Hello, I am</p>
            <h1 className="text-text-main text-3xl md:text-4xl lg:text-6xl font-heading font-bold mb-2 text-shadow-glow">
              {hero.personal.name}
            </h1>
            <h2 className="text-accent min-h-12 text-2xl md:text-3xl lg:text-4xl font-medium my-3">
              {displayText} <span className="animate-pulse">|</span>
            </h2>
            <p className="text-text-body max-w-xl text-justify leading-relaxed md:text-left">
              {" "}
              IT student focused on building modern, responsive web
              applications. I enjoy creating clean user interfaces, solving
              development problems, and improving my skills by working on
              real-world projects.
            </p>

            {/* hero buttons  */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
              <a
                href="projects"
                className="group bg-accent px-5 py-2.5 flex items-center justify-center gap-2 rounded-md text-button-text-primary font-bold  hover:shadow-button hover:text-text-main transition duration-500"
              >
                View Projects{" "}
                <FaArrowRight className="group-hover:translate-x-1 transition duration-500" />{" "}
              </a>
              <a
                href={hero.personal.resume}
                download="Jayesh_Rakhonde_Resume.pdf"
                className="group bg-bg-secondary px-5 py-2.5 flex items-center justify-center gap-2 font-medium text-accent border border-card-border rounded-md hover:bg-accent hover:text-button-text-secondary hover:shadow-button transition duration-500"
              >
                Download Resume
                <FiDownload className="group-hover:translate-y-1 transition duration-500" />
              </a>
            </div>

            {/* social links  */}
            <div className="flex justify-center mt-4 md:justify-start gap-4 ">
              {hero.socialLinks.map((link) => {
                const Icons = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={link.label}
                    className="bg-bg-card p-2 text-2xl text-accent border border-card-border rounded-full hover:text-text-main hover:bg-accent hover:border-card-hover hover:shadow-button  transition duration-500"
                  >
                    <Icons />
                  </a>
                );
              })}
            </div>
          </div>

          {/* profile images with particles */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="relative">
              {/* particles  */}
              {hero.particles.map((particle, index) => (
                <span
                  key={index}
                  className={`
                          absolute
                          ${particle[3]}
                          ${particle[4]}
                          rounded-full
                          animate-particle
                          pointer-events-none
                          shadow-[0_0_10px_rgba(0,212,255,0.8)]
                        `} 
                  style={{
                    top: particle[0],
                    left: particle[1],
                    animationDelay: particle[2],
                  }}
                />
              ))}

              {/* profile image */}
              <div className="border-4 border-accent rounded-full animate-float shadow-card">
                <div className="w-70 h-70 md:w-80 md:h-80">
                  <img
                    src={hero.personal.profile}
                    alt="Jayesh Rakhonde - Frontend Developer"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
