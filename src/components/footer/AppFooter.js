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
              <div className="divider">
                <h6>Blue International</h6>
                <div className="gDot widget"></div>
                <hr />
              </div>

              <ul className="company-info">
                <li style={{ display: "flex" }}>
                  <i
                    className="fa fa-map-marker map-mark"
                    aria-hidden="true"
                  ></i>
                  <p>
                    Blue International,
                    <br /> Opp. Gujarat Guest Office,
                    <br /> 8-A National Highway,
                    <br /> Morbi-2, Gujarat 363642, India
                  </p>
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span>+91 9157975559</span>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span>Blue@theblueinternationl.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="divider">
                <h6>Quick Links</h6>
                <hr />
                <div className="gDot widget"></div>
              </div>
              <ul className="quick-links">
                <li>
                  <i className="fa fa-caret-right" aria-hidden="true"></i>
                  <Link className="footer-link" to="/">
                    Home
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
              <div className="divider">
                <h6>Our Products</h6>
                <hr />
                <div className="gDot widget"></div>
              </div>

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
        <p className="container">
          © Copyright 2020 Blue International | Developed by{" "}
          <span>Pranav Chanpara</span>
        </p>
      </div>
    </footer>
  );
}
