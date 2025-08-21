import React from "react";
import CryptoCompareWidget from "./Widgets/CompareWidget";
import CryptoPriceChart from "./Widgets/CryptoPieChart";

const ExchangeRateContent = () => {
  return (
    <>
      {/* Page Title #1 */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/18.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Exchange Rates</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">services</a>
                  </li>
                  <li className="active">Exchange Rates</li>
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
      {/* Bitcoin Price Chart Widget
============================================= */}
      <section id="BitcoinWidget" className="xchange-rate">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-1 mb-50 text--center">
                <p className="heading--subtitle">Top Cryptos</p>
                <h2 className="heading--title">Exchange Rates</h2>
                <p className="heading--desc mb-0">
                  Bitcoin is different than any currency you’ve used before, so
                  it’s very important to understand some key points.
                </p>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              {/* <CryptoCompareWidget /> */}
              <CryptoPriceChart />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-12 col-md-8">
              <div className="btcwdgt-custom">
                <div className="btcwdgt-chart" bw-theme="light" />
              </div>
            </div>
            {/* .col-md-8 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinWidget end */}
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
      {/* CTA #1
============================================= */}
      <section id="cta1" className="cta cta-1">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9">
              <h3>Take Your First Steps to Becoming a Bitcoiner Today!</h3>
            </div>
            {/* .col-md-9 */}
            <div className="col-xs-12 col-sm-12 col-md-3 text-right">
              <a href="#" className="btn btn--white btn--bordered btn--rounded">
                Get Started
              </a>
            </div>
            {/* .col-md-3 */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </section>
      {/* #cta1 end */}
    </>
  );
};

export default ExchangeRateContent;
