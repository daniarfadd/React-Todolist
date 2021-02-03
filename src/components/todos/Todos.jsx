import React from "react";
// mengimport react dari library react
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
import styles from "./todos.module.css";

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
    <section className={styles.todos}>
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
        <div className={styles.todoPlaceholderText}>
          Add todo by clicking{" "}
          <span className={styles.addButtonPlaceholderText}>ADD</span> button
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
