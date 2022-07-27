import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBooks } from "../Service/BookSlice";

const ShowBook = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const handleEditBook = (book) => {
    navigate("/edit_book", { state: { book: book } });
  };
  const handleDeleteBook = (id) => {
    dispatch(deleteBooks(id));
  };

  return (
    <div className="mx-2 lg:mx-20 mt-10 overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              return (
                <tr key={book.id}>
                  <th>{book.id}</th>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>
                    <button
                      onClick={() => handleEditBook(book)}
                      className="btn btn-xs mr-2"
                    >
                      EDIT
                    </button>
                    <button  onClick={() => handleDeleteBook(book.id)} className="btn btn-xs">DELETE</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;
