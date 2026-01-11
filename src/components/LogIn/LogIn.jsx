import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const [loginInputValues, setLoginInputValues] = useState({
    username: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    username: false,
    password: false,
  });

  const usernameIsInvalid =
    didEdit.username && loginInputValues.username.length <= 2;

  function handleInputChange(identifier, value) {
    setLoginInputValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const handlePost = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5033/api/user/login", {
        username: loginInputValues.username,
        password: loginInputValues.password,
      })
      .then((res) => {
        alert(`You are now Logged In, ${res.data.username}`);

        //Redirect to feed
        navigate("/feed");
      })
      .catch((err) => {
        console.error("Login error:", err);
        alert("Login failed — check your username or password.");
      });
  };

  return (
    <div className="login-container">
      <form onSubmit={handlePost}>
        <h1>Log In</h1>
        <div className="ui divider"></div>

        <div className="field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={loginInputValues.username}
            onBlur={() => handleInputBlur("username")}
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          {usernameIsInvalid && (
            <p className="invalid-error">
              Please enter a username longer than 2 characters
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={loginInputValues.password}
            onBlur={() => handleInputBlur("password")}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </div>

        <button className="submit-button" type="submit">
          Log In
        </button>

        <p>
          You need Sign Up? <Link to="/SignUp">Click here!</Link>
        </p>
      </form>
    </div>
  );
}
