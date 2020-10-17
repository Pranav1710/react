import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Breadcrumb from "./Broadcrumb";
import "./ContactUs.css";
import {clientKey} from '../../config';
// import "https://www.google.com/recaptcha/api.js";
import Map from "./Map";

export default function ContactUs() {
  const [catpchaSolved, setCaptchaSolved] = useState(false);
  const captchaSuccess = () => setCaptchaSolved(true);
  const captchaExpired = () => setCaptchaSolved(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (catpchaSolved) {
      console.log(catpchaSolved);
      let form = document.forms.form1;
      let d = new FormData(form);
      let data = {
        name: d.get("name"),
        phoneNo: d.get("phoneNo"),
        email: d.get("email"),
        subject: d.get("subject"),
        message: d.get("message"),
      };
      console.log(data);
      // let urlPost = 'http://api.theblueinternational.com/enquiry';
      let urlPost = 'http://localhost:5000/enquiry';

      axios.post(urlPost, data)
        .then(response => {
          console.log('posted');
          document.querySelector(".msg").innerHTML = `<div class="alert alert-success" role="alert">
          Your Message has been sent 
        </div>`;
        })
        .catch(error => {
          document.querySelector(".msg").innerHTML = `<div class="alert alert-danger" role="alert">
          Some Server Error Occured, Please try again
        </div>`
        })
      // Make POST request from here using AJAX
    } else {
      alert('Please Solve Captcha first');
    }
  };

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
            <form onSubmit={handleSubmit} id="form1">
              <div className="row">
                <div className="col-md-6" style={{ marginTop: "2rem" }}>
                  <div className="input-data">
                    <input name="name" type="text" required />
                    <div className="underline"></div>
                    <label>Name</label>
                  </div>
                </div>
                <div className="col-md-6" style={{ marginTop: "2rem" }}>
                  <div className="input-data">
                    <input name="phoneNo" type="tel" required />
                    <div className="underline"></div>
                    <label>Phone No.</label>
                  </div>
                </div>
                <div className="col-md-12" style={{ marginTop: "2rem" }}>
                  <div className="input-data">
                    <input type="text" name="email" required />
                    <div className="underline"></div>
                    <label>Email</label>
                  </div>
                </div>
                <div className="col-md-12" style={{ marginTop: "2rem" }}>
                  <div className="input-data">
                    <input type="text" name="subject" required />
                    <div className="underline"></div>
                    <label>Subject</label>
                  </div>
                </div>
                <div className="col-md-12" style={{ marginTop: "2rem" }}>
                  <div className="input-data">
                    <textarea rows="2" name="message" required></textarea>
                    <div className="underline"></div>
                    <label>Message</label>
                  </div>
                </div>

                <div className="col-md-12" style={{ marginTop: "2.5rem" }}>
                  <ReCAPTCHA
                    sitekey={clientKey}
                    onChange={captchaSuccess}
                    onExpired={captchaExpired}
                  />
                </div>
                <div className="col-md-12" style={{ marginTop: "2.5rem" }}>
                  <button type="submit" className="btn-send">
                    Send Message
                  </button>
                </div>
                <div className="col-md-12 msg" style={{ marginTop: "2rem" }}>

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
            <div className="contact-item">
              <div className="content">
                <h4>Blue International</h4>
                <p>
                  <span>
                    Blue International,
                    <br /> Opp. Gujarat Guest Office,
                    <br /> 8-A National Highway,
                    <br /> Morbi-2, Gujarat 363642, India
                  </span>
                </p>
              </div>
              <span className="fa fa-map-marker" aria-hidden="true"></span>
            </div>
            <div className="contact-item">
              <div className="content">
                <h5>call us :</h5>
                <p>
                  <span>+91- 9157975559</span>
                </p>
              </div>
              <span className="fa fa-phone"></span>
            </div>
            <div className="contact-item">
              <div className="content">
                <h5>Write us :</h5>
                <p>
                  <span>Blue@theblueinternational.com</span>
                </p>
              </div>
              <span className="fa  fa-envelope"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
