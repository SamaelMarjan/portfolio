import React from "react";

import './about.css';
import Img from '../../assets/me.png';
import Skills from '../../components/Skills/Skills';
import Edu from "../../components/Edu/Edu";

export default function About () {
    return (
        <>
        <div className="about">
            <div className="about_section">
                <div className="about_title">
                    <h1 className="about_title_h1">
                        Hi, I'm 
                        <strong>
                            Samael Marjan
                        </strong>
                    </h1>
                    <p className="dev">front-end dev</p>
                    <p className="desc">I'm a software developer who creates open-source projects. I like accordions, board games, and stand-up comedy. This is my digital garden. If you have any trouble understanding these tutorials or getting them running, please feel to reach out to me!</p>
                </div>
                <div className="about_img">
                    <img src={Img} alt='samael' />
                </div>
            </div>
            <Skills/>
            <Edu/>
        </div>
        </>
    );
}