import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learning React !" },
    { text: "Parariow darow " }
  ]);

  const [showAdd, setShowAdd] = useState(false);
  // untuk menyembunyikan "add" button

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];
    // ...todos adalah spread operator, yang berarti kita membuat array baru yang isinya apapun yang ada didalam 'todos', dan ditambah text yang berisi value (objek baru)

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
