import React from "react";

import './skills.css';
import Data from '../../components/config/data';
import { Link } from "react-router-dom";

export default function Skills () {
    return (
        <>
        <div className="skills">
            <h2>skills</h2>
            <div className="skills_card">
            {
                Data.map((data) => (
                        <div className="card">
                            <p>{data.desc}</p>
                        </div>
                ))
            }
            </div>
        <div className="learn">
            <Link to='/projects' className="l_link">What is front-end dev?</Link>
        </div>
        </div>
        </>
    );
}