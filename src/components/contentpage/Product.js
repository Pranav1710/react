import React from "react";
import "./Products.css";
import ProductSidebar from "./ProductSidebar";
import { products } from "../../config";
export default class Product extends React.Component {
  render() {
    return (
      <section className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ProductSidebar />
            </div>
            <div className="col-md-9">
              <div className="row container-fluid">
                <div className="col-md-4">
                  <img src={products.img1} alt="Image 1" />
                </div>
                <div className="col-md-4">
                  <img src={products.img2} alt="Image 2" />
                </div>
                <div className="col-md-4">
                  <img src={products.img3} alt="Image 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
