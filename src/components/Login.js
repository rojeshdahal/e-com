import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // For practice, check if the email and password match a predefined user
  //   if (
  //     formData.email === "user@example.com" &&
  //     formData.password === "password"
  //   ) {
  //     alert("Login successful!");
  //     // Perform user authentication and redirection in a real application
  //   } else {
  //     alert("Login failed. Invalid credentials.");
  //   }
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <h5 className="text-center">
                Don't have an account?{" "}
                <NavLink to="/register">Create new one</NavLink>
              </h5>
              <form>
                <div className="mb-3 mt-3">
                  <label className="mb-1">
                    Enter Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-1">
                    Enter Password <sup>*</sup>
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="POST" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
