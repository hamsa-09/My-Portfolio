import React,{useEffect } from 'react';
import './Aboutpage.css';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Aboutpage = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="about">
            <h2>ABOUT ME</h2>
            <div className="infos">
                <div className="personal" data-aos="fade-up">
                    <h3>PERSONAL DETAILS</h3>
                    <div className="info-item">
                        <span className="label">Name :</span>
                        <span className="value"> Hamsavardhini B</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Date of Birth :</span>
                        <span className="value"> 09-04-2003</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Location :</span>
                        <span className="value"> Coimbatore, India</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Phone Number :</span>
                        <span className="value"> 9677838659</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Email :</span>
                        <span className="value"> hamsavardhinibaskar@gmail.com</span>
                    </div>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/hamsavardhinibaskar/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="icon linkedin" />
                        </a>
                        <a href="https://github.com/hamsa-09?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="icon github" />
                        </a>
                        <a href="https://leetcode.com/u/Hamsa_09/" target="_blank" rel="noopener noreferrer">
                            <FaCode className="icon leetcode" />
                        </a>
                    </div>
                </div>
                <div className="education" data-aos="fade-up">
                    <h3>EDUCATION</h3>
                    <dl>
                        <dt>Bannari Amman Institute of Technology [2022-2026]</dt>
                        <dd>B.E-Computer Science and Engineering</dd>
                        <dd>CGPA - 8.25</dd>
                        <dt>Aadharsh Vidyalaya School [2020-2021]</dt>
                        <dd>12th - 96%</dd>
                        <dt>Venkitaraj Matric School [2019-2020]</dt>
                        <dd>10th - 98%</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;
