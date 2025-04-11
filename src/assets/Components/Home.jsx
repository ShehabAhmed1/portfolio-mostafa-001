//libararies
import { div } from "framer-motion/client";
import { animate, motion } from "framer-motion";

// imges
import mostafaBanner from "../data/mostafa.jpg";
import mostafaBanner2 from "../data/mostafa-modified.png";
import mostafaNbg from "../data/mostafa-nbg.png";

//icons
import { FaArrowCircleDown } from "react-icons/fa";

//animations
const UPDown = (duration) => {
  return {
    initial: {
      top: 0,
    },
    animate: {
      top: 5,
      transition: {
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
};

const zoomout = (duration = 0.5, delay = 0) => {
  return {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };
};

function Home() {
  return (
    <section className="Home" id="Home">
      <div className="main-container">
        <motion.div
          className="home-content"
          variants={zoomout(1, 0)}
          initial="initial"
          animate="animate"
        >
          <Intro />
          <Banner img={mostafaBanner2} />
        </motion.div>
      </div>
    </section>
  );
}

//c1 introduction
function Intro() {
  return (
    <div className="intro">
      <div className="hello">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Hello there !
      </div>
      <h1>
        i'm <span>mostafa kamal ,</span> UGC Creator & Commercial Model
      </h1>
      <p>
        i'm an experienced UGC creator and commercial model with over 5+ years
        in the field.
        {/*  I’ve had the opportunity to collaborate with a wide range of
        clients, companies, and brands to produce engaging content that
        resonates. */}
      </p>
      <ArrowScrolling />
    </div>
  );
}

//c2 mostafa Banner
function Banner({ img }) {
  return (
    <div className="banner">
      <img src={img} alt="mostafaBanner" />
    </div>
  );
}

// arrow to follow scrolling
function ArrowScrolling() {
  return (
    <motion.div
      className="discover-icon"
      variants={UPDown(0.3)}
      initial="initial"
      animate="animate"
    >
      <FaArrowCircleDown />
    </motion.div>
  );
}
export { Home, Banner, ArrowScrolling };
