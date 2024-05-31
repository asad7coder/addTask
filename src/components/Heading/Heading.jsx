import React from "react";
import styles from "./Heading.module.css";
const Heading = () => {
  return (
    <div className={styles.heading}>
      <h1 className={styles.title}>Add Tasks</h1>
      <p className={styles.info}>Add Task and Press 'Enter'key</p>
    </div>
  );
};

export default Heading;
