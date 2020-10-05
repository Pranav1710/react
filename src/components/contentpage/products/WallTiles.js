import React from "react";
import Products from "../Products";
import ProductSidebar from "../ProductSidebar";
import Breadcrumb from "../Broadcrumb";
export default function WallTiles() {
  return (
    <>
      <Breadcrumb />
      <Products type="wall" />
      {/* <section className="wallTiles">
        <div className="container">
        <div className="row">
        <div className="col-md-3">
        <ProductSidebar type='wall'/>
        </div>
        <div className="col-md-9">
        <Products type='wall' />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
