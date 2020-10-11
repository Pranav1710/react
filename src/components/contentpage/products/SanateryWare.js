import React from "react";
import Breadcrumb from "../Broadcrumb";
import DisplayProduct from "../DisplayProduct";
import ProductSidebar from "../ProductSidebar";
import Data from "../../../data/sanateryware.json";
export default class WallTiles extends React.Component {
  constructor() {
    super();
    this.state = { sanatery: [...Data] };
   
  }

  render() {
    return (
      <>
        <div className="sanatery-ware">
          <Breadcrumb />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProductSidebar type="" />
              </div>
              <div className="col-md-9">
                <DisplayProduct products={this.state.sanatery} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
