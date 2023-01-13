import { Backdrop } from "./";
import { motion } from "framer-motion";
import { dropIn } from "../styles";
import { Typography } from "@mui/material";

interface Props {
  text: string;
  handleClose: () => void;
};

const Modal = ({ text, handleClose }: Props) => {

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}  
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Typography mt={5} variant="h5">{text}</Typography>
      </motion.div>
    </Backdrop>
  );
};


export default Modal;