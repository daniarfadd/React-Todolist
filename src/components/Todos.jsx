import React from "react";
// mengimport react dari library react
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos, completeTodo }) => {
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
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div className="todo-placeholder-text">
          Add todo by clicking{" "}
          <span className="add-button-placeholder-text">ADD</span> button
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
