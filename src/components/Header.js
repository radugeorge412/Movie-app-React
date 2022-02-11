import React from "react";
import "../App.css";
function Header() {
  return (
    <div className="header">
      <img src="movie-icon.svg" alt="" className="icon" />
      <h1 className="headerTitle" onClick={() => window.scrollTo(0, 0)}>
        Movie-Series
      </h1>
    </div>
  );
}

export default Header;
