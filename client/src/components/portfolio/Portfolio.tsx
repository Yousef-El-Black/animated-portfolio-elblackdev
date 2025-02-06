import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// {
//   id: 1,
//   title: "React Countries API",
//   img: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/wirxeocmd6tpnn9c5oqc.jpg",
//   desc: "Explore our website's Countries API, an extensive resource providing comprehensive data on nations worldwide. Access detailed information on demographics, geography, government, and more. Seamlessly integrate this API into your projects for enriched functionalities, enabling you to retrieve accurate and up-to-date details about any country effortlessly.",
//   link: "https://rest-countries-api-three-rho.vercel.app/",
// },
const items = [
  {
    id: 1,
    title: "Room Homepage",
    img: "/assets/gallery/desktop-preview (21).jpg",
    desc: "Welcome to Room Website, your go-to platform for finding the perfect room to rent! Whether you're a student, a young professional, or just looking for a new place to call home, RoomFinder connects you with verified listings and trusted landlords. Easily search by location, budget, and amenities to find your ideal living space. Join our community today and discover your next home!",
    link: "https://room-homepage-master-one-pi.vercel.app/",
  },
  {
    id: 2,
    title: "Insure Landing Page",
    img: "/assets/gallery/desktop-preview (22).jpg",
    desc: "Humanizing your insurance. Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.",
    link: "https://insure-landing-page-gules-nine.vercel.app/",
  },
  {
    id: 3,
    title: "Project Tracking Intro Page",
    img: "/assets/gallery/desktop-preview (23).jpg",
    desc: "Welcome to Project Tracking, the ultimate solution for all your project management needs. TrackPro helps teams stay organized, meet deadlines, and achieve their goals with ease. With features like task assignments, real-time updates, and collaborative tools, you can streamline your workflow and ensure every project is a success.",
    link: "https://project-tracking-intro-component-master-eta.vercel.app/",
  },
  {
    id: 4,
    title: "Protfolio Template (Special)",
    img: "/assets/gallery/desktop-preview-(13).jpg",
    desc: "Welcome to Our Portfolio, Here You can find Creativity, you can choose from group of colors website main color. a good timeline to show others your career easily. Full responsive with good looking for every client.",
    link: "https://special-design-sandy.vercel.app/",
  },
  {
    id: 5,
    title: "Bondi Landing Page",
    img: "/assets/gallery/desktop-preview-bondi.jpg",
    desc: "Welcome to Bondi 2020, the platform designed to ignite and measure your creativity. Bondi offers innovative tools and assessments to help you explore your creative potential and push the boundaries of your imagination. Whether you're an artist, designer, or simply curious about your creative strengths, Bondi provides personalized insights and inspiration.",
    link: "https://bondi-beta.vercel.app/",
  },
  {
    id: 6,
    title: "Bookmark Landing Page",
    img: "/assets/gallery/desktop-preview (1).jpg",
    desc: "Welcome to Bookmark, your ultimate tool for organizing and managing your online bookmarks. With BookmarkIt, you can easily save, categorize, and access your favorite websites from any device. Our intuitive interface and powerful search features ensure that your links are always at your fingertips.",
    link: "https://bookmark-landing-page-master-teal.vercel.app/",
  },
  {
    id: 7,
    title: "EasyBank Landing Page",
    img: "/assets/gallery/desktop-preview (4).jpg",
    desc: "Welcome to Bookmark, your ultimate tool for organizing and managing your online bookmarks. With BookmarkIt, you can easily save, categorize, and access your favorite websites from any device. Our intuitive interface and powerful search features ensure that your links are always at your fingertips.",
    link: "https://easybank-landing-page-master-murex.vercel.app/",
  },
  {
    id: 8,
    title: "DarkGen Web Agency",
    img: "/assets/gallery/DarkgenWebDesignPreview.png",
    desc: "Welcome to DarkGen Web Agency – The Real Estate Web Design Experts You've found the right place if you're looking for a professional, high-quality real estate website that perfectly meets your needs. At DarkGen Web Agency, we specialize in creating websites exclusively for the real estate industry. Our deep understanding of the real estate market ensures that your website will not only look great but also work flawlessly to help you attract clients, showcase properties, and close deals.",
    link: "https://dark-gen-web.vercel.app/",
  },
  {
    id: 9,
    title: "SunnySide Landing Page",
    img: "/assets/gallery/desktop-preview (14).jpg",
    desc: "SunnySide - Transform your brand We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    link: "https://sunnyside-agency-landing-page-main-swart-one.vercel.app/",
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
          <img
            src={item.img}
            alt={item.title + " Image"}
            style={{ objectPosition: "center" }}
          />
        </div>
        <motion.div className="textContainer" style={{ y: yText }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a href={item.link ? item.link : "#"} target="_blanc">
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
