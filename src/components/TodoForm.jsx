import React, { useState } from "react";
// mengimport react dari library react
// useState berfungsi sebagai state untuk functional component (mini database)
import PropTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  // value adalah sebuah variabel dalam array yang akan berisi
  // input dari form kita
  // setValue adalah function atau method untuk melakukan sesuatu terhadap data yang terdapat di value
  // useState adalah hooks method, diberi string kosong sebagai penanda initial state dari value adalah string kosong

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Fill the form!");
      return;
    }

    addTodo(value);
    alert(value);
    setValue("");
    // agar setelah klik add form jadi kosong
  };
  // ini adalah function yg nantinya akan digunakkan ketika user meng-add todo nya, dia akan meng submit pada sebuah state diluar dari todoform ini

  return (
    <section class="add">
      <form action="" class="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          class="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button class="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;
