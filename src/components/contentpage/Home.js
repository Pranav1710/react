import React, { Component } from "react";
import Slides from "./Sides";
import { imgs } from "../../config";
import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <>
        <Slides />
        <section className="section-products">
          <div className="container">
            <h1>Our Products</h1>
            <div className="row pt-5">
              <div className="col-md-4 pr-4">
                <div className="anime-img">
                  <img src={imgs.img1} alt="First Image" />
                </div>
                <h3 className="text-heading mt-3">FLOOR TILES</h3>
                <p className="mt-3">
                we develop innovative Vitrified tiles that are non-porous in nature and alluring in appeal. Their durable body and wear and tear resistant surface expands application potential giving a wide room of imagination and opportunities to you to explore different possibilities.
                </p>
              </div>  
              <div className="col-md-4 pl-4 pr-4">
                <div className="anime-img">
                  <img src={imgs.img2} alt="First Image" />
                </div>
                <h3 className="text-heading mt-3">WALL TILES</h3>
                <p className="mt-3">
                If you are looking for decorative wall tiles than you have come to the right place. Yes, BLUE international has the wide range of designs - more than 400 designs in various series such as Glossy ,Sugar, Rustic or Matte. Blending urban spectacular designs with contemporary classic designs, they have all style to fit every taste at affordable prices."
                </p>
              </div>
              <div className="col-md-4 pl-4">
                <div className="anime-img">
                  <img src={imgs.img3} alt="First Image" />
                </div>
                <h3 className="text-heading mt-3">SANITARY WARES</h3>
                <p className="mt-3">
                Step into the world of glamour and beauty with us – BLUE Sanitarywares, the leader in manufacture and export of premium Sanitary ware. Bathed in luxury and style, our products are high-end and unique, making your dream of a lavish lifestyle come true. We believe in innovation and technology. And our huge collection of premium sanitary ware and bathroom furniture reflect our belief. Being the first SSI in the country with the largest capacity, we have stood firm in our vision to be a global leader. Since our inception, we have been creating products that are high on quality and stylish in looks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
