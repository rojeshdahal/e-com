const cart = [];

const handleCart = (state = cart, action) => {
  // console.log(state);
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      //check if product is already in cart or not
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        //increase the quantity of the product
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }

    case "DELITEM":
      //delete item from cart by id and reduce its quantity to zero when it reaches below one
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    default:
      return state;
  }
};

export default handleCart;
