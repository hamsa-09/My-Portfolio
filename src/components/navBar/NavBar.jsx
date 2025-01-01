import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi"; // Import Hamburger Icon
import img from "../../assets/hamsa.jpg";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav>
      <div className="nav-logo">
        <img src={img} alt="logo" />
        <h1>Hamsavardhini B</h1>
        <button className="hamburger-icon" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
      <ul className={`navbar ${menuOpen ? "open" : ""}`}> 
        <li><Link to="/"><IoHomeSharp /></Link></li>
        <li><Link to="/about"><MdOutlineRoundaboutLeft /></Link></li>
        <li><Link to="/skill"><SiHyperskill /></Link></li>
        <li><Link to="/project"><FaProjectDiagram /></Link></li>
        <li><Link to="/contact"><IoMdContact /></Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
