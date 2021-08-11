/** @format */

import React from "react";
import service_image from "../temp/service_image.png";

function Services() {
  return (
    <div>
      <section class="clean-block features">
        <div class="igot_shadow container p-5">
          <div class="block-heading">
            <h2 class="text-info" style={{ "text-align": "left" }}>
              MY AWSOME SERVICES
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
            <div>
              <section class="index-howto-alt py-3">
                <div class="container">
                  <div
                    class="psd-line pos-rel"
                    style={{ position: "relative" }}
                  >
                    <div class="row align-items-center">
                      <div class="col-12 col-sm-6 d-flex flex-row justify-content-center align-items-center intro-card-1 p-5">
                        <div>
                          <img class="howto-img" src={service_image} />
                          <h5 style={{"margin": "15px;"}}>Graphic designing</h5>
                        </div>
                      </div>
                      <div class="col-12 col-sm-6 d-flex flex-column justify-content-center p-5 psd-left1">
                        <p class="m-0 text-center text-sm-left">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras mi nibh, tristique et sagittis in, aliquet
                          id metus. In eleifend et dolor eget tincidunt.
                          <br />
                        </p>
                      </div>
                    </div>
                    <div class="row flex-column-reverse align-items-center flex-sm-row">
                      <div class="col-12 col-sm-6 d-flex flex-column justify-content-center p-5 psd-right1">
                        <p class="m-0 text-center text-sm-right">
                          Etiam eget nulla ut elit placerat commodo. Etiam
                          vestibulum consectetur quam eget pretium. Sed in
                          suscipit augue. Nunc venenatis porttitor enim a
                          hendrerit. 
                          <br />
                        </p>
                      </div>
                      <div class="col-12 col-sm-6 d-flex flex-row justify-content-center align-items-center intro-card-2 p-5">
                        <div>
                          <img class="howto-img" src={service_image} />
                          <h5 style={{"margin": "15px"}}>Photography</h5>
                        </div>
                        <h2 class="grey-text d-none">
                          Neye İhtiyacınız Varsa Belirtin
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
