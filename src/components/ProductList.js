import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={product.image} // Use product.image
                  alt={product.title}
                  className="card-img-top"
                  height={250}
                  // width={500}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h5 className="card-text text-muted">{product.category}</h5>
                  <h3 className="card-text text-muted">{product.title}</h3>
                  <h5>
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                    }).format(product.price)}
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
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
