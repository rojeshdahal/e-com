import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Errorpage = () => {
  return (
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      <h1 className="text-center">404</h1>
      <br />
      <p className="text-center">
        <b>Page not found.</b>
      </p>
      <p className="lead text-center">
        <strong>Sorry, the page you are looking for could not be found.</strong>
      </p>

      <NavLink to="/" style={{ backgroundColor: "#28A745", color: "white" }}>
        <Button variant="contained">Return to Home</Button>
      </NavLink>
    </div>
  );
};

export default Errorpage;
