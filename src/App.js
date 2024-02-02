import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
// import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./Errorpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
