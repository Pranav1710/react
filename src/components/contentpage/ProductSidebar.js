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
              <li className="product-item wall-item">300 x 450</li>
              <li className="product-item wall-item">300 x 600</li>
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
              <li className="product-item">300 x 300</li>
              <li className="product-item">400 x 400</li>
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
              <li className="product-item">Nano(Soluble Salt)</li>
              <li className="product-item">Porceline: 600 x 600</li>
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
                  <li className="product-sub-item">600 x 600</li>
                  <li className="product-sub-item">800 x 800</li>
                  <li className="product-sub-item">600 x 1200</li>
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
                  <li className="product-sub-item">600 x 600</li>
                  <li className="product-sub-item">600 x 1200</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="product-type">
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
