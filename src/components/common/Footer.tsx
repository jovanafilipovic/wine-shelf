import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const useLayoutEffect = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <NavLink to="/aboutUs" onClick={useLayoutEffect}>
        About Us
      </NavLink>
      <NavLink to="/contact" onClick={useLayoutEffect}>
        Contact
      </NavLink>
      <NavLink to="/termsOfUse" onClick={useLayoutEffect}>
        Terms of Use
      </NavLink>
      <span className="all-rights">
        &copy; 2022 WineShelf. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
