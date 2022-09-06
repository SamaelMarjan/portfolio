import React from "react";

import './skills.css';
import Data from '../../components/config/data';

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
        </div>
        <div className="learn">
            <p>What is front-end dev?</p>
        </div>
        </>
    );
}