import { Banner } from "./Home";
import { ArrowScrolling } from "./Home";
import { animate, motion } from "framer-motion";
/**imgs */
import mostafaAbout from "../data/mostafa-about.png";

//icons
import { GoDash } from "react-icons/go";

//animations
const fromLeft = (duration = 0.5, delay = 0) => {
  return {
    initial: {
      opacity: 0,
      translateX: -50,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};
const fromRight = (duration = 0.5, delay = 0) => {
  return {
    initial: {
      opacity: 0,
      translateX: 50,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };
};

function About() {
  return (
    <section className="About" id="About">
      <div className="main-container">
        <div className="about-content">
          <Info />
          <motion.div
            className="banner"
            variants={fromRight(0.5, 0.3)}
            initial="initial"
            whileInView="animate"
          >
            <img src={mostafaAbout} alt="mostafaBanner" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

//c1 introduction
function Info() {
  return (
    <motion.div
      className="info"
      variants={fromLeft(0.5, 0.3)}
      initial="initial"
      whileInView="animate"
    >
      <div className="section-title">About me</div>
      <h1>
        Who is <span>Mostafa ?</span>
      </h1>
      <p>
        I'm a passionate UGC Creator and Commercial Model who loves telling
        stories through style and authentic content. What started as a fun
        photoshoot with friends turned into a growing career. I've worked with
        local brands to create engaging visuals — from fashion shoots to
        user-generated content. UGC is now a key part of my work, helping brands
        connect with real audiences. I'm always ready for the next creative
        challenge!
      </p>
      <div className="projects">
        <div className="ucg">
          <span className="pnum">30+</span>
          <p className="service">ugc</p>
        </div>
        <div className="advertisements">
          <span className="pnum">8+</span>
          <p className="service">advertise..</p>
        </div>
        <div className="posters">
          <span className="pnum">10+</span>
          <p className="service">posters</p>
        </div>
      </div>
      <ArrowScrolling />
    </motion.div>
  );
}

export { About, fromRight };
