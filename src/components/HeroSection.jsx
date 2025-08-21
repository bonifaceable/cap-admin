import React from "react";

const HeroSection = () => {
  return (
    <section id="slider" className="slider slide-overlay-black">
      {/* <!-- START REVOLUTION SLIDER 5.0 --> */}
      <div className="rev_slider_wrapper">
        <div id="slider1" className="rev_slider" data-version="5.0">
          <ul>
            {/* <!-- slide 1 --> */}
            <li
              data-transition="slidedown"
              data-slotamount="default"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed="2000"
            >
              {/* <!-- MAIN IMAGE --> */}
              <img
                src="/main-assets/images/sliders/slide-bg/7.jpg"
                alt="Slide Background Image"
                width="1920"
                height="1280"
              />
              {/* <!-- LAYER NR. 1 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-60','-60','-50','-20']"
                data-fontsize="['60', '50', '40', '30']"
                data-lineheight="['60','60','60','60']"
                data-whitespace="nowrap"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":750,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-responsive_offset="on"
              >
                <div className="slide--headline text-center">
                  We Provide Professional <br />
                  Market Infrastructure Firms
                </div>
              </div>

              {/* <!-- LAYER NR. 2 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['45','45','45','30']"
                data-fontsize="['16', '16', '16', '12']"
                data-lineheight="['25','25','25','25']"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":1250,"speed":1500,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--bio text-center">
                  We Are The Leaders Of Financial Investment Market!
                </div>
              </div>

              {/* <!-- LAYER NR. 3 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['120','120','120','150']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"x:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"x:50px;opacity:0;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-basealign="slide"
                data-responsive_offset="on"
                data-responsive="off"
              >
                <div className="slide-action">
                  <a className="btn btn--gradient btn--rounded" href="/sign-up">
                    Get Started
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- slide 2 --> */}
            <li
              data-transition="slidingoverlayleft"
              data-slotamount="default"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed="2000"
            >
              {/* <!-- MAIN IMAGE --> */}
              <img
                src="/main-assets/images/sliders/slide-bg/6.jpg"
                alt="Slide Background Image"
                width="1920"
                height="1280"
              />
              {/* <!-- LAYER NR. 1 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-110','-100','-90','-40']"
                data-fontsize="['16','16','16','12']"
                data-lineheight="['25','25','25','25']"
                data-whitespace="nowrap"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[-100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--subheadline">
                  Exchange Cryptocurrency At The Best Rate
                </div>
              </div>

              {/* <!-- LAYER NR. 2 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-13','-13','-13','10']"
                data-fontsize="['60', '50', '40', '30']"
                data-lineheight="['60','60','60','60']"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":1500,"speed":2500,"frame":"0","from":"x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:1;","mask":"x:[100%];y:0;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--headline text-center">
                  Start Trading The World's Most <br />
                  Popular Cryptocurrencies!
                </div>
              </div>

              {/* <!-- LAYER NR. 3 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['90','90','80','80']"
                data-fontsize="['16', '16', '16', '12']"
                data-lineheight="['25','25','25','25']"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":1500,"speed":200,"frame":"0","from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--bio text-center">
                  Just Enjoy Your Best Rates While We Are Doing The Rest For You
                </div>
              </div>

              {/* <!-- LAYER NR. 4 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['170','170','180','260']"
                data-height="none"
                data-whitespace="nowrap"
                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-basealign="slide"
                data-responsive_offset="on"
                data-responsive="off"
              >
                <div className="slide-action">
                  <a
                    className="btn btn--primary btn--rounded mr-30"
                    href="/sign-up"
                  >
                    Get Started
                  </a>
                  <a
                    className="btn btn--video popup-video"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    <i className="fa fa-play"></i>Watch Video
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- slide 3 --> */}
            <li
              data-transition="slotslide-horizontal"
              data-slotamount="default"
              data-easein="Power4.easeInOut"
              data-easeout="Power4.easeInOut"
              data-masterspeed="2000"
            >
              {/* <!-- MAIN IMAGE --> */}
              <img
                src="/main-assets/images/sliders/slide-bg/4.jpg"
                alt="Slide Background Image"
                width="1920"
                height="1280"
              />
              {/* <!-- LAYER NR. 1 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-110','-100','-90','-40']"
                data-fontsize="['16','16','16','12']"
                data-lineheight="['25','25','25','25']"
                data-whitespace="nowrap"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":750,"speed":1500,"frame":"0","from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--subheadline">
                  Instant, Secure & Private
                </div>
              </div>

              {/* <!-- LAYER NR. 2 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-13','-13','-13','10']"
                data-fontsize="['60', '50', '40', '30']"
                data-lineheight="['60','60','60','60']"
                data-width="none"
                data-height="none"
                data-transform_idle="o:1;"
                data-frames='[{"delay":1500,"speed":2000,"frame":"0","from":"z:0;rX:0deg;rY:0;rZ:0;sX:2;sY:2;skX:0;skY:0;opacity:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--headline text-center">
                  Find & Compare The Best <br />
                  Cryptocurrency Exchange Rates
                </div>
              </div>

              {/* <!-- LAYER NR. 3 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['90','90','80','80']"
                data-fontsize="['16', '16', '16', '12']"
                data-lineheight="['25','25','25','25']"
                data-width="none"
                data-height="none"
                data-frames='[{"delay":1250,"speed":1500,"frame":"0","from":"x:-50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-responsive_offset="on"
              >
                <div className="slide--bio text-center">
                  Buy And Sell Cryptocurrency Near You!
                </div>
              </div>

              {/* <!-- LAYER NR. 4 --> */}
              <div
                className="tp-caption"
                data-x="['center','center','center','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['170','170','180','260']"
                data-width="none"
                data-height="none"
                data-whitespace="nowrap"
                data-frames='[{"delay":1500,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                data-splitin="none"
                data-splitout="none"
                data-basealign="slide"
                data-responsive_offset="on"
                data-responsive="off"
              >
                <div className="slide-action">
                  <a
                    className="btn btn--white btn--bordered btn--rounded"
                    href="/sign-up"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- END REVOLUTION SLIDER --> */}
      </div>
      {/* <!-- END OF SLIDER WRAPPER --> */}
    </section>
  );
};

export default HeroSection;
