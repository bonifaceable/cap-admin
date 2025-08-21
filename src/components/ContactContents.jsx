import React from "react";

const ContactContents = () => {
  return (
    <>
      {/* Page Title #1 */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/8.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Contact Us</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">about</a>
                  </li>
                  <li className="active">contact us</li>
                </ol>
              </div>
              {/* .title end */}
            </div>
            {/* .col-md-12 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #page-title end */}
      {/* Contact Info */}
      <section
        id="contactInfo"
        className="contact contact-info bg-white text--center pt-90 pb-90"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="contact--info">
                <h3>Our Address</h3>
                <p>48 Warwick Street, London</p>
                <p>W1B 5AW, UK.</p>
                <a className="link--styled" href="#">
                  Get Directions
                </a>
              </div>
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="contact--info">
                <h3>Our Email</h3>
                <p>Main Email : cryptech@wize-tread.com</p>
                <p>Inquiries : cryptech@wize-tread.com</p>
                <a className="link--styled" href="#">
                  Send a Message
                </a>
              </div>
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="contact--info">
                <h3>Our Support</h3>
                <p>Main Support : cryptech@wize-tread.com</p>
                <p>Sales : cryptech@wize-tread.com</p>
                <a className="link--styled" href="#">
                  Open a Ticket
                </a>
              </div>
            </div>
            {/* .col-md-4 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #contactInfo end */}
      {/* Google maps */}
      <section className="google-maps pb-0 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div id="googleMap" style={{ width: "100%", height: 490 }} />
            </div>
          </div>
        </div>
      </section>
      {/* Contact #1 */}
      <section id="contact1" className="contact contact-1 pt-90 pb-90">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-3 mb-50 text--center">
                <h2 className="heading--title">Get in touch</h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
              <div className="row">
                <form className="mb-0">
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="contact-name"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      name="contact-email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="contact-phone"
                      id="Phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <textarea
                      className="form-control"
                      name="contact-message"
                      id="message"
                      rows={2}
                      placeholder="Request Details:"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <input
                      type="submit"
                      defaultValue="Submit Request"
                      name="submit"
                      className="btn btn--primary btn--block"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <div className="contact-result" />
                  </div>
                </form>
                {/* form end */}
              </div>
            </div>
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #contact1 end */}
    </>
  );
};

export default ContactContents;
