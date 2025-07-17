import { motion } from "framer-motion";
import { fromRight } from "./About";

// workUgc
import b1Image from "../data/UGC/brand1/b1.webp";
import b1Video from "../data/UGC/brand1/b1.mp4";

import b2Image from "../data/UGC/brand2/b2.webp";
import b2Video from "../data/UGC/brand2/b2.mp4";

import b3Image from "../data/UGC/brand3/b3.webp";
import b3Video1 from "../data/UGC/brand3/b3.1.mp4";
import b3Video2 from "../data/UGC/brand3/b3.2.mp4";
import b3Video3 from "../data/UGC/brand3/b3.3.mp4";

import b4Image from "../data/UGC/brand4/b4.webp";
import b4Video1 from "../data/UGC/brand4/b4.1.mp4";
import b4Video2 from "../data/UGC/brand4/b4.2.mp4";

import b5Image from "../data/UGC/brand5/b5.webp";
import b5Video from "../data/UGC/brand5/b5.mp4";

import b6Image from "../data/UGC/brand6/b6.webp";
import b6Video from "../data/UGC/brand6/b6.mp4";

import b7Image from "../data/UGC/brand7/b7.webp";
import b7Video from "../data/UGC/brand7/b7.mp4";

import b8Image from "../data/UGC/brand8/b8.webp";
import b8Video1 from "../data/UGC/brand8/b8.1.mp4";
import b8Video2 from "../data/UGC/brand8/b8.2.mp4";
import b8Video3 from "../data/UGC/brand8/b8.3.mp4";
import b8Video4 from "../data/UGC/brand8/b8.4.mp4";
import b8Video5 from "../data/UGC/brand8/b8.5.mp4";

import b9Image from "../data/UGC/brand9/b9.webp";
import b9Video1 from "../data/UGC/brand9/b9.1.mp4";
import b9Video2 from "../data/UGC/brand9/b9.2.mp4";
import b9Video3 from "../data/UGC/brand9/b9.3.mp4";

import b10Image from "../data/UGC/brand10/b10.webp";
import b10Video1 from "../data/UGC/brand10/b10.1.mp4";
import b10Video2 from "../data/UGC/brand10/b10.2.mp4";
import b10Video3 from "../data/UGC/brand10/b10.3.mp4";
import b10Video4 from "../data/UGC/brand10/b10.4.mp4";
import b10Video5 from "../data/UGC/brand10/b10.5.mp4";
import b10Video6 from "../data/UGC/brand10/b10.6.mp4";
import b10Video7 from "../data/UGC/brand10/b10.7.mp4";
import b10Video8 from "../data/UGC/brand10/b10.8.mp4";
import b10Video9 from "../data/UGC/brand10/b10.9.mp4";
import b10Video10 from "../data/UGC/brand10/b10.10.mp4";
import b10Video11 from "../data/UGC/brand10/b10.11.mp4";

import b11Image from "../data/UGC/brand11/b11.webp";
import b11Video1 from "../data/UGC/brand11/b11.1.mp4";

import b12Image from "../data/UGC/brand12/b12.webp";
import b12Video1 from "../data/UGC/brand12/b12.1.mp4";

import b13Image from "../data/UGC/brand13/b13.webp";
import b13Video1 from "../data/UGC/brand13/b13.1.mp4";
import b13Video2 from "../data/UGC/brand13/b13.2.mp4";

import b14Image from "../data/UGC/brand14/b14.webp";
import b14Video1 from "../data/UGC/brand14/b14.1.mp4";
import b14Video2 from "../data/UGC/brand14/b14.2.mp4";

import b15Image from "../data/UGC/brand15/b15.webp";
import b15Video1 from "../data/UGC/brand15/b15.1.mp4";

import b16Image from "../data/UGC/brand16/b16.webp";
import b16Video1 from "../data/UGC/brand16/b16.1.mp4";
import b16Video2 from "../data/UGC/brand16/b16.2.mp4";

import b17Image from "../data/UGC/brand17/b17.webp";
import b17Video1 from "../data/UGC/brand17/b17.1.mp4";

import b18Image from "../data/UGC/brand18/b18.webp";
import b18Video1 from "../data/UGC/brand18/b18.1.mp4";

import b19Image from "../data/UGC/brand19/b19.webp";
import b19Video1 from "../data/UGC/brand19/b19.1.mp4";

import b20Image from "../data/UGC/brand20/b20.webp";
import b20Video1 from "../data/UGC/brand20/b20.1.mp4";

import b21Image from "../data/UGC/brand21/b21.webp";
import b21Video1 from "../data/UGC/brand21/b21.1.mp4";
import b21Video2 from "../data/UGC/brand21/b21.2.mp4";

import b22Image from "../data/UGC/brand22/b22.webp";
import b22Video1 from "../data/UGC/brand22/b22.1.mp4";

import b23Image from "../data/UGC/brand23/b23.webp";
import b23Video1 from "../data/UGC/brand23/b23.1.mp4";

// workAdv
import adv1Image from "../data/Adver_/Adv1/brand.png";
import adv1Video from "../data/Adver_/Adv1/A1.mp4";
import adv2Image from "../data/Adver_/Adv2/brand.png";
import adv2Video from "../data/Adver_/Adv2/A1.mp4";

// workPosters
import poster1Image from "../data/Posters/poster1/brand.png";
import poster1Poster from "../data/Posters/poster1/p1.png";
import poster2Image from "../data/Posters/poster2/brand.png";
import poster2Poster from "../data/Posters/poster2/p1.png";

// الـ Arrays المنظمة
const workUgc = [
  {
    brand: b23Image,
    brandname: "mini men",
    videos: [b23Video1],
  },
  {
    brand: b16Image,
    brandname: "malbas",
    videos: [b16Video1, b16Video2],
  },
  {
    brand: b2Image,
    brandname: "fox",
    videos: [b2Video],
  },
  {
    brand: b9Image,
    brandname: "Sento",
    videos: [b9Video1, b9Video2, b9Video3],
  },
  {
    brand: b8Image,
    brandname: "House of cotton",
    videos: [b8Video1, b8Video2, b8Video3, b8Video4, b8Video5],
  },
  {
    brand: b1Image,
    brandname: "Gorilla",
    videos: [b1Video],
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
    brand: b10Image,
    brandname: "test energy",
    videos: [
      b10Video1,
      b10Video2,
      b10Video3,
      b10Video4,
      b10Video5,
      b10Video6,
      b10Video7,
      b10Video8,
      b10Video9,
      b10Video10,
      b10Video11,
    ],
  },
  {
    brand: b11Image,
    brandname: "Drift",
    videos: [b11Video1],
  },
  {
    brand: b12Image,
    brandname: "Eighty twenty",
    videos: [b12Video1],
  },
  {
    brand: b13Image,
    brandname: "one team",
    videos: [b13Video1, b13Video2],
  },
  {
    brand: b14Image,
    brandname: "one bond",
    videos: [b14Video1, b14Video2],
  },
  {
    brand: b15Image,
    brandname: "beittk",
    videos: [b15Video1],
  },

  {
    brand: b17Image,
    brandname: "majentik",
    videos: [b17Video1],
  },
  {
    brand: b18Image,
    brandname: "clouer",
    videos: [b18Video1],
  },
  {
    brand: b19Image,
    brandname: "ravona",
    videos: [b19Video1],
  },
  {
    brand: b20Image,
    brandname: "Dr Energy",
    videos: [b20Video1],
  },
  {
    brand: b21Image,
    brandname: "Salama",
    videos: [b21Video1, b21Video2],
  },
  {
    brand: b22Image,
    brandname: "val",
    videos: [b22Video1],
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
        <video
          src={vedio}
          controls
          playsInline={false}
          preload="none"
          autoPlay={false}
          muted={false}
        />
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
