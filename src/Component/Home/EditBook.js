import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import { editBooks } from "../Service/BookSlice";

const EditBook = () => {

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state)

  const [name, setName] = useState(state.book.name);
  const [author, setAuthor] = useState(state.book.author);
  const dispatch =useDispatch()

 const handleEditBook = () => {
  const book = { id: state.book.id, name: name, author: author };
  dispatch(editBooks(book))
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
            value={name}
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
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
            className="input input-bordered"
          />
          <label className="label"></label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleEditBook} className="btn btn-primary">Edit BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
