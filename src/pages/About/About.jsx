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
                    <p className="desc">Hello!, I am a Front-end developer. I have good skills in web programming languages, such as HTML, CSS, and JavaScript, which is what make me a strong candidate for this position. In addition to web programming languages, I also have good knowledge in using technologies like React JS or Node JS because of my computer science education</p>
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