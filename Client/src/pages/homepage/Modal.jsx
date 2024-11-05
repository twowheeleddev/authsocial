import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";

const Modal = ({isOpen, onRequestClose, children}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex items-center justify-center min-h-screen p-4"
      overlayClassName="fixed inset-0 bg-gray-900 flex items-center justify-center"
    >
      <motion.div
        className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-4xl w-full"
        initial={{scale: 0.8}}
        animate={{scale: 1}}
        exit={{scale: 0.8}}
      >
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={onRequestClose}
            className="text-red-500 text-7xl"
          >
            &times;
          </button>
        </div>
        <div className="space-y-6 text-2xl text-yellow-500">
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              className: `${child.props.className || ""} text-yellow-500`,
            });
          })}
        </div>
      </motion.div>
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
