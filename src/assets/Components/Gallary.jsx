import { motion } from "framer-motion";
import { fromRight } from "./About";
/** all work **/
const workUgc = [
  {
    brand: "/src/assets/data/UGC/brand1/b1.jpg",
    brandname: "Gorilla",
    videos: ["/src/assets/data/UGC/brand1/b1.mp4"],
  },
  {
    brand: "/src/assets/data/UGC/brand2/b2.jpg",
    brandname: "fox",
    videos: ["/src/assets/data/UGC/brand2/b2.mp4"],
  },
  {
    brand: "/src/assets/data/UGC/brand3/b3.jpg",
    brandname: "qu-pe",
    videos: [
      "/src/assets/data/UGC/brand3/b3.1.mp4",
      "/src/assets/data/UGC/brand3/b3.2.mp4",
      "/src/assets/data/UGC/brand3/b3.3.mp4",
    ],
  },
  {
    brand: "/src/assets/data/UGC/brand4/b4.jpg",
    brandname: "trix",
    videos: [
      "/src/assets/data/UGC/brand4/b4.1.mp4",
      "/src/assets/data/UGC/brand4/b4.2.mp4",
    ],
  },
  {
    brand: "/src/assets/data/UGC/brand5/b5.jpg",
    brandname: "xaui",
    videos: ["/src/assets/data/UGC/brand5/b5.mp4"],
  },
  {
    brand: "/src/assets/data/UGC/brand6/b6.jpg",
    brandname: "beعly",
    videos: ["/src/assets/data/UGC/brand6/b6.mp4"],
  },
  {
    brand: "/src/assets/data/UGC/brand7/b7.jpg",
    brandname: "Trauxit shop",
    videos: ["/src/assets/data/UGC/brand7/b7.mp4"],
  },
  {
    brand: "/src/assets/data/UGC/brand8/b8.jpg",
    brandname: "House of cotton",
    videos: [
      "/src/assets/data/UGC/brand8/b8.1.mp4",
      "/src/assets/data/UGC/brand8/b8.2.mp4",
      "/src/assets/data/UGC/brand8/b8.3.mp4",
      "/src/assets/data/UGC/brand8/b8.4.mp4",
      "/src/assets/data/UGC/brand8/b8.5.mp4",
    ],
  },
];
const workAdv = [
  {
    brand: "/src/assets/data/Adver_/Adv1/brand.png",
    brandname: "carrefour",
    videos: ["/src/assets/data/Adver_/Adv1/A1.mp4"],
  },
  {
    brand: "/src/assets/data/Adver_/Adv2/brand.png",
    brandname: "mcdonald's",
    videos: ["/src/assets/data/Adver_/Adv2/A1.mp4"],
  },
];
const workPosters = [
  {
    brand: "/src/assets/data/posters/poster1/brand.png",
    brandname: "mashreq",
    poster: ["/src/assets/data/posters/poster1/p1.png"],
  },
  {
    brand: "/src/assets/data/posters/poster2/brand.png",
    brandname: "vodafone",
    poster: ["/src/assets/data/posters/poster2/p1.png"],
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
