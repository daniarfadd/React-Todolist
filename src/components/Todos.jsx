import React from "react";
// mengimport react dari library react
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos }) => {
  // const todos = [
  //   {
  //     text: "test123"
  //   },
  //   {
  //     text: "HALO!@#"
  //   }
  // ];
  // ini merupakan dummy objects yang berupa array of object
  return (
    <section class="todos">
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Todos;
