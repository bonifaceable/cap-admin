import React from "react";

const PricingContents = () => {
  return (
    <>
      {/* Page Title #1
============================================= */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/17.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Awesome Pricing!</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">about</a>
                  </li>
                  <li className="active">Awesome Pricing!</li>
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
      {/* Pricing Table #1
============================================= */}
      <section id="pricing1" className="pricing pricing-1 pb-80">
        <div className="bg-section">
          <img src="/main-assets/images/background/9.jpg" alt="background" />
        </div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-1 text--center mb-70">
                <p className="heading--subtitle">Invest Now!</p>
                <h2 className="heading--title text-white">Our Pricing</h2>
                <p className="heading--desc text-white mb-0">
                  Invest now with us to earn every day and forever in your
                  wallet. We accept Investment from all over the world.
                </p>
              </div>
            </div>
            {/* .col-md-8 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div
                id="testimonial-wide"
                className="carousel carousel-navs mb-120"
                data-slide={3}
                data-slide-rs={1}
                data-autoplay="true"
                data-nav="true"
                data-dots="true"
                data-space={8}
                data-loop="true"
                data-speed={800}
              >
                {/* Pricing Packge #1
============================================= */}
                <div
                  className="price-table wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="pricing-panel">
                    {/*  Pricing heading  */}
                    <div className="pricing--heading text--center">
                      <div className="pricing--icon">
                        <img
                          src="/main-assets/images/icons/BitcoinIcon4.png"
                          alt="Bitcoin Icon"
                        />
                      </div>
                      <h4>Starter Crypto Plan</h4>
                      <p>
                        15<span className="currency">%</span>
                      </p>
                      <div className="pricing--desc">
                        <h4>Short term 6 months/Long term 1 year.</h4>
                        Enjoy your investment with Bitcoin or Ethereum growing
                        every day.
                      </div>
                      <a
                        className="btn btn--secondary btn--bordered btn--rounded mb-6"
                        href="#"
                      >
                        Invest Now
                      </a>
                      <div className="pricing--footer mt-10">
                        From $1000 to $3000
                      </div>
                      {/*  Pricing Footer  */}
                    </div>
                    {/*  Pricing heading  */}
                  </div>
                </div>
                {/* .pricing-table End */}
                {/* Pricing Packge #2
============================================= */}
                <div
                  className="price-table pricing-active wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="pricing-panel">
                    {/*  Pricing heading  */}
                    <div className="pricing--heading text--center">
                      <div className="pricing--icon">
                        <img
                          src="/main-assets/images/icons/BitcoinIcon5.png"
                          alt="Bitcoin Icon"
                        />
                      </div>
                      <h4>Standard Crypto Plan</h4>
                      <p>
                        20<span className="currency">%</span>
                      </p>
                      <div className="pricing--desc">
                        <h4>Short term 6 months/Long term 1 year.</h4>
                        Enjoy your investment with Bitcoin or Ethereum growing
                        every day.
                      </div>
                      <a
                        className="btn btn--white btn--bordered btn--rounded"
                        href="#"
                      >
                        Invest Now
                      </a>
                      <div className="pricing--footer mt-10">
                        From $3000 to $7000
                      </div>
                      {/*  Pricing Footer  */}
                    </div>
                    {/*  Pricing heading  */}
                  </div>
                </div>
                {/* .pricing-table End */}
                {/* Pricing Packge #1
============================================= */}
                <div
                  className="price-table wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="pricing-panel">
                    {/*  Pricing heading  */}
                    <div className="pricing--heading text--center">
                      <div className="pricing--icon">
                        <img
                          src="/main-assets/images/icons/BitcoinIcon4.png"
                          alt="Bitcoin Icon"
                        />
                      </div>
                      <h4>Premium Crypto Plan</h4>
                      <p>
                        25<span className="currency">%</span>
                      </p>
                      <div className="pricing--desc">
                        <h4>Short term 6 months/Long term 1 year.</h4>
                        Enjoy your investment with Bitcoin or Ethereum growing
                        every day.
                      </div>
                      <a
                        className="btn btn--secondary btn--bordered btn--rounded"
                        href="#"
                      >
                        Invest Now
                      </a>
                      <div className="pricing--footer mt-10">
                        From $7000 to $15000
                      </div>
                      {/*  Pricing Footer  */}
                    </div>
                    {/*  Pricing heading  */}
                  </div>
                </div>
                {/* .pricing-table End */}
                {/* Pricing Packge #1
============================================= */}
                <div
                  className="price-table wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="pricing-panel">
                    {/*  Pricing heading  */}
                    <div className="pricing--heading text--center">
                      <div className="pricing--icon">
                        <img
                          src="/main-assets/images/icons/BitcoinIcon4.png"
                          alt="Bitcoin Icon"
                        />
                      </div>
                      <h4>Gold Crypto Plan</h4>
                      <p>
                        30.9<span className="currency">%</span>
                      </p>
                      <div className="pricing--desc">
                        <h4>Short term 6 months/Long term 1 year.</h4>
                        Enjoy your investment with Bitcoin or Ethereum growing
                        every day.
                      </div>
                      <a
                        className="btn btn--secondary btn--bordered btn--rounded"
                        href="#"
                      >
                        Invest Now
                      </a>
                      <div className="pricing--footer">
                        From $15000 to $50000
                      </div>
                      {/*  Pricing Footer  */}
                    </div>
                    {/*  Pricing heading  */}
                  </div>
                </div>
                {/* .pricing-table End */}
                {/* Pricing Packge #1
============================================= */}
                <div
                  className="price-table wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="pricing-panel">
                    {/*  Pricing heading  */}
                    <div className="pricing--heading text--center">
                      <div className="pricing--icon">
                        <img
                          src="/main-assets/images/icons/BitcoinIcon4.png"
                          alt="Bitcoin Icon"
                        />
                      </div>
                      <h4>Advance Crypto Plan</h4>
                      <p>
                        40<span className="currency">%</span>
                      </p>
                      <div className="pricing--desc">
                        <h4>Short term 6 months/Long term 1 year.</h4>
                        Enjoy your investment with Bitcoin or Ethereum growing
                        every day.
                      </div>
                      <a
                        className="btn btn--secondary btn--bordered btn--rounded"
                        href="#"
                      >
                        Invest Now
                      </a>
                      <div className="pricing--footer">
                        From $50000 to Unlimited
                      </div>
                      {/*  Pricing Footer  */}
                    </div>
                    {/*  Pricing heading  */}
                  </div>
                </div>
                {/* .pricing-table End */}
              </div>
            </div>
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #pricing1 end */}
      {/* Info Cards
============================================= */}
      <section id="infoCards" className="info-cards">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="info-card">
                <div className="info-card-step">01.</div>
                <div className="info-card-content">
                  <h4 className="info-card-subtitle">We are helpers</h4>
                  <h3 className="info-card-title">Advice and guides</h3>
                  <p className="info-card-desc">
                    Taking the time to manage your money better can really pay
                    off. It can help you stay on top of your bills and save
                    £1,000s each year.
                  </p>
                  <a className="info-card-links" href="#">
                    <i className="fa fa-plus" />
                    Read More
                  </a>
                </div>
              </div>
              {/* .info-card end */}
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="info-card">
                <div className="info-card-step">02.</div>
                <div className="info-card-content">
                  <h4 className="info-card-subtitle">Quick &amp; smart</h4>
                  <h3 className="info-card-title">Tools and calculators</h3>
                  <p className="info-card-desc">
                    Use our Budget planner to keep on top of your spending, use
                    our tool to work out what you have left after paying your
                    most important bills.
                  </p>
                  <a className="info-card-links" href="#">
                    <i className="fa fa-plus" />
                    Read More
                  </a>
                </div>
              </div>
              {/* .info-card end */}
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="info-card">
                <div className="info-card-step">03.</div>
                <div className="info-card-content">
                  <h4 className="info-card-subtitle">Friendly support</h4>
                  <h3 className="info-card-title">Support in person</h3>
                  <p className="info-card-desc">
                    Support in person, over the phone and online. Web chat is
                    available from 8am to 8pm or you can give us a call for free
                    and impartial money advice.
                  </p>
                  <a className="info-card-links" href="#">
                    <i className="fa fa-plus" />
                    Read More
                  </a>
                </div>
              </div>
              {/* .info-card end */}
            </div>
            {/* .col-md-4 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #infoCards end */}
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

export default PricingContents;
