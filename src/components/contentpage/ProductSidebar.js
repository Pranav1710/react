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
        // type == "wall"
        //   ? "wall":
          type == "floor"
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
        <aside className="sidebar">
          <Link to="/Contact-Us">
            <button className="btn-inq">
              <i className="fa fa-envelope env-btn" aria-hidden="true"></i>
              Inquiry
            </button>
          </Link>
          <div className="product-type" id="wall">
            <h5 className="product-title" onClick={dropdown.bind(this, "wall")} style={{pointerEvents:"none"}}>
              Wall Tiles
              <i
                className="fa fa-angle-right angle-right"
                aria-hidden="true"
              ></i>
            </h5>
            <ul className="product-items">
              <li className="product-item"><Link to='/products/wall-tiles/300x450' className='link'>300 x 450 mm</Link></li>
              <li className="product-item"><Link to='/products/wall-tiles/300x600' className='link'>300 x 600 mm</Link></li>
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
            <li className="product-item"><Link to='/products/parking-tiles/300x300' className='link'>300 x 300 mm</Link></li>
            <li className="product-item"><Link to='/products/parking-tiles/400x400' className='link' style={{pointerEvents:"none"}}>400 x 400 mm</Link></li>
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
            <li className="product-item"> <Link className='link' to="/products/floor-tiles/nano">Nano</Link></li>
            <li className="product-item"> <Link className='link' to="/products/floor-tiles/porceline" style={{pointerEvents:"none"}}>Porceline</Link></li>
              <li className="product-sub-type" id="dc">
                <h6
                  className="product-sub-title"
                  onClick={dropdown.bind(this, "dc")}
                  style={{pointerEvents:"none"}}
                >
                  Double Charge
                  <i
                    className="fa fa-angle-right angle-right"
                    aria-hidden="true"
                  ></i>
                </h6>
                <ul className="product-sub-items">
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles/doubleCharge/600x600">600 x 600 mm</Link></li>
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles/doubleCharge/800x800">800 x 800 mm</Link></li>
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles/doubleCharge/600x1200">600 x 1200 mm</Link></li>
                </ul>
              </li>
              <li className="product-sub-type" id="pg">
                <h6
                  className="product-sub-title"
                  onClick={dropdown.bind(this, "pg")}
                  style={{pointerEvents:"none"}}
                >
                  Gvt/Pgvt
                  <i
                    className="fa fa-angle-right angle-right"
                    aria-hidden="true"
                  ></i>
                </h6>
                <ul className="product-sub-items">
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles/gvt&pgvt/600x600">600 x 600 mm</Link></li>
                  <li className="product-sub-item"><Link className='link' to="/products/floor-tiles/gvt&pgvt/600x1200">600 x 1200 mm</Link></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="product-type" id="sanetery">
          <Link className='link' to="/products/sanetery-ware">
            <h5 className="product-title">
              Sanatery ware
            </h5>
            </Link>
          </div>
        </aside>
    );
  }
}
export default ProductSidebar;
