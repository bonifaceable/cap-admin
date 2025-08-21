import React from "react";

const AboutUsContents = () => {
  return (
    <>
      {/* Page Title #1
============================================= */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/5.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>About Us</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">about</a>
                  </li>
                  <li className="active">about us</li>
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
      {/* Featured #1
============================================= */}
      <section
        id="featured1"
        className="featured featured-1 bg-overlay bg-overlay-dark2 bg-parallax pb-0"
      >
        <div className="bg-section">
          <img src="/main-assets/images/background/1.jpg" alt="Background" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="featured-img">
                <img
                  src="/main-assets/images/mockups/laptop-mockup.png"
                  alt="Laptop Mockup"
                />
              </div>
            </div>
            {/* .col-md-5 end */}
            <div className="col-xs-12 col-sm-12 col-md-5">
              <div className="heading heading-6 mb-50">
                <h2 className="heading--title text-white">
                  Take Your First Steps to Becoming a Bitcoiner Today!
                </h2>
                <p className="heading--desc text-gray mb-20">
                  Now you can start trading Bitcoin, Ethereum and many
                  cryptocurrencies fast, easily and safely from where ever you
                  are. With great margin trading leverage and short sell options
                  available with quick deposit &amp; withdrawal capability, you
                  can start trading with us in seconds.
                </p>
                <p className="heading--desc text-gray">
                  Cryptocurrencies have become established investment
                  commodities among major financial institutions, and have even
                  been adopted by countries such as Australia and Japan.
                </p>
              </div>
              {/* .heading end */}
              <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <img
                        src="/main-assets/images/icons/BitcoinIcon1.png"
                        alt="Bitcoin Icon"
                      />
                    </div>
                    <div className="feature-card-content">
                      <h3 className="feature-card-title text-white">
                        Quick Deposits and Withdrawals
                      </h3>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 end */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <img
                        src="/main-assets/images/icons/BitcoinIcon2.png"
                        alt="Bitcoin Icon"
                      />
                    </div>
                    <div className="feature-card-content">
                      <h3 className="feature-card-title text-white">
                        Reliable and Smart Platform
                      </h3>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 end */}
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="feature-card">
                    <div className="feature-card-icon">
                      <img
                        src="/main-assets/images/icons/BitcoinIcon3.png"
                        alt="Bitcoin Icon"
                      />
                    </div>
                    <div className="feature-card-content">
                      <h3 className="feature-card-title text-white">
                        Long and Short Selling
                      </h3>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 end */}
              </div>
              {/* .row end */}
            </div>
            {/* .col-md-7 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #featured1 end */}
      {/* Featured #2
============================================= */}
      <section id="featured2" className="featured featured-2 pb-50">
        <div className="container">
          <div className="row">
            {/* Feature Card #1 */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <i className="icon-lock" />
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-card-title">
                    Protection &amp; Security
                  </h3>
                  <p className="feature-card-desc">
                    Stop loss and take profit orders will help secure your
                    investment. The system will automatically execute trades to
                    realise gains.
                  </p>
                </div>
              </div>
            </div>
            {/* .col-md-4 end */}
            {/* Feature Card #2 */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <i className="icon-search" />
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-card-title">Licensed Exchange</h3>
                  <p className="feature-card-desc">
                    Our customers perform transactions not only in
                    cryptocurrency, but the major world currencies supported by
                    the system.
                  </p>
                </div>
              </div>
            </div>
            {/* .col-md-4 end */}
            {/* Feature Card #3 */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <i className="icon-puzzle" />
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-card-title">Recurring Buys</h3>
                  <p className="feature-card-desc">
                    Invest in digital currency slowly over time by scheduling
                    buys weekly or monthly, allows a trader to profit from a
                    market move.
                  </p>
                </div>
              </div>
            </div>
            {/* .col-md-4 end */}
            {/* Feature Card #4 */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <i className="icon-recycle" />
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-card-title">
                    Unlimited Free Transfers
                  </h3>
                  <p className="feature-card-desc">
                    Send any currency to friends, family members or business
                    associates as many times as you want, 24 hours a day for
                    free.
                  </p>
                </div>
              </div>
            </div>
            {/* .col-md-4 end */}
            {/* Feature Card #5 */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <i className="icon-layers" />
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-card-title">
                    Multi Currency Accounts
                  </h3>
                  <p className="feature-card-desc">
                    Support major currencies: USD, EUR, GBP, and various
                    Cryptocurrencies. Funds exchanged between currencies at
                    market rate.
                  </p>
                </div>
              </div>
            </div>
            {/* .col-md-4 end */}
            {/* Feature Card #6 */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <i className="icon-documents" />
                </div>
                <div className="feature-card-content">
                  <h3 className="feature-card-title">
                    Blockchain Smart Contracts
                  </h3>
                  <p className="feature-card-desc">
                    The first thing to know about blockchain smart contracts is
                    they're not contracts, smart, nor necessarily on a
                    blockchain.
                  </p>
                </div>
              </div>
            </div>
            {/* .col-md-4 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #featured2 end */}
      {/* Consultation #1
============================================= */}
      <section id="consultation" className="consultation consultation-1 pb-0">
        <div className="bg-section">
          <img src="/main-assets/images/background/8.jpg" alt="Background" />
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
                        id="yourname"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4">
                      <input
                        type="email"
                        className="form-control"
                        name="consultater-email"
                        id="youremail"
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
      <section id="clients1" className="clients clients-1 bg-gray">
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
      {/* Blog Grid
======================================= */}
      <section id="blog" className="blog blog-grid pb-60">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-3 mb-50 text--center">
                <p className="heading--subtitle">Don’t Miss Latest</p>
                <h2 className="heading--title">News &amp; Headlines</h2>
                <p className="heading--desc mb-0">
                  Follow our latest news and thoughts which focuses exclusively
                  on investment strategy guide, blockchain tech, crypto-trading
                  and mining.
                </p>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          <div className="row">
            {/* Blog Entry #1 */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="blog-entry">
                <div className="entry--img">
                  <a href="#">
                    <img
                      src="/main-assets/images/blog/grid/1.jpg"
                      alt="entry image"
                    />
                    <div className="entry--overlay" />
                  </a>
                </div>
                <div className="entry--content">
                  <div className="entry--meta">
                    <a href="#">Crypto News</a>
                    <a href="#">Apps</a>
                  </div>
                  <div className="entry--title">
                    <h4>
                      <a href="#">
                        Blockchain-based Mobile Payments Service Developed by
                        Gates
                      </a>
                    </h4>
                  </div>
                  <div className="entry--bio">
                    The Bill and Melinda Gates Foundation are introducing an
                    open-source software to facilitate the creation of payment
                    platforms for developing economies...
                  </div>
                  <div className="entry--footer">
                    <div className="entry--date">Apr 14, 2018</div>
                  </div>
                </div>
                {/* .entry-content end */}
              </div>
              {/* .blog-entry end */}
            </div>
            {/* .col-md-4 end */}
            {/* Blog Entry #2 */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="blog-entry">
                <div className="entry--img">
                  <a href="#">
                    <img
                      src="/main-assets/images/blog/grid/2.jpg"
                      alt="entry image"
                    />
                    <div className="entry--overlay" />
                  </a>
                </div>
                <div className="entry--content">
                  <div className="entry--meta">
                    <a href="#">Cryptocurrency</a>
                    <a href="#">Tech</a>
                  </div>
                  <div className="entry--title">
                    <h4>
                      <a href="#">
                        Governments Throwing Resources at Blockchain Technology!
                      </a>
                    </h4>
                  </div>
                  <div className="entry--bio">
                    Despite the almost libertarian premise and a noble goal of
                    complete decentralization, realistically, blockchain
                    technology will not be able to avoid at least some level..
                  </div>
                  <div className="entry--footer">
                    <div className="entry--date">Apr 12, 2018</div>
                  </div>
                </div>
                {/* .entry-content end */}
              </div>
              {/* .blog-entry end */}
            </div>
            {/* .col-md-4 end */}
            {/* Blog Entry #3 */}
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="blog-entry">
                <div className="entry--img">
                  <a href="#">
                    <img
                      src="/main-assets/images/blog/grid/3.jpg"
                      alt="entry image"
                    />
                    <div className="entry--overlay" />
                  </a>
                </div>
                <div className="entry--content">
                  <div className="entry--meta">
                    <a href="#">Bitcoin</a>
                    <a href="#">Tech</a>
                  </div>
                  <div className="entry--title">
                    <h4>
                      <a href="#">
                        Southeast Asian Governments Embrace Blockchain
                        Technology
                      </a>
                    </h4>
                  </div>
                  <div className="entry--bio">
                    Hong Kong is embracing blockchain technology search for a
                    new business identity and opportunities. The city has a
                    household name in shipping and finance...
                  </div>
                  <div className="entry--footer">
                    <div className="entry--date">Apr 11, 2018</div>
                  </div>
                </div>
                {/* .entry-content end */}
              </div>
              {/* .blog-entry end */}
            </div>
            {/* .col-md-4 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #blog end */}
    </>
  );
};

export default AboutUsContents;
