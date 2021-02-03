import React from "react";
// mengimport react dari library react
import PropTypes from "prop-types";
import Button from "../components/button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Hide" : "Add"}
      </button> */}
      <Button
        text={showAdd ? "Hide" : "Add"}
        color="black"
        onClick={showAddToggle}
        align="left"
      />
      <h1 className="header-title">Todo List</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button text="Clear" color="red" onClick={clearTodos} align="right" />
    </section>
  );
};

Header.protoTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.func.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
