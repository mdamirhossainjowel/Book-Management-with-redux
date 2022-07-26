import React from "react";

const EditBook = () => {
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
            className="input input-bordered"
          />
          <label className="label"></label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Edit BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
