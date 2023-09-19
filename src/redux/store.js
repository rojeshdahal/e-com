import { configureStore } from "@reduxjs/toolkit";

import rootReducers from "./reducer/rootReducers";

const store = configureStore({
  reducer: rootReducers,
});
export default store;
