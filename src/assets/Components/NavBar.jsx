// libararies
import { animate, motion } from "framer-motion";
import { useState } from "react";

/*** icons ***/
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

/**animations */
const fromTop = (duration = 0.5, top1, top2) => {
  return {
    initial: {
      top: top1,
      opacity: 0,
    },
    animate: {
      top: top2,
      opacity: 1,
      transition: {
        duration: duration,
      },
    },
  };
};

/*** operations */
const links = [
  {
    name: "Home",
    path: "#Home",
  },
  {
    name: "About",
    path: "#About",
  },
  {
    name: "Gallary",
    path: "#Gallary",
  },
  {
    name: "Contact",
    path: "#Contact",
  },
];

function NavBar() {
  const [ulactive, setUlactive] = useState(false);
  return (
    <nav>
      <div className="main-container">
        <motion.div
          className="nav-content"
          variants={fromTop(0.5, -80, 0)}
          initial="initial"
          animate="animate"
        >
          <Logo />
          <UlLaptop />
          <ULmobile active={ulactive} />
          <BarIcon active={ulactive} setUlactive={setUlactive} />
        </motion.div>
      </div>
    </nav>
  );
}

/*c1 Logo component **/
function Logo() {
  return (
    <div className="logo">
      <h3>
        MOSTAFA-UGC<span>.</span>
      </h3>
    </div>
  );
}

/*c2 UlLaptop component **/
function UlLaptop() {
  return (
    <ul className="laptop">
      {links.map((l, index) => {
        return (
          <li key={index}>
            <a href={l.path}> {l.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

/*c3 ULmobile component **/
function ULmobile({ active }) {
  return (
    <motion.ul
      className="mobile"
      variants={fromTop(0.2, -200, 80)}
      initial="initial"
      animate={`${active ? "animate" : ""}`}
    >
      {links.map((l, index) => {
        return (
          <li key={index}>
            <a href={l.path}> {l.name}</a>
          </li>
        );
      })}
    </motion.ul>
  );
}

/*c4 BarIcon component **/
function BarIcon({ active, setUlactive }) {
  return (
    <div className="bar-icon" onClick={() => setUlactive(!active)}>
      {active ? <IoClose /> : <HiMiniBars3 />}
    </div>
  );
}
export { NavBar, fromTop };
