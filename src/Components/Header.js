import React from 'react';
import headerimg from "./images/tt.png";
import "./Home.css";
import video1 from "./images/v9.mp4";  
import {Link} from "react-router-dom";


export default function Header() {
    return (
        <div>
            <div  id="header" style={{backgroundImage: 'url('+headerimg+')'}}>
        <div className="container1">
            <div className="header-text">
                <h1>We Gaurantee fast and supersafe delivery!</h1> <br/>
                <span className="square">  </span> 
                <span className="square">  </span> 
                <span className="square">  </span>
                <h3> Everytime with you in your need...</h3> <br/>
                <h2> From GROCERY To Medicines , NOW all available at your door steps!</h2>
                <br/> <br/>
               
                <button className="common-btn"><Link to="/login" style={{textDecoration:"none"}}>GET STARTED</Link></button>
                <br/>
                <br/>
            </div>
            <div className="video">
                <video className="video" src={video1} autoplay loop muted></video>
            </div>
            {/* <!-- <div className="line">
                <span className="line-1"></span><br>
                <span className="line-2"></span><br>
                <span className="line-3"></span>
            </div> --> */}
            </div>
            
        
    </div>  
        </div>
    )
}
