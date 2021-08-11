/** @format */

import React from "react";
import bg from "../temp/background.jpg";
import profilePhoto from "../temp/profile_photo.png";
import "./Header.css";

function Header() {
  return (
    <div>
      <section  style={{"background": `url(${bg}) right / cover, #8b2525`}}>
        <div
          className="container-fluid d-flex justify-content-around"
          style={{"padding": "10% 5%","color": "white","background": "rgba(54,53,103,0.5)"}}
        >
          <div className="col d-flex justify-content-around">
            <div>
              <img
                className="img-fluid border rounded-circle" 
                src={profilePhoto}
                style={{"width": "200px","margin": "3px"}}
              />
              <h1 className="yellow_blink">I&#39;M Vannel</h1>
              <h5 className="yellow_blink" >Graphic designer/ animator</h5>
            </div>
          </div>
          <div
            className="col text-center align-items-center align-self-center"
            style={{"font-size" : "20px"}}
          >
            <div className="text-center border-dark col m-auto" style={{"font-size": "2rem"}}>
              <div className="social" style={{"color": "rgb(249,246,246)"}}>
                <a href="#">
                  <i className="fab fa-instagram-square header_icons yellow_blink" ></i>
                </a>
                <a href="#" style={{"margin": "15px"}}></a>
                <a href="#">
                  <i
                    className="fab fa-twitter header_icons yellow_blink"
                  ></i>
                </a>
                <a href="#">
                  <i
                    className="fab fa-facebook header_icons yellow_blink"
                    
                  ></i>
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
