import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../Service/BookSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const books = useSelector((state) => state.booksReducer.books);
  let id = books.length + 1;
  //  books.map((book) => {
  //   if (book.id === id) {
  //     id =id+ 1;
  //   }
  // });
  const dispatch =useDispatch()
  const handleAddBook = () => {
    const book = { id: id, name: name, author: author };
    dispatch(addBooks(book))
    navigate("/show_book");
  };

  return (
    <div className="card w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input
            type="text"
            placeholder="Book Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author</span>
          </label>
          <input
            type="text"
            placeholder="Author Name"
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="input input-bordered"
          />
          <label className="label"></label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleAddBook} className="btn btn-primary">
            ADD BOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
