import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import img from "../../assets/hamsa.jpg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
        <div className='nav-logo'>
            <img src={img} alt='logo' />
            <h1>Hamsavardhini B</h1>
        </div>
        <ul className='navbar'>
            <li><Link to="/home"><IoHomeSharp /></Link></li>
            <li><Link to="/about"><MdOutlineRoundaboutLeft /></Link></li>
            <li><Link to="/skill"><SiHyperskill /></Link></li>
            <li><Link to="/project"><FaProjectDiagram /></Link></li>
            <li><Link to="/contact"><IoMdContact /></Link></li>
        </ul>
    </nav>
  );
};

export default NavBar;
