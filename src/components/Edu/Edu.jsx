import React from "react";
import {Link} from 'react-router-dom';

import './edu.css';

export default function Edu () {
    return (
        <>
            <div className="projects">
                <h2>Projects</h2>
                <div className="p_c">
                    <div className="p_cd">1</div>
                    <div className="p_cd">2</div>
                    <div className="p_cd">3</div>
                </div>
                <div className="explore">
                    <Link to='/projects'>Go to my projects page</Link>
                </div>
            </div>
        </>
    );
}