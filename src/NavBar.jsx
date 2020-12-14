import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://lh3.googleusercontent.com/proxy/01nlN_vsZqfmBZyNPgOasYD9oNiHpLRiBj2KlQWMIVJZrpwyU1BjnNyJoxwQ8zOY0QtfcbhQXeuAFuL2CWkykBlEdCPQJ8HbQFvWMJwHUr2XOiK7di8"
        alt="netflix-logo"
      />
      <img
        className="nav_avatar"
        src="https://www.iconfinder.com/data/icons/communication-355/32/communication3-15-512.png"
        alt="netflixlogo"
      />
    </div>
  );
};

export default NavBar;
