import React from "react";
import Breadcrumb from "../Broadcrumb";
import DisplayProduct from "../DisplayProduct";
import ProductSidebar from "../ProductSidebar";
import Data from "../../../data/products.json";
export default class WallTiles extends React.Component {
  constructor({size}) {
    super();
    this.state = { wall: [] };
    if (size)this.size = size.match.params.size;
    else this.size = null;
  }
  componentDidMount() {
    this.setState(
      (this.state.wall = Data.filter(this.checkType.bind(this, "wall")))
    );
    this.setProductsWall(this.size);
  }
  componentWillReceiveProps({size}){
    if (size)this.size = size.match.params.size;
    else this.size = null;
    console.log(this.size);
    this.setState(
      (this.state.wall = Data.filter(this.checkType.bind(this, "wall")))
    );
    if(this.size!==null)
      this.setProductsWall(this.size);
    
  }
  checkType = (type, pro) => {
    return pro.type == type ? pro : null;
  };
  setProductsWall = (size) => {
    if (size === "300x450") {
      this.setState(
        (this.state.wall = this.state.wall.filter(
          this.checkSize.bind(this, size)
        ))
      );
    } else if (size === "300x600") {
      this.setState(
        (this.state.wall = this.state.wall.filter(
          this.checkSize.bind(this, size)
        ))
      );
  }
  };
  checkSize = (ele, pro) => {
    console.log(pro.size.includes(ele));
    return pro.size.includes(ele);
    // return pro.size[0] === ele;
    // return pro.size[0] === ele ? pro:null;
  };

  render() {
    return (
      <>
        <div className="wall-tiles">
          <Breadcrumb />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProductSidebar type="wall" />
              </div>
              <div className="col-md-9">
                <DisplayProduct products={this.state.wall} />
              </div>
            </div>
          </div>
        </div>
        {/* <Products type="wall" /> */}
      </>
    );
  }
}
