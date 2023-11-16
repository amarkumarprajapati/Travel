import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="fhgb">
        <nav className="frg">
          <div className="fhb">Logo</div>
          <ul className="hgvbjn">
            <ul id="agrf">
              <li id="gjjg">
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
            </ul>

            <ul id="agrf">
              <li id="gjjg">
                <Link to="Service" smooth={true} duration={500}>
                  Service
                </Link>
              </li>
            </ul>

            <ul id="agrf">
              <li id="gjjg">
                <Link to="Section2" smooth={true} duration={500}>
                  Experience
                </Link>
              </li>
            </ul>

            <ul id="agrf">
              <li id="gjjg">
                <Link to="Contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
