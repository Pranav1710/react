import React from 'react'
import Products from '../Products';
import Breadcrumb from "../Broadcrumb";
import ProductSidebar from '../ProductSidebar';
export default function SanateryWare() {
    return (
        <>
      <Breadcrumb/>
      <section className="sanateryware">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ProductSidebar type=''/>
            </div>
            <div className="col-md-9">
              <Products />
            </div>
          </div>
        </div>
      </section>
    </>
    )
}
