"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { setCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginUser,
  RegisterUser,
} from "@/redux/features/auth/auth_services_syn";
import { useEffect } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";

const SignupContents = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
  });
  const [countries, setCountries] = useState([]);
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

  const getCountries = async () => {
    const getCountries = await axios.get(
      "https://countriesnow.space/api/v0.1/countries/flag/images"
    );
    // console.log(getCountries, "from get countries");
    console.log(getCountries?.data?.data, "countries");
    // console.log(countries, "countries");
    setCountries(getCountries?.data?.data);
    return getCountries?.data?.data;
  };

  useEffect(() => {
    getCountries();
    // setCountries(con)
  }, []);

  // useEffect(() => {
  //   axios.get()
  // }, [])

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (formData.confirmPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Password mismatch";
    if (!formData.country) newErrors.country = "country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("clicked");
      if (validate()) {
        // Submission logic here
        setRegistering(true);
        console.log("Form Data:", formData);
        dispatch(RegisterUser(formData));
      }
    } catch (err) {
      console.log(err);
      setRegistering(false);
    }
  };

  console.log(countries[0], "countries returned");
  return (
    <>
      {/* Page Title #1 */}
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
                  <h1>Sign Up</h1>
                </div>
                <div className="clearfix" />
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/sign-up">Sign Up</a>
                  </li>
                  <li className="active">Sign Up</li>
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
      {/* Contact #1 */}
      <section id="contact1" className="contact contact-1 pt-90 pb-90">
        <div className="container">
          <div className="row clearfix">
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              <div className="heading heading-3 mb-50 text--center">
                <h2 className="heading--title">Sign Up</h2>
              </div>
            </div>
            {/* .col-md-6 end */}
          </div>
          {/* .row end */}
          <div className="row">
            <div className="col-lg-6 mb-50">
              <label>Your Full Name</label>
              <input
                placeholder="e.g Max Joe"
                type="text"
                name="name"
                value={formData.name}
                className="form-control mb-0"
                onChange={handleChange}
                // size={30}
              />
              {errors?.name && (
                <label className="mt-0 mb-0  text-danger">{errors?.name}</label>
              )}
            </div>
            <div className="col-lg-6 mb-50">
              <label>Phone Number</label>
              <input
                placeholder="your mobile number"
                type="tel"
                name="phone"
                value={formData.phone}
                className="form-control mb-0"
                onChange={handleChange}
                // size={30}
              />
              {errors?.phone && (
                <label className="mt-0 mb-0  text-danger">
                  {errors?.phone}
                </label>
              )}
            </div>

            <div className="col-lg-6 mb-50">
              <label>Your E-mail</label>
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
            <div className="col-lg-6 mb-50 ">
              <label>Select Country</label>
              <select
                onChange={handleChange}
                className="form-control mb-0"
                name="country"
                id=""
              >
                <option>select country</option>
                {countries?.map((country) => (
                  <option>{country?.name}</option>
                ))}
              </select>
              {errors?.country && (
                <label className="mt-0 mb-0  text-danger">
                  {errors?.country}
                </label>
              )}
            </div>

            <div className="col-lg-6 mb-50">
              <label>Password</label>
              <div style={{ display: "flex", position: "relative" }}>
                <input
                  placeholder="type password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData?.password}
                  className="form-control mb-0"
                  size={30}
                  onChange={handleChange}
                />

                {/* <i class="fa-solid fa-eye-slash"></i> */}
                <div
                  style={{ position: "absolute", right: "2rem", top: "1.2rem" }}
                >
                  {showPassword ? <FaRegEye style={{cursor:"pointer"}} onClick={() => setShowPassword(false)} /> : <FaRegEyeSlash onClick={() => setShowPassword(true)} style={{cursor:"pointer"}} />}
                </div>
              </div>
              {errors?.password && (
                <label className="mt-0 mb-0  text-danger">
                  {errors?.password}
                </label>
              )}
            </div>
            <div className="col-lg-6 mb-50">
              <label>Retype Password</label>
              <div style={{ display: "flex", position: "relative" }}>
              <input
                placeholder="Retype Password"
                type={showPassword2 ? "text" : "password"}
                name="confirmPassword"
                value={formData?.confirmPassword}
                className="form-control mb-0"
                size={30}
                onChange={handleChange}
              />
              <div
                  style={{ position: "absolute", right: "2rem", top: "1.2rem" }}
                >
                  {showPassword2 ? <FaRegEye style={{cursor:"pointer"}} onClick={() => setShowPassword2(false)} /> : <FaRegEyeSlash onClick={() => setShowPassword2(true)} style={{cursor:"pointer"}} />}
                </div>
              </div>
              
              {errors?.confirmPassword && (
                <label className="mt-0 mb-0  text-danger">
                  {errors?.confirmPassword}
                </label>
              )}
            </div>

            <div className="col-lg-2" style={{ marginTop: 20 }}>
              <button
                onClick={handleSubmit}
                className="btn  button-background"
                disabled={loader}
              >
                {loader ? "creating account..." : "Register"}
              </button>
            </div>
            <div className="col-lg-4" style={{ marginTop: 20 }}>
              <a href="/sign-in" className="btn button-background-2">
                Go to Login
              </a>
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

export default SignupContents;
