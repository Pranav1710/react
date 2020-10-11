import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../../config";
import "./AppHeader.css";
export default class AppHeader extends Component {
  toggleSitenav(){
    document.querySelector('.site-nav').classList.toggle('site-nav--open');
    document.querySelector('.menu-toggle').classList.toggle('open');
  }
  closeMenu(){
    document.querySelector('.site-nav').classList.remove('site-nav--open');
    document.querySelector('.menu-toggle').classList.remove('open');
  }
  render() {
    return (
      <header>
        <div className="container clearfix">
          <NavLink className="link-logo" to="/">
            <img className="logo" src={Logo} alt="Blue International" />
          </NavLink>

          <nav className="site-nav">
            <ul>
              <li>
                <NavLink className="link-nav" to="/" onClick={this.closeMenu}>
                  Home
                </NavLink>
              </li>
              <li className="dropdown">
                <NavLink className="link-nav" to="/products" onClick={this.closeMenu}>
                  Products
                </NavLink>
                <ul className="dropdown-content">
                  <li>
                    <NavLink className="dd-item" to="/products/floor-tiles" onClick={this.closeMenu}>
                      Floor Tiles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dd-item" to="/products/wall-tiles" onClick={this.closeMenu}>
                      Wall Tiles
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dd-item" to="/products/sanetery-ware" onClick={this.closeMenu}>
                      Sanetery ware
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dd-item" to="/products/parking-tiles" onClick={this.closeMenu}>
                      Parking Tiles
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink className="link-nav" to="/Company" onClick={this.closeMenu}>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink className="link-nav" to="/Exports" onClick={this.closeMenu}>
                  Exports
                </NavLink>
              </li>
              <li>
                <NavLink className="link-nav" to="/Contact-Us" onClick={this.closeMenu}>
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

// navDropdown = item => {
// console.log(item);
// }
// render() {
//   return (
//     <div className="container-fluid">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container mynav">
//           <NavLink className="navbar-brand" to="/">
//             <img className="logo" src={Logo} alt="Blue International" />
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarText"
//             aria-controls="navbarText"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarText">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <NavLink className="nav-link" exact to="/">
//                   Home <span className="sr-only">(current)</span>
//                 </NavLink>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle"
//                   data-toggle="dropdown"
//                   to="/products"
//                   role="button"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Products
//                 </a>
//                 <div class="dropdown-menu">
//                   <NavLink class="item" to="/products/floor-tiles">
//                     Floor Tiles
//                   </NavLink>
//                   <NavLink class="item" to="/products/wall-tiles">
//                     Wall Tiles
//                   </NavLink>
//                   <NavLink class="item" to="/products/sanetery-ware">
//                     Sanetery ware
//                   </NavLink>
//                   <NavLink class="item" to="/products/parking-tiles">
//                     Parking Tiles
//                   </NavLink>
//                 </div>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/e-catalog">
//                   E-catalog
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/company">
//                   Company
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/exports">
//                   exports
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact-us">
//                   Contact-us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
