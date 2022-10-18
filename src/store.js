import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "./redux/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
