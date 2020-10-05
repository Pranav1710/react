import React from "react";
import Breadcrumb from "../Broadcrumb";
import Products from "../Products";
import ProductSidebar from "../ProductSidebar";
export default function ParkingTiles() {
  return (
    <>
      <Breadcrumb />
      <Products type="parking" />
      {/* <section className="parkingsidebar">
        <div className="container">
        <div className="row">
        <div className="col-md-3">
        <ProductSidebar type='parking'/>
        </div>
        <div className="col-md-9">
        <Products type='parking'/>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
