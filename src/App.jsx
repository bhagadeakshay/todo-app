import { useState } from "react";
import HeaderName from "./components/HeaderName";
import TableHead from "./components/TableHead";
import TodoItems from "./components/TodoItems";
import Message from "./components/Message";

const App = () => {
  const [todoItems, settodoItems] = useState([]);

  const handleAddTask = (Name, Date) => {
    console.log(Name, Date);
    const newTodoItem = [...todoItems, { Name: Name, Date: Date }];
    settodoItems(newTodoItem);
  };

  const handleDeleteTask = (Name) => {
    console.log("deleting " + Name);
    const updateTodoTask = todoItems.filter((item) => item.Name !== Name);
    settodoItems(updateTodoTask);
  };

  return (
    <center className="todo">
      <HeaderName />
      <TableHead onNewItem={handleAddTask} />
      {todoItems.length === 0 && <Message />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteTask} />
    </center>
  );
};

export default App;
