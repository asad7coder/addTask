import React from "react";
import styles from "./ListData.module.css";
const ListData = ({ listt,onDeleteBtn }) => {
  return (
    <>
      {listt.map((task, index) => (
        <li key={index} className={`list-group-item ${styles.liBig}  `}>
          {task}
          <button
            onClick={()=> onDeleteBtn(task)}
            className={`${styles.chal} btn btn-danger`}
          >
            Remove
          </button>
        </li>
      ))}
    </>
  );
};

export default ListData;
