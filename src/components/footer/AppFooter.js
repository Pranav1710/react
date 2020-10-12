import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function AppFooter() {
  return (
    <footer className="footer">
      <div className="main-foot">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h6>Blue International</h6>
              <hr />
              <ul className="company-info">
                <li style={{ display: "flex" }}>
                  <i
                    className="fa fa-map-marker map-mark"
                    aria-hidden="true"
                  ></i>
                  <p>
                    Chitrakut-5, <br />
                    b/h g.i.d.c, <br />
                    sanala road, <br />
                    morbi,gujarat,india-363641 <br />
                  </p>
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>+91 9824665321</span>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Blue@blueinternationl.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Quick Links</h6>
              <hr />
              <ul className="quick-links">
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/exports">
                    Exports
                  </Link>
                </li>
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/company">
                    Company
                  </Link>
                </li>
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/contact-us">
                    Contact-us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Our Products</h6>
              <hr />
              <ul className="products">
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/products/wall-tiles">
                    Wall Tiles
                  </Link>
                </li>
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/products/floor-tiles">
                    Floor Tiles
                  </Link>
                </li>
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/products/parking-tiles">
                    Parking Tiles
                  </Link>
                </li>
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/products/sanetery-ware">
                    Sanatery Ware
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-muted">
        <p className="container">© Copyright 2020 Blue International | Developed by <span>Pranav Chanpara</span></p>
      </div>
    </footer>
  );
}
