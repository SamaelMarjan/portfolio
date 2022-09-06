import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa';
import {VscColorMode} from 'react-icons/vsc'

import './header.css';

export default function Header () {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
        <div className="header">
            <div className="head">
                <div className="logo">
                    <h2>samael</h2>
                </div>
                <div className="head_link">
                    <div className="link">
                        <Link to='/'>About</Link>
                        <Link to='/projects'>Projects</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/resume'>Resume</Link>
                    </div>
                    <div className="social">
                        <div className="social_link">
                            <FaLinkedinIn />
                            <FaGithub />
                            <FaTwitter />
                        </div>
                        <div className="mode">
                            <p onClick={toggleTheme}>
                                <VscColorMode />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}