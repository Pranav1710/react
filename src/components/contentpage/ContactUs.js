import React from "react";
import Breadcrumb from "./Broadcrumb";
import './ContactUs.css';
export default function ContactUs() {
  return (
    <section className="mb-4">
        <Breadcrumb />
      <div className="container">
        <h1 className="h1-responsive text-center my-4 mt-5">
          Get In Touch <span className="emphesis">Now!</span> 
        </h1>
        <p className="text-center w-responsive mx-auto">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row ml-5">
          <div className="col-md-12 mb-md-0 mb-5">
            <form id="contact-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="col-md-6" id="mail">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col center-block">
                  <div className="text-md-center">
                    <a className="btn sendBtn btn-primary px-5 py-2">Send</a>
                  </div>
                </div>
              </div>
            </form>

            <div className="status"></div>
          </div>
        </div>
        {/* <div className="row text-center">
          <div className="col-md-4">
            <ul className="list-unstyled mb-0 pb-4 item">
              <li>
                <i className="fa fa-envelope mt-4 fa-2x"></i>
                <p>blueinternationalpvtltd.com</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled mb-0 pb-4 item">
              <li>
                <i className="fa fa-phone mt-4 fa-2x"></i>
                <p>+91 9824665321</p>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled mb-0 pb-4 item">
              <li>
                <i className="fas fa-map-marker-alt fa-2x mt-4"></i>
                <p>Morbi, Gj 363641, India</p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}
