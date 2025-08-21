import React from "react";

const NavBar = () => {
  return (
    <header
      id="navbar-spy"
      className="header header-1 header-transparent header-bordered header-fixed"
    >
      <nav id="primary-menu" className="navbar navbar-fixed-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="logo" href="/">
              <img
                className="logo-light"
                src="/main-assets/images/logo/logo-light.png"
                alt="Enrmous Logo"
              />
              <img
                className="logo-dark"
                src="/main-assets/images/logo/logo-dark.png"
                alt="Enrmous Logo"
              />
            </a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse pull-right"
            id="navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-left nav-pos-right">
              {/* Home Menu*/}
              <li className="active">
                <a href="/" className="dropdown-toggle menu-item">
                  Home
                </a>
              </li>
              {/* li end */}
              {/* our team start */}
              <li>
                <a href="/our-team">our team</a>
              </li>
              {/* our team end */}
              {/* how it works */}
              <li>
                <a href="/how-it-works">how it works</a>
              </li>
              {/* how it works end */}
              {/* contact */}
              <li>
                <a href="/contact">contact us</a>
              </li>
              {/* contact end */}
              {/* Services Menu*/}
              <li className="has-dropdown">
                <a
                  href="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle menu-item"
                >
                  services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/exchange-rates">exchanges rates</a>
                  </li>
                  <li>
                    <a href="/market-data">market data</a>
                  </li>
                  <li>
                    <a href="/pricing">pricing</a>
                  </li>
                </ul>
              </li>
              {/* li end */}
              {/* Studies Menu*/}
              <li className="has-dropdown">
                <a href="/case-studies" className="dropdown-toggle menu-item">
                  Case Studies
                </a>
              </li>
              {/* li end */}
              {/* Blog Menu*/}
              <li className="has-dropdown">
                <a href="/blog" className="dropdown-toggle menu-item">
                  Blog
                </a>
              </li>
              {/* li end */}
              {/* about us */}
              <li>
                <a href="/about-us">About US</a>
              </li>
              {/* about end */}
              {/* faq */}
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              {/* faq end */}
            </ul>
            {/* Module Consultation  */}
            <div className="module module-consultation pull-left">
              <a
                href="/get-quote"
                className="btn btn--primary btn--bordered btn--rounded"
              >
                get A Quote
              </a>
            </div>
            {/* Module Signup  */}
            <div className="module module-signup pull-left">
              <a className="btn-popup" href="/sign-up">
                Sign Up
              </a>
            </div>
          </div>

          {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
      </nav>
    </header>
  );
};

export default NavBar;
