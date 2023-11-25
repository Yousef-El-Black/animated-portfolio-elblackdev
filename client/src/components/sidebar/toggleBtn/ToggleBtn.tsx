import { motion } from "framer-motion";

const ToggleBtn = ({ setOpen, open }: { setOpen: any; open: boolean }) => {
  return (
    <button onClick={() => setOpen((prev: boolean) => !prev)}>
      <motion.span
        animate={!open ? {} : { rotate: 45, y: 10, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      ></motion.span>
      <motion.span
        animate={!open ? {} : { width: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      ></motion.span>
      <motion.span
        animate={!open ? {} : { rotate: -45, y: -10, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      ></motion.span>
    </button>
  );
};

export default ToggleBtn;
