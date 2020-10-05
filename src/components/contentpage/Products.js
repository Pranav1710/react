import React from "react";
import "./Products.css";
import ProductSidebar from "./ProductSidebar";
import DisplayProduct from "./DisplayProduct";
import Data from "../../data/products.json";
import Breadcrumb from "./Broadcrumb";
export default class Products extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
  }
  componentDidMount() {
    this.setState((this.state.products = Data.filter(this.checkType)));
  }
  checkType = (pro) => {
    return pro.type == this.props.type ? pro : null;
  };
  render() {
    return (
      <div className="products">
        <Breadcrumb />
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <ProductSidebar type={this.props.type} />
              </div>
              <div className="col-md-9">
                <DisplayProduct products={this.state.products} />
              </div>
            </div>
          </div>
      </div>
    );
  }
}
