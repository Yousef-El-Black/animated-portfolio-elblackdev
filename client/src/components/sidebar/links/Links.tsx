import { motion } from "framer-motion";

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.ul className="links" variants={variants}>
      {items.map((item, index: number) => {
        return (
          <motion.a
            key={index}
            variants={itemsVariants}
            initial={{ opacity: 0.5, scale: 0.75 }}
            whileHover={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            href={"#" + item}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.ul>
  );
};
export default Links;
