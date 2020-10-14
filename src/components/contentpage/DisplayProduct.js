import React from "react";
import './DisplayProducts.css';
export const DisplayProduct = props => {
  // const prod = props.products.length===0?"No Product Available": null ;
  const mapProduct = (ele, i) => (
    <div className="col-md-4" key={i}>
      <img src={ele.imgUrl} alt=""></img>
      <h4 className="product-modal">{ele.modal}</h4>
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
