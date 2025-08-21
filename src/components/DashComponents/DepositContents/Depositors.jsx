"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Depositors = ({title ="Also Deposited"}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
   
  };
  return (
    <div className="col-lg-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="header-title">
                <h4 className="card-title">{title}</h4>
              </div>
            </div>
            <div className="card-body">
              <Slider {...settings} className="list-inline m-0 p-0">
                <li className="pt-3">
                  <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                    <div className="d-flex flex-wrap flex-md-nowrap gap-3">
                      <img
                        src="/assets/images/avatars/01.png"
                        alt="story-img"
                        className="avatar-50 rounded-circle p-1 bg-primary-subtle img-fluid"
                      />
                      <div className="flex-grow-1">
                        <h5>Anna Mull</h5>
                        <p className="mb-0">3o minutes ago</p>
                      </div>
                    </div>
                    <div className>
                      <h5 className="mb-2 d-inline-block">Bitcoin</h5>
                      <p className="text-success mb-2 d-inline-block ms-1">
                        +$1,000
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pt-3">
                  <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                    <div className="d-flex flex-wrap flex-md-nowrap gap-3">
                      <img
                        src="/assets/images/avatars/03.png"
                        alt="story-img"
                        className="avatar-50 rounded-circle p-1 bg-primary-subtle img-fluid"
                      />
                      <div className="flex-grow-1">
                        <h5>Bob Frapples</h5>
                        <p className="mb-0">9 hour ago</p>
                      </div>
                    </div>
                    <div className>
                      <h5 className="mb-2 d-inline-block">Bitcoin</h5>
                      <p className="text-success mb-2 d-inline-block ms-1">
                        +$500
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pt-3">
                  <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                    <div className="d-flex flex-wrap flex-md-nowrap gap-3">
                      <img
                        src="/assets/images/avatars/02.png"
                        alt="story-img"
                        className="avatar-50 rounded-circle p-1 bg-primary-subtle img-fluid"
                      />
                      <div className="flex-grow-1">
                        <h5>Ira Membrit</h5>
                        <p className="mb-0">3 hour ago</p>
                      </div>
                    </div>
                    <div className>
                      <h5 className="mb-2 d-inline-block">Bitcoin</h5>
                      <p className="text-success mb-2 d-inline-block ms-1">
                        +$1,000
                      </p>
                    </div>
                  </div>
                </li>
                <li className="pt-3">
                  <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                    <div className="d-flex flex-wrap flex-md-nowrap gap-3">
                      <img
                        src="/assets/images/avatars/03.png"
                        alt="story-img"
                        className="avatar-50 rounded-circle p-1 bg-primary-subtle img-fluid"
                      />
                      <div className="flex-grow-1">
                        <h5>Bob Frapples</h5>
                        <p className="mb-0">9 hour ago</p>
                      </div>
                    </div>
                    <div className>
                      <h5 className="mb-2 d-inline-block">Bitcoin</h5>
                      <p className="text-success mb-2 d-inline-block ms-1">
                        +$500
                      </p>
                    </div>
                  </div>
                </li>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depositors;
