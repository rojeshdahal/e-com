import React from "react";
import { addCart, delCart } from "./redux/action";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { BiSolidPlusCircle, BiSolidMinusCircle } from "react-icons/bi";

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
        <div className="d-flex flex-row   ">
          <div className="col-md-8 ">
            <h3 className="item mx-5">Item List</h3>

            {state.map((product) => {
              const { id, name, image, qty, title, price } = product;
              return (
                <>
                  <div
                    className="card row d-flex flex-row  mx-5 my-2 "
                    key={id}
                  >
                    <div className="d-flex col  align-items-center">
                      <div
                        className="bg-image rounded flex-column mx-5"
                        data-mdb-ripple-color="light"
                      >
                        <img src={image} alt={name} width={100} height={75} />
                      </div>
                      <div className="column col-md-4 align-items-center">
                        <p>{title}</p>
                      </div>
                      <div className="mx-5">${price}</div>
                    </div>

                    <div className="d-flex col ">
                      <button
                        className="btn px-3"
                        onClick={() => {
                          removeItem(product);
                        }}
                      >
                        <BiSolidMinusCircle />
                      </button>
                      <div className="d-flex align-items-center">
                        <p className="mx-5 ">{qty}</p>
                      </div>

                      <button
                        className="btn px-3"
                        onClick={() => {
                          addItem(product);
                        }}
                      >
                        <BiSolidPlusCircle />
                      </button>
                      <div className="d-flex align-items-center px-5">
                        ${price * qty}
                      </div>
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
