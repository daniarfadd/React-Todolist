import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  return (
    <div class="todo">
      <span class="todo-text">{props.text}</span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
