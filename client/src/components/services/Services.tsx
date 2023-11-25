import "./services.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref: any = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      ref={ref}
      initial={"initial"}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/assets/images/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Bussiness
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Performance</h2>
          <p>
            I've excelled in building scalable applications with proficiency in
            MongoDB, Express.js, React, and Node.js. My track record showcases
            timely project completion, high-quality code, adept problem-solving,
            and a commitment to continuous learning, ensuring adaptability and
            growth in a rapidly evolving tech landscape. I provide Smallest file
            possible, and It works on all types of browsers.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Coding</h2>
          <p>
            In coding, my strength lies in crafting robust, scalable
            applications using the MERN Stack—leveraging MongoDB, Express.js,
            React, and Node.js. I ensure high-quality code, prompt issue
            resolution, and a commitment to ongoing learning, fostering
            adaptability in a dynamic coding landscape.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Delivary</h2>
          <p>
            I excel by leveraging my expertise in the MERN Stack—utilizing
            MongoDB, Express.js, React, and Node.js—to consistently produce
            robust, scalable applications. My track record showcases on-time
            project completion, high-quality code, rapid issue resolution, and a
            dedication to continual learning, ensuring adaptable solutions in a
            dynamic delivery environment.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Skilling</h2>
          <p>
            I've honed expertise across the MERN Stack—embracing MongoDB,
            Express.js, React, and Node.js—to construct adaptable, scalable
            applications. My focus on continual learning ensures I swiftly
            tackle challenges, produce high-quality code, and evolve adeptly,
            staying at the forefront of tech advancements in skill development.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
