import React from "react";
import "./Products.css";


import Data from "../../data/products.json";

export default class Products extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }
  componentDidMount() {
    this.setState(
      (this.state.products = Data.filter(this.checkType.bind(this, "")))
    );
  }
  checkType = (type, pro) => {
    if (type === "") return pro.type == this.props.type ? pro : null;
    else return pro.type == type ? pro : null;
  };
  checkSize = (ele, pro) => {
    console.log(pro.size.includes(ele));
    return pro.size.includes(ele);
    // return pro.size[0] === ele;
    // return pro.size[0] === ele ? pro:null;
  };
  setProductsAll = (size, type) => {
    if (type === "wall") {
      if (size === "300x450") {
        this.setState(
          (this.state.products = this.state.products.filter(
            this.checkSize.bind(this, size)
          ))
        );
      } else if (size === "300x600") {
        this.setState(
          (this.state.products = this.state.products.filter(
            this.checkSize.bind(this, size)
          ))
        );
      }
    }
    else if(type==='parking'){
      if (size === "300x300") {
        this.setState(
          (this.state.products = this.state.products.filter(
            this.checkSize.bind(this, size)
          ))
        );
      } else if (size === "400x400") {
        this.setState(
          (this.state.products = this.state.products.filter(
            this.checkSize.bind(this, size)
          ))
        );
      }
    }
  };
  setProductsWall = (size) => {
    // console.log(size);
    this.setState(
      (this.state.products = Data.filter(this.checkType.bind(this, "wall"))),
      () => {
        console.log(this.state.products);
        this.setProductsAll(size, "wall");
      }
    );
  };
  setProductsParking = (size) => {
    console.log("parking", size);
    this.setState(
      (this.state.products = Data.filter(this.checkType.bind(this, "parking"))),
      () => {
        console.log(this.state.products);
        this.setProductsAll(size, "parking");
      }
    );
  };
  render() {
    return (
      <div>
        HelloWorld
      </div>
    );
  }
}
