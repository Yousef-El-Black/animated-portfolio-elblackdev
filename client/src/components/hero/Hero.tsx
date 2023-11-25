import { motion } from "framer-motion";
import "./hero.scss";

const Hero = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollBtn: {
      opacity: 0,
      y: 10,
      transition: {
        delay: 0.5,
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-90%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
        ease: "linear",
      },
    },
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>YOUSEF ABOALATA</motion.h2>
          <motion.h1 variants={textVariants}>
            Web developer and Radiologist
          </motion.h1>
          <motion.div variants={textVariants} className="btns">
            <motion.button variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            src="./assets/images/scroll.png"
            alt=""
            variants={textVariants}
            initial={{ opacity: 1, y: 0 }}
            animate="scrollBtn"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants as any}
          initial="initial"
          animate="animate"
        >
          Full Stack Web Engineer and Freelancer
        </motion.div>
        <div className="imgContainer">
          <img src="./assets/images/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
