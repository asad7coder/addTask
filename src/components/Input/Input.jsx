import React from "react";
import styles from "./Input.module.css";
const Input = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        className={styles.inputMain}
        onKeyDown={handleKeyDown}
        type="text"
      />
    </div>
  );
};

export default Input;
