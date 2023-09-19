import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
// import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Shopify",
    img: "images/hero.jpg",
  };
  return (
    <>
      <Hero myData={data} />
      {/* <FeatureProduct /> */}
      <Services />
    </>
  );
};

export default Home;
