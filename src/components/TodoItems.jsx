import React from "react";
import Items from "./Items";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items">
      {todoItems.map((item) => (
        <Items
          key={item.Name}
          todoName={item.Name}
          todoDate={item.Date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
