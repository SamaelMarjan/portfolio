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
                                    <div className="pr_img">
                                        <img src={data.img} alt={data.alt} />
                                    </div>
                                    <div className="pr_d">
                                        <div className="pr_d_1">
                                            <p>{data.desc}</p>
                                        </div>
                                        <div className="pr_d_2">
                                            <Link to={`/info/${data.id}`}>View</Link>
                                            <a href={data.link} target={data.target} >Live</a>
                                            <a href={data.github}>githuub</a>
                                        </div>
                                    </div>
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