import { useState } from "react";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState("");

  const handleInputChange = (e) => {
    setTodoInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, todoInputValue]);
    setTodoInputValue("");
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className="container">
      <h1>Todolist</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add something to your todolist"
          value={todoInputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
