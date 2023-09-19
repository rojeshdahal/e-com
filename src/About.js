import React from "react";
import Hero from "./components/Hero";

const About = (props) => {
  const data = {
    name: "Our Store",
    img: "images/hero1.jpg",
  };
  return (
    <div style={{ marginTop: "80px" }}>
      <Hero myData={data} />
    </div>
  );
};

export default About;
