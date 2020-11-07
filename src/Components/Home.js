import React, { useState } from 'react';
import "./Home.css";
import image1 from "./images/icon3.png";
import image2 from "./images/i8.png";
import Features from './Features';
import SearchBar from './SearchBar';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";




export default function Home() {
    const [menuclass,setMenuclass]=useState(false);
  const [{ basket, user }, dispatch] = useStateValue();


    const handleMenu = ()=>{
        setMenuclass(true);
    }
    const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

    return (


        <div>
    <nav className={menuclass ? "sideNav && showmenu":"sideNav" }>
        <ul>
            <li style={{fontWeight:"1000"}}>
              Hello <br/>{user ? user?.email : "GUEST"}
            </li>
            <li><Link to="/">HOME</Link></li>
            <li onClick={handleAuthentication}><Link to={!user && "/login"}>
            
            <span >
              {user ? "SIGN OUT" : "SIGN IN"}
            </span>
          </Link></li>
            <li><Link to="/store">FIND SHOPS AND ORDER</Link></li>
            <li><Link to="#">FEATURES</Link></li>
            <li><Link to="#">CONTACT US</Link></li>
        </ul>
    </nav>
    <img src={image1} id="menuBtn" onClick={handleMenu} />
    <section id="about">
        <div className="about-col">
            <img src={image2} />
               <div className="about-text">
                <h1> Let's Get Started...!</h1>
                <br/>
                <br/> 
                <span className="square"></span>
                <p>
                    You can easily find the stores nearby by typing your location. 
                </p>
                <br/>
                <br/>
                
                    <ul>
                    <li> Just type in your location and a list of available shops will be displayed nearby your location from where you can chose.</li><br/>
                    <li> Select the shop</li><br/>
                    <li> Make a list by selecting the products by adding to cart and thus proceed the purchase.</li><br/>
                    <li> Pay Online Or Pay via Cash On Delivery</li><br/>
                    <li> Track your product by the time we bring it to you with lots of safety and care. </li>
                    <br/>
                    <li>You can also upload a list (handwritten or printed or a snapshot of list) after selecting the shop and  Continue.</li><br/>
                   
                 </ul>
                    <p>
                        Place your first order NOW..!.
                    </p>
                <span className="square"></span>
            </div>
        </div>
        </section>
        <SearchBar/>
    <Features/>
    
   
    <section id="">
        <div className="heading">

        </div>
    </section>
</div>
    )
}
