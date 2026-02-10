import { RiDeleteBin7Fill } from "react-icons/ri";

const Items = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container text-center">
      <div className="row mt-2">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>

        <div className="col-2">
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBin7Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
