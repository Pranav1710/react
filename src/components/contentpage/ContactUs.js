import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Breadcrumb from "./Broadcrumb";
import "./ContactUs.css";
// import "https://www.google.com/recaptcha/api.js";
import Map from "./Map";
export default function ContactUs() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <section className="mb-4 contact-section">
      <Breadcrumb />
      <div className="container extra-padding bg mb-5">
        <div className="row">
          <div className="col-md-12">
            <h1
              className="h1-responsive text-center my-4 mt-5"
              style={{ fontSize: "2.5rem" }}
            >
              Get In Touch <span className="emphesis">Now!</span>
            </h1>
            <form action="localhost/blueInternational/contactUs.php" method="post">
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
                    <input type="tel" required />
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
                  <ReCAPTCHA
                    sitekey="6LdK19YZAAAAAIgO-fQS2GjP2Eklr63aajQjrjaJ"
                    onChange={onChange}
                  />
              
                </div>
                <div className="col-md-12" style={{ marginTop: "2.5rem" }}>
                  <button type="submit" className="btn-send">
                    Send Message
                  </button>
                </div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5rem" }}>
        <div className="row">
          <div className="col-md-8">
            <Map />
          </div>
          <div className="col-md-4">
            <div class="contact-item">
              <div class="content">
                <h4>Blue International</h4>
                <p>
                  <span>
                    Chitrakut 5
                    <br /> sanala road,
                    <br />
                    B/h g.i.d.c,
                    <br />
                    Morbi, Gujarat 363641, India
                  </span>
                </p>
              </div>
              <span className="fa fa-map-marker" aria-hidden="true"></span>
            </div>
            <div class="contact-item">
              <div class="content">
                <h5>call us :</h5>
                <p>
                  <span>+91- 9824665321</span>
                </p>
              </div>
              <span className="fa fa-phone"></span>
            </div>
            <div class="contact-item">
              <div class="content">
                <h5>Write us :</h5>
                <p>
                  <span>Blue@blueinternational.com</span>
                </p>
              </div>
              <span class="fa  fa-envelope"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
