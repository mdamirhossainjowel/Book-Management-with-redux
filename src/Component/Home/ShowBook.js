import React from "react";
import { useSelector } from "react-redux";

const ShowBook = () => {
  const books = useSelector((state) => state.booksReducer.books);
  return (
    <div className="mx-20 mt-10 overflow-x-auto">
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
                    <button className="btn btn-xs mr-2">EDIT</button>
                    <button className="btn btn-xs">DELETE</button>
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
