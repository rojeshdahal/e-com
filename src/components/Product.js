import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curElem) => {
  const { id, name, price, image, category } = curElem;

  return (
    <NavLink to={`../SingleProduct/${id}`}>
      <div key={id} className="col-md-4 text-center">
        <div className="card mb-4">
          <img
            src={image} // Insert the image URL here
            alt={name} // Add alt text for accessibility
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-muted">{category}</p>
            <h5>{price}</h5>
          </div>
          <div className="bg-secondary" style={{ textAlign: "center" }}>
            <button className="bg-primary my-4 me-5">Shop Now</button>
            <button className="bg-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
