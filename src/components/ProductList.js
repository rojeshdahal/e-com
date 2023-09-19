import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const API = "https://api.pujakaitem.com/api/products";

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async (url) => {
      try {
        const res = await axios.get(url); //res--response
        setProduct(res.data);
      } catch (error) {}
    };
    getProducts(API);
  }, [id]);

  return (
    <>
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="container">
        <div className="row">
          {product.map((post) => {
            const { id, name, company, price, image } = post;
            return (
              <div key={id} className="col-md-4">
                <div className="card mb-4">
                  <img
                    src={image} // Insert the image URL here
                    alt={name} // Add alt text for accessibility
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{company}</p>
                    <h5>
                      {Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(price)}
                    </h5>
                  </div>
                  <div className="bg-secondary" style={{ textAlign: "center" }}>
                    <button className="bg-primary my-4 me-5">Shop Now</button>
                    <button
                      className="bg-primary"
                      onClick={() => addProduct(product)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      );
    </>
  );
};

export default ProductList;
