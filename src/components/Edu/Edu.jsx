import React from "react";
import {Link} from 'react-router-dom';

import './edu.css';
import SamPort from '../../assets/sam_port.png';
import GPT from '../../assets/GPT.png';
import HyperTech from '../../assets/HyperTech.png';

export default function Edu () {
    return (
        <>
            <div className="projects">
                <h2>Projects</h2>
                <div className="p_c">
                    <div className="p_cd">
                        <img className="img" src={SamPort} alt='SamPort' />
                        <div className="h1">
                            <h1>Portfolio</h1>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="p_cd">
                        <img className="img" src={GPT} alt='GPT' />
                        <div  className="h1">
                            <h1>Portfolio</h1>
                            <button>View</button>
                        </div>
                    </div>
                    <div className="p_cd">
                        <img className="img" src={HyperTech} alt='HyperTech' />
                        <div  className="h1">
                            <h1>Portfolio</h1>
                            <button>View</button>
                        </div>
                    </div>
                </div>
                <div className="explore">
                    <Link to='/projects' className="explore_link">Go to my projects page</Link>
                </div>
            </div>
        </>
    );
}