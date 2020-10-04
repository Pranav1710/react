import React from "react";
import "./Products.css";
// import { products } from "../../config";
import BreadCrumb from "./Broadcrumb";
import productData from "../../data/products.json";
export default class Products extends React.Component {
  render() {
    // console.log(myData)
    const mapProduct = (ele, i) => (
      <div className="col-md-4" key={i}>
        <img src={ele.imgUrl}></img>
        <h4 className="product-modal">{ele.modal}</h4>
      </div>
    );
    return (
      <div className="products">
        {/* <BreadCrumb /> */}
        
                {
                  <div className="row" style={{marginTop:0}}>
                    {productData.map(mapProduct)}
                    {/* <div className="col-md-4">
                      {productData.map(mapProduct)}
                      <img src={productData[0].imgUrl} alt="Image 1" />
                      <h4 className="product-modal">{productData[0].modal}</h4>
                    </div>
                    <div className="col-md-4">
                      <img src={productData[1].imgUrl} alt="Image 1" />
                      <h4 className="product-modal">{productData[1].modal}</h4>
                    </div>
                    <div className="col-md-4">
                      <img src={productData[2].imgUrl} alt="Image 1" />
                      <h4 className="product-modal">{productData[2].modal}</h4>
                    </div> */}
                  </div>
                }
      </div>
    );
  }
}
