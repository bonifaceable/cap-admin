import React from "react";

const GetQuoteContents = () => {
  return (
    <>
      {/* Page Title #1*/}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/9.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Free Consultation</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">about</a>
                  </li>
                  <li className="active">Consultation</li>
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
      {/* Contact Info
============================================= */}
      <section
        id="contactInfo"
        className="contact contact-info bg-white text--center pt-90 pb-90"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="contact--info">
                <h3>Our Address</h3>
                <p>Alnahas Building, 2 AlBahr St, Tanta</p>
                <p>AlGharbia, Egypt.</p>
                <a className="link--styled" href="#">
                  Get Directions
                </a>
              </div>
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="contact--info">
                <h3>Our Email</h3>
                <p>Main Email : 7oroof@7oroof.com</p>
                <p>Inquiries : Info@7oroof.com</p>
                <a className="link--styled" href="#">
                  Send a Message
                </a>
              </div>
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="contact--info">
                <h3>Our Support</h3>
                <p>Main Support : 7oroof@7oroof.com</p>
                <p>Sales : Sales@7oroof.com</p>
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
      {/* Consultation #1
============================================= */}
      <section id="consultation" className="consultation consultation-1 pb-0">
        <div className="bg-section">
          <img src="/main-assets/images/background/7.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-2 mb-50">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-7">
                    <h2 className="heading--title text-white">
                      <span className="text-theme">Discover</span>
                      <span className="text-white">
                        Thousands of Trading &amp; Investment Opportunities.
                      </span>
                    </h2>
                  </div>
                </div>
                {/* .row end */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <p className="heading--desc">
                      Now you can start trading Bitcoin, Ethereum and many
                      cryptocurrencies fast, easily and safely from where ever
                      you are. With great margin trading leverage and short sell
                      options available with quick deposit &amp; withdrawal
                      capability, you can start trading with us in seconds.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-6">
                    <p className="heading--desc">
                      Cryptocurrencies have become established investment
                      commodities among major financial institutions, and have
                      even been adopted by countries such as Australia and
                      Japan. However, as with any investment there are risks
                      linked to market movements!
                    </p>
                  </div>
                </div>
                {/* .row end */}
              </div>
              {/* .heading end */}
            </div>
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="consultation-form mb-30 bg-white text-center">
                <div className="consultation--desc">Request a Consultation</div>
                <form className="mb-0">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4">
                      <input
                        type="text"
                        className="form-control"
                        name="consultater-name"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                      <input
                        type="email"
                        className="form-control"
                        name="consultater-email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                      <div className="form-select">
                        <i className="fa fa-angle-down" />
                        <select
                          className="form-control"
                          name="Cryptocurreny"
                          id="Cryptocurreny"
                        >
                          <option value="Cryptocurrencies">
                            Cryptocurrencies
                          </option>
                          <option value="Bitcoin">Bitcoin</option>
                          <option value="Litecoin">Litecoin</option>
                          <option value="Namecoin">Namecoin</option>
                          <option value="Dogecoin">Dogecoin</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <textarea
                        className="form-control"
                        name="consultater-message"
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
                  </div>
                  {/* .row end */}
                </form>
                {/* form end */}
              </div>
              {/* .contact-form end */}
            </div>
            {/* .col-md-8 end */}
          </div>
        </div>
        {/* .container end */}
      </section>
      {/* #consultation end */}
      {/* Clients #1
============================================= */}
      <section id="clients1" className="clients clients-1 pt-60 pt-90 bg-gray">
        <div className="container">
          <div className="row row-clients">
            {/* Client #1 */}
            <div className="col-xs-12 col-sm-6 col-md-2 client">
              <img
                className="center-block"
                src="/main-assets/images/clients/1.png"
                alt="client"
              />
            </div>
            {/* .client end */}
            {/* Client #2 */}
            <div className="col-xs-12 col-sm-6 col-md-2 client">
              <img
                className="center-block"
                src="/main-assets/images/clients/2.png"
                alt="client"
              />
            </div>
            {/* .client end */}
            {/* Client #3 */}
            <div className="col-xs-12 col-sm-6 col-md-2 client">
              <img
                className="center-block"
                src="/main-assets/images/clients/3.png"
                alt="client"
              />
            </div>
            {/* .client end */}
            {/* Client #4 */}
            <div className="col-xs-12 col-sm-6 col-md-2 client">
              <img
                className="center-block"
                src="/main-assets/images/clients/4.png"
                alt="client"
              />
            </div>
            {/* .client end */}
            {/* Client #5 */}
            <div className="col-xs-12 col-sm-6 col-md-2 client">
              <img
                className="center-block"
                src="/main-assets/images/clients/5.png"
                alt="client"
              />
            </div>
            {/* .client end */}
            {/* Client #6 */}
            <div className="col-xs-12 col-sm-6 col-md-2 client">
              <img
                className="center-block"
                src="/main-assets/images/clients/6.png"
                alt="client"
              />
            </div>
            {/* .client end */}
          </div>
          {/* .row-clients end */}
        </div>
        {/* .container end */}
      </section>
      {/* #clients1 end */}
      {/* Testimonial #1
============================================= */}
      <section id="testimonial1" className="testimonial testimonial-1 pt-90">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
              <div
                id="testimonial-wide"
                className="carousel carousel-navs"
                data-slide={1}
                data-slide-rs={1}
                data-autoplay="false"
                data-nav="true"
                data-dots="false"
                data-space={0}
                data-loop="true"
                data-speed={800}
              >
                {/* Testimonial #1 */}
                <div className="testimonial-panel">
                  <div className="testimonial--icon" />
                  {/* .testimonial-icon end */}
                  <div className="testimonial--body">
                    <p>
                      “Highly recommended &amp; a great experience. The process
                      was simple and easy to understand. Trading was straight
                      forward, supports all major cryptocurrencies and the
                      entire process was super smooth!”
                    </p>
                  </div>
                  {/* .testimonial-body end */}
                  <div className="testimonial--meta">
                    <div className="testimonial--meta-img">
                      <img
                        src="/main-assets/images/testimonial/2.png"
                        alt="Testimonial Author"
                      />
                    </div>
                    <h4>Mahmoud Baghagho</h4>
                    <p>7oroof Agency</p>
                  </div>
                  {/* .testimonial-meta end */}
                </div>
                {/* .testimonial-panel end */}
                {/* Testimonial #2 */}
                <div className="testimonial-panel">
                  <div className="testimonial--icon" />
                  {/* .testimonial-icon end */}
                  <div className="testimonial--body">
                    <p>
                      “Highly recommended &amp; a great experience. The process
                      was simple and easy to understand. Trading was straight
                      forward, supports all major cryptocurrencies and the
                      entire process was super smooth!”
                    </p>
                  </div>
                  {/* .testimonial-body end */}
                  <div className="testimonial--meta">
                    <div className="testimonial--meta-img">
                      <img
                        src="/main-assets/images/testimonial/1.png"
                        alt="Testimonial Author"
                      />
                    </div>
                    <h4>ayman fikry</h4>
                    <p>zytheme</p>
                  </div>
                  {/* .testimonial-meta end */}
                </div>
                {/* .testimonial-panel end */}
                {/* Testimonial #3 */}
                <div className="testimonial-panel">
                  <div className="testimonial--icon" />
                  {/* .testimonial-icon end */}
                  <div className="testimonial--body">
                    <p>
                      “Highly recommended &amp; a great experience. The process
                      was simple and easy to understand. Trading was straight
                      forward, supports all major cryptocurrencies and the
                      entire process was super smooth!”
                    </p>
                  </div>
                  {/* .testimonial-body end */}
                  <div className="testimonial--meta">
                    <div className="testimonial--meta-img">
                      <img
                        src="/main-assets/images/testimonial/3.png"
                        alt="Testimonial Author"
                      />
                    </div>
                    <h4>Fouad badawy</h4>
                    <p>Tie Labs Inc</p>
                  </div>
                  {/* .testimonial-meta end */}
                </div>
                {/* .testimonial-panel end */}
              </div>
            </div>
            {/* .col-md-12 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #testimonial1 end */}
    </>
  );
};

export default GetQuoteContents;
