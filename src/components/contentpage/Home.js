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
              <div className="col-md-4 card-container">
                <div className="card">
                  <img src={imgs.img1} alt="First Image" />
                  <h3 className="text-heading mt-3">This Is Heading</h3>
                  <p className="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus totam rerum ex, ullam fuga, sint illum sequi
                    possimus minima laudantium eos in officiis qui! Perspiciatis
                    quos iure nemo minima at!
                  </p>
                </div>

                {/* to fliped */}

                <div className="flip-content">
                  <h2>Hey There</h2>
                </div>
              </div>
              <div className="col-md-4 card-container">
                <div className="card">
                  <img src={imgs.img2} alt="First Image" />
                  <h3 className="text-heading mt-3">This Is Heading</h3>
                  <p className="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus totam rerum ex, ullam fuga, sint illum sequi
                    possimus minima laudantium eos in officiis qui! Perspiciatis
                    quos iure nemo minima at!
                  </p>
                </div>
              </div>
              <div className="col-md-4 card-container">
                <div className="card">
                  <img src={imgs.img3} alt="First Image" />
                  <h3 className="text-heading mt-3">This Is Heading</h3>
                  <p className="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus totam rerum ex, ullam fuga, sint illum sequi
                    possimus minima laudantium eos in officiis qui! Perspiciatis
                    quos iure nemo minima at!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
