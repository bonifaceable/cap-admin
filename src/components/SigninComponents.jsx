"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/redux/features/auth/auth_services_syn";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const SigninComponents = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [registering, setRegistering] = useState(false);

  const { loader } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData, "formdata");
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("clicked");
      if (validate()) {
        setRegistering(true);
        console.log("Form Data:", formData);

        dispatch(LoginUser(formData));
      }
    } catch (err) {
      console.log(err);
      setRegistering(false);
    }
  };
  return (
    <>
      {/* Page Title #1
============================================= */}
      <section
        id="page-title"
        className="page-title bg-overlay bg-overlay-dark bg-parallax"
      >
        <div className="bg-section">
          <img src="/main-assets/images/page-titles/8.jpg" alt="Background" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title title-6 text-center">
                <div className="title--heading">
                  <h1>Admin User</h1>
                </div>
                <div className="clearfix" />
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
      {/* Contact #1
============================================= */}
      <section id="contact1" className="contact contact-1 pt-90 pb-90">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-3 mb-50 text--center">
                <h2 className="heading--title">Sign In</h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-lg-6 mb-50">
              <label>E-mail</label>
              <input
                placeholder="your email address"
                type="email"
                name="email"
                value={formData.email}
                className="form-control mb-0"
                size={30}
                onChange={handleChange}
              />
              {errors?.email && (
                <label className="mt-0 mb-0  text-danger">
                  {errors?.email}
                </label>
              )}
            </div>
            <div className="col-lg-6 mb-50">
              <label>Password</label>
              <div style={{ display: "flex", position: "relative" }}>
                <input
                  placeholder="your password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control mb-0"
                  value={formData?.password}
                  size={30}
                  onChange={handleChange}
                />
                <div
                  style={{ position: "absolute", right: "2rem", top: "1.2rem" }}
                >
                  {showPassword ? (
                    <FaRegEye
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowPassword(false)}
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => setShowPassword(true)}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              </div>

              {errors?.password && (
                <label className="mt-0 mb-0  text-danger">
                  {errors?.password}
                </label>
              )}
            </div>
            <div className="col-lg-12" style={{ marginTop: 20 }}>
              <button
                onClick={handleSubmit}
                className="btn  button-background"
                disabled={loader}
              >
                {loader ? "signing..." : "Sign in"}
              </button>
            </div>
          </div>
          {/* .row end */}
        </div>
        {/* .container end */}
      </section>
      {/* #contact1 end */}
    </>
  );
};

export default SigninComponents;
