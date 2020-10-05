import React from "react";
import "./Products.css";
// import { products } from "../../config";
import BreadCrumb from "./Broadcrumb";
import ProductSidebar from './ProductSidebar';
import Data from "../../data/products.json";
export default class Products extends React.Component {
  constructor(){
    super();
    this.state ={ products : []};
  }
  componentDidMount(){
    this.setState(this.state.products = Data.filter(this.checkType));
  }
  checkType = (pro)=>{
    return pro.type == this.props.type?pro:null; 
  } 
  render() {
    console.log(this.state.products);
    console.log(Data);
    // console.log(this.props);
    const mapProduct = (ele, i) => (
      <div className="col-md-4" key={i}>
        <img src={ele.imgUrl}></img>
        <h4 className="product-modal">{ele.modal}</h4>
      </div>
    );
    return (
      <div className="products">
        {/* <BreadCrumb /> */}
        <section className="wallTiles">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <ProductSidebar type={this.props.type}/>
            </div>
            <div className="col-md-9">
               {  
                  <div className="row" style={{marginTop:0}}>
                    {this.state.products.map(mapProduct)}
                  </div>
                }
            </div>
          </div>
        </div>
      </section>
               
      </div>
    );
  }
}
