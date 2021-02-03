import React from "react";
// mengimport react dari library react
import PropTypes from "prop-types";
import styles from "./paper.module.css";

const Paper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
    </div>
  );
};
// ini merupakan function yang akan me-return JSX

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
    // disini artinya 'children' akan memiliki 1 diantara 2 type yang kita definisikan
    // bisa berupa satu react node
    // atau bisa juga berupa sekumpulan (arrayof) react node
  ])
};
// Ini berfungsi untuk mendefinisikan type dari props 'children'

export default Paper;
// Agar bisa digunakkan di file yang lain
