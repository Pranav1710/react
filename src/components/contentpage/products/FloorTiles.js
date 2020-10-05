import React from "react";
import Products from "../Products";
import ProductSidebar from "../ProductSidebar";
import Breadcrumb from "../Broadcrumb";
export const FloorTiles = () => {
  return (
    <>
      <Breadcrumb />
      <Products type="floor" />
      {/* <section className="floorTiles">
        <div className="container">
        <div className="row">
        <div className="col-md-3">
        <ProductSidebar type='floor'/>
        </div>
        <div className="col-md-9">
        <Products type='floor' />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};
export default FloorTiles;
