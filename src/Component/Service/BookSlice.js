import { createSlice } from "@reduxjs/toolkit";

const initialBook = {
  books: [
    { id: 1, name: "Kothaw kEw Nei", author: "Humayun Ahmed" },
    { id: 2, name: "Ajkal", author: "Humayun Ahmed" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBook,
  reducers: {
    showBooks: (state) => state,
  },
});
export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
