import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          EL BLACK DEV
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/elblackdev">
            <img src="./assets/images/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/yousefaboalata/">
            <img src="./assets/images/instagram.png" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UC--AEvpLAg5vd6Q_UKTMF-Q">
            <img src="./assets/images/youtube.png" alt="" />
          </a>
          <a href="https://dribbble.com/elblackdev">
            <img src="./assets/images/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
