import React, { useState } from "react";
import "./Registration.css";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // Ova funkcija nam je potrebna kako bi prikazali korisnike koji su se registrovali prilikom klika na dugme za registraciju
  /* const register = () => {
    dispatch({
      type: "Register",
      payload: {
        id: new Date().getTime(),
        firstName,
        lastName,
        email,
      },
    });
  };*/

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="registration-page">
      <form onSubmit={register} action="">
        <div className="form-div">
          <h2 className="heading-registration">Registration</h2>
          <div className="form-group-1">
            <label className="label">First name:</label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-group-2">
            <label className="label">Last name:</label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="form-group-1">
            <label className="label">Email:</label>
            <input
              id="email"
              type="text"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group-2">
            <label className="label">Phone number:</label>
            <input
              id="phone-number"
              type="text"
              name="phoneNumber"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="form-group-1">
            <label className="label">City:</label>
            <input
              id="city"
              type="text"
              name="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </div>
          <div className="form-group-2">
            <label className="label">Address:</label>
            <input
              id="address"
              type="text"
              name="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="form-group-1">
            <label className="label">Address number:</label>
            <input
              id="address-number"
              type="text"
              name="addressNumber"
              required
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group-2">
            <label className="label">Post number:</label>
            <input
              id="post-number"
              type="text"
              name="postNumber"
              required
              value={postNumber}
              onChange={(e) => setPostNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group-1">
            <label className="label">Password:</label>
            <input
              id="password"
              type="text"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="form-group-2">
            <label className="label">Password:</label>
            <input
              id="confirmPassword"
              type="text"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <div className="form-group-terms">
            <Checkbox className="check-box" required />
            <label className="label">I agree with terms of use.</label>
          </div>
          <input
            className="register-button"
            type="submit"
            value="Register"
            /*onClick={() => {
              navigate("/signin"); OVO OVDE MI PRAVI PROBLEM ZA REQUIRED FIELDS
            }}*/
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Registration;
