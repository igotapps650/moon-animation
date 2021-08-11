/** @format */

import React from "react";
import "./Navbar.css";
import profile from "../temp/profile_photo.png";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container">
          <a class="navbar-brand logo" href="#">
            <img class="border rounded-circle flex-shrink-0" src={profile} />
          </a>
          <button
            data-toggle="collapse"
            class="navbar-toggler"
            data-target="#navcol-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="features.html">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="pricing.html">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-us.html">
                  Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact-us.html">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
