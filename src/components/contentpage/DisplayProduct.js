import React from "react";
import "./DisplayProducts.css";
export const DisplayProduct = (props) => {
  // const prod = props.products.length===0?"No Product Available": null ;
  const mapProduct = (ele, i) => (
    <div className="col-md-4 product-container" key={i}>
      <img src={ele.imgUrl} alt=""></img>
      <p className="product-modal">
        {ele.modal}
      </p>
    </div>
  );
  return (
    <>
      {
        <div className="row" style={{ marginTop: 0 }}>
          {props.products.map(mapProduct)}
        </div>
      }
    </>
  );
};
export default DisplayProduct;
