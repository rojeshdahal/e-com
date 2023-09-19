// import { createContext, useEffect, useReducer, useContext } from "react";
// import axios from "axios";
// import reducer from "../reducer/productReducer";

// const initialState = {
//   //form use reducer hook
//   isLoading: false,
//   isError: false,
//   products: [], //all products as an array
//   featureProducts: [], //only featured products to show in home page
//   isSingleLoading: false,
//   singleProduct: {},
// };

// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState); //use reducer hook

//   useEffect(() => {
//     getProducts(API);
//   }, []);

//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url); //res--response
//       const products = await res.data;
//       // console.log(products);
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   const getSingleProduct = async (url) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await axios.get(url); //res--response
//       const singleProduct = await res.data;
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct }}>
//       {children}
//     </AppContext.Provider> //usecontext for accessing data from different components without using props also see in index.js file
//   );
// };

// //custom hooks
// const useProductContext = () => {
//   return useContext(AppContext);
// };

// export { AppProvider, AppContext, useProductContext };
