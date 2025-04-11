/**icons */
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { AiFillTikTok } from "react-icons/ai";
import { animate, easeIn, motion } from "framer-motion";

/**animations */
const scaler = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1.2,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
      repeatType: "reverse",
    },
  },
};

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <div className="main-container">
        <div className="contact-content">
          <div className="section-title">Contact me</div>
          <WhatsUp />
          <SocialMedia />
          <motion.h1 variants={scaler} initial="initial" animate="animate">
            lets work together...
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

//c1 whatsUp to lead you to whatup app with your num
function WhatsUp() {
  return (
    <a className="whats-up" href="https://wa.me/201144737811?" target="_blank">
      <FaWhatsapp />
    </a>
  );
}

//c1 whatsUp to lead you to whatup app with your num
function SocialMedia() {
  return (
    <div className="social-media">
      <a
        href="https://www.facebook.com/share/194yyioMJE/?mibextid=wwXIfr"
        target="_blank"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/mostafamkamal?igsh=dmxkemNoczd4NTE5"
        target="_blank"
      >
        <BiLogoInstagramAlt />
      </a>
      <a
        href="https://www.tiktok.com/@mustafamkamal?_t=ZS-8vQ5hiwR4MS&_r=1"
        target="_blank"
      >
        <AiFillTikTok />
      </a>
    </div>
  );
}

export { Contact };
