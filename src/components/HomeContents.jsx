import React from "react";
import CryptoHistoricalPriceChart from "./Widgets/CryptoHistoricalPriceChart";
import BitcoinChart from "./Widgets/BitCoinChart";
import CryptoPriceChart from "./Widgets/CryptoPieChart";
import CryptoMarketCapChart from "./Widgets/CryptoMarketCapChart";
import CryptoCompareWidget from "./Widgets/CompareWidget";
import CryptoVolumeChart from "./Widgets/CryptoVolumeChart";
import EthereumPriceChart from "./Widgets/EthereumPriceChart";
import LiveCryptoChart from "./Widgets/LiveCryptoChart";
import CryptoConverter from "./Widgets/CryptoConverter";

const HomeContents = () => {
  return (
    <>
      {/* Featured #2  */}
      <section id="featured2" className="featured featured-2 text-center pb-50">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-4 mb-50 text--center">
                <p className="heading--subtitle">What We Do</p>
                <h2 className="heading--title">Our Services</h2>
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
            {/* Feature Card #1 */}
            <div
              className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-aos="zoom-in"
            >
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
            <div
              className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-aos="fade-up"
            >
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
            <div
              className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp"
              data-wow-delay="300ms"
              data-aos="fade-up"
            >
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
            <div
              className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-aos="fade-up"
            >
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
            <div
              className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-aos="fade-up"
            >
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
            <div
              className="col-xs-12 col-sm-12 col-md-4 wow fadeInUp"
              data-wow-delay="300ms"
              data-aos="fade-up"
            >
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
      {/* Bitcoin Price Chart Widget */}
      <section id="BitcoinWidget" className="xchange-rate">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-3 text-left mb-40">
                <h2 className="heading--title">
                  Live Charts, Xchange Rate and Convertor
                </h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <LiveCryptoChart />
              <pre>class="bitcoin-pricing"</pre>
              <div className="bitcoin-pricing" />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-12 col-md-8">
              <CryptoConverter />
              <pre>class="btcwdgt-chart" bw-theme="light"</pre>
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
      {/* Bitcoin Price Chart Widget*/}
      <section id="BitcoinWidget" className="xchange-rate bg-gray">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-3 text-left mb-40">
                <h2 className="heading--title">Bitcoin Price Chart Widget</h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              {/* <div className="mb-40"> */}
              <CryptoCompareWidget />
              {/* <CryptoMarketCapChart /> */}
              {/* <pre>class="btcwdgt-chart"</pre> */}
              <div className="btcwdgt-chart" />
              {/* </div> */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              {/* <EthereumPriceChart /> */}
              <CryptoPriceChart />
              {/* <pre>class="btcwdgt-chart" bw-theme="light"</pre> */}
              <div className="btcwdgt-chart" bw-theme="light" />
              {/* </div> */}
            </div>
          </div>
          {/* <div className="clearfix" /> */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3" data-aos="flip-right">
              {/* <pre>class="btcwdgt-price"</pre> */}
              {/* <EthereumPriceChart /> */}
              <div className="btcwdgt-price" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3" data-aos="flip-right">
              {/* <EthereumPriceChart /> */}
              {/* <pre>class="btcwdgt-price" bw-theme="light" bw-cur="eur"</pre> */}
              <div className="btcwdgt-price" bw-theme="light" bw-cur="eur" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3" data-aos="flip-right">
              <pre>class="btcwdgt-price" bw-cash="true"</pre>
              <div className="btcwdgt-price" bw-cash="true" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3" data-aos="flip-right">
              <pre>class="btcwdgt-price" bw-theme="light" bw-cur="jpy"</pre>
              <div className="btcwdgt-price" bw-theme="light" bw-cur="jpy" />
            </div>
          </div>
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinWidget end */}
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
      {/* Bitcoin Ecosystem
============================================= */}
      <section id="BitcoinEcosystem" className="bg-dark mb-70">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-4 mb-50 text--center">
                <p className="heading--subtitle text-theme">Realtime Charts</p>
                <h2 className="heading--title text-white">Bitcoin Ecosystem</h2>
                <p className="heading--desc mb-0">
                  Cryptocurrencies have become established investment
                  commodities, however as with any investment there are risks
                  linked to market movements!
                </p>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4" data-aos="zoom-in">
              <img
                className="img-responsive center-block mb-30"
                src="/main-assets/images/chart/chart2.png"
                alt="chart"
              />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4" data-aos="zoom-in">
              <img
                className="img-responsive center-block mb-30"
                src="/main-assets/images/chart/chart3.png"
                alt="chart"
              />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4" data-aos="zoom-in">
              <img
                className="img-responsive center-block mb-30"
                src="/main-assets/images/chart/chart4.png"
                alt="chart"
              />
            </div>
            {/* .col-md-4 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinEcosystem end */}
      {/* Video Button
============================================= */}
      <section id="video" className="video-button pb-0">
        <div className="bg-section">
          <img src="/main-assets/images/background/10.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
              <div className="heading heading-5 mb-120 text--center">
                <p className="heading--subtitle">
                  Profitable And Successful Investments
                </p>
                <h2 className="heading--title text-white">
                  Internal Accounting, Sales Data &amp; Market Economic
                  Indicators
                </h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="video--content text-center">
                <div className="bg-section">
                  {/* <img src="/main-assets/images/video/3.jpg" alt="Background" /> */}
                </div>
                <div className="video--button">
                  <div className="video-overlay">
                    <iframe
                      width="100%"
                      height={588}
                      src="https://www.youtube.com/embed/SSo_EIwHSd4?si=0VJDdOGuftIjKKeI"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="pos-vertical-center">
                      <a
                        className="popup-video"
                        href="https://www.youtube.com/watch?si=FJSA8LGaIl3VFJAE&v=SzAuB2FG79A&feature=youtu.be"
                      >
                        <span className="btn--animation" />
                        <i className="fa fa-play" />
                        <div>Watch Our Video!</div>
                      </a>
                    </div>
                  </div>
                  {/* .video-player end */}
                </div>
              </div>
              {/* .video-content end */}
            </div>
            {/* .col-md-12 end */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </section>
      {/* #video end */}
      {/* Info Cards
============================================= */}
      <section id="infoCards" className="info-cards bg-gray pt-70">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4" data-aos="flip-right">
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
            <div className="col-xs-12 col-sm-4 col-md-4" data-aos="flip-right">
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
            <div className="col-xs-12 col-sm-4 col-md-4" data-aos="flip-right">
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
      {/* Team #1
============================================= */}
      <section id="team1" className="team team-1 pb-50">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-4 mb-50 text--center">
                <p className="heading--subtitle">Our Experts</p>
                <h2 className="heading--title">Meet Our Team</h2>
                <p className="heading--desc mb-0">
                  We are professionals of Cryptocurrency management and strategy
                  planning, we value the experimentation and the smart
                  incentives.
                </p>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            {/* Member #1 */}
            <div
              className="col-xs-12 col-sm-4 col-md-4 wow fadeInUp"
              data-wow-delay="100ms"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <div className="member">
                <div className="member-img">
                  <img src="/main-assets/images/team/grid/1.jpg" alt="member" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                    <div className="member-info">
                      <h5>James Wane</h5>
                      <h6>Consultant</h6>
                    </div>
                    {/* .member-info end */}
                  </div>
                  {/* .memebr-ovelay end */}
                </div>
                {/* .member-img end */}
              </div>
              {/* .member end */}
            </div>
            {/* .col-md-4 end */}
            {/* Member #2 */}
            <div
              className="col-xs-12 col-sm-4 col-md-4 wow fadeInUp"
              data-wow-delay="200ms"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <div className="member">
                <div className="member-img">
                  <img src="/main-assets/images/team/grid/2.jpg" alt="member" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                    <div className="member-info">
                      <h5>John Tommy</h5>
                      <h6>Marketing</h6>
                    </div>
                    {/* .member-info end */}
                  </div>
                  {/* .memebr-ovelay end */}
                </div>
                {/* .member-img end */}
              </div>
              {/* .member end */}
            </div>
            {/* .col-md-4 end */}
            {/* Member #3 */}
            <div
              className="col-xs-12 col-sm-4 col-md-4 wow fadeInUp"
              data-wow-delay="300ms"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={1500}
            >
              <div className="member">
                <div className="member-img">
                  <img src="/main-assets/images/team/grid/3.jpg" alt="member" />
                  <div className="member-overlay">
                    <div className="member-social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </div>
                    <div className="member-info">
                      <h5>Marko Smith</h5>
                      <h6>Cheif Officer</h6>
                    </div>
                    {/* .member-info end */}
                  </div>
                  {/* .memebr-ovelay end */}
                </div>
                {/* .member-img end */}
              </div>
              {/* .member end */}
            </div>
            {/* .col-md-3 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #team1 end */}
      {/* Testimonial #1
============================================= */}
      <section
        id="testimonia1"
        className="testimonial testimonial-wide testimonial-1"
      >
        <div className="container">
          <p className="heading--subtitle text-center text-gold">
            We value your feedbacks!
          </p>
          <h2 className="heading--title text-center">Testimonies</h2>
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div
                id="testimonial-wide"
                className="carousel carousel-navs"
                data-slide={1}
                data-slide-rs={1}
                data-autoplay="true"
                data-nav="true"
                data-dots="true"
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
                      “Investing in the crypto platform was a game-changer! I
                      saw my investment grow significantly in a short time.
                      Couldn't be happier with the returns!”
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
                      “The crypto platform delivered beyond expectations!
                      Watching my investment soar has been an incredible
                      experience. Highly recommended!”
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
                      “I was skeptical at first, but investing in this crypto
                      platform turned out to be a smart decision. Seeing my
                      investment multiply feels amazing!”
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
      {/* Case 3 Column
============================================= */}
      <section
        id="case"
        className="case case-standard case-3col pt-90 pb-60 bg-gray"
      >
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-1 mb-50 text--center">
                <p className="heading--subtitle">Research Papers</p>
                <h2 className="heading--title">Case Studies</h2>
                <p className="heading--desc mb-0">
                  We monitor the spectrum of available cryptocurrencies and
                  alert our users to market moving events as and when it
                  happens.
                </p>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div
                className="carousel carousel-dots"
                data-slide={3}
                data-slide-rs={2}
                data-autoplay="false"
                data-nav="false"
                data-dots="true"
                data-space={30}
                data-loop="true"
                data-speed={1000}
              >
                {/* Case #1 */}
                <div className="case-item filter-Cryptocurrency">
                  <div className="case-item-container">
                    <div className="case--img">
                      <img
                        src="/main-assets/images/case/3col/1.jpg"
                        alt="case Item"
                      />
                      <div className="case--hover">
                        <div className="case--action">
                          <a href="#" title="case Item" />
                        </div>
                        {/* .case-action end */}
                      </div>
                      {/* .case-hover end */}
                    </div>
                    {/* .case-img end */}
                    <div className="case--content">
                      <div className="case--cat">
                        <a href="#">Cryptocurrency</a>
                      </div>
                      <div className="case--title">
                        <h4>
                          <a href="#">
                            Solving Real World Problems With Cryptocurrency
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* . case-item end */}
                {/* Case #2 */}
                <div className="case-item filter-Investment">
                  <div className="case-item-container">
                    <div className="case--img">
                      <img
                        src="/main-assets/images/case/3col/2.jpg"
                        alt="case Item"
                      />
                      <div className="case--hover">
                        <div className="case--action">
                          <a href="#" title="case Item" />
                        </div>
                        {/* .case-action end */}
                      </div>
                      {/* .case-hover end */}
                    </div>
                    {/* .case-img end */}
                    <div className="case--content">
                      <div className="case--cat">
                        <a href="#">Investment</a>
                      </div>
                      <div className="case--title">
                        <h4>
                          <a href="#">
                            33 Cases: Cryptocurrency Fraud Is on the Rise in
                            Japan
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* . case-item end */}
                {/* Case #3 */}
                <div className="case-item filter-Consulting">
                  <div className="case-item-container">
                    <div className="case--img">
                      <img
                        src="/main-assets/images/case/3col/3.jpg"
                        alt="case Item"
                      />
                      <div className="case--hover">
                        <div className="case--action">
                          <a href="#" title="case Item" />
                        </div>
                        {/* .case-action end */}
                      </div>
                      {/* .case-hover end */}
                    </div>
                    {/* .case-img end */}
                    <div className="case--content">
                      <div className="case--cat">
                        <a href="#">Consulting</a>
                      </div>
                      <div className="case--title">
                        <h4>
                          <a href="#">
                            Research Perspectives &amp; Challenges for
                            Cryptocurrencies Authors
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* . case-item end */}
                {/* Case #4 */}
                <div className="case-item filter-Investment">
                  <div className="case-item-container">
                    <div className="case--img">
                      <img
                        src="/main-assets/images/case/3col/4.jpg"
                        alt="case Item"
                      />
                      <div className="case--hover">
                        <div className="case--action">
                          <a href="#" title="case Item" />
                        </div>
                        {/* .case-action end */}
                      </div>
                      {/* .case-hover end */}
                    </div>
                    {/* .case-img end */}
                    <div className="case--content">
                      <div className="case--cat">
                        <a href="#">Investment</a>
                      </div>
                      <div className="case--title">
                        <h4>
                          <a href="#">
                            Ripple’s Giving the Third-Largest Cryptocurrency a
                            Second Look
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* . case-item end */}
                {/* Case #5 */}
                <div className="case-item filter-Bitcoin">
                  <div className="case-item-container">
                    <div className="case--img">
                      <img
                        src="/main-assets/images/case/3col/5.jpg"
                        alt="case Item"
                      />
                      <div className="case--hover">
                        <div className="case--action">
                          <a href="#" title="case Item" />
                        </div>
                        {/* .case-action end */}
                      </div>
                      {/* .case-hover end */}
                    </div>
                    {/* .case-img end */}
                    <div className="case--content">
                      <div className="case--cat">
                        <a href="#">Bitcoin</a>
                        <a href="#">Cryptocurrency</a>
                      </div>
                      <div className="case--title">
                        <h4>
                          <a href="#">
                            Bitcoin’s Price Surge is Making Hobby Mining
                            Profitable Again
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* . case-item end */}
                {/* Case #6 */}
                <div className="case-item filter-Mining">
                  <div className="case-item-container">
                    <div className="case--img">
                      <img
                        src="/main-assets/images/case/3col/6.jpg"
                        alt="case Item"
                      />
                      <div className="case--hover">
                        <div className="case--action">
                          <a href="#" title="case Item" />
                        </div>
                        {/* .case-action end */}
                      </div>
                      {/* .case-hover end */}
                    </div>
                    {/* .case-img end */}
                    <div className="case--content">
                      <div className="case--cat">
                        <a href="#">Mining</a>
                        <a href="#">Bitcoin</a>
                      </div>
                      <div className="case--title">
                        <h4>
                          <a href="#">
                            The Rise of the Avalon 721 Bitcoin ASIC Miner
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* . case-item end */}
              </div>
            </div>
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #case end */}
      <section id="contact1" className="contact contact-1 pt-90 pb-90">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-1 mb-50 text--center">
                <p className="heading--subtitle">Have A Question?</p>
                <h2 className="heading--title">Get in touch</h2>
                <p className="heading--desc mb-0">
                  We understand the importance of approaching each work
                  integrally and believe in the power of simple and easy
                  communication.
                </p>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div
              className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="row">
                <form className="mb-0">
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="contact-name"
                      id="contact-name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <input
                      type="email"
                      className="form-control"
                      name="contact-email"
                      id="contact-email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="contact-phone"
                      id="contact-Phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-12">
                    <textarea
                      className="form-control"
                      name="contact-message"
                      id="contact-message"
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
      {/* our partners */}
      <section id="clients1" className="clients clients-1 bg-gray">
        <div className="container">
          <div className="heading heading-1 mb-50 text--center">
            <p className="heading--subtitle">Our partners?</p>
            <h2 className="heading--title">Powered by Strategic Alliances</h2>
            <p className="heading--desc mb-0">
              Our success is fortified by strong partnerships with industry
              leaders, financial experts, and cutting-edge technology providers.
              Together, we navigate the complex world of Bitcoin investments,
              ensuring security, transparency, and unparalleled growth for our
              valued clients.
            </p>
          </div>
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
      {/* our partners */}
      {/* our company */}
      <section>
        <div className="container">
          <div className="row">
            <div className="company__col col-xs-12 col-sm-6 col-md-6">
              <h5 style={{ textTransform: "uppercase" }} className="uppercase">
                Officially registered company
              </h5>
              <div className="typography">
                <blockquote>OFFICIAL LICENSE</blockquote>
                <p>
                  is registered and has official permission for investment and
                  trading activities. The services of our company are available
                  to every investor from anywhere in the world.
                </p>
              </div>
              <h2 className="heading--title text-center">Records</h2>
              <div class="widget widget-download">
                <div class="widget-content">
                  <a href="#" className="">
                    <div className="row justify-content-between">
                      <div className="col-xs-6 col-sm-6 col-md-6">
                        Days in Work <br />
                        <h6>900</h6>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 mx-10">
                        Total members <br />
                        <h6>89650</h6>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 mx-10">
                        Total Invested <br />
                        <h6>
                          338400989 <sub>USD</sub>
                        </h6>
                      </div>
                      <div className="col-xs-6 col-sm-6 col-md-6 mx-10">
                        Total Paid <br />
                        <h6>
                          101689885<sub>USD</sub>
                        </h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 client">
              <img
                style={{ width: "100%" }}
                src="/main-assets/images/company/certt.png"
                alt
              />
            </div>
          </div>
        </div>
      </section>
      {/* our company end */}
    </>
  );
};

export default HomeContents;
