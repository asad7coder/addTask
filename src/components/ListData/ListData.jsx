import React from "react";
import styles from "./ListData.module.css";
const ListData = ({ listt }) => {
  const testingBtn = () => {
    alert(`This Button is not Working.During the Working`);
  };
  return (
    <>
      {listt.map((task, index) => (
        <li key={index} className={`list-group-item ${styles.liBig}  `}>
          {task}
          <button
            onClick={testingBtn}
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
