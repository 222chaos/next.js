import React from "react";

import App1, { App2 } from "@2chaos/webpack_react_todolist";
const TodolistPage = () => {
  return (
    <div>
      <App1 />
    </div>
  );
};
console.log(App1, App2);
export default TodolistPage;
