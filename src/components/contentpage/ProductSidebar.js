import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
export class ProductSidebar extends React.Component {
  constructor() {
    super();
    // this.state({type: this.props.type});
  }
  componentDidMount() {
    if (this.props.type !== "") this.dropdownOpen(this.props.type);
  }
  dropdownOpen = (type) => {
    let element = document.getElementById(type);
    if (element.classList.contains("activeItem")) {
      element.classList.remove("activeItem");
    } else {
      element.classList.add("activeItem");
    }
  };
  render() {
    const dropdown = (type) => {
      let t =
        type == "wall"
          ? "wall"
          : type == "floor"
          ? "floor"
          : type == "parking"
          ? "parking"
          : type == 'sanetery'
          ? "sanetery"
          : type == "dc"
          ? "dc"
          : "pg";
      console.log(t);
      this.dropdownOpen(t);
    };

    return (
      <div className="productSide">
        <aside className="sidebar">
          <Link to="/Contact-Us">
            <button className="btn-inq">
              <i className="fa fa-envelope env-btn" aria-hidden="true"></i>
              Inquiry
            </button>
          </Link>
          <div className="product-type" id="wall">
            <h5 className="product-title" onClick={dropdown.bind(this, "wall")}>
              Wall Tiles
              <i
                className="fa fa-angle-right angle-right"
                aria-hidden="true"
              ></i>
            </h5>
            <ul className="product-items">
              <li className="product-item"> <Link className='link' to="/products/wall-tiles/300x450">300 x 450</Link></li>
              <li className="product-item"> <Link className='link' to="/products/wall-tiles/300x600">300 x 600</Link></li>
            </ul>
          </div>

          <div className="product-type" id="parking">
            <h5
              className="product-title"
              onClick={dropdown.bind(this, "parking")}
            >
              parking Tiles
              <i
                className="fa fa-angle-right angle-right"
                aria-hidden="true"
              ></i>
            </h5>
            <ul className="product-items">
            <li className="product-item"> <Link className='link' to="/products/parking-tiles">300 x 300</Link></li>
            <li className="product-item"> <Link className='link' to="/products/parking-tiles">400 x 400</Link></li>
            </ul>
          </div>

          <div className="product-type" id="floor">
            <h5
              className="product-title"
              onClick={dropdown.bind(this, "floor")}
            >
              floor Tiles
              <i
                className="fa fa-angle-right angle-right"
                aria-hidden="true"
              ></i>
            </h5>
            <ul className="product-items">
            <li className="product-item"> <Link className='link' to="/products/floor-tiles">Nano(Soluble Salt)</Link></li>
            <li className="product-item"> <Link className='link' to="/products/floor-tiles">Porceline: 600 x 600</Link></li>
              <li className="product-sub-type" id="dc">
                <h6
                  className="product-sub-title"
                  onClick={dropdown.bind(this, "dc")}
                >
                  Double Charge
                  <i
                    className="fa fa-angle-right angle-right"
                    aria-hidden="true"
                  ></i>
                </h6>
                <ul className="product-sub-items">
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles">600 x 600</Link></li>
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles">800 x 800</Link></li>
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles">600 x 1200</Link></li>
                </ul>
              </li>
              <li className="product-sub-type" id="pg">
                <h6
                  className="product-sub-title"
                  onClick={dropdown.bind(this, "pg")}
                >
                  Gvt/Pgvt
                  <i
                    className="fa fa-angle-right angle-right"
                    aria-hidden="true"
                  ></i>
                </h6>
                <ul className="product-sub-items">
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles">600 x 600</Link></li>
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles">600 x 1200</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="product-type" id="sanetery">
            <h5 className="product-title">
              Sanatery ware
              <i
                className="fa fa-angle-right angle-right"
                aria-hidden="true"
              ></i>
            </h5>
          </div>
        </aside>
      </div>
    );
  }
}
export default ProductSidebar;
