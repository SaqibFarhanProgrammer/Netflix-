import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";

const Nav = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.querySelector(".nav").classList.add("nav_black");
    } else {
      document.querySelector(".nav").classList.remove("nav_black");
    }
  });

  return (
    <div className="nav">
      <div className="nav-left">
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>Home</li>
          <li>Block Buster</li>
          <li>Services</li>
          <li>Movies</li>
          <li>Preimmium</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src={search_icon} alt="" className="i" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="i" />
        <div className="nav_profile">
          <img src={profile_icon} alt="" className="i" />
          <div className="dropdown">
            <p
              onClick={() => {
                window.location.href = "/Login";
              }}
            >
              Signout Netflix Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
