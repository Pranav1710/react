import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../config";
import "./AppHeader.css";
export default class AppHeader extends Component {
  toggleSitenav = () => {
    document.querySelector(".site-nav").classList.toggle("site-nav--open");
    document.querySelector(".menu-toggle").classList.toggle("open");
  };
  closeMenu = () => {
    document.querySelector(".site-nav").classList.remove("site-nav--open");
    document.querySelector(".menu-toggle").classList.remove("open");
    // document.querySelector(".menu-toggle").classList.add()
  };
  activeProd = () => {
    document.querySelector(".prod").classList.add("active");
  };
  twoInOne = () => {
    document.querySelector(".prod").classList.remove("active");
    this.closeMenu();
  };
  stickyNav = (sticky) => {
    console.log(window.pageYOffset, "stick" + sticky);
    if (window.pageYOffset > sticky) {
      this.navbar.classList.add("sticky");
    } else {
      this.navbar.classList.remove("sticky");
    }
  };
  componentDidMount() {
    // Get the navbar
    this.navbar = document.getElementById("header");
    if (this.navbar) {
      let sticky = this.navbar.offsetTop;
      // When the user scrolls the page, execute myFunction
      window.onscroll = this.stickyNav.bind(this, sticky);
    }
  }
  render() {
    return (
      <header id="header" className="">
        <div className="container clearfix">
          <NavLink
            className="link-logo"
            to="/"
            exact
            activeClassName="no-active"
          >
            <img className="logo" src={Logo} alt="Blue International" />
          </NavLink>

          <nav className="site-nav">
            <ul>
              <li>
                <NavLink
                  className="link-nav"
                  to="/"
                  exact
                  onClick={this.twoInOne.bind(this)}
                >
                  Home
                </NavLink>
              </li>
              <li className="dropdown">
                {/* <NavLink className="link-nav" to="/products" onClick={this.closeMenu}>
                  Products
                </NavLink> */}
                <span className="link-nav prod" style={{ cursor: "pointer" }}>
                  Products
                  <i
                    className="fa fa-angle-down"
                    aria-hidden="true"
                    style={{paddingLeft:".2em", opacity:".5"}}
                  ></i>
                </span>
                <ul className="dropdown-content">
                  <li onClick={this.activeProd}>
                    <NavLink
                      className="dd-item"
                      to="/products/floor-tiles"
                      onClick={this.closeMenu.bind(this)}
                      activeClassName="no-active dd-active"
                    >
                      Floor Tiles
                    </NavLink>
                  </li>
                  <li onClick={this.activeProd}>
                    <NavLink
                      className="dd-item"
                      to="/products/wall-tiles"
                      onClick={this.closeMenu.bind(this)}
                      activeClassName="no-active dd-active"
                      style={{ pointerEvents: "none" }}
                    >
                      Wall Tiles
                    </NavLink>
                  </li>
                  <li onClick={this.activeProd}>
                    <NavLink
                      className="dd-item"
                      to="/products/sanetery-ware"
                      onClick={this.closeMenu.bind(this)}
                      activeClassName="no-active dd-active"
                    >
                      Sanetery ware
                    </NavLink>
                  </li>
                  <li onClick={this.activeProd}>
                    <NavLink
                      className="dd-item"
                      to="/products/parking-tiles"
                      onClick={this.closeMenu.bind(this)}
                      activeClassName="no-active dd-active"
                    >
                      Parking Tiles
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className="link-nav"
                  to="/Company"
                  onClick={this.twoInOne.bind(this)}
                >
                  Company
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="link-nav"
                  to="/Contact-Us"
                  onClick={this.twoInOne.bind(this)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="menu-toggle" onClick={this.toggleSitenav}>
            <div className="hamburger"></div>
          </div>
        </div>
      </header>
    );
  }
}
