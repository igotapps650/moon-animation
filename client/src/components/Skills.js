/** @format */

import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <section
        class="clean-block clean-info dark"
        style={{"width": "80", "background": "#ffffff"}}
      >
        <div class="container">
          <div class="block-heading">
            <h2 class="text-left text-info" >MY SKILLS</h2>
            <p class="text-center" style={{"margin": "0 auto"}}>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
              ipsum dolor sit amet, consectetur 
              <br />
              <br />
            </p>
          </div>
        </div>
        <div class="container">
          <div style={{"width": "90","margin": "0 0 10px 0"}}>
            <h5>Blender 95%</h5>
            <div class="progress" style={{"width": "80%"}}>
              <div
                class="progress-bar bg-success progress-bar-striped"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{"width": "95%"}}
              >
                95%
              </div>
            </div>
          </div>
          <div style={{"width": "90", "margin": "0 0 10px 0"}}>
            <h5>Photoshop 90%</h5>
            <div class="progress" style={{"width": "80%"}}>
              <div
                class="progress-bar bg-success progress-bar-striped"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{"width": "90%"}}
              >
                90%
              </div>
            </div>
          </div>
          <div style={{"width": "90", "margin" : "0 0 10px 0"}}>
            <h5>Illustrator 85%</h5>
            <div class="progress" style={{"width": "80%"}}>
              <div
                class="progress-bar bg-success progress-bar-striped"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{"width": "85%"}}
              >
                85%
              </div>
            </div>
          </div>
          <div style={{"width": "90", "margin" : "0 0 10px 0"}}>
            <h5>Adobe after effect 80%</h5>
            <div class="progress" style={{"width": "80%"}}>
              <div
                class="progress-bar bg-success progress-bar-striped"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{"width": "80%"}}
              >
                80%
              </div>
            </div>
          </div>
          <div style={{"width": "90", "margin" : "0 0 10px 0"}}>
            <h5>Coral draw 75%</h5>
            <div class="progress" style={{"width": "80%"}}>
              <div
                class="progress-bar bg-success progress-bar-striped"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{"width": "75%"}}
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
