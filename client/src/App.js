/** @format */

import { useState, useEffect } from "react";
import "./App.css";
import bootstrapjs from "bootstrap/dist/js/bootstrap.bundle";
import Glightbox from 'glightbox';

//importing components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

const App = () => {




  return (
    <div className="app">
      created by igotapps with<i class="fab fa-instagram-square"></i> by mr igot
      <Navbar />
      <Header />
      <Skills />
      <Services />
      <Gallery />
      <div>
        <a
          href="https://pixy.org/src/480/4800346.jpg"
          class="glightbox5"
          data-glightbox="title: My title; description: .custom-desc1"
        >
          <img src="https://pixy.org/src/480/4800346.jpg" alt="image" />
        </a>
        <a
          href="https://media.sciencephoto.com/image/c0066486/800wm/C0066486-Racoon.jpg"
          class="glightbox5"
          data-glightbox="title: My title; description: .custom-desc1"
        >
          <img src="https://media.sciencephoto.com/image/c0066486/800wm/C0066486-Racoon.jpg" alt="image" />
        </a>
        

      </div>
      <Footer />
    </div>
  );
};

export default App;
