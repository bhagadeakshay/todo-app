import React from "react";

const Item1 = () => {
  return (
    <div className="container text-center">
      <div className="row mt-2">
        <div className="col-6">learning react component</div>
        <div className="col-4">17/1/2026</div>

        <div className="col-2">
          <button className="btn btn-danger">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Item1;
