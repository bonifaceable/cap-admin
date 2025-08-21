import React from "react";

const MarketDataContents = () => {
  return (
    <>
      {/* Page Title
============================================= */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/6.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Market Data</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="index.html">services</a>
                  </li>
                  <li className="active">Market Data</li>
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
              <pre>class="bitcoin-pricing"</pre>
              <div className="bitcoin-pricing" />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-12 col-md-8">
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
      {/* Bitcoin Price Chart Widget
============================================= */}
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
              <div className="mb-40">
                <pre>class="btcwdgt-chart"</pre>
                <div className="btcwdgt-chart" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="mb-40">
                <pre>class="btcwdgt-chart" bw-theme="light"</pre>
                <div className="btcwdgt-chart" bw-theme="light" />
              </div>
            </div>
          </div>
          <div className="clearfix" />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <pre>class="btcwdgt-price"</pre>
              <div className="btcwdgt-price" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <pre>class="btcwdgt-price" bw-theme="light" bw-cur="eur"</pre>
              <div className="btcwdgt-price" bw-theme="light" bw-cur="eur" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <pre>class="btcwdgt-price" bw-cash="true"</pre>
              <div className="btcwdgt-price" bw-cash="true" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <pre>class="btcwdgt-price" bw-theme="light" bw-cur="jpy"</pre>
              <div className="btcwdgt-price" bw-theme="light" bw-cur="jpy" />
            </div>
          </div>
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinWidget end */}
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
            <div className="col-xs-12 col-sm-4 col-md-4">
              <img
                className="img-responsive center-block mb-30"
                src="/main-assets/images/chart/chart2.png"
                alt="chart"
              />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <img
                className="img-responsive center-block mb-30"
                src="/main-assets/images/chart/chart3.png"
                alt="chart"
              />
            </div>
            {/* .col-md-4 end */}
            <div className="col-xs-12 col-sm-4 col-md-4">
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
      {/* Bitcoin Tracker Dark
============================================= */}
      <section
        id="BitcoinTrakerDark"
        className="bitcoin-tracker-dark pt-50 pb-50"
      >
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <pre>class="topbarBitcoinTracker"</pre>
            </div>
          </div>
        </div>
        {/* .container end */}
        <div className="container-fluid pr-0 pl-0">
          <div className="row clearfix">
            <div className="topbarBitcoinTracker" />
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinTrakerDark end */}
      {/* Bitcoin Tracker Theme
============================================= */}
      <section id="BitcoinTrakerTheme" className="bitcoin-tracker-theme pt-0">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <pre>class="topbarBitcoinTrackerTheme"</pre>
            </div>
          </div>
        </div>
        {/* .container end */}
        <div className="container-fluid pr-0 pl-0">
          <div className="row clearfix">
            <div className="topbarBitcoinTrackerTheme" />
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinTrakerTheme end */}
      {/* Charts and Convertors
============================================= */}
      <section id="BitcoinConvertors" className="bitcoin-convertors bg-gray">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="heading heading-3 text-left mb-40">
                <h2 className="heading--title">Charts and Convertors</h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4">
              <pre>class="bitcoin-chart"</pre>
              <div className="bitcoin-chart" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <pre>class="bitcoin-calculator"</pre>
              <div className="bitcoin-calculator mt-40" />
              <div className="clearfix" />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
              <pre>class="bitcoin-converter"</pre>
              <div className="bitcoin-converter mt-40"></div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/* .container end */}
      </section>
      {/* #BitcoinConvertors end */}
    </>
  );
};

export default MarketDataContents;
