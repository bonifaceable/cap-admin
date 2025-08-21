"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { useSelector } from "react-redux";
const CustomerSupportContent = () => {
  const [formData, setFormData] = useState({
    subject: "withdrawal",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const { wallet, editLoader, profile, profileLoader } = useSelector(
    (state) => state.profile
  );
  console.log(profile, "profile info");

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const dataRequired = {
        ...formData,
        name: profile?.name,
        email: profile?.email,
      };

      console.log(dataRequired, "report");
      const response = await axios.post(
        "https://coinex-server.onrender.com/create-contact",
        dataRequired
      );
      console.log(response);
      if (response.status === 200) {
        // setSuccess(true);
        // toast("Message sent successfully !!!");
        window.location.href = "/dashboard";

        // setFormData({ subject: '', message: '' });
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid content-inner pb-0">
      <div className="col-sm-12 col-lg-6 mx-auto">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="header-title">
              <h4 className="card-title">Customer Support Service</h4>
            </div>
          </div>
          <div className="card-body">
            <p>
              Get round-the-clock assistance for all your crypto investment
              needs. From transactions to account issues, our expert team is
              here to help ensure a secure and smooth experience.
            </p>
            <form className="was-validated">
              <div className="form-group">
                <label htmlFor="validationTextarea" className="form-label">
                  Issue Type
                </label>
                <select
                  className="form-select"
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-label="select example"
                >
                  {/* <option value>Open this select menu</option> */}
                  <option value={"withdrawal"}>Withdrawal</option>
                  <option value={"plan purchase"}>Plan purchase</option>
                  <option value={"Deposit money"}>Deposit Money</option>
                </select>
                <div className="invalid-feedback">
                  Example invalid select feedback
                </div>
              </div>
              {/* <div className="form-group mb-0">
                <label htmlFor="validationTextarea" className="form-label">
                  Issue Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-label="file example"
                  required
                />
                <div className="invalid-feedback">
                  Example invalid form file feedback
                </div>
              </div> */}
              <div className="form-group">
                <label htmlFor="validationTextarea" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control is-invalid"
                  id="validationTextarea"
                  placeholder="Required example textarea"
                  required
                  col={8}
                  rows={8}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  defaultValue={""}
                />
                {/* <div className="invalid-feedback">Please enter a message.</div> */}
              </div>
              <button
                className="btn btn-success"
                type="button"
                disabled={loading}
                // data-bs-toggle="modal"
                // data-bs-target="#exampleModalCenter"
                onClick={handleSubmit}
              >
                <span>{loading ? "Sending..." : "Submit"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupportContent;
