import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hgbj">
      <div className="srhdt">
        <motion.h1>Book your outdoor adventure</motion.h1>
        <div className="grt">
          <motion.p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit
          </motion.p>
        </div>
        <motion.div className="grthry">
          <button className="srgdht">Book Now</button>
          <button className="srhh">Details</button>
        </motion.div>
      </div>
      <div className="gthry">
        <img src="2325148-28c38e53.png" className="afegsr" />
        <h2 className="afegsr">TREKKING</h2>
      </div>
      <div className="gthry">
        <img src="7401471-4294aa1a.png" className="afegsr" />
        <h2 className="afegsr">CAMPING</h2>
      </div>
      <div className="gthry">
        <img src="931077-6ca510ad.png" className="afegsr" />
        <h2 className="afegsr">CAMPING</h2>
      </div>
      <div className="gthry">
        <img src="2560416-11b1db70.png" className="afegsr" />
        <h2 className="afegsr">NEWS</h2>
      </div>
    </div>
  );
};


export default Hero;
