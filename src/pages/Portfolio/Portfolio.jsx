import React from "react";

import './portfolio.css';
import data from '../../components/config/data';
import { Link } from "react-router-dom";

export default function Portfolio () {
    return (
        <>
        <div className="portfolio">
            <div className="port_p">
                <h2>Projects</h2>
                <div className="projects">
                    <div className="projects_card">
                        {
                            data.map((data, key) => (
                                <div className="pr_c" key={key}>
                                    <img src={data.img} alt={data.alt} />
                                    <p>{data.desc}</p>
                                    <Link to={`/info/${data.id}`}>View</Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}