import React from "react";
import SectionTitle from "../common/SectionTitle";
import UsePortfolio from "../../hooks/UsePortfolio";
const About = () => {
  const { about } = UsePortfolio();

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-10"
      id="about"
    >
      <div className="max-w-7xl mx-auto w-full ">
        {/* heading component  */}
        <SectionTitle
          title={"About Me"}
          subtitle={"Get To "}
          spantitle={"Know Me"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-4">
          {/*information about me */}
          <div className="bg-bg-card/70 border border-card-border p-4 md:p-6 rounded-md backdrop-blur-md">
            <h1 className="font-bold mb-2 md:text-xl ">
              Building ideas into meaningful digital experiences
            </h1>
            <p className="text-text-body text-justify [hyphens:auto] mb-2">
              Hello! I’m{" "}
              <span className="text-text-main font-medium">
                Jayesh Kishor Rakhonde
              </span>
              , an Information Technology student pursuing my{" "}
              <span className="text-accent font-medium">
                B.Tech in Information Technology
              </span>{" "}
              at{" "}
              <span className="text-text-main font-medium">
                Prof. Ram Meghe Institute of Technology and Research, Badnera.
              </span>{" "}
              I’m from Nandura, Maharashtra, and I’ve always been curious about
              how websites and applications work. I enjoy learning new
              technologies and turning my ideas into something that people can
              actually use.
            </p>

            <p className="text-text-body text-justify [hyphens:auto] mb-2">
              I’m currently focused on Frontend Development and enjoy building
              clean, responsive, and easy-to-use interfaces. I work with{" "}
              <span className="text-text-main font-medium">
                HTML, CSS, JavaScript, Tailwind CSS, and React
              </span>
              , and I’m also improving my Java and problem-solving skills.
              Alongside frontend development, I’ve started learning{" "}
              <span className="text-accent font-medium">
                Node.js and backend development
              </span>{" "}
              because I want to understand how a complete web application works,
              not just the part users see.
            </p>

            <p className="text-text-body text-justify [hyphens:auto] ">
              I’ve built projects like a{" "}
              <span className="text-text-main font-medium">
                Mini Spotify Clone, Calculator, Tic-Tac-Toe, and NexCart
                E-Commerce
              </span>
              . These projects have helped me improve my coding skills, and I’m
              currently learning backend development with Node.js while growing
              as a{" "}
              <span className="text-accent font-medium">
                Frontend Developer
              </span>
              .
            </p>
          </div>

          {/* right content  */}
          <div className="flex flex-col gap-4">
            {/* card information  */}
            <div className="flex flex-col gap-4">
              {about.information.map((info) => {
                const Icons = info.icon;
                return (
                  <div
                    key={info.label}
                    className=" bg-bg-card flex items-center gap-3 px-3 py-2 border border-card-border rounded-md hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
                  >
                    <div className="bg-badge p-3 rounded-md border text-accent border-card-border hover:bg-badge-hover hover:text-bright-accent hover:border-card-hover transition duration-300">
                      <Icons />
                    </div>
                    <div>
                      <h1 className="text-accent font-medium">{info.label}</h1>
                      <p className="text-text-main font-medium">{info.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* services cards  */}
            <div className="grid grid-cols-2 gap-4">
              {about.services.map((service) => {
                return (
                  <div
                    key={service.feature}
                    className="bg-bg-card border border-card-border rounded-md p-2 text-center hover:border-card-hover hover:shadow-card hover:-translate-y-1 transition duration-500"
                  >
                    <h1 className="text-3xl font-medium text-accent">
                      {service.number}
                    </h1>
                    <p className="text-text-body">{service.feature}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
