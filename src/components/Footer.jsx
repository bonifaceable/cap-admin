import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer footer-1">
      {/* Copyrights
	============================================= */}
      {/* Widget Section
	============================================= */}
      <div className="footer-widget">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-4 col-md-3 footer--widget widget-about">
              <div className="widget-content">
                <img
                  className="footer-logo"
                  src="/main-assets/images/logo/logo-light.png"
                  alt="logo"
                />
                <p>
                  Exchange Cryptocurrency at the Best Rate by getting the best
                  offer from all the exchanges at one place.
                </p>
                <div className="copyright">
                  <span>© 2018, With Love by</span>
                  <a href="#">https://cryptech.wize-tread.com</a>
                </div>
              </div>
            </div>
            {/* .col-md-3 end */}
            <div className="col-xs-12 col-sm-4 col-md-2 footer--widget widget-links">
              <div className="widget-title">
                <h5>Company</h5>
              </div>
              <div className="widget-content">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Meet Our Team</a>
                  </li>
                  <li>
                    <a href="#">How It Works</a>
                  </li>
                  <li>
                    <a href="#">Latest News</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col-md-2 end */}
            <div className="col-xs-12 col-sm-4 col-md-2 footer--widget widget-links">
              <div className="widget-title">
                <h5>Help &amp; Support</h5>
              </div>
              <div className="widget-content">
                <ul>
                  <li>
                    <a href="#">Exchange Rates</a>
                  </li>
                  <li>
                    <a href="#">Supported Currencies</a>
                  </li>
                  <li>
                    <a href="#">Asset Introduction</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                  <li>
                    <a href="#">Developer Tools</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; Wiki</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col-md-2 end */}
            <div className="col-xs-12 col-sm-4 col-md-2 footer--widget widget-links">
              <div className="widget-title">
                <h5>How To</h5>
              </div>
              <div className="widget-content">
                <ul>
                  <li>
                    <a href="#">Buy Bitcoin</a>
                  </li>
                  <li>
                    <a href="#">Buy Bitcoin Cash</a>
                  </li>
                  <li>
                    <a href="#">Buy Ethereum</a>
                  </li>
                  <li>
                    <a href="#">Buy Litecoin</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* .col-md-2 end */}
            <div className="col-xs-12 col-sm-4 col-md-3 footer--widget widget-newsletter">
              <div className="widget-title">
                <h5>Stay Updated</h5>
              </div>
              <div className="widget-content">
                <form className="form-newsletter mailchimp">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Subscribe Our Newsletter"
                  />
                  <button type="submit">
                    <i className="fa fa-long-arrow-right" />
                  </button>
                </form>
                <div className="subscribe-alert" />
                <div className="clearfix" />
                <p>Get the latest updates and offers.</p>
                <div className="footer-social-icon">
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook" />
                    <i className="fa fa-facebook" />
                  </a>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                    <i className="fa fa-twitter" />
                  </a>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram" />
                    <i className="fa fa-instagram" />
                  </a>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin" />
                    <i className="fa fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            {/* .col-md-3 end */}
            <div className="clearfix" />
          </div>
        </div>
        {/* .container end */}
      </div>
      {/* .footer-widget end */}
      {/* Copyrights
	============================================= */}
      <div className="footer--bar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 text--center footer--copyright">
              <div className="payment--methods text--center">
                <a href="#" title="Visa">
                  <img src="/main-assets/images/footer/visa.png" alt="Visa" />
                </a>
                <a href="#" title="Mastercard">
                  <img
                    src="/main-assets/images/footer/mastercard.png"
                    alt="Mastercard"
                  />
                </a>
                <a href="#" title="amex">
                  <img src="/main-assets/images/footer/amex.png" alt="amex" />
                </a>
                <a href="#" title="Delta">
                  <img src="/main-assets/images/footer/delta.png" alt="Delta" />
                </a>
                <a href="#" title="Cirrus">
                  <img
                    src="/main-assets/images/footer/cirrus.png"
                    alt="Cirrus"
                  />
                </a>
                <a href="#" title="Paypal">
                  <img
                    src="/main-assets/images/footer/paypal.png"
                    alt="Paypal"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* .container end */}
      </div>
      {/* .footer-copyright end */}
    </footer>
  );
};

export default Footer;
