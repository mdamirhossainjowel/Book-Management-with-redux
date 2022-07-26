import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Component/Service/BookSlice";

const store = configureStore({
  reducer: {
    booksReducer: bookReducer,
  },
});

export default store;
