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
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    editBooks: (state, action) => {
      const editbook = action.payload;

      const exist=state.books.filter((book) => book.id === editbook.id);
      if(exist){
        exist[0].id=editbook.id;
        exist[0].name=editbook.name;
        exist[0].author=editbook.author;
      }

    },
    deleteBooks: (state, action) => {
      const id = action.payload;

      state.books=state.books.filter((book) => book.id !== id);
    },
  },
});
export const { showBooks, addBooks,editBooks,deleteBooks } = bookSlice.actions;
export default bookSlice.reducer;
