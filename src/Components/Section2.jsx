import React from "react";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div>
      <div className="ghb" id="Section2">
        <h1 className="sdht">Find your next getaway</h1>

        <div>
          <p className="srh">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <motion.div whileHover={{ scale: 1.1 }} className="conatiner">
          <div className="opacuty">
            <h2 className="text">Home</h2>
            <p className="text">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          id="conta"
          className="conatiner1">
          <div className="opacuty">
            <h2 className="text">Home</h2>
            <p className="text">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          id="conta"
          className="conatiner2">
          <div className="opacuty">
            <h2 className="text">Home</h2>
            <p className="text">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          id="conta"
          className="conatiner3">
          <div className="opacuty">
            <h2 className="text">Home</h2>
            <p className="text">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          id="conta"
          className="conatiner4">
          <div className="opacuty">
            <h2 className="text">Home</h2>
            <p className="text">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          id="conta"
          className="conatiner5">
          <div className="opacuty">
            <h2 className="text">Home</h2>
            <p className="text">
              Sample text. Click to select the Text Element.
            </p>
          </div>
        </motion.div>
        <div className="buttontag">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Section2;
