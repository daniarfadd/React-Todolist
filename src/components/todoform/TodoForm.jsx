import React, { useState } from "react";
// mengimport react dari library react
// useState berfungsi sebagai state untuk functional component (mini database)
import PropTypes from "prop-types";
import styles from "./todoform.module.css";

const TodoForm = ({ addTodo, showAdd }) => {
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

    if (value.length > 40) {
      alert("Text should be less than 40 characters!");
      setValue("");
      return;
    }

    addTodo(value);

    setValue("");
    // agar setelah klik add form jadi kosong
  };
  // ini adalah function yg nantinya akan digunakkan ketika user meng-add todo nya, dia akan meng submit pada sebuah state diluar dari todoform ini
  if (showAdd) {
    return (
      <section className={styles.add}>
        <form action="" className={styles.addForm} onSubmit={handleFormSubmit}>
          <input
            type="text"
            className={styles.addInput}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={styles.addBtn}>Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
