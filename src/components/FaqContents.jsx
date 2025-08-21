import React from "react";

const FaqContents = () => {
  return (
    <>
      {/* Page Title #6
============================================= */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="assets/images/page-titles/1.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Frequently Asked Questions</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">about</a>
                  </li>
                  <li className="active">FAQs</li>
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
      {/* Accordion #1
============================================= */}
      <section id="faqs" className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              {/* Categories
============================================= */}
              <div className="widget widget-categories">
                <div className="widget-content">
                  <ul className="list-unstyled">
                    <li className="active">
                      <a href="#">All services</a>
                    </li>
                    <li>
                      <a href="#">Protection &amp; Security</a>
                    </li>
                    <li>
                      <a href="#">Licensed Exchange</a>
                    </li>
                    <li>
                      <a href="#">Recurring Buys</a>
                    </li>
                    <li>
                      <a href="#">Unlimited Free Transfers</a>
                    </li>
                    <li>
                      <a href="#">Multi Currency Accounts</a>
                    </li>
                    <li>
                      <a href="#">Blockchain Smart Contracts</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Info
============================================= */}
              <div className="widget widget-info">
                <div className="widget--content">
                  <div className="info--title">Brochures</div>
                  <div className="info--content">
                    You can view or download our brochures containing all our
                    works &amp; Events.
                  </div>
                  <a className="btn btn--primary btn--rounded" href="#">
                    Download PDF
                  </a>
                </div>
              </div>
              {/* .widget-info end */}
            </div>
            {/* .col-md-3 end */}
            <div className="col-xs-12 col-sm-12 col-md-9">
              <div className="accordion accordion-1" id="accordion01">
                {/* Panel 01 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-1"
                    >
                      What is Bitcoin?
                    </a>
                  </div>
                  <div
                    id="collapse01-1"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 02 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-2"
                    >
                      Can the rates change during the transaction?
                    </a>
                  </div>
                  <div
                    id="collapse01-2"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 03 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-3"
                    >
                      What is our transaction fees?
                    </a>
                  </div>
                  <div
                    id="collapse01-3"
                    className="panel--body panel-collapse collapse in"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 04 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-4"
                    >
                      How do I get a wallet address?
                    </a>
                  </div>
                  <div
                    id="collapse01-4"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 05 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-5"
                    >
                      What's the recipient’s address?
                    </a>
                  </div>
                  <div
                    id="collapse01-5"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 06 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion06"
                      href="#collapse01-6"
                    >
                      Why is my wallet address recognized as invalid?
                    </a>
                  </div>
                  <div
                    id="collapse01-6"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 07 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-7"
                    >
                      What is the minimum/maximum amount?
                    </a>
                  </div>
                  <div
                    id="collapse01-7"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 08 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-8"
                    >
                      When should I receive my money?
                    </a>
                  </div>
                  <div
                    id="collapse01-8"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 09 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-9"
                    >
                      How do I cancel my transaction?
                    </a>
                  </div>
                  <div
                    id="collapse01-9"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 10 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-10"
                    >
                      Why does my transaction take so long?
                    </a>
                  </div>
                  <div
                    id="collapse01-10"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 11 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-11"
                    >
                      What will happen if I close the browser tab?
                    </a>
                  </div>
                  <div
                    id="collapse01-11"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 12 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-12"
                    >
                      Why blockchain verification is taking long?
                    </a>
                  </div>
                  <div
                    id="collapse01-12"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 13 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-13"
                    >
                      Sent funds to the wrong address. Can I recover my funds?
                    </a>
                  </div>
                  <div
                    id="collapse01-13"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
                {/* Panel 14 */}
                <div className="panel">
                  <div className="panel--heading">
                    <a
                      className="accordion-toggle collapsed"
                      data-toggle="collapse"
                      data-parent="#accordion01"
                      href="#collapse01-14"
                    >
                      Why is my transaction still waiting for payment if I've
                      already paid?
                    </a>
                  </div>
                  <div
                    id="collapse01-14"
                    className="panel--body panel-collapse collapse"
                  >
                    Trends, vision dominates a lot of our subconscious
                    interpretation of the world around us. On top it, pleasing
                    images create a better user experience. Rounding up a bunch
                    of specific designs.Trends, vision dominates a lot of our
                    subconscious interpretation of the world around us.
                  </div>
                </div>
              </div>
              {/* End .Accordion*/}
            </div>
            {/* .col-md-9 end */}
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
    </>
  );
};

export default FaqContents;
