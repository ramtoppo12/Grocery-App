
import React, { useState } from "react";
import "./Login.css";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";

import ReactLogo from './images/register.svg';

import ReactLogo2 from './images/log.svg';



export default function Login() {
 

  const [toggleClass,SettoggleClass]=useState(false);

  const HandleSignup = ()=>{
    SettoggleClass(true);
  }
   const HandleSignin = ()=>{
    SettoggleClass(false);
  }


//firebase login and signup code

 const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/store");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // if (auth) {
    //   history.push({HandleSignin});
    // }
    // // some fancy firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //Sucessfully registered
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

    


  return (

    <div className={toggleClass ? "container && sign-up-mode":"container"}>
      <form className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <PersonIcon/>
              <input type="email" placeholder="Username"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-field">
              <LockIcon/>
              <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={signIn}/>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a to="#" className="social-icon">
              <FacebookIcon/>              
              </a>
              <a to="#" className="social-icon">
              <TwitterIcon/>
              </a>
              <a to="#" className="social-icon">
              <ShopRoundedIcon/>
              </a>
              <a to="#" className="social-icon">
                <LinkedInIcon/>
              </a>
            </div>
          </form>
          <form  className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <PersonIcon/>
              <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="input-field">
              <EmailIcon/>
              <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <LockIcon/>
              <input type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input type="submit" className="btn" value="Sign up" onClick={register}/>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a to="#" className="social-icon">
                <FacebookIcon/>
              </a>
              <a to="#" className="social-icon">
                <TwitterIcon/>
              </a>
              <a to="#" className="social-icon">
                <ShopRoundedIcon/>
              </a>
              <a to="#" className="social-icon">
                <LinkedInIcon/>
              </a>
            </div>
          </form>
        </div>
      </form>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Sign up to experience a whole new level of smooth and rapid delivery system revolutionizing e-commerce. 
            </p>
            <button className="btn transparent" onClick={HandleSignup}>
              Sign up
            </button>
          </div>
          <img src={ReactLogo2}  className="image" alt="" />
          
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Our online merchants are eagerly waiting for you to sign in and surf through their brand new products!!!
            </p>
            <button className="btn transparent" onClick={HandleSignin}>
              Sign in
            </button>
          </div>
          <img src={ReactLogo} className="image" alt="" />
        </div>
      </div>
    </div>
  )
}
