import React from "react";
import { addCart, delCart } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="p-3 display-5">Your Cart is Empty</h4>
            <NavLink to="/products" className="btn  btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </NavLink>
          </div>
        </div>
      </div>
    );
  };
  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let totalPrice = 0;
    let shipping = 50;
    let totalItems = 0;
    state.map((item) => {
      return (totalPrice += item.price * item.qty);
    });
    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <h1 className="text-center">Cart</h1>
        <div className="d-flex flex-row  justify-content-around">
          <div className="col-md-8">
            <h3 className="item mx-5">Item List</h3>

            {state.map((item) => {
              const { id, name, image } = item;
              return (
                <>
                  <div className="card d-flex flex-row  mx-5" key={id}>
                    <div
                      className="bg-image rounded"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={image}
                        // className="w-100"
                        alt={name}
                        width={100}
                        height={75}
                      />
                    </div>
                    <div className="d-flex column">
                      <button
                        className="btn px-3"
                        onClick={() => {
                          removeItem(item);
                        }}
                      >
                        <i className="fas fa-minus">-</i>
                      </button>

                      <p className="mx-5">{item.qty}</p>
                      <p>{item.name}</p>

                      <button
                        className="btn px-3"
                        onClick={() => {
                          addItem(item);
                        }}
                      >
                        <i className="fas fa-plus">+</i>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-md-4 ">
            <h3>Order Summary</h3>
            <div className="border border-secondary rounded me-5 ">
              <ul style={{ listStyleType: "none" }}>
                <li className="d-flex justify-content-between align-items-center me-3">
                  Products ({totalItems})<span>${Math.round(totalPrice)}</span>
                </li>
                <li className="d-flex justify-content-between align-items-center me-3 mt-2">
                  Shipping <span>${shipping}</span>
                </li>
                <hr />
                <li className=" d-flex justify-content-between align-items-center me-3 mt-3">
                  <strong>Total Price</strong>
                  <span>
                    <strong>${Math.round(totalPrice + shipping)}</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  return <>{state.length > 0 ? <ShowCart /> : <EmptyCart />}</>;
};

export default Cart;
