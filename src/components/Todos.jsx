import React from "react";
// mengimport react dari library react
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "test123"
    },
    {
      text: "HALO!@#"
    }
  ];
  // ini merupakan dummy objects yang berupa array of object
  return (
    <section class="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
