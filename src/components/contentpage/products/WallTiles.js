import React from "react";
import Products from "../Products";
import ProductSidebar from "../ProductSidebar";
import Breadcrumb from "../Broadcrumb";
export default function WallTiles() {
  return (
    <>
      <Breadcrumb />
      <Products type="wall" />
     
    </>
  );
}
