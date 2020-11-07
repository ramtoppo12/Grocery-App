import React from 'react';
import "./Home.css";

export default function SearchBar() {
    return (
        
            <div className="search">
            <h1> SEARCH STORES NEAR YOU</h1>
            <div className="flex">
                    <form action="#">
                        <input className="form" type="text" placeholder="Enter Delivery Location" name="search" />
                    <button className="form1">
                        <i className="fa fa-search" style={{fontSize: "18px"}} > 
                        SEARCH
                        </i>
                    </button>
                </form>
            </div>
        </div>
    )
}
