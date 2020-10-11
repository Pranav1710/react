import React from "react";
import Breadcrumb from "../Broadcrumb";
import DisplayProduct from "../DisplayProduct";
import ProductSidebar from "../ProductSidebar";
import Data from "../../../data/parkingTiles.json";
export default class ParkingTiles extends React.Component {
  constructor({ size }) {
    super();
    this.state = { parking: [] };
    if (size)this.size = size.match.params.size;
    else this.size = null;
    console.log(this.size);
  }
  componentDidMount() {
    this.setState(
      (this.state.parking = Data)
    );
    this.setProductsParking(this.size);
  }
  componentWillReceiveProps({size}){
    if (size)this.size = size.match.params.size;
    else this.size = null;
    console.log(this.size);
    this.setState(
      (this.state.parking = Data)
    );
    if(this.size!==null)
      this.setProductsParking(this.size);
    
  }
  // checkType = (type, pro) => {
  //   return pro.type == type ? pro : null;
  // };
  setProductsParking = (size) => {
    if (size === "300x300") {
      this.setState(
        (this.state.parking = this.state.parking.filter(
          this.checkSize.bind(this, size)
        ))
      );
    } else if (size === "400x400") {
      this.setState(
        (this.state.parking = this.state.parking.filter(
          this.checkSize.bind(this, size)
        ))
      );
    }
  };
  checkSize = (ele, pro) => {
    // console.log(pro.size.includes(ele));
    return pro.size.includes(ele);
    // return pro.size[0] === ele;
    // return pro.size[0] === ele ? pro:null;
  };

  render() {
    return (
      <>
        <div className="parking-tiles">
          <Breadcrumb />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProductSidebar type="parking" />
              </div>
              <div className="col-md-9">
                <DisplayProduct products={this.state.parking} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
