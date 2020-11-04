import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    
  const [fade, handleFade] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleFade(true);
      } else {
        handleFade(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${fade && "navbar_fade"}`}>
      <img
        className="navbar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      />

      <img
        className="navbar_avatar"
        src="https://www.flaticon.com/svg/static/icons/svg/1077/1077012.svg"
        alt="Netflix User"
      />
    </div>
  );
}

export default Navbar;
