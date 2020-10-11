import React from "react";
import Breadcrumb from "../Broadcrumb";
import DisplayProduct from "../DisplayProduct";
import ProductSidebar from "../ProductSidebar";
import Data from "../../../data/floorTiles.json";

export default class FloorTiles extends React.Component {
  tileObj = this.props.size.match.params;
  state = { floor: [...Data] };
  componentDidMount() {
    if(this.tileObj!==null)
      this.setProductsFloor(this.tileObj);
  }
  componentWillReceiveProps({size}){
    if (size)this.tileObj = size.match.params;
    else this.tileObj = null;
    // console.log(this.size);
    this.setState(
      (this.state.floor = Data)
    );
    if(this.size!==null)
      this.setProductsFloor(this.tileObj);
    
  }
  setProductsFloor = (tileObj) => {
    if(tileObj.type === "nano"){
      this.setState((this.state.floor = Data.filter(this.checkType.bind(this,tileObj.type))));
    } else if(tileObj.type === "porceline"){
      this.setState((this.state.floor = Data.filter(this.checkType.bind(this,tileObj.type))));
    }else if (tileObj.type === "doubleCharge") {
      let tmp = Data.filter(this.checkType.bind(this,tileObj.type));
      if (tileObj.size === "600x600") {
        this.setState(
          (this.state.floor = tmp.filter(
            this.checkSize.bind(this, tileObj.size)
          ))
        );
      } else if (tileObj.size === "800x800") {
        this.setState(
          (this.state.floor = tmp.filter(
            this.checkSize.bind(this, tileObj.size)
          ))
        );
      } else if (tileObj.size === "600x1200") {
        this.setState(
          (this.state.floor = tmp.filter(
            this.checkSize.bind(this, tileObj.size)
          ))
        );
      }
    } else if (tileObj.type === "gvt&pgvt") {
      let tmp = Data.filter(this.checkType.bind(this,tileObj.type));
      if (tileObj.size === "600x600") {
        this.setState(
          (this.state.floor = tmp.filter(
            this.checkSize.bind(this, tileObj.size)
          ))
        );
      } else if (tileObj.size === "600x1200") {
        this.setState(
          (this.state.floor = tmp.filter(
            this.checkSize.bind(this, tileObj.size)
          ))
        );
      }
    }
  };

  checkSize = (ele, pro) => {
    console.log(pro.size.includes(ele));
    return pro.size.includes(ele);
  };
  checkType = (type, pro) => {
    return pro.catagory == type ? pro : null;
  };
  render() {
    console.log(this.tileObj);
    return (
      <>
        <div className="floor-tiles">
          <Breadcrumb />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProductSidebar type="floor" />
              </div>
              <div className="col-md-9">
                <DisplayProduct products={this.state.floor} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
