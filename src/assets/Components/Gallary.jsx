import { motion } from "framer-motion";
import { fromRight } from "./About";
// Imports لكل الصور والفيديوهات
// workUgc
import b1Image from "../data/UGC/brand1/b1.jpg";
import b1Video from "../data/UGC/brand1/b1.mp4";
import b2Image from "../data/UGC/brand2/b2.jpg";
import b2Video from "../data/UGC/brand2/b2.mp4";
import b3Image from "../data/UGC/brand3/b3.jpg";
import b3Video1 from "../data/UGC/brand3/b3.1.mp4";
import b3Video2 from "../data/UGC/brand3/b3.2.mp4";
import b3Video3 from "../data/UGC/brand3/b3.3.mp4";
import b4Image from "../data/UGC/brand4/b4.jpg";
import b4Video1 from "../data/UGC/brand4/b4.1.mp4";
import b4Video2 from "../data/UGC/brand4/b4.2.mp4";
import b5Image from "../data/UGC/brand5/b5.jpg";
import b5Video from "../data/UGC/brand5/b5.mp4";
import b6Image from "../data/UGC/brand6/b6.jpg";
import b6Video from "../data/UGC/brand6/b6.mp4";
import b7Image from "../data/UGC/brand7/b7.jpg";
import b7Video from "../data/UGC/brand7/b7.mp4";
import b8Image from "../data/UGC/brand8/b8.jpg";
import b8Video1 from "../data/UGC/brand8/b8.1.mp4";
import b8Video2 from "../data/UGC/brand8/b8.2.mp4";
import b8Video3 from "../data/UGC/brand8/b8.3.mp4";
import b8Video4 from "../data/UGC/brand8/b8.4.mp4";
import b8Video5 from "../data/UGC/brand8/b8.5.mp4";

// workAdv
import adv1Image from "../data/Adver_/Adv1/brand.png";
import adv1Video from "../data/Adver_/Adv1/A1.mp4";
import adv2Image from "../data/Adver_/Adv2/brand.png";
import adv2Video from "../data/Adver_/Adv2/A1.mp4";

// workPosters
import poster1Image from "../data/posters/poster1/brand.png";
import poster1Poster from "../data/posters/poster1/p1.png";
import poster2Image from "../data/posters/poster2/brand.png";
import poster2Poster from "../data/posters/poster2/p1.png";

// الـ Arrays المنظمة
const workUgc = [
  {
    brand: b1Image,
    brandname: "Gorilla",
    videos: [b1Video],
  },
  {
    brand: b2Image,
    brandname: "fox",
    videos: [b2Video],
  },
  {
    brand: b3Image,
    brandname: "qu-pe",
    videos: [b3Video1, b3Video2, b3Video3],
  },
  {
    brand: b4Image,
    brandname: "trix",
    videos: [b4Video1, b4Video2],
  },
  {
    brand: b5Image,
    brandname: "xaui",
    videos: [b5Video],
  },
  {
    brand: b6Image,
    brandname: "beعly",
    videos: [b6Video],
  },
  {
    brand: b7Image,
    brandname: "Trauxit shop",
    videos: [b7Video],
  },
  {
    brand: b8Image,
    brandname: "House of cotton",
    videos: [b8Video1, b8Video2, b8Video3, b8Video4, b8Video5],
  },
];

const workAdv = [
  {
    brand: adv1Image,
    brandname: "carrefour",
    videos: [adv1Video],
  },
  {
    brand: adv2Image,
    brandname: "mcdonald's",
    videos: [adv2Video],
  },
];

const workPosters = [
  {
    brand: poster1Image,
    brandname: "mashreq",
    poster: [poster1Poster],
  },
  {
    brand: poster2Image,
    brandname: "vodafone",
    poster: [poster2Poster],
  },
];
function Gallary() {
  return (
    <section className="Gallary" id="Gallary">
      <div className="main-container">
        <div className="gallary-content">
          <div className="section-title">MY Gallary</div>
          <AllWorks />
        </div>
      </div>
    </section>
  );
}

//c1 collect all works
function AllWorks() {
  return (
    <div className="works">
      <h2>{`ugc category`}</h2>
      <ShowWork work={workUgc} c_name="ugc" />

      <h2>{`advertisements category`}</h2>
      <ShowWork work={workAdv} c_name="advertisements" />

      <h2>{`posters category`}</h2>
      <ShowWorkPosters work={workPosters} c_name="posters" />
    </div>
  );
}

//c2 show project units for ugc and adv_ because thay have the same structure
function ShowWork({ work, c_name }) {
  return (
    <div className={c_name}>
      {work.map((element, index) => {
        if (element.videos.length == 1) {
          return (
            <ProjectUnit
              key={index}
              vedio={element.videos[0]}
              brand={element.brand}
              brandname={element.brandname}
            />
          );
        } else {
          return element.videos.map((vi, index) => {
            return (
              <ProjectUnit
                key={index}
                vedio={vi}
                brand={element.brand}
                brandname={element.brandname}
              />
            );
          });
        }
      })}
    </div>
  );
}

//c2 show project units for poster because it have the different structure
function ShowWorkPosters({ work, c_name }) {
  return (
    <div className={c_name}>
      {work.map((element, index) => {
        if (element.poster.length == 1) {
          return (
            <ProjectUnitPoster
              key={index}
              poster={element.poster[0]}
              brand={element.brand}
              brandname={element.brandname}
            />
          );
        } else {
          return element.videos.map((vi, index) => {
            return (
              <ProjectUnitPoster
                key={index}
                poster={element.poster[0]}
                brand={element.brand}
                brandname={element.brandname}
              />
            );
          });
        }
      })}
    </div>
  );
}

//c3  project unit that contain the work
function ProjectUnit({ vedio, brand, brandname }) {
  return (
    <motion.div
      className="unit"
      variants={fromRight(0.5, 0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="video">
        <video src={vedio} controls autoPlay loop muted />
      </div>
      <div className="related-info">
        <img src={brand} alt="" />
        <p>{brandname}.</p>
      </div>
    </motion.div>
  );
}

//c3.1  project unit that contain the work
function ProjectUnitPoster({ poster, brand, brandname }) {
  return (
    <motion.div
      className="unit"
      variants={fromRight(0.5, 0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="poster">
        <img src={poster} alt="" />
      </div>
      <div className="related-info">
        <img src={brand} alt="" />
        <p>{brandname}.</p>
      </div>
    </motion.div>
  );
}

export { Gallary };
