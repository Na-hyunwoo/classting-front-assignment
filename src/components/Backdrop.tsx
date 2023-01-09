import { motion } from "framer-motion";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  onClick: () => void;
};

const Backdrop = ({ children, onClick }: Props) => {
 
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;