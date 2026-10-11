import { m } from "framer-motion";
import ServiceCard from "../About/ServiceCard";

const IntroCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <m.div
        transition={{ duration: 0.4 }}
        className="bg-bg-card/70 border border-card-border p-4 md:p-6 rounded-md backdrop-blur-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 active:shadow-card  active:-translate-y-1  active:border-card-hover transition duration-500"
      >
        <m.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-bold mb-2 md:text-xl text-text-main"
        >
          Passionate about building{" "}
          <span className="text-accent">web experiences</span>
        </m.h2>

        {/* paragraph no.1  */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-body text-justify [hyphens:auto]  mb-4"
        >
          Hello! I’m{" "}
          <span className="text-text-main font-medium">
            Jayesh Kishor Rakhonde
          </span>
          , an Information Technology student pursuing my{" "}
          <m.span
            whileHover={{ scale: 1.02 }}
            className="text-accent font-medium"
          >
            B.Tech in Information Technology
          </m.span>{" "}
          at{" "}
          <span className="text-text-main font-medium">
            Prof. Ram Meghe Institute of Technology and Research, Badnera.
          </span>{" "}
          I’m from Nandura, Maharashtra, and I’ve always been curious about how
          websites and applications work. I enjoy learning new technologies and
          turning my ideas into something that people can actually use.
        </m.p>
        {/* paragraph no.2  */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-body text-justify [hyphens:auto] mb-4"
        >
          I’m currently focused on Frontend Development and enjoy building
          clean, responsive, and easy-to-use interfaces. I work with{" "}
          <span className="text-text-main font-medium">
            HTML, CSS, JavaScript, Tailwind CSS, and React
          </span>
          , and I’m also improving my Java and problem-solving skills. Alongside
          frontend development, I’ve started learning{" "}
          <span className="text-accent font-medium">
            Node.js and backend development
          </span>{" "}
          because I want to understand how a complete web application works, not
          just the part users see.
        </m.p>
        {/* paragraph no.3 */}
        <m.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-body text-justify [hyphens:auto]"
        >
          I’ve built projects like a{" "}
          <span className="text-text-main font-medium">
            Mini Spotify Clone, Calculator, Tic-Tac-Toe, and NexCart E-Commerce
          </span>
          . These projects have helped me improve my coding skills, and I’m
          currently learning backend development with Node.js while growing as a{" "}
          <span className="text-accent font-medium">Frontend Developer.</span>
        </m.p>
      </m.div>

      {/* services cards  */}
      <ServiceCard />
    </div>
  );
};

export default IntroCard;
