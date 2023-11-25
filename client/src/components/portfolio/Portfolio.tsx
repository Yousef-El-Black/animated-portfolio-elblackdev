import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "React E-Commerce",
    img: "https://images.pexels.com/photos/9210844/pexels-photo-9210844.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem quo aperiam porro beatae, voluptatibus repellendus ipsum qui unde sapiente provident officiis vel maiores, delectus praesentium ad recusandae aliquam animi?",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/19011373/pexels-photo-19011373/free-photo-of-building-in-a-mountain-valley-covered-with-snow.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem quo aperiam porro beatae, voluptatibus repellendus ipsum qui unde sapiente provident officiis vel maiores, delectus praesentium ad recusandae aliquam animi?",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/17850755/pexels-photo-17850755/free-photo-of-view-of-the-canal-between-traditional-buildings-in-venice-italy.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem quo aperiam porro beatae, voluptatibus repellendus ipsum qui unde sapiente provident officiis vel maiores, delectus praesentium ad recusandae aliquam animi?",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18822188/pexels-photo-18822188/free-photo-of-heron-by-the-sea.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem quo aperiam porro beatae, voluptatibus repellendus ipsum qui unde sapiente provident officiis vel maiores, delectus praesentium ad recusandae aliquam animi?",
  },
  {
    id: 5,
    title: "React Countries API",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wirxeocmd6tpnn9c5oqc.jpg",
    desc: "Explore our website's Countries API, an extensive resource providing comprehensive data on nations worldwide. Access detailed information on demographics, geography, government, and more. Seamlessly integrate this API into your projects for enriched functionalities, enabling you to retrieve accurate and up-to-date details about any country effortlessly.",
    link: "https://rest-countries-api-three-rho.vercel.app/",
  },
  {
    id: 6,
    title: "Advice Generator App",
    img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/l0nkljeqewyxuw0vedhd.jpg",
    desc: "Welcome to our Advice Generator app—an innovative tool designed to offer insightful guidance for every situation. Whether seeking wisdom for personal growth, professional decisions, or daily challenges, this app provides tailored advice to inspire and assist you. With a diverse database of thoughtful suggestions, it's your go-to companion for valuable counsel, ensuring clarity and direction in every aspect of life.",
    link: "https://advice-genereter.vercel.app/",
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
