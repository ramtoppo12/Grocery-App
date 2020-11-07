import React from 'react';
import "./Home.css"
import video2 from "./images/v1.mp4";
import video3 from "./images/v2.mp4";
import video4 from "./images/v3.mp4";
import video5 from "./images/v4.mp4";

export default function Features() {
    return (
        <div>
            <section id="features">
        <h1>We Care For You In Many Ways...</h1>
        <div className="feature-row">
            <div className="feature-col">
                <video className="video" src={video2} autoplay loop muted />
                <h4> FAST AND RELIABLE</h4>
            </div>
            <div className="feature-col">
                <video className="video" src={video3} autoplay loop muted/>
                <h4> SHOP SITTING ON YOUR SOFA</h4>
            </div>
            <div className="feature-col">
                <video className="video" src={video4} autoplay loop muted/>
                <h4>EASY ON YOUR POCKET</h4>
            </div>
            <div className="feature-col">
                <video className="video" src={video5} autoplay loop muted/>
                <h4>GREAT VARIETIES ON YOUR SCREEN</h4>
            </div>
            
        </div>
        
    </section> 
        </div>
    )
}
