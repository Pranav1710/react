import React from "react";
import Breadcrumb from "./Broadcrumb";
import "./Company.css";
export default function Company() {
  return (
    <section>
      <Breadcrumb />
      <div className="about">
        <div className="container">
          <h1 style={{fontSize: "2.5em"}}>Who We Are?</h1>
          <div className="row mt-5">
            <div className="col-md-4">
              <img className="aboutImg" src="/assets/imgs/company.jpg" alt="" />
            </div>
            <div className="col-md-8">
              <p>
                Blue International is leading and reputed Govt. of India
                recognize company located at Morbi ( Gujarat ), India and
                establishment in Ceramic / Porcelain Tiles and Ceramic
                Sanitarywares Industry to accomplishment of International Trade
                and Service’s needs. It’s high rate of modernization makes this
                company apart from the rest, precisely because of its
                versatility and ability to react and adapt to customer needs.
                Blue International is provided combination of customized service
                and products.
              </p>
              <p>
                We have tie up with state of the art manufacturing units to
                provide premium products under the quality standard with large
                range of designs and sizes of Ceramic & Porcelain Tiles. We
                believe only on innovation and quality as well committed to
                provide best quality with acceptable prices.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                It is a matter of immense pride that the blue International
                located at Morbi, Gujarat, India has achieved its goals with the
                help of Business Petronage, we manufactured / supplied Ceramic
                and Porcelain Wall & Floor Tiles that not only to meet the
                customers demand, but exceed them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
