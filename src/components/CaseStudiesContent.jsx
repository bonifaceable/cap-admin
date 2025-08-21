import React from "react";

const CaseStudiesContent = () => {
  return (
    <>
      {/* Page Title #1
============================================= */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/12.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Case Studies</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active">Case Studies</li>
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
      {/* Case 3 Column
============================================= */}
      <section
        id="case"
        className="case case-standard case-3col pt-90 pb-60 bg-gray"
      >
        <div className="container">
          <div className="row">
            {/* Case Filter
			============================================= */}
            <div className="col-xs-12 col-sm-12 col-md-12 case-filter">
              <ul className="list-inline mb-0">
                <li>
                  <a className="active-filter" href="#" data-filter="*">
                    ALL
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".filter-Cryptocurrency">
                    Cryptocurrency
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".filter-Investment">
                    Investment
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".filter-Consulting">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".filter-Mining">
                    Mining
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".filter-Bitcoin">
                    Bitcoin
                  </a>
                </li>
              </ul>
            </div>
            {/* .case-filter end */}
          </div>
          <div id="case-all" className="row">
            {/* Case #1 */}
            <div className="col-xs-12 col-sm-6 col-md-4 case-item filter-Cryptocurrency">
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
            <div className="col-xs-12 col-sm-6 col-md-4 case-item filter-Investment">
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
                        33 Cases: Cryptocurrency Fraud Is on the Rise in Japan
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* . case-item end */}
            {/* Case #3 */}
            <div className="col-xs-12 col-sm-6 col-md-4 case-item filter-Consulting">
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
            <div className="col-xs-12 col-sm-6 col-md-4 case-item filter-Investment">
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
            <div className="col-xs-12 col-sm-6 col-md-4 case-item filter-Bitcoin">
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
                        Bitcoin’s Price Surge is Making Hobby Mining Profitable
                        Again
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* . case-item end */}
            {/* Case #6 */}
            <div className="col-xs-12 col-sm-6 col-md-4 case-item filter-Mining">
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
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #case end */}
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

export default CaseStudiesContent;
