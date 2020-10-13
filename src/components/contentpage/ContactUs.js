import React from "react";
import Breadcrumb from "./Broadcrumb";
import "./ContactUs.css";
import Map from "./Map";
export default function ContactUs() {
  return (
    <section className="mb-4 contact">
      <Breadcrumb />
      <div className="container extra-padding mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="h1-responsive text-center my-4 mt-5"
              style={{ fontSize: "2.5rem" }}
            >
              Get In Touch <span className="emphesis">Now!</span>
            </h1>
            <div className="row">
              <div className="col-md-6" style={{ marginTop: "2rem" }}>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label>Name</label>
                </div>
              </div>
              <div className="col-md-6" style={{ marginTop: "2rem" }}>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label>Phone No.</label>
                </div>
              </div>
              <div className="col-md-12" style={{ marginTop: "2rem" }}>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label>Email</label>
                </div>
              </div>
              <div className="col-md-12" style={{ marginTop: "2rem" }}>
                <div className="input-data">
                  <input type="text" required />
                  <div className="underline"></div>
                  <label>Subject</label>
                </div>
              </div>
              <div className="col-md-12" style={{ marginTop: "2rem" }}>
                <div className="input-data">
                  <textarea rows="2" required></textarea>
                  <div className="underline"></div>
                  <label>Message</label>
                </div>
              </div>
              <div className="col-md-12" style={{ marginTop: "2.5rem" }}>
                <button className="btn-send">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop:"5rem"}}>
        <div className="row">
          <div className="col-md-8">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}
