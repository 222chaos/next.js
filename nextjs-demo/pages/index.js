import React from "react";
import App from "@2chaos/webpack_react_todolist";

const TodolistPage = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <App />
    </div>
  );
};
TodolistPage.getInitialProps = async function () {};
export default TodolistPage;
