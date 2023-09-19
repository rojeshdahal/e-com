// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useProductContext } from "./context/Productcontext";
// const API = "https://api.pujakaitem.com/api/products";

// const SingleProduct = () => {
//   const { getSingleProduct, isSingleLoading, singleProduct } =
//     useProductContext();

//   const {
//     id: alias,
//     name,
//     company,
//     stock,
//     price,
//     reviews,
//     stars,
//     description,
//     category,
//   } = singleProduct;

//   const { id } = useParams();

//   useEffect(() => {
//     getSingleProduct(`${API}?id=${id}`);
//   });

//   return <h1>{name}</h1>;
// };

// export default SingleProduct;
