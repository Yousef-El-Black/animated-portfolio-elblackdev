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
          <a href="#">
            <img src="./assets/images/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="./assets/images/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
