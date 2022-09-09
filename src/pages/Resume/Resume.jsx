import React from "react";

import './resume.css';
import cv1 from '../../assets/CV1.png';
import cv2 from '../../assets/CV2.png';

export default function Resume () {
    return (
        <>
        <div className="resume">
            <div className="resume_img">
                <div className="res_im">
                    <img src={cv1} alt='one' />
                </div>
                <div className="res_im">
                    <img src={cv2} alt='two' />
                </div>
            </div>

            <div className="resume_button">
                <a className="r_b" href="https://drive.google.com/file/d/1vtdw0zD8d8cppGYSAc-TcQ1qao5K-FRi/view?usp=sharing" target='_blank' rel="noreferrer" >View/Download</a>
            </div>
        </div>
        </>
    );
}