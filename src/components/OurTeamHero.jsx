import React from "react";

const OurTeamHero = () => {
  return (
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
                <h1>Our Team</h1>
              </div>
              <div className="clearfix" />
              <ol className="breadcrumb">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="index.html">about</a>
                </li>
                <li className="active">Our Team</li>
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
  );
};

export default OurTeamHero;
