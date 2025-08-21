"use client"
import React from "react";
// import Script from "next/script";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlansComponent = ({ purchase }) => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    // autoplaySpeed: 1000,
    // cssEase: "linear",
    swipeToSlide: true,
    centerPadding: "60px",
    className: "center",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
          centerPadding: "60px",
          className: "center",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
          centerPadding: "60px",
          className: "center",
        }
      }
    ]
  };
  return (
    <>
      <section className="pricing pricing-1 pb-80 p-80">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-1 text--center mb-70">
                <p className="heading--subtitle">Invest Now!</p>
                <h1 className="fw-bold mb-3">Keep Investing</h1>
                <p>
                  Every four years, the bitcoin rewards are slashed in half.
                  Find out why on the Halving page.
                </p>
              </div>
            </div>
            {/* .col-md-8 end */}
          </div>
          {/* container */}
          <div className="container content-inner pb-0">
            {/* .row end */}
            <div className="row">
              <div
                className="col-xs-12 col-sm-10 p-10 wow fadeInUp"
                data-wow-delay="100ms"
              >
                <Slider {...settings}
                  id="testimonial-wide"
                  className="row d-flex justify-content-between"
                >
                  <div className="col-lg-4 mx-3">
                    {/* Pricing Packge #1
============================================= */}
                    <div className="card">
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
                                style={{ width: "70px" }}
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
                              onClick={purchase}
                              href="javascript:void(0)"
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#investmentModal"
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
                    </div>

                    {/* .pricing-table End */}
                  </div>

                  <div className="col-lg-4 mx-3ß">
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
                              style={{ width: "70px" }}
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
                            href="javascript:void(0)"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#investmentModal"
                            onClick={purchase}
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
                  </div>

                  <div className="col-lg-4 mx-3">
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
                              style={{ width: "70px" }}
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
                            href="javascript:void(0)"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#investmentModal"
                            onClick={purchase}
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
                  </div>
                  <div className="col-lg-4 mx-3">
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
                              style={{ width: "70px" }}
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
                            href="javascript:void(0)"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#investmentModal"
                            onClick={purchase}
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
                  </div>

                  <div className="col-lg-4 mx-3">
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
                              style={{ width: "70px" }}
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
                            href="javascript:void(0)"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#investmentModal"
                            onClick={purchase}
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

                </Slider>
              </div>
            </div>
            {/* .row end */}
          </div>

        </div>
        {/* .container end */}
      </section>
    </>

  );
};

export default PlansComponent;
