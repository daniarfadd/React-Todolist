import React from "react";
// mengimport react dari library react
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section class="header">
      <button class="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Hide" : "Add"}
      </button>
      <h1 class="header-title">Todo List</h1>
      <button class="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.protoTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
