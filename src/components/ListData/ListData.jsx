import React from "react";
import styles from "./ListData.module.css";
const ListData = ({ listt }) => {
  return (
    <>
      {listt.map((task, index) => (
        <li key={index} className="list-group-item">
          {task}
          <button className={`${styles.chal} btn btn-danger`}>Remove</button>
        </li>
      ))}
    </>
  );
};

export default ListData;
