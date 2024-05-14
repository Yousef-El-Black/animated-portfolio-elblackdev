import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React Countries API",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wirxeocmd6tpnn9c5oqc.jpg",
    desc: "Explore our website's Countries API, an extensive resource providing comprehensive data on nations worldwide. Access detailed information on demographics, geography, government, and more. Seamlessly integrate this API into your projects for enriched functionalities, enabling you to retrieve accurate and up-to-date details about any country effortlessly.",
    link: "https://rest-countries-api-three-rho.vercel.app/",
  },
  {
    id: 2,
    title: "Advice Generator App",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/l0nkljeqewyxuw0vedhd.jpg",
    desc: "Welcome to our Advice Generator app—an innovative tool designed to offer insightful guidance for every situation. Whether seeking wisdom for personal growth, professional decisions, or daily challenges, this app provides tailored advice to inspire and assist you. With a diverse database of thoughtful suggestions, it's your go-to companion for valuable counsel, ensuring clarity and direction in every aspect of life.",
    link: "https://advice-genereter.vercel.app/",
  },
  {
    id: 3,
    title: "El-Black Clothing Store",
    img: "/assets/images/el-black-clothing-store.png",
    desc: "Welcome to El-Black, your go-to destination for fashion-forward individuals seeking the latest trends and timeless classics. With a curated selection of clothing, accessories, and footwear from both established brands and emerging designers, El-Black offers something for everyone. We believe in empowering individuals to express themselves through their clothing choices and celebrate diversity and personal style. Join our community of fashion enthusiasts and trendsetters as we redefine the fashion landscape, one stylish look at a time. Welcome to the world of El-Black, where fashion meets individuality, and style knows no bounds.",
    link: "https://elblack-clothing-store.vercel.app/",
  },
  {
    id: 4,
    title: "Fratun ",
    img: "/assets/images/fratun.png",
    desc: "Welcome to Fratun, the future of social interactions! Fratun revolutionizes the way you connect with the world, making it fast, fluid, and fun. It's not just another social media platform; it's a community designed for crypto lovers that rewards you for engaging. Dive into discussions, share your insights, and connect with like-minded individuals while earning rewards for your participation. Fratun is where social networking meets cryptocurrency, offering a unique and rewarding experience for users who are passionate about both. Join us in shaping the future of social interaction and be part of a community where engagement pays off. Welcome to Fratun – where connecting and earning go hand in hand.",
    link: "https://fratun-client-side-qg3o2x750-yousef-el-black.vercel.app/",
  },
];

type PorjectType = {
  id: number;
  title: string;
  img: string;
  desc: string;
  link?: string;
};

const Single = ({ item }: any) => {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const yText = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt={item.title + " Image"} />
        </div>
        <motion.div className="textContainer" style={{ y: yText }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a href={item.link ? item.link : "#"}>
            <button>See Demo</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>

      {items.map((item: PorjectType, index: number) => {
        return <Single item={item} key={index} />;
      })}
    </div>
  );
};

export default Portfolio;
