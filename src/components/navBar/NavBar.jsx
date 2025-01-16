import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import img from "../../assets/hamsa.jpg";
import "./NavBar.css";

const NavBar = ({ refs }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-logo">
        <img src={img} alt="logo" />
        <h1>Hamsavardhini B</h1>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
      </div>
      <ul className={`navbar ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll(refs.home); }}>
            <IoHomeSharp />
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll(refs.about); }}>
            <FiUser />
          </a>
        </li>
        <li>
          <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll(refs.skills); }}>
            <GrTechnology />
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll(refs.projects); }}>
            <IoCodeSlashSharp />
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleScroll(refs.contact); }}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
