import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Registration.css";
import img from "./img/edutrain.jpeg";
import RegistrationInstructions from "./RegistrationInstructions";

import Footer1 from "./Footer";
import Bottom1 from "./Bottom";
import NewNavbar from "./Navbar";

const StudentRegistration1 = () => {
  let [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobile: "",
    prnnumber: "",
  });

  let [errors, setErrors] = useState({
    nameError: "",
    passwordError: "",
    confirmPasswordError: "",
    emailError: "",
    mobileError: "",
    prnError: "",
  });

  let handlerPrnAction = (e) => {
    let newuser = { ...user, prnnumber: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, prnError: "" });
  };

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, nameError: "" });
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, passwordError: "" });
  };

  let handlerConfirmPasswordAction = (e) => {
    let newuser = { ...user, confirmPassword: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, confirmPasswordError: "" });
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, emailError: "" });
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
    setErrors({ ...errors, mobileError: "" });
  };

  let validateForm = () => {
    let isValid = true;
    let newErrors = {
      nameError: "",
      passwordError: "",
      confirmPasswordError: "",
      emailError: "",
      mobileError: "",
      prnError: "",
    };

    // Validation logic here...

    setErrors(newErrors);
    setShowPopup(true);
    return isValid;
  };

  let [showPopup, setShowPopup] = useState(false);

  let registerAction = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Backend
      let url = "http://localhost:9091/add-student";
      let data = {
        username: user.username,
        password: user.password,
        email: user.email,
        mobile: user.mobile,
        prnnumber: user.prnnumber,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          let newuser = {
            username: "",
            password: "",
            confirmPassword: "",
            email: "",
            mobile: "",
            prnnumber: "",
          };
          setUser(newuser);
          setErrors({
            nameError: "",
            passwordError: "",
            confirmPasswordError: "",
            emailError: "",
            mobileError: "",
            prnError: "",
          });
          alert("Registration successful!");
          setShowPopup(false);
        } else {
          console.log("Error registering student.");
          // Handle error response if needed
        }
      } catch (error) {
        console.error("An error occurred while registering student:", error);
        // Handle error if needed
      }
    }
  };

  return (
    <>
      <NewNavbar />
      <div>
        <div className="portion shadow-lg container-fluid">
          <h1 className="d-flex p-5 text-white">Student Registration Page</h1>
        </div>

        <div className="registration-page col-sm-12 col-md-8 shadow-lg p-3 bg-white rounded p-3 mb-4">
          <div className="row" style={{ marginBottom: "20px" }}>
            <img className="img-fluid" src={img} alt="" />
          </div>
          <h2>Registration Page</h2>
          <hr></hr>
          <form>
            {/* Form fields */}
            <div className="row">
              {/* Name field */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.username}
                    onChange={handlerUsernameAction}
                  />
                  <span className="form-text">
                    As per Degree Certificate / Govt issued ID Card
                  </span>
                  {errors.nameError && (
                    <div className="error">{errors.nameError}</div>
                  )}
                </div>
              </div>
              {/* Email field */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handlerEmailAction}
                  />
                  <span className="form-text">e.g. example123@abc.com</span>
                  {errors.emailError && (
                    <div className="error">{errors.emailError}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {/* Mobile field */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="mobile">Mobile Number *</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    pattern="[0-9]{10}"
                    value={user.mobile}
                    onChange={handlerMobileAction}
                  />
                  <span className="form-text">
                    Enter 10 digit Mobile No. e.g. 9876543210
                  </span>
                  {errors.mobileError && (
                    <div className="error">{errors.mobileError}</div>
                  )}
                </div>
              </div>
              {/* PRN field */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="prn">PRN Number *</label>
                  <input
                    type="text"
                    id="prn"
                    name="prn"
                    value={user.prnnumber}
                    onChange={handlerPrnAction}
                    pattern="[0-9]{12}"
                    title="Please enter a 12-digit PRN number"
                  />
                  <span className="form-text">
                    Enter 12 digit PRN No. e.g. 230340256001
                  </span>
                  {errors.prnError && (
                    <div className="error">{errors.prnError}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {/* Password field */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handlerPasswordAction}
                  />
                  <span className="form-text">Min:6 & Max:20 Characters</span>
                  {errors.passwordError && (
                    <div className="error">{errors.passwordError}</div>
                  )}
                </div>
              </div>
              {/* Confirm Password field */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handlerConfirmPasswordAction}
                    autoComplete="new-password"
                  />
                  {errors.confirmPasswordError && (
                    <div className="error">{errors.confirmPasswordError}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              {/* Submit button */}
              <div className="col-md-12 text-center mt-4">
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={registerAction}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </form>

          <RegistrationInstructions></RegistrationInstructions>
        </div>
        <Footer1 />
        <Bottom1 />
      </div>
    </>
  );
};

export default StudentRegistration1;
