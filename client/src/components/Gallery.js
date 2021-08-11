/** @format */

import React from "react";
import gallery_image from "../temp/gallery_image.jpg";
import "./Gallery.css";


// components
import Pagination from "./Pagination";

function Gallery() {
  return (
    <div>
      <section class="clean-block features">
        <div class="container mb-5" >
          <div class="block-heading" >
            <h2 class="text-info text-center" style={{"text-align": "left"}}>
              PROJECT GALLERY
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
            <div></div>
          </div>
        </div>
        <div class="igot_shadow container p-3" style={{"text-align": "center"}}>
          <span>new</span>
          <div class="row d-flex justify-content-center">

        <div class="shadow col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div class="thumbnail m-3">
            {" "}
            <img className="gallery_card"
              data-src="holder.js/100%x200"
              alt="100%x200"
              src={gallery_image}
              data-holder-rendered="true"
              style={{ height: "200px", width: "100%", display: "block" }}
            />

            <div class="caption">
              <h3>Thumbnail label</h3>
            </div>
          </div>
        </div>

        <div class="shadow col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div class="thumbnail m-3">
            {" "}
            <img className="gallery_card"
              data-src="holder.js/100%x200"
              alt="100%x200"
              src={gallery_image}
              data-holder-rendered="true"
              style={{ height: "200px", width: "100%", display: "block" }}
            />
            <div class="caption">
              <h3>Thumbnail label</h3>
            </div>
          </div>
        </div>

        <div class="shadow col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div class="thumbnail m-3">
            {" "}
            <img className="gallery_card"
              data-src="holder.js/100%x200"
              alt="100%x200"
              src={gallery_image}
              data-holder-rendered="true"
              style={{ height: "200px", width: "100%", display: "block" }}
            />
            <div class="caption">
              <h3>Thumbnail label</h3>
            </div>
          </div>
        </div>
      </div>

        <div className="row d-flext justify-content-center" style={{"box-shadow": ""}}>
        <Pagination page={2} pages={5} changePage={()=>{}}/>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
