import React, { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

const TableHead = ({ onNewItem }) => {
  const [Name, setName] = useState("");
  const [Date, setDate] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const hadleAddTask = (e) => {
    onNewItem(Name, Date);
    setName("");
    setDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="enter todo task"
            onChange={handleNameChange}
            value={Name}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            name="date"
            id=""
            onChange={handleDateChange}
            value={Date}
          />
        </div>

        <div className="col-2">
          <button className="btn btn-success" onClick={hadleAddTask}>
            <MdAddToPhotos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableHead;
