import React, { Component } from "react";
import { imgs } from "../../config";

export default class Slides extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      images: [
        { img: imgs.img1, active: true },
        { img: imgs.img2, active: false },
        { img: imgs.img3, active: false },
      ],
      activeImg: "activeImg",
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(this.timerFun, 4000);
  }
  componentWillUnmount() {
    if(this.timerID!=null)
      clearInterval(this.timerID);

  }
  timerFun =  () => {
    let current = this.state.index;
    current = current < this.state.images.length - 1 ? current + 1 : 0;
    this.state.index = current;
    this.slider(this.state.index);
  };
  next = () => {
    clearInterval(this.timerID);
    this.timerID = null;
    let current = this.state.index;
    current = current < this.state.images.length - 1 ? current + 1 : 0;
    this.slider(current);
  };
  prev = () => {
    clearInterval(this.timerID);
    this.timerID = null;
    let current = this.state.index;
    current = current > 0 ? current - 1 : this.state.images.length - 1;
    this.slider(current);
  };
  slider = (current) => {
    this.setState(
      {
        index: current,
      },
      () => {
        console.log(this.state.index);
        console.log(this);
        for (let i = 0; i < this.state.images.length; i++) {
          if (i != this.state.index) {
            this.state.images[i].active = false;
          }
          this.state.images[this.state.index].active = true;
        }
        if(this.timerID==null)
          this.timerID = setInterval(this.timerFun,4000);
      }
    );
  };

  render() {
    return (
      <section className="container-fluid">
        <div className="slide-container">
          <i
            className="fa fa-chevron-right arrow js-arrow-right"
            aria-hidden="true"
            onClick={this.next}
          ></i>
          <i
            className="fa fa-chevron-left arrow js-arrow-left"
            aria-hidden="true"
            onClick={this.prev}
          ></i>

          <div
            className={`${
              this.state.images[0].active ? this.state.activeImg : "deactiveImg"
            } slide slide-one`}
          >
            <img src={this.state.images[0].img} alt="Image 1" />
          </div>
          <div
            className={`${
              this.state.images[1].active ? this.state.activeImg : "deactiveImg"
            } slide slide-two`}
          >
            <img src={this.state.images[1].img} alt="Image 2" />
          </div>
          <div
            className={`${
              this.state.images[2].active ? this.state.activeImg : "deactiveImg"
            } slide slide-three`}
          >
            <img src={this.state.images[2].img} alt="Image 3" />
          </div>
        </div>
      </section>
    );
  }
}
